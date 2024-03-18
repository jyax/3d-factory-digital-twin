import {
    ComponentBase,
    BoundingBox,
    Camera3D,
    Color,
    Engine3D,
    LitMaterial,
    MeshRenderer,
    Object3D,
    OrbitController,
    PointerEvent3D,
    Scene3D,
    SkyRenderer,
    SolidColorSky,
    Vector3,
    View3D,
    FlyCameraController,
    AtmosphericComponent,
    KeyEvent,
    KeyCode
} from "@orillusion/core";
import SceneObject from "./scene_object.js";
import EventHandler from "../event/event_handler.js";
import Util from "../util/Util.js";
import MQTTHandler from "../event/mqtt_handler.js";
import keyboardScript from "./keyboardScript.js";

// DEVELOPMENT PURPOSES ONLY
// whether to load models from mongodb or locally
let loadModelsFromMongoDB = true;

/**
 * @module SceneManager
 * @fileoverview Contains SceneManager class.
 */

/**
 * @class
 * Main manager of entire scene. Responsible for managing all currently loaded objects and assets.
 */
class SceneManager {

    static MODELS = {
        "dragon": "https://cdn.orillusion.com/PBR/DragonAttenuation/DragonAttenuation.gltf",
        "table": "/glb_models/Assembly Warehouse Table.glb",
        "cart": "/glb_models/trolley cart for warehouse.glb",
        "rack": "/glb_models/JM_Rack_A.glb",
        "wall": "/glb_models/Slatwall_Bin_5.5in.glb",
        "floor": "./src/assets/glb_models/factory_floor_sample_1.glb",
        "workstation1": "/glb_models/workstation.glb",
        "workstation1_whole": "/glb_models/workstation_whole.glb",
        "workstation2": "/glb_models/Station 10x Layout v31.glb",
        "lathe": "./src/assets/glb_models/downloadsGLB/desk_lathe.glb",
        "ladder": "./src/assets/glb_models/downloadsGLB/escada_movel_-_moving_ladder.glb",
        "forklift": "./src/assets/glb_models/downloadsGLB/forklift_gameready.glb",
        "picaMachine": "./src/assets/glb_models/downloadsGLB/pica_pica_-_machines.glb",
        "robot": "./src/assets/glb_models/FANUC-430 Robot.glb",
        "bin": "./src/assets/glb_models/Slatwall_Bin_5.5in.glb",
        "tank": "./src/assets/glb_models/UN-COMPLIANT IBC TANK.glb",
        "boiler": "./src/assets/glb_models/downloadsGLB/boiler_from_the_puffer_vic_32 (1).glb",
        "roboticArm": "./src/assets/glb_models/downloadsGLB/black_honey_-_robotic_arm (1).glb",

        // Hidden models for editor use only

        ".translation-handle": "/glb_models/translation_handle.glb"
    };

    /**
     * Create a new scene manager.
     * @param {Color} skyColor Color of sky (optional)
     */
    constructor({
        skyColor = new Color(200, 200, 200)
    } = {}) {
        this._skyColor = skyColor;

        this.sky = null;
        this.scene = null;
        this.view = null;

        this.camera = null;

        this.objects = new Set();
        this.revObjects = new Map();
        this._selected = new Set();

        this.models = new Map();

        this.ids = new Map();

        this._cameraController = null;

        this._events = new EventHandler();

        this._ctrlPressed = false;

        this.moveInterval = 30;

        this.depth = 0;

        this.lastX = -1;

        this.lastY = -1;

        this.ObjectToMove = undefined;

        this.canMove = false;

        this._dragMult = 200;

        this.count = 0;

        this._mqttHandler = new MQTTHandler({
        mgr: this,
        server: false
        });

        this.editMode = true;

        // mongodb stuff
        this.modelsMap = {};
        if (loadModelsFromMongoDB)
        this.LoadModels();
    }

    /**
     * Load models from MongoDB
     * @constructor
     */
    LoadModels() {
        fetch('http://localhost:3000/api/loadModels', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                thing: "yes"
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('network response not ok');
                }
                return response.json();
            })
            .then(data => {
                this.modelsMap = data.models;
            })
            .catch(error => {
                console.error('error:', error);
            });
    }

    /**
     * Initialize the scene manager.
     */
    async init() {
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = "pixel";

        this.targetObj = null;
        this.matList = [];

        await Engine3D.init();

        const c  = Engine3D.inputSystem.canvas;
        c.remove();
        document.querySelector("body").prepend(c);

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        this.setCanvasVisibility(false);

        this.scene = new Scene3D();

        this.scene.envMap = new SolidColorSky(this._skyColor);

        let camObj = new Object3D();
        let cam = camObj.addComponent(Camera3D);
        this.camera = camObj;
        this.cam = cam;

        this._cameraController = this.camera.addComponent(OrbitController);
        // this._cameraController.setCamera(new Vector3(0, 50, 50), new Vector3(0, 0, 0));

        // this._cameraController.moveSpeed = 30;

        this._cameraController.smooth = 0;
        this._cameraController.panFactor = 0.01;
        this._cameraController.wheelStep = 0.01;

        camObj.localPosition = new Vector3(0, 0, 4);

        this.cam.perspective(60, c.width / c.height, 0.1, 5000);

        this.scene.addChild(camObj);

        this.view = new View3D();
        this.view.scene = this.scene;
        this.view.camera = this.cam;

        let i = 0;
        const promises = [];

        if (loadModelsFromMongoDB) {
            const total = Object.keys(this.modelsMap).length;


            for (const id of Object.keys(this.modelsMap)) {
                const model = Engine3D.res.loadGltf(this.modelsMap[id]);
                promises.push(model);

                model.then(object => {
                    this.models.set(id, object)

                    i++;

                    let progress = 0;
                    if (total !== 0)
                        progress = i / total;
                    this.events.do("load_models", progress);
                });
            }
            await Promise.all(promises);
        }
        else {
            const total = Object.keys(SceneManager.MODELS).length;

            for (const id of Object.keys(SceneManager.MODELS)) {
                const model = Engine3D.res.loadGltf(SceneManager.MODELS[id]);
                promises.push(model);

                model.then(object => {
                    this.models.set(id, object)

                    i++;

                    let progress = 0;
                    if (total !== 0)
                        progress = i / total;
                    this.events.do("load_models", progress);
                });
            }
            await Promise.all(promises);
        }

        this.createNewObject({
            pos: new Vector3(),
            scale: new Vector3(),
            rotation: new Vector3(),
            select: false
        });
        this.view.camera = this.cam;
        //
        // HARDCODING THE SCENE
        //

        // Creating a Plane/floor
        if (loadModelsFromMongoDB) {
            // do nothing
        }
        else {
            let floor = this.createNewObject({model:"floor", pos: new Vector3(0, 1, 0), scale: new Vector3(1,1,1), select: false});
            floor.scaleX = 0.01;
            floor.scaleY = 0.01;
            floor.scaleZ = 0.01;
            floor.rotationY = 90;
            floor.transform.localPosition = new Vector3(0, -2, 0);
            for (i=0; i<3;i++){
                let lathe = this.createNewObject({model:"lathe", select: false});
                lathe.scaleX = 3;
                lathe.scaleY = 3;
                lathe.scaleZ = 3;
            }
            let ladder = this.createNewObject({model:"ladder", select: false});
            for (i=0; i<3;i++){
                let forklift = this.createNewObject({model:"forklift", select: false});
                forklift.scaleX = 1.3;
                forklift.scaleY = 1.3;
                forklift.scaleZ = 1.3;
            }

            for (i=0; i<2;i++){
                let picaMachine = this.createNewObject({model:"picaMachine", select: false});
                picaMachine.scaleX = 0.2;
                picaMachine.scaleY = 0.2;
                picaMachine.scaleZ = 0.2;
            }
            for (i=0; i<3;i++){
                let robot = this.createNewObject({model:"robot", select: false});
                robot.scaleX = 0.04;
                robot.scaleY = 0.04;
                robot.scaleZ = 0.04;
            }
            let bin = this.createNewObject({model:"bin", select: false});
            bin.scaleX = 0.06;
            bin.scaleY = 0.06;
            bin.scaleZ = 0.06;
            bin.rotationX = 90;

            for (i=0; i<3;i++){
                let tank = this.createNewObject({model:"tank", select: false});
                tank.scaleX = 0.025;
                tank.scaleY = 0.025;
                tank.scaleZ = 0.025;
            }

            for (i=0; i<3;i++){
                let boiler = this.createNewObject({model:"boiler", select: false});
                boiler.rotationX = -90;
            }
            for (i=0; i<1;i++){
                let roboticArm = this.createNewObject({model:"roboticArm", select: false});
                roboticArm.scaleX = 2.5;
                roboticArm.scaleY = 2.5;
                roboticArm.scaleZ = 2.5;
            }
        }



        // let data1 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/desk_lathe.glb');
        // data1.scaleX = 3;
        // data1.scaleY = 3;
        // data1.scaleZ = 3;
        // data1.rotationY = -90;
        // let data2 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/escada_movel_-_moving_ladder.glb');
        // let data3 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/forklift_gameready.glb');
        // data3.scaleX = 1.3;
        // data3.scaleY = 1.3;
        // data3.scaleZ = 1.3;
        // let data4 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/pica_pica_-_machines.glb');
        // data4.scaleX = 0.2;
        // data4.scaleY = 0.2;
        // data4.scaleZ = 0.2;
        // let data5 = await Engine3D.res.loadGltf('./src/assets/glb_models/FANUC-430 Robot.glb');
        // data5.scaleX = 0.04;
        // data5.scaleY = 0.04;
        // data5.scaleZ = 0.04;
        // let data6 = await Engine3D.res.loadGltf('./src/assets/glb_models/JM_Rack_A.glb');
        // data6.scaleX = 0.03;
        // data6.scaleY = 0.03;
        // data6.scaleZ = 0.03;
        // let data7 = await Engine3D.res.loadGltf('./src/assets/glb_models/Slatwall_Bin_5.5in.glb');
        // data7.scaleX = 0.06;
        // data7.scaleY = 0.06;
        // data7.scaleZ = 0.06;
        // data7.rotationX = 90;
        // let data8 = await Engine3D.res.loadGltf('./src/assets/glb_models/UN-COMPLIANT IBC TANK.glb');
        // data8.scaleX = 0.025;
        // data8.scaleY = 0.025;
        // data8.scaleZ = 0.025;
        // let data9 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/boiler_from_the_puffer_vic_32 (1).glb');
        // data9.rotationX = -90;
        // let data10 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/black_honey_-_robotic_arm (1).glb');
        // data10.scaleX = 2.5;
        // data10.scaleY = 2.5;
        // data10.scaleZ = 2.5;
        // let lathe1 = data1.clone();
        // lathe1.transform.localPosition = new Vector3(35, 0, -11);
        // this.scene.addChild(lathe1);
        // let lathe2 = data1.clone();
        // lathe2.transform.localPosition = new Vector3(35, 0, 0);
        // this.scene.addChild(lathe2);
        // let lathe3 = data1.clone();
        // lathe3.transform.localPosition = new Vector3(35, 0, 11);
        // this.scene.addChild(lathe3);
        // let forklift1 = data3.clone();
        // forklift1.transform.localPosition = new Vector3(-45, 0, 20);
        // this.scene.addChild(forklift1);
        // let forklift2 = data3.clone();
        // forklift2.transform.localPosition = new Vector3(-40, 0, 20);
        // this.scene.addChild(forklift2);
        // let forklift3 = data3.clone();
        // forklift3.transform.localPosition = new Vector3(-35, 0, 20);
        // this.scene.addChild(forklift3);
        // let forklift4 = data3.clone();
        // forklift4.transform.localPosition = new Vector3(-45, 0, 10);
        // this.scene.addChild(forklift4);
        // let forklift5 = data3.clone();
        // forklift5.transform.localPosition = new Vector3(-40, 0, 10);
        // this.scene.addChild(forklift5);
        // let forklift6 = data3.clone();
        // forklift6.transform.localPosition = new Vector3(-35, 0, 10);
        // this.scene.addChild(forklift6);
        // // Machine Processing Zone - Giant Factory Machines and CNC Machines
        // let factoryMachine1 = data5.clone();
        // factoryMachine1.transform.localPosition = new Vector3(-15, 0, 0);
        // this.scene.addChild(factoryMachine1);
        // let ladder1 = data2.clone();
        // ladder1.transform.localPosition = new Vector3(-18.5, 0, 0);
        // this.scene.addChild(ladder1);
        // let factoryMachine2 = data5.clone();
        // factoryMachine2.transform.localPosition = new Vector3(-5, 0, 0);
        // this.scene.addChild(factoryMachine2);
        // let ladder2 = data2.clone();
        // ladder2.transform.localPosition = new Vector3(-8.5, 0, 0);
        // this.scene.addChild(ladder2);
        // let factoryMachine3 = data5.clone();
        // factoryMachine3.transform.localPosition = new Vector3(5, 0, 0);
        // this.scene.addChild(factoryMachine3);
        // let ladder3 = data2.clone();
        // ladder3.transform.localPosition = new Vector3(1.5, 0, 0);
        // this.scene.addChild(ladder3);
        // let factoryMachine4 = data5.clone();
        // factoryMachine4.transform.localPosition = new Vector3(15, 0, 0);
        // this.scene.addChild(factoryMachine4);
        // let ladder4 = data2.clone();
        // ladder4.transform.localPosition = new Vector3(11.5, 0, 0);
        // this.scene.addChild(ladder4);
        // let factoryMachine5 = data5.clone();
        // factoryMachine5.transform.localPosition = new Vector3(-15, 0, 10);
        // this.scene.addChild(factoryMachine5);
        // let ladder5 = data2.clone();
        // ladder5.transform.localPosition = new Vector3(-18.5, 0, 10);
        // this.scene.addChild(ladder5);
        // let factoryMachine6 = data5.clone();
        // factoryMachine6.transform.localPosition = new Vector3(-5, 0, 10);
        // this.scene.addChild(factoryMachine6);
        // let ladder6 = data2.clone();
        // ladder6.transform.localPosition = new Vector3(-8.5, 0, 10);
        // this.scene.addChild(ladder6);
        // let factoryMachine7 = data5.clone();
        // factoryMachine7.transform.localPosition = new Vector3(5, 0, 10);
        // this.scene.addChild(factoryMachine7);
        // let ladder7 = data2.clone();
        // ladder7.transform.localPosition = new Vector3(1.5, 0, 10);
        // this.scene.addChild(ladder7);
        // let factoryMachine8 = data5.clone();
        // factoryMachine8.transform.localPosition = new Vector3(15, 0, 10);
        // this.scene.addChild(factoryMachine8);
        // let ladder8 = data2.clone();
        // ladder8.transform.localPosition = new Vector3(11.5, 0, 10);
        // this.scene.addChild(ladder8);
        // let factoryMachine9 = data5.clone();
        // factoryMachine9.transform.localPosition = new Vector3(-15, 0, 20);
        // this.scene.addChild(factoryMachine9);
        // let ladder9 = data2.clone();
        // ladder9.transform.localPosition = new Vector3(-18.5, 0, 20);
        // this.scene.addChild(ladder9);
        // let factoryMachine10 = data5.clone();
        // factoryMachine10.transform.localPosition = new Vector3(-5, 0, 20);
        // this.scene.addChild(factoryMachine10);
        // let ladder10 = data2.clone();
        // ladder10.transform.localPosition = new Vector3(-8.5, 0, 20);
        // this.scene.addChild(ladder10);
        // let factoryMachine11 = data5.clone();
        // factoryMachine11.transform.localPosition = new Vector3(5, 0, 20);
        // this.scene.addChild(factoryMachine11);
        // let ladder11 = data2.clone();
        // ladder11.transform.localPosition = new Vector3(1.5, 0, 20);
        // this.scene.addChild(ladder11);
        // let factoryMachine12 = data5.clone();
        // factoryMachine12.transform.localPosition = new Vector3(15, 0, 20);
        // this.scene.addChild(factoryMachine12);
        // let ladder12 = data2.clone();
        // ladder12.transform.localPosition = new Vector3(11.5, 0, 20);
        // this.scene.addChild(ladder12);
        // let cncMachine1 = data4.clone();
        // cncMachine1.transform.localPosition = new Vector3(-42, -1.1, -10);
        // this.scene.addChild(cncMachine1);
        // let cncMachine2 = data4.clone();
        // cncMachine2.transform.localPosition = new Vector3(-39, -1.1, -10);
        // this.scene.addChild(cncMachine2);
        // let cncMachine3 = data4.clone();
        // cncMachine3.transform.localPosition = new Vector3(-36, -1.1, -10);
        // this.scene.addChild(cncMachine3);
        // let cncMachine4 = data4.clone();
        // cncMachine4.transform.localPosition = new Vector3(-33, -1.1, -10);
        // this.scene.addChild(cncMachine4);
        // let cncMachine5 = data4.clone();
        // cncMachine5.transform.localPosition = new Vector3(-30, -1.1, -10);
        // this.scene.addChild(cncMachine5);
        // let cncMachine6 = data4.clone();
        // cncMachine6.transform.localPosition = new Vector3(-27, -1.1, -10);
        // this.scene.addChild(cncMachine6);
        // // // Assembly Zone - Robotic Arms and Scaffolding
        // let roboticArm1 = data10.clone();
        // roboticArm1.transform.localPosition = new Vector3(-36, -1, -15);
        // this.scene.addChild(roboticArm1);
        // let roboticArm2 = data10.clone();
        // roboticArm2.transform.localPosition = new Vector3(-30, -1, -15);
        // this.scene.addChild(roboticArm2);
        // let bin1 = data7.clone();
        // bin1.transform.localPosition = new Vector3(-30, -0.5, -20);
        // this.scene.addChild(bin1);
        // let bin2 = data7.clone();
        // bin2.transform.localPosition = new Vector3(-31, -0.5, -20);
        // this.scene.addChild(bin2);
        // let bin3 = data7.clone();
        // bin3.transform.localPosition = new Vector3(-30, -0.5, -21);
        // this.scene.addChild(bin3);
        // let bin4 = data7.clone();
        // bin4.transform.localPosition = new Vector3(-31, -0.5, -21);
        // this.scene.addChild(bin4);
        // let bin5 = data7.clone();
        // bin5.transform.localPosition = new Vector3(-30, -0.5, -22);
        // this.scene.addChild(bin5);
        // let bin6 = data7.clone();
        // bin6.transform.localPosition = new Vector3(-31, -0.5, -22);
        // this.scene.addChild(bin6);
        // let bin7 = data7.clone();
        // bin7.transform.localPosition = new Vector3(-30, -0.5, -23);
        // this.scene.addChild(bin7);
        // let bin8 = data7.clone();
        // bin8.transform.localPosition = new Vector3(-31, -0.5, -23);
        // this.scene.addChild(bin8);
        // let bin9 = data7.clone();
        // bin9.transform.localPosition = new Vector3(-30, -0.5, -24);
        // this.scene.addChild(bin9);
        // let bin10 = data7.clone();
        // bin10.transform.localPosition = new Vector3(-31, -0.5, -24);
        // this.scene.addChild(bin10);
        // let bin11 = data7.clone();
        // bin11.transform.localPosition = new Vector3(-30, -0.5, -25);
        // this.scene.addChild(bin11);
        // let bin12 = data7.clone();
        // bin12.transform.localPosition = new Vector3(-31, -0.5, -25);
        // this.scene.addChild(bin12);
        // let bin13 = data7.clone()
        // bin13.transform.localPosition = new Vector3(-34, -0.5, -20);
        // this.scene.addChild(bin13);
        // let bin14 = data7.clone()
        // bin14.transform.localPosition = new Vector3(-33, -0.5, -20);
        // this.scene.addChild(bin14);
        // let bin15 = data7.clone()
        // bin15.transform.localPosition = new Vector3(-34, -0.5, -21);
        // this.scene.addChild(bin15);
        // let bin16 = data7.clone()
        // bin16.transform.localPosition = new Vector3(-33, -0.5, -21);
        // this.scene.addChild(bin16);
        // let bin17 = data7.clone()
        // bin17.transform.localPosition = new Vector3(-34, -0.5, -22);
        // this.scene.addChild(bin17);
        // let bin18 = data7.clone()
        // bin18.transform.localPosition = new Vector3(-33, -0.5, -22);
        // this.scene.addChild(bin18);
        // let bin19 = data7.clone()
        // bin19.transform.localPosition = new Vector3(-34, -0.5, -23);
        // this.scene.addChild(bin19);
        // let bin20 = data7.clone()
        // bin20.transform.localPosition = new Vector3(-33, -0.5, -23);
        // this.scene.addChild(bin20);
        // let bin21 = data7.clone()
        // bin21.transform.localPosition = new Vector3(-34, -0.5, -24);
        // this.scene.addChild(bin21);
        // let bin22 = data7.clone()
        // bin22.transform.localPosition = new Vector3(-33, -0.5, -24);
        // this.scene.addChild(bin22);
        // let bin23 = data7.clone()
        // bin23.transform.localPosition = new Vector3(-34, -0.5, -25);
        // this.scene.addChild(bin23);
        // let bin24 = data7.clone()
        // bin24.transform.localPosition = new Vector3(-33, -0.5, -25);
        // this.scene.addChild(bin24);
        // // // Storage and Utility Zone - Water Tanks and Boiler
        // let waterTank1 = data8.clone();
        // waterTank1.transform.localPosition = new Vector3(-15, 2, -10);
        // this.scene.addChild(waterTank1);
        // let waterTank2 = data8.clone();
        // waterTank2.transform.localPosition = new Vector3(-12.5, 2, -12.5);
        // this.scene.addChild(waterTank2);
        // let waterTank3 = data8.clone();
        // waterTank3.transform.localPosition = new Vector3(-10, 2, -10);
        // this.scene.addChild(waterTank3);
        // let waterTank4 = data8.clone();
        // waterTank4.transform.localPosition = new Vector3(-7.5, 2, -12.5);
        // this.scene.addChild(waterTank4);
        // let waterTank5 = data8.clone();
        // waterTank5.transform.localPosition = new Vector3(-5, 2, -10);
        // this.scene.addChild(waterTank5);
        // let waterTank6 = data8.clone();
        // waterTank6.transform.localPosition = new Vector3(-2.5, 2, -12.5);
        // this.scene.addChild(waterTank6);
        // let boiler1 = data9.clone();
        // boiler1.transform.localPosition = new Vector3(10, -1.5, -11);
        // this.scene.addChild(boiler1);
        // let boiler2 = data9.clone();
        // boiler2.transform.localPosition = new Vector3(12, -1.5, -11);
        // this.scene.addChild(boiler2);
        // let boiler3 = data9.clone();
        // boiler3.transform.localPosition = new Vector3(10, -1.5, -13);
        // this.scene.addChild(boiler3);
        // let boiler4 = data9.clone();
        // boiler4.transform.localPosition = new Vector3(12, -1.5, -13);
        // this.scene.addChild(boiler4);
        //
        // END OF FACTORY
        //



        if (loadModelsFromMongoDB) {
            for (const id of Object.keys(this.modelsMap)) {
                const model = await Engine3D.res.loadGltf(this.modelsMap[id]);
                this.models.set(id, model);
            }
        }
        else {
            for (const id of Object.keys(SceneManager.MODELS)) {
                const model = await Engine3D.res.loadGltf(SceneManager.MODELS[id]);
                this.models.set(id, model);
            }
        }

        this.createNewObject(new Vector3(), false);

        /**
         * Event listener for File Input
         */

        // WAITING ON UPLOAD PAGE
        // document.getElementById('fileInput').addEventListener('drop', (event) => {
        //     event.preventDefault()
        //     let file = event.dataTransfer.files[0]
        //
        //     if (file.type.match('application/json')) {
        //         let reader = new FileReader()
        //         reader.onloadend = (event) => {
        //             let jsonString = JSON.parse(String(event.target.result));
        //             this.LoadScene(jsonString)
        //         }
        //         reader.readAsText()
        //     }
        //     else {
        //         console.log("please use a valid JSON file")
        //     }
        //     //this.LoadScene()
        // })

        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "a": {
                    if (!event.ctrlKey)
                        break;

                    if (document.querySelector(":focus"))
                        break;

                    event.preventDefault();
                    this.selectAll();

                    break;
                }

                case "f": {
                    this.focusOnSelected();
                    break;
                }

                case "i": {
                    if (!event.ctrlKey)
                        break;

                    event.preventDefault();
                    this.invertSelection();

                    break;
                }

                case "p": {
                    this.alert("Temperature above critical threshold.");
                    break;
                }

                // Create an object with 'r'
                case "r": {
                    if (event.ctrlKey) {
                        event.preventDefault();
                        this.resetCamera();
                    } else if(this.editMode){
                        this.createNewObject();
                    }

                    break;
                }
                case "s": {
                    if (event.ctrlKey) {
                        event.preventDefault()
                        this.saveScene()
                    }
                    break
                }

                case "Tab": {
                    if (document.querySelector(":focus"))
                        break;

                    this.clearSelection();
                    event.preventDefault();

                    break;
                }

                case "Delete": {
                    if(this.editMode){
                        this.deleteSelected();
                        event.preventDefault();
                    }
                    break;
                }

                // Switches between view and edit mode
                case "q": {
                    this.editMode = !this.editMode;
                    console.log(this.editMode);
                    this.events.do('switch view');
                }

                case "Control": {
                    this._ctrlPressed = true;
                    break;
                }
            }
        });

        document.addEventListener("keyup", (event) => {
            if (event.key === "Control")
                this._ctrlPressed = false;
        });

        Engine3D.startRenderView(this.view);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, e => {
            const object = this.revObjects.get(e.target);
            object.click();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, e => {
            const object = this.revObjects.get(e.target);
            object.mouseOver();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OUT, e => {
            const object = this.revObjects.get(e.target);
            object.mouseOff();
        }, this);

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_DOWN, e => {
            const object = this.revObjects.get(e.target);
            object.mouseDown();
        }, this);

        if (loadModelsFromMongoDB) {
            this.createNewObject({model: 'Assembly Warehouse Table.glb',pos:new Vector3(0,0,0)});
        }
        else {
            this.createNewObject({model: 'dragon',pos:new Vector3(0,0,0)});
        }

        this.view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, this._onOver, this);

        Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this._onMouseDown, this, null, 999);
        Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_MOVE, this._onMouseMove, this);
        Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this._onMouseUp, this);

    }

    // --------
    // Getters
    // --------

    /**
     * Get an object in the manager by its global ID.
     * @param {string} id Global ID
     * @returns {SceneObject|null} Object with specified ID, or null if it doesn't exist.
     */
    getObjectById(id) {
        if (!this.ids.has(id))
            return null;

        return this.ids.get(id);
    }

    /**
     * Get the event handler.
     * @returns {EventHandler} Scene manager's event handler
     */
    get events() {
        return this._events;
    }

    /**
     * Get the amount of objects currently selected.
     * @returns {number} Number of objects selected
     */
    get selectedCount() {
        return this._selected.size;
    }

    /**
     * Get the forward vector of the camera.
     * @returns {Vector3} Camera's forward vector
     */
    getCameraForward() {
        if (this.camera === null)
            return new Vector3();

        return this.camera.transform.forward;
    }

    // --------
    // Setters
    // --------

    /**
     * Set the color of the sky in the scene.
     * @param {Color} color New sky color
     */
    setSkyColor(color) {
        let colorSky = new SolidColorSky(color);
        this.sky = this.scene.addComponent(SkyRenderer);
        this.sky.map = colorSky;
    }

    setCanvasVisibility(val) {
        const canvas = Engine3D.inputSystem.canvas;

        if (!canvas)
            return;

        if (val) {
            canvas.style.opacity = "100%";
            canvas.style.pointerEvents = "all";
        } else {
            canvas.style.opacity = "0%";
            canvas.style.pointerEvents = "none";
        }
    }

    // ------
    // Input
    // ------

    /**
     * Handle the mouse clicking on the canvas for cursor effects.
     * @param {MouseEvent} e Mouse event
     */
    startDrag(e) {
        document.body.style.cursor = "grabbing";
    }

    /**
     * Handle the mouse button being released for cursor effects.
     */
    stopDrag() {
        document.body.style.cursor = "default";
    }

    /**
     * Reset the camera position and target the center (0, 0, 0) of the scene.
     */
    resetCamera() {
        const bounds = this._getAllBounds();
        const pos = bounds.min.add(bounds.max).div(2);
        this._cameraController.target = pos;

        const mag = Util.getBoundingBoxScale(bounds);
        const dir = this.camera.transform.localPosition.subtract(pos).normalize();

        this.camera.localPosition = pos.add(dir.mul(mag));
    }

    // ----------------
    // User Interfaces
    // ----------------

    /**
     * Signal an alert to the event listener.
     * Used for displaying UI alert messages.
     * @param {string} description Description of alert
     * @param {string} id Object Identifier
     */
    alert(description = "", id = "") {
        this.events.do("alert", description, id);
    }

    // -----------------
    // Objects - Access
    // -----------------

    /**
     * Get an object by its ID.
     * @param {number} id Object ID
     * @returns {SceneObject|null} Object with desired ID, or null if none was found.
     */
    getObjectFromID(id) {
        if (!this.objects.has(id))
            return null;

        return this.objects.get(id);
    }

    /**
     * Get an array containing all objects currently in the scene.
     * @returns {SceneObject[]} Array of all objects
     */
    getAllObjects() {
        return Array.from(this.objects.values());
    }

    // -------------------
    // Objects - Creation
    // -------------------

    /**
     * Create a new basic object and add it to the scene.
     * @param {Vector3} pos Initial position of object (optional)
     * @param {Vector3} scale Initial scale of object (optional)
     * @param {Vector3} rotation Initial rotation of object (optional)
     * @param {boolean} select Whether to select object after adding
     * @param {string} model ID/name of mesh to use
     */
    createNewObject({
        pos = null,
        scale = null,
        rotation = null,
        select = true,
        model = ""
    } = {}) {
        if (pos === null)
            pos = this.getCameraForward().mul(8).add(this.camera.transform.worldPosition);
        if (scale === null)
            scale = new Vector3(1,1,1);
        if (rotation === null)
            rotation = new Vector3(0,0,0);

        const object = new SceneObject.SceneObject({
            manager: this,
            pos: pos,
            scale: scale,
            rotation: rotation,
            id: this.count.toString(),
            model: model
        });

        object.getObject3D().name = this.count.toString();
        this.count += 1;
        // console.log("Object "+object.getObject3D().name, object)

        this.addObject(object);

        if (select) {
            object.select();
            this.focusOnSelected();
        }
        return object.getObject3D();
    }

    /**
     * Add an object to the scene.
     * @param {SceneObject} object Object to add
     */
    addObject(object) {
        this.objects.add(object);

        this.scene.addChild(object.getObject3D());
        this.revObjects.set(object.getObject3D(), object);

        this.events.do("add", object);
    }

    // -----------------------
    // Scene Saving & Loading
    // -----------------------

    /**
     * Save scene information to JSON.
     * @returns JSON Downloadable JSON file
     */
    saveScene() {
        let currentScene = this.getAllObjects().map(obj => obj.serializeObject())
        let jsonString = JSON.stringify(currentScene, null, 3)

        let sceneBlob = new Blob([jsonString], {type: "application/json"})
        const blobUrl = URL.createObjectURL(sceneBlob);

        // Create element to do a click event for blobUrl
        const downloadLink = document.createElement("a")
        downloadLink.href = blobUrl

        // Need to add for it to ask for file name if none set
        let saveName = "scene"
        downloadLink.download = `${saveName}.json`
        downloadLink.click()

        // Remove the URL from usage
        URL.revokeObjectURL(blobUrl)
    }

    /**
     * Load scene information from JSON
     */
    LoadScene(sceneFile) {
        this.clearSelection();
        this.clearObjects();
        for (const objectInfo of sceneFile) {
            console.log(objectInfo);
            const object = new SceneObject.SceneObject({
                manager: this,
                pos: new Vector3(objectInfo.pos.x,
                                objectInfo.pos.y,
                                objectInfo.pos.z),
                scale: new Vector3(objectInfo.scale.x,
                    objectInfo.scale.y,
                    objectInfo.scale.z),
                rotation: new Vector3(objectInfo.rotation.x,
                    objectInfo.rotation.y,
                    objectInfo.rotation.z),
                id: objectInfo.id,
                name: objectInfo.name,
                model: objectInfo.modelID,
                locked: objectInfo.locked
            })

            this.addObject(object);
        }
    }

    // -------------------
    // Objects - Deletion
    // -------------------

    /**
     * Remove an object from the scene.
     * @param {SceneObject} object Object to remove
     */
    removeObject(object) {
        this.objects.delete(object);
        this.revObjects.delete(object.getObject3D());

        if (this._selected.has(object))
            this.deselect(object);

        this.events.do("delete", object);
    }

    /**
     * Delete all objects from the scene.
     */
    clearObjects() {
        console.log(this.objects);
        for (const object of this.objects.values())
            object.delete();
    }

    // --------------------
    // Objects - Selection
    // --------------------

    /**
     * Select an object. Will add to group selection if control is pressed.
     * @param {SceneObject} object Object to select
     */
    select(object) {
        if (!this._ctrlPressed) {
            this.clearSelection();
            this._selected.add(object);
        } else {
            if (this._selected.has(object))
                this._selected.delete(object);
            else {
                this._selected.add(object);
            }
        }

        this.events.do("select", Array.from(this._selected.values()));
        // console.log(object);
        object.getObject3D().addComponent(keyboardScript);

        this.updateSelectBox();
    }

    /**
     * Select all objects.
     */
    selectAll() {
        this._selected.clear();
        this.objects.forEach(object => this._selected.add(object));

        this.updateSelectBox();
        this.events.do("select", this.getSelected());
    }

    /**
     * Deselect the objects currently selected and select those that are not.
     */
    invertSelection() {
        const notSelected = new Set(this.objects);
        notSelected.forEach(object => {
            if (this._selected.has(object))
                notSelected.delete(object);
        });

        this._selected.clear();

        this._selected = notSelected;

        this.updateSelectBox();
        this.events.do("select", this.getSelected())
    }

    /**
     * Get an array of all currently selected objects.
     * @returns {SceneObject[]} Array of selected objects
     */
    getSelected() {
        return Array.from(this._selected.values());
    }

    /**
     * Get the first object that is selected.
     * @returns {SceneObject} First selected object
     */
    getFirstSelected() {
        if (this.selectedCount === 0)
            return null;

        return Array.from(this._selected.values())[0];
    }

    /**
     * Deselect an object.
     * @param {SceneObject} object Object to deselect
     */
    deselect(object) {
        this._selected.delete(object);

        this.events.do("select", Array.from(this._selected.values()));

        this.updateSelectBox();
    }

    /**
     * Deselect all objects.
     */
    clearSelection() {
        this._selected.clear();

        this.events.do("select", Array.from(this._selected.values()));

        this.updateSelectBox();
    }

    /**
     * Delete all currently selected objects.
     */
    deleteSelected() {
        for (const object of this._selected.values())
            object.delete();
    }

    /**
     * Duplicate all selected objects.
     * @param {boolean} select Whether to select duplicated objects (true by default)
     */
    duplicateSelected(select = true) {
        if (this.selectedCount === 0)
            return;

        const toDuplicate = Array.from(this._selected.values());
        this.clearSelection();

        for (const obj of toDuplicate) {
            const newObj = obj.duplicate();
            if (select)
                this._selected.add(newObj);
        }

        if (select) {
            this.updateSelectBox();
            this.events.do("select", Array.from(this._selected.values()));
        }
    }

    /**
     * Focus/target camera on currently selected objects.
     */
    focusOnSelected() {
        if (this.selectedCount === 0)
            return;

        const bounds = this._getSelectedBounds();
        const pos = bounds.min.add(bounds.max).div(2);
        this._cameraController.target = pos;

        const mag = Util.getBoundingBoxScale(bounds) * 2;
        const dir = this.camera.transform.localPosition.subtract(pos).normalize();

        this.camera.localPosition = pos.add(dir.mul(mag));
    }

    /**
     * Check if an object is currently selected.
     * @param {SceneObject} object Object to check for
     * @returns {boolean} Whether object is currently selected
     */
    isSelected(object) {
        return this._selected.has(object);
    }

    /**
     * Update the visual selection indicator.
     */
    updateSelectBox() {
        this.view.graphic3D.Clear("selection");
        if (this.selectedCount === 0)
            return;

        const bb = this._getSelectedBounds();

        this.view.graphic3D.drawBox("selection", bb.min, bb.max);
    }

    /**
     * Get the bounding box containing all the bounding boxes of selected objects.
     * @returns {BoundingBox}
     * @private
     */
    _getSelectedBounds() {
        let bb = null;

        for (const object of this._selected.values()) {
            if (bb === null)
                bb = object.getBoundingBox();
            else
                bb.merge(object.getBoundingBox());
        }

        if (bb === null)
            return new BoundingBox();

        return bb;
    }

    /**
     * Get the bounding box containing all the bounding boxes of all objects in the scene.
     * @returns {BoundingBox} Total bounding box
     * @private
     */
    _getAllBounds() {
        let bb = null;

        for (const object of this.objects.values()) {
            if (bb === null)
                bb = object.getBoundingBox();
            else
                bb.merge(object.getBoundingBox());
        }

        if (bb === null)
            return new BoundingBox();

        return bb;
    }
    _onOver(e) {
        console.log('onOver: Name-', this.revObjects);
        // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
        // let node = e.target;
        // while(node.parent.parent != null)
        // {
        //     // console.log('parent', node.name);
        //     node = node.parent.object3D;
        //     // console.log('parent', node.name);
        // }
        // this.targetObj = node;
        // // console.log("target object", this.targetObj.name);
        // if(this.targetObj.numChildren > 0){
        //     this.targetObj.forChild((n) => {
        //         if (n.hasComponent(MeshRenderer)) {
        //             let mr = n.getComponent(MeshRenderer);
        //             this.mat1 = mr.material;
        //             this.matList.push(mr.material);
        //             let colorMat = new LitMaterial();
        //             colorMat.baseColor = new Color(5, 5, 5, 0.5);
        //             mr.material = colorMat;
        //         }
        //     });
        // }
        // else{
        //     let mr = this.targetObj.getComponent(MeshRenderer);
        //     this.mat1 = mr.material;
        //     let colorMat = new LitMaterial();
        //     colorMat.baseColor = new Color(5, 5, 5, 0.5);
        //     mr.material = colorMat;
        // }
    }

    /**
     * (OLD) Handles when the mouse is no longer hovering over an object.
     * @param e Event
     * @private
     */
    _onOut(e) {
        console.log('onOut', e.target.name, e.data.pickInfo);
        if(this.targetObj.numChildren > 0){
            let i  = this.matList.length - 1;
            this.targetObj.forChild((n) => {
                if (n.hasComponent(MeshRenderer)) {
                    console.log("node", n.name);
                    let mr = n.getComponent(MeshRenderer);
                    let colorMat1 = new LitMaterial();
                    colorMat1.baseColor = Color.COLOR_BLUE;
                    // mr.material = this.mat1;
                    mr.material = this.matList[i];
                    i = i - 1;
                }
            });
        }
        else{
            let obj = e.target;
            let mr = obj.getComponent(MeshRenderer);
            let colorMat1 = new LitMaterial();
            colorMat1.baseColor = Color.COLOR_RED;
            mr.material = this.mat1;
        }
    }

    _onMouseDown(e) {
        if (e.mouseCode === 2) {
            // console.log("Scene click down");
            this.lastTime = Date.now();
            this.canMove = true;
            const pos = this.cam.screenPointToWorld(e.mouseX, e.mouseY, 0);
            this.lastX = pos.x;
            this.lastY = pos.y;
            this.lastZ = pos.z;

        }
    }

    _onMouseMove(e){
        // If right mouse is being clicked on a movable object then continue else return
        if (this.canMove && this.ObjectToMove !== undefined){
            // Stop camera movement with mouse
            e.stopImmediatePropagation();

            // Update the position of the selected object to the mouse position
            const now = Date.now();
            if (now - this.lastTime > this.moveInterval) {
                this.lastTime = now;
                const pos = this.cam.screenPointToWorld(e.mouseX, e.mouseY, 0);
                this.ObjectToMove.setX(this.ObjectToMove.getObject3D().x + (pos.x - this.lastX) * this._dragMult);
                this.ObjectToMove.setY(this.ObjectToMove.getObject3D().y + (pos.y - this.lastY) * this._dragMult);
                this.ObjectToMove.setZ(this.ObjectToMove.getObject3D().z + (pos.z - this.lastZ) * this._dragMult);
                this.lastX = pos.x;
                this.lastY = pos.y;
                this.lastZ = pos.z;

            }
        }
    }

    _onMouseUp(e){
        // console.log("Up");
        this.ObjectToMove = undefined;
        this.canMove = false;
    }
}

export default SceneManager;
