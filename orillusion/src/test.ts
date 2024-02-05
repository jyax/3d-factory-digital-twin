import { AtmosphericComponent, BoxColliderShape, UnLitTexArrayMaterial, Camera3D, CameraUtil, ColliderComponent, Color, View3D, DirectLight, Engine3D, LitMaterial, HoverCameraController, KelvinUtil, MeshRenderer, Object3D, PointerEvent3D, Scene3D, SphereGeometry, Vector3, Material } from '@orillusion/core';

export default class Sample_MousePick {
    lightObj: Object3D;
    cameraObj: Camera3D;
    scene: Scene3D;
    hover: HoverCameraController;
    mat1: Material;
    isMove: boolean;

    constructor() {}

    async run() {
        // enable pick and use pixel mode
        Engine3D.setting.pick.enable = true;
        Engine3D.setting.pick.mode = `pixel`;

        await Engine3D.init({});

        this.scene = new Scene3D();
        this.scene.addComponent(AtmosphericComponent);
        this.scene.getComponent(AtmosphericComponent).sunY = .6;
        let camera = CameraUtil.createCamera3DObject(this.scene);
        camera.perspective(60, Engine3D.aspect, 1, 5000.0);

        this.hover = camera.object3D.addComponent(HoverCameraController);
        this.hover.setCamera(-30, -15, 120);

        let wukong = await Engine3D.res.loadGltf('https://cdn.orillusion.com/gltfs/wukong/wukong.gltf');
        wukong.transform.y = 30;
        wukong.transform.scaleX = 20;
        wukong.transform.scaleY = 20;
        wukong.transform.scaleZ = 20;
        wukong.forChild((node) => {
            if (node.hasComponent(MeshRenderer)) {
                node.addComponent(ColliderComponent);
            }
        });
        this.scene.addChild(wukong);

        this.initPickObject(this.scene);

        let view = new View3D();
        view.scene = this.scene;
        view.camera = camera;
        // start render
        Engine3D.startRenderView(view);

        // listen all mouse events
        view.pickFire.addEventListener(PointerEvent3D.PICK_UP, this.onUp, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_DOWN, this.onDown, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, this.onPick, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_OVER, this.onOver, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_OUT, this.onOut, this);
        view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, this.onMove, this, null, 999);
    
        // this.mat1 = new LitMaterial();
        // this.mat1.baseColor = new Color(5, 5, 5, 1.0);
    }

    private initPickObject(scene: Scene3D): void {
        /******** light *******/
        {
            this.lightObj = new Object3D();
            this.lightObj.rotationX = 125;
            this.lightObj.rotationY = 0;
            this.lightObj.rotationZ = 40;
            let lc = this.lightObj.addComponent(DirectLight);
            lc.lightColor = KelvinUtil.color_temperature_to_rgb(5355);
            lc.castShadow = true;
            lc.intensity = 20;
            scene.addChild(this.lightObj);
        }

        let size: number = 9;
        let shape = new BoxColliderShape();
        shape.setFromCenterAndSize(new Vector3(), new Vector3(size, size, size));

        let geometry = new SphereGeometry(size / 2, 20, 20);
        for (let i = 0; i < 10; i++) {
            let obj = new Object3D();
            obj.name = 'sphere ' + i;
            scene.addChild(obj);
            obj.x = (i - 5) * 10;

            let mat = new LitMaterial();
            mat.emissiveMap = Engine3D.res.grayTexture;
            mat.emissiveIntensity = 0.0;

            let renderer = obj.addComponent(MeshRenderer);
            renderer.geometry = geometry;
            renderer.material = mat;
            obj.addComponent(ColliderComponent);
        }
    }

    private onUp(e: PointerEvent3D) {
        console.log('onUp', e.target.name, e.data.pickInfo);
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        // mr.material.baseColor = Color.random();
    }

    private onDown(e: PointerEvent3D) {
        console.log('onDown', e.target.name, e.data.pickInfo);
        let obj = e.target as Object3D;
        if (e.mouseCode === 2) {
            e.stopImmediatePropagation();
            this.isMove = true;
        }
    }

    private onPick(e: PointerEvent3D) {
        console.log('onPick', e.target.name, e.data.pickInfo);
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        // mr.material.baseColor = Color.random();
    }

    private onOver(e: PointerEvent3D) {
        console.log('onOver', e.target.name, e.data.pickInfo);
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        this.mat1 = mr.material;
        let colorMat = new LitMaterial();
        colorMat.baseColor = new Color(5, 5, 5, 0.5);
        mr.material = colorMat;
    }

    private onOut(e: PointerEvent3D) {
        console.log('onOut', e.target.name, e.data.pickInfo);
        let obj = e.target as Object3D;
        let mr = obj.getComponent(MeshRenderer);
        mr.material = this.mat1;
    }

    private onMove(e: PointerEvent3D) {
        console.log('onMove', e.target.name, e.data.pickInfo);
        if(!this.isMove) return;
        e.stopImmediatePropagation();
        let obj = e.target as Object3D;
        obj.transform.x = e.mouseX;
        obj.transform.y = e.mouseX;
    }
}
// new Sample_MousePick().run();