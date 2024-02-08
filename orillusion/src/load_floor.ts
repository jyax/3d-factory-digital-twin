import { AtmosphericComponent, Engine3D, Scene3D, CameraUtil, Object3D, Camera3D, Material, KelvinUtil, SphereGeometry, BoxColliderShape, LitMaterial, DirectLight, PointLight, HoverCameraController, View3D, Vector3, Color, ColliderComponent, PointerEvent3D, MeshRenderer, UnLitTexArrayMaterial, }
    from "@orillusion/core";
 
export default class ImportFloor {
    mat1: Material;
    targetObj: Object3D;
    matList : Material[] = [];

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
        sky.sunY = .6;

        // Create camera
        let cameraObj = CameraUtil.createCamera3DObject(scene);
        // Set camera perspective
        cameraObj.perspective(60, Engine3D.aspect, 1, 5000.0);
        // Set camera controller
        let controller = cameraObj.object3D.addComponent(HoverCameraController);
        controller.setCamera(-30, -15, 1200);

        // Load glb model
        let floor = await Engine3D.res.loadGltf('./../glb_models/factory_floor_sample_1.glb');
        floor.transform.scaleX = .5;
        floor.transform.scaleY = .5;
        floor.transform.scaleZ = .5;
        scene.addChild(floor);

        // Load glb model
        let table = await Engine3D.res.loadGltf('./../glb_models/assembly_warehouse_table.glb');
        table.transform.y = 10;
        // table.addComponent(ColliderComponent);
        console.log('parent', table.name);
        scene.addChild(table);
        table.forChild((node) => {
            if (node.hasComponent(MeshRenderer)) {
                node.addComponent(ColliderComponent);
                // console.log('visible', node.name);
            }
            // else console.log(' not visible', node.name);
        });
        
        let geometry = new SphereGeometry(100 / 2, 20, 20);
        let obj = new Object3D();
        obj.name = 'sphere ';
        scene.addChild(obj);

        let mat = new LitMaterial();
        mat.emissiveMap = Engine3D.res.grayTexture;
        mat.emissiveIntensity = 0.0;
        obj.x = -500;  
        obj.y = 100;  

        let renderer = obj.addComponent(MeshRenderer);
        renderer.geometry = geometry;
        renderer.material = mat;
        obj.addComponent(ColliderComponent);

        scene.addChild(obj);


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
        view.camera = cameraObj;
        
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
        // console.log('onOver: Name-', e.target.name, e.data.pickInfo);
        // // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
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

    private onUp(e: PointerEvent3D) {
        // console.log('onUp', e.target.name, e.data.pickInfo);
        console.log('onOver: Name-', e.target.name, e.data.pickInfo);
        // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
        let node = e.target;
        while(node.parent.parent != null)
        {
            // console.log('parent', node.name);
            node = node.parent.object3D;
            // console.log('parent', node.name);
        }
        this.targetObj = node;
        // console.log("target object", this.targetObj.name);
        if(this.targetObj.numChildren > 0){
            this.targetObj.forChild((n) => {
                if (n.hasComponent(MeshRenderer)) {
                    let mr = n.getComponent(MeshRenderer);
                    this.mat1 = mr.material;
                    this.matList.push(mr.material);
                    let colorMat = new LitMaterial();
                    colorMat.baseColor = new Color(5, 5, 5, 0.5);
                    mr.material = colorMat;
                }
            });
        }
        else{
            let mr = this.targetObj.getComponent(MeshRenderer);
            this.mat1 = mr.material;
            let colorMat = new LitMaterial();
            colorMat.baseColor = new Color(5, 5, 5, 0.5);
            mr.material = colorMat;
        }
    }

    private onDown(e: PointerEvent3D) {
        // console.log('onDown', e.target.name, e.data.pickInfo);
        // console.log('onOver: Name-', e.target.name, e.data.pickInfo);
        // // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
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

    private onPick(e: PointerEvent3D) {
        // console.log('onPick', e.target.name, e.data.pickInfo);
        // let obj = e.target as Object3D;
        // let mr = obj.getComponent(MeshRenderer);
        // let mat = new UnLitTexArrayMaterial();
        // mat.baseColor = Color.COLOR_RED;
        // mr.material = mat;
    }

    private onOut(e: PointerEvent3D) {
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
            let obj = e.target as Object3D;
            let mr = obj.getComponent(MeshRenderer);
            let colorMat1 = new LitMaterial();
            colorMat1.baseColor = Color.COLOR_RED;
            mr.material = this.mat1;
        }
    }

    private onMove(e: PointerEvent3D) {
        // console.log('onMove', e.target.name, e.data.pickInfo);
        // // console.log('onOver: Parent-', e.target.parent.object3D.name, e.data.pickInfo);
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
}