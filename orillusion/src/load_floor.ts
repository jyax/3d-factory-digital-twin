import { Engine3D, Scene3D, Object3D, Camera3D, DirectLight, PointLight, HoverCameraController, View3D, Vector3, Color }
    from "@orillusion/core";
 
export default class ImportFloor {
    async run() {
        console.log('hello 3d');
        // Initialize engine
        await Engine3D.init();
        // Create scene
        let scene: Scene3D = new Scene3D();

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
    }
}