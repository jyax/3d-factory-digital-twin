       //
        // HARDCODING THE SCENE
        //
        
        // Creating a Plane/floor

        let floor = await Engine3D.res.loadGltf('./src/assets/glb_models/factory_floor_sample_1.glb');
        floor.scaleX = 0.02;
        floor.scaleY = 0.02;
        floor.scaleZ = 0.02;
        floor.rotationY = 90;
        floor.transform.localPosition = new Vector3(0, -2, 0);
        this.scene.addChild(floor);

        let data1 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/desk_lathe.glb');
        data1.scaleX = 3;
        data1.scaleY = 3;
        data1.scaleZ = 3;
        data1.rotationY = -90;
        let data2 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/escada_movel_-_moving_ladder.glb');
        let data3 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/forklift_gameready.glb');
        data3.scaleX = 1.3;
        data3.scaleY = 1.3;
        data3.scaleZ = 1.3;
        let data4 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/pica_pica_-_machines.glb');
        data4.scaleX = 0.2;
        data4.scaleY = 0.2;
        data4.scaleZ = 0.2;
        let data5 = await Engine3D.res.loadGltf('./src/assets/glb_models/FANUC-430 Robot.glb');
        data5.scaleX = 0.04;
        data5.scaleY = 0.04;
        data5.scaleZ = 0.04;
        let data6 = await Engine3D.res.loadGltf('./src/assets/glb_models/JM_Rack_A.glb');
        data6.scaleX = 0.03;
        data6.scaleY = 0.03;
        data6.scaleZ = 0.03;
        let data7 = await Engine3D.res.loadGltf('./src/assets/glb_models/Slatwall_Bin_5.5in.glb');
        data7.scaleX = 0.06;
        data7.scaleY = 0.06;
        data7.scaleZ = 0.06;
        data7.rotationX = 90;
        let data8 = await Engine3D.res.loadGltf('./src/assets/glb_models/UN-COMPLIANT IBC TANK.glb');
        data8.scaleX = 0.025;
        data8.scaleY = 0.025;
        data8.scaleZ = 0.025;
        let data9 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/boiler_from_the_puffer_vic_32 (1).glb');
        data9.rotationX = -90;
        let data10 = await Engine3D.res.loadGltf('./src/assets/glb_models/downloadsGLB/black_honey_-_robotic_arm (1).glb');
        data10.scaleX = 2.5;
        data10.scaleY = 2.5;
        data10.scaleZ = 2.5;

        let lathe1 = data1.clone();
        lathe1.transform.localPosition = new Vector3(35, 0, -11);
        this.scene.addChild(lathe1);

        let lathe2 = data1.clone();
        lathe2.transform.localPosition = new Vector3(35, 0, 0);
        this.scene.addChild(lathe2);

        let lathe3 = data1.clone();
        lathe3.transform.localPosition = new Vector3(35, 0, 11);
        this.scene.addChild(lathe3);

        let forklift1 = data3.clone();
        forklift1.transform.localPosition = new Vector3(-45, 0, 20);
        this.scene.addChild(forklift1);

        let forklift2 = data3.clone();
        forklift2.transform.localPosition = new Vector3(-40, 0, 20);
        this.scene.addChild(forklift2);

        let forklift3 = data3.clone();
        forklift3.transform.localPosition = new Vector3(-35, 0, 20);
        this.scene.addChild(forklift3);

        let forklift4 = data3.clone();
        forklift4.transform.localPosition = new Vector3(-45, 0, 10);
        this.scene.addChild(forklift4);

        let forklift5 = data3.clone();
        forklift5.transform.localPosition = new Vector3(-40, 0, 10);
        this.scene.addChild(forklift5);

        let forklift6 = data3.clone();
        forklift6.transform.localPosition = new Vector3(-35, 0, 10);
        this.scene.addChild(forklift6);

        // Machine Processing Zone - Giant Factory Machines and CNC Machines
        let factoryMachine1 = data5.clone();
        factoryMachine1.transform.localPosition = new Vector3(-15, 0, 0);
        this.scene.addChild(factoryMachine1);
        let ladder1 = data2.clone();
        ladder1.transform.localPosition = new Vector3(-18.5, 0, 0);
        this.scene.addChild(ladder1);

        let factoryMachine2 = data5.clone();
        factoryMachine2.transform.localPosition = new Vector3(-5, 0, 0);
        this.scene.addChild(factoryMachine2);
        let ladder2 = data2.clone();
        ladder2.transform.localPosition = new Vector3(-8.5, 0, 0);
        this.scene.addChild(ladder2);

        let factoryMachine3 = data5.clone();
        factoryMachine3.transform.localPosition = new Vector3(5, 0, 0);
        this.scene.addChild(factoryMachine3);
        let ladder3 = data2.clone();
        ladder3.transform.localPosition = new Vector3(1.5, 0, 0);
        this.scene.addChild(ladder3);

        let factoryMachine4 = data5.clone();
        factoryMachine4.transform.localPosition = new Vector3(15, 0, 0);
        this.scene.addChild(factoryMachine4);
        let ladder4 = data2.clone();
        ladder4.transform.localPosition = new Vector3(11.5, 0, 0);
        this.scene.addChild(ladder4);

        let factoryMachine5 = data5.clone();
        factoryMachine5.transform.localPosition = new Vector3(-15, 0, 10);
        this.scene.addChild(factoryMachine5);
        let ladder5 = data2.clone();
        ladder5.transform.localPosition = new Vector3(-18.5, 0, 10);
        this.scene.addChild(ladder5);

        let factoryMachine6 = data5.clone();
        factoryMachine6.transform.localPosition = new Vector3(-5, 0, 10);
        this.scene.addChild(factoryMachine6);
        let ladder6 = data2.clone();
        ladder6.transform.localPosition = new Vector3(-8.5, 0, 10);
        this.scene.addChild(ladder6);

        let factoryMachine7 = data5.clone();
        factoryMachine7.transform.localPosition = new Vector3(5, 0, 10);
        this.scene.addChild(factoryMachine7);
        let ladder7 = data2.clone();
        ladder7.transform.localPosition = new Vector3(1.5, 0, 10);
        this.scene.addChild(ladder7);

        let factoryMachine8 = data5.clone();
        factoryMachine8.transform.localPosition = new Vector3(15, 0, 10);
        this.scene.addChild(factoryMachine8);
        let ladder8 = data2.clone();
        ladder8.transform.localPosition = new Vector3(11.5, 0, 10);
        this.scene.addChild(ladder8);

        let factoryMachine9 = data5.clone();
        factoryMachine9.transform.localPosition = new Vector3(-15, 0, 20);
        this.scene.addChild(factoryMachine9);
        let ladder9 = data2.clone();
        ladder9.transform.localPosition = new Vector3(-18.5, 0, 20);
        this.scene.addChild(ladder9);

        let factoryMachine10 = data5.clone();
        factoryMachine10.transform.localPosition = new Vector3(-5, 0, 20);
        this.scene.addChild(factoryMachine10);
        let ladder10 = data2.clone();
        ladder10.transform.localPosition = new Vector3(-8.5, 0, 20);
        this.scene.addChild(ladder10);

        let factoryMachine11 = data5.clone();
        factoryMachine11.transform.localPosition = new Vector3(5, 0, 20);
        this.scene.addChild(factoryMachine11);
        let ladder11 = data2.clone();
        ladder11.transform.localPosition = new Vector3(1.5, 0, 20);
        this.scene.addChild(ladder11);

        let factoryMachine12 = data5.clone();
        factoryMachine12.transform.localPosition = new Vector3(15, 0, 20);
        this.scene.addChild(factoryMachine12);
        let ladder12 = data2.clone();
        ladder12.transform.localPosition = new Vector3(11.5, 0, 20);
        this.scene.addChild(ladder12);


        let cncMachine1 = data4.clone();
        cncMachine1.transform.localPosition = new Vector3(-42, -1.1, -10);
        this.scene.addChild(cncMachine1);

        let cncMachine2 = data4.clone();
        cncMachine2.transform.localPosition = new Vector3(-39, -1.1, -10);
        this.scene.addChild(cncMachine2);

        let cncMachine3 = data4.clone();
        cncMachine3.transform.localPosition = new Vector3(-36, -1.1, -10);
        this.scene.addChild(cncMachine3);

        let cncMachine4 = data4.clone();
        cncMachine4.transform.localPosition = new Vector3(-33, -1.1, -10);
        this.scene.addChild(cncMachine4);

        let cncMachine5 = data4.clone();
        cncMachine5.transform.localPosition = new Vector3(-30, -1.1, -10);
        this.scene.addChild(cncMachine5);

        let cncMachine6 = data4.clone();
        cncMachine6.transform.localPosition = new Vector3(-27, -1.1, -10);
        this.scene.addChild(cncMachine6);

        // // Assembly Zone - Robotic Arms and Scaffolding
        let roboticArm1 = data10.clone();
        roboticArm1.transform.localPosition = new Vector3(-36, -1, -15);
        this.scene.addChild(roboticArm1);

        let roboticArm2 = data10.clone();
        roboticArm2.transform.localPosition = new Vector3(-30, -1, -15);
        this.scene.addChild(roboticArm2);

        let bin1 = data7.clone();
        bin1.transform.localPosition = new Vector3(-30, -0.5, -20);
        this.scene.addChild(bin1);

        let bin2 = data7.clone();
        bin2.transform.localPosition = new Vector3(-31, -0.5, -20);
        this.scene.addChild(bin2);

        let bin3 = data7.clone();
        bin3.transform.localPosition = new Vector3(-30, -0.5, -21);
        this.scene.addChild(bin3);

        let bin4 = data7.clone();
        bin4.transform.localPosition = new Vector3(-31, -0.5, -21);
        this.scene.addChild(bin4);
        
        let bin5 = data7.clone();
        bin5.transform.localPosition = new Vector3(-30, -0.5, -22);
        this.scene.addChild(bin5);

        let bin6 = data7.clone();
        bin6.transform.localPosition = new Vector3(-31, -0.5, -22);
        this.scene.addChild(bin6);

        let bin7 = data7.clone();
        bin7.transform.localPosition = new Vector3(-30, -0.5, -23);
        this.scene.addChild(bin7);

        let bin8 = data7.clone();
        bin8.transform.localPosition = new Vector3(-31, -0.5, -23);
        this.scene.addChild(bin8);
        
        let bin9 = data7.clone();
        bin9.transform.localPosition = new Vector3(-30, -0.5, -24);
        this.scene.addChild(bin9);

        let bin10 = data7.clone();
        bin10.transform.localPosition = new Vector3(-31, -0.5, -24);
        this.scene.addChild(bin10);

        let bin11 = data7.clone();
        bin11.transform.localPosition = new Vector3(-30, -0.5, -25);
        this.scene.addChild(bin11);

        let bin12 = data7.clone();
        bin12.transform.localPosition = new Vector3(-31, -0.5, -25);
        this.scene.addChild(bin12);

        let bin13 = data7.clone()
        bin13.transform.localPosition = new Vector3(-34, -0.5, -20);
        this.scene.addChild(bin13);

        let bin14 = data7.clone()
        bin14.transform.localPosition = new Vector3(-33, -0.5, -20);
        this.scene.addChild(bin14);

        let bin15 = data7.clone()
        bin15.transform.localPosition = new Vector3(-34, -0.5, -21);
        this.scene.addChild(bin15);

        let bin16 = data7.clone()
        bin16.transform.localPosition = new Vector3(-33, -0.5, -21);
        this.scene.addChild(bin16);

        let bin17 = data7.clone()
        bin17.transform.localPosition = new Vector3(-34, -0.5, -22);
        this.scene.addChild(bin17);

        let bin18 = data7.clone()
        bin18.transform.localPosition = new Vector3(-33, -0.5, -22);
        this.scene.addChild(bin18);

        let bin19 = data7.clone()
        bin19.transform.localPosition = new Vector3(-34, -0.5, -23);
        this.scene.addChild(bin19);

        let bin20 = data7.clone()
        bin20.transform.localPosition = new Vector3(-33, -0.5, -23);
        this.scene.addChild(bin20);

        let bin21 = data7.clone()
        bin21.transform.localPosition = new Vector3(-34, -0.5, -24);
        this.scene.addChild(bin21);

        let bin22 = data7.clone()
        bin22.transform.localPosition = new Vector3(-33, -0.5, -24);
        this.scene.addChild(bin22);

        let bin23 = data7.clone()
        bin23.transform.localPosition = new Vector3(-34, -0.5, -25);
        this.scene.addChild(bin23);

        let bin24 = data7.clone()
        bin24.transform.localPosition = new Vector3(-33, -0.5, -25);
        this.scene.addChild(bin24);


        // // Storage and Utility Zone - Water Tanks and Boiler
        let waterTank1 = data8.clone();
        waterTank1.transform.localPosition = new Vector3(-15, 2, -10);
        this.scene.addChild(waterTank1);

        let waterTank2 = data8.clone();
        waterTank2.transform.localPosition = new Vector3(-12.5, 2, -12.5);
        this.scene.addChild(waterTank2);

        let waterTank3 = data8.clone();
        waterTank3.transform.localPosition = new Vector3(-10, 2, -10);
        this.scene.addChild(waterTank3);

        let waterTank4 = data8.clone();
        waterTank4.transform.localPosition = new Vector3(-7.5, 2, -12.5);
        this.scene.addChild(waterTank4);

        let waterTank5 = data8.clone();
        waterTank5.transform.localPosition = new Vector3(-5, 2, -10);
        this.scene.addChild(waterTank5);

        let waterTank6 = data8.clone();
        waterTank6.transform.localPosition = new Vector3(-2.5, 2, -12.5);
        this.scene.addChild(waterTank6);

        let boiler1 = data9.clone();
        boiler1.transform.localPosition = new Vector3(10, -1.5, -11);
        this.scene.addChild(boiler1);

        let boiler2 = data9.clone();
        boiler2.transform.localPosition = new Vector3(12, -1.5, -11);
        this.scene.addChild(boiler2);

        let boiler3 = data9.clone();
        boiler3.transform.localPosition = new Vector3(10, -1.5, -13);
        this.scene.addChild(boiler3);

        let boiler4 = data9.clone();
        boiler4.transform.localPosition = new Vector3(12, -1.5, -13);
        this.scene.addChild(boiler4);

        //
        // END OF FACTORY
        //
