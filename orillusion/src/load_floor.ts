import { AtmosphericComponent, Engine3D, Scene3D, Object3D, Camera3D, DirectLight, PointLight, HoverCameraController, View3D, Vector3, Color, ColliderComponent, PointerEvent3D, MeshRenderer, UnLitTexArrayMaterial, }
    from "@orillusion/core";
 
export default class ImportFloor {
    async run() {
        // enable pick and use pixel mode
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = `pixel`;

        console.log('hello 3d');
        // Initialize engine
        await Engine3D.init();
        // Create scene
        let scene: Scene3D = new Scene3D();

        // add atmospheric sky
        let sky = scene.addComponent(AtmosphericComponent);
        sky.sunY = 50;

        // Create camera
        let cameraObj: Object3D = new Object3D();
        cameraObj.y = 50000
        let camera = cameraObj.addComponent(Camera3D);
        // Set camera perspective
        camera.perspective(60, window.innerWidth / window.innerHeight, .1, 5000.0);
        // Set camera controller
        let controller = cameraObj.addComponent(HoverCameraController);
        controller.setCamera(150, -15, 1500, new Vector3(0, 0, 0));
        // Add camera to the scene
        scene.addChild(cameraObj);

        // Load glb model
        let floor = await Engine3D.res.loadGltf('./../glb_models/factory_floor_sample_1.glb');
        scene.addChild(floor);

        // Load glb model
        let table = await Engine3D.res.loadGltf('./../glb_models/assembly_warehouse_table.glb');
        table.addComponent(ColliderComponent);
        scene.addChild(table);

        // add direct light component
        let dlight: Object3D = new Object3D();
        dlight.rotationX = 90;
        let dcomponent: DirectLight = dlight.addComponent(DirectLight);
        dcomponent.intensity = 50;
        scene.addChild(dlight);

        // add point light
        let plight: Object3D = new Object3D();
        plight.y = 5000;
        plight.rotationX = 90;
        let pcomponent: PointLight = plight.addComponent(PointLight);
        pcomponent.lightColor = new Color(3, 48, 252, 1.0);
        pcomponent.intensity = 1000;
        pcomponent.range = 1000;
        scene.addChild(plight);
        
        // Create view
        let view = new View3D();
        view.scene = scene;
        view.camera = camera;
        
        // Render
        Engine3D.startRenderView(view);

        view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, this.onOver, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_UP, this.onUp, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_DOWN, this.onDown, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPick, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_OUT, this.onOut, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, this.onMove, this);

    }

    private onOver(e: PointerEvent3D) {
        console.log('onOver', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onUp(e: PointerEvent3D) {
        console.log('onUp', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onDown(e: PointerEvent3D) {
        console.log('onDown', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onPick(e: PointerEvent3D) {
        console.log('onPick', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onOut(e: PointerEvent3D) {
        console.log('onOut', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onMove(e: PointerEvent3D) {
        console.log('onMove', e.target.name, e.data.pickInfo);
    }
}