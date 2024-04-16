from changes import *
import math
import asset as a
import numpy as np





def testMain(client):
    seqs = []

    for i in range(0,5):
        s = Sequence([])
        s.add_state(a.Asset(id=str(i),x=3200+i*400,y=80,z=-1470))
        s.add_duration(10+i*3.5)
        s.add_state(a.Asset(id=str(i),x=1100+i*400,y=80,z=-1470))
        s.add_duration(1)
        s.add_state(a.Asset(id=str(i),x=1100,y=80,z=-1470))
        s.add_duration(.1)
        s.add_state(a.Asset(id=str(i),x=1100,y=80,z=-1780))
        s.add_duration(10)
        s.add_state(a.Asset(id=str(i),x=3200,y=80,z=-1780))
        s.add_duration(3)#re-loop
        s.add_state(a.Asset(id=str(i),x=3200+i*400,y=80,z=-1470))
        s.add_duration(10+i*3.5)
        s.add_state(a.Asset(id=str(i),x=1100+i*400,y=80,z=-1470))
        s.add_duration(1)
        s.add_state(a.Asset(id=str(i),x=1100,y=80,z=-1470))
        s.add_duration(.1)
        s.add_state(a.Asset(id=str(i),x=1100,y=80,z=-1780))
        s.add_duration(10)
        s.add_state(a.Asset(id=str(i),x=3200,y=80,z=-1780))
        seqs.append(s)


    h1 = 120
    f1 = 'forklift_1'
    forklift1 = Sequence([])
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-2013))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-3775/2))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-3775))
    forklift1.add_duration(1)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-3775,rot_y=-90))
    forklift1.add_duration(4)
    forklift1.add_state(a.Asset(id=f1,x=366,y=h1,z=-3775,rot_y=-90))
    forklift1.add_duration(2.5)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-3775,rot_y=-90))
    forklift1.add_duration(2)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-3775,rot_y=-180))
    forklift1.add_duration(4)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-4525,rot_y=-180))
    forklift1.add_duration(3)
    forklift1.add_state(a.Asset(id=f1,x=1162,y=h1,z=-4335,rot_y=-90))
    forklift1.add_duration(5)
    forklift1.add_state(a.Asset(id=f1,x=425,y=h1,z=-4335,rot_y=-90))
    forklift1.add_duration(3)
    forklift1.add_state(a.Asset(id=f1,x=800,y=h1,z=-4335,rot_y=-90))
    forklift1.add_duration(3)
    forklift1.add_state(a.Asset(id=f1,x=800,y=h1,z=-4335,rot_y=0))
    forklift1.add_duration(5)
    forklift1.add_state(a.Asset(id=f1,x=800,y=h1,z=-2600,rot_y=0))
    forklift1.add_duration(3)
    forklift1.add_state(a.Asset(id=f1,x=800,y=h1,z=-2600,rot_y=90))
    forklift1.add_duration(4)
    forklift1.add_state(a.Asset(id=f1,x=2050,y=h1,z=-2600,rot_y=90))

    seqs.append(forklift1)
    t1 = 'tank_1'
    w,h = -150,0
    tank1 = Sequence([])
    tank1.add_state(a.Asset(id=t1,x=425+w,y=h1,z=-4335+h,rot_y=-0))
    tank1.add_duration(32.5)
    tank1.add_state(a.Asset(id=t1,x=425+w,y=h1,z=-4335+h,rot_y=0))
    tank1.add_duration(3)
    tank1.add_state(a.Asset(id=t1,x=800+w,y=h1,z=-4335+h,rot_y=-90))
    tank1.add_duration(3)
    tank1.add_state(a.Asset(id=t1,x=800+w,y=h1,z=-4335+h,rot_y=0))
    tank1.add_duration(5)
    tank1.add_state(a.Asset(id=t1,x=800-w,y=h1,z=-2600+h,rot_y=0))
    tank1.add_duration(3)
    tank1.add_state(a.Asset(id=t1,x=800-w,y=h1,z=-2600+h,rot_y=90))
    tank1.add_duration(4)
    tank1.add_state(a.Asset(id=t1,x=2050-w,y=h1,z=-2600+h,rot_y=90))
    seqs.append(tank1)
   
    f2 = 'forklift_2'
    forklift2 = Sequence([])
    forklift2.add_state(a.Asset(id=f2,x=1730,y=h1,z=-4500))
    forklift2.add_duration(6)
    forklift2.add_state(a.Asset(id=f2,x=1730,y=h1,z=-3360))
    forklift2.add_duration(3)
    forklift2.add_state(a.Asset(id=f2,x=1730,y=h1,z=-3660))
    forklift2.add_duration(2)
    forklift2.add_state(a.Asset(id=f2,x=1730,y=h1,z=-3660,rot_y=-90))
    forklift2.add_duration(12)
    forklift2.add_state(a.Asset(id=f2,x=1730,y=h1,z=-3660,rot_y=-90))
    forklift2.add_duration(4)
    forklift2.add_state(a.Asset(id=f2,x=1000,y=h1,z=-3660,rot_y=-90))
    forklift2.add_duration(2)
    forklift2.add_state(a.Asset(id=f2,x=1000,y=h1,z=-3660,rot_y=0))
    forklift2.add_duration(8)
    forklift2.add_state(a.Asset(id=f2,x=1000,y=h1,z=-2100,rot_y=0))
    forklift2.add_duration(2.5)
    forklift2.add_state(a.Asset(id=f2,x=1000,y=h1,z=-2100,rot_y=-90))
    forklift2.add_duration(4)
    forklift2.add_state(a.Asset(id=f2,x=-300,y=h1,z=-2100,rot_y=-90))
    

    seqs.append(forklift2)

    b1 = 'bot_1'
    t1 = 'tote_1'
    h2 = 35
    bot1 = Sequence([])
    tote1 = Sequence([])
    bot1.add_state(a.Asset(id=b1,x=1650,y=0,z=-1172))
    bot1.add_duration(6)
    bot1.add_state(a.Asset(id=b1,x=1650,y=0,z=-1172))
    bot1.add_duration(6)
    bot1.add_state(a.Asset(id=b1,x=850,y=0,z=-1172))
    bot1.add_duration(6)
    bot1.add_state(a.Asset(id=b1,x=850,y=0,z=-2260))
    bot1.add_duration(6)
    bot1.add_state(a.Asset(id=b1,x=-290,y=0,z=-2010))
    bot1.add_duration(8)
    bot1.add_state(a.Asset(id=b1,x=-270,y=0,z=-1325,rot_y=-90))


    tote1.add_state(a.Asset(id=t1,x=1720,y=20,z=-1015))
    tote1.add_duration(6)
    tote1.add_state(a.Asset(id=t1,x=1650+50,y=h2,z=-1172+50))
    tote1.add_duration(6)
    tote1.add_state(a.Asset(id=t1,x=850+50,y=h2,z=-1172+50))
    tote1.add_duration(6)
    tote1.add_state(a.Asset(id=t1,x=850+50,y=h2,z=-2260+50))
    tote1.add_duration(6)
    tote1.add_state(a.Asset(id=t1,x=-290+50,y=h2,z=-2010+50))
    tote1.add_duration(8)
    tote1.add_state(a.Asset(id=t1,x=-270-50,y=h2,z=-1325+50,rot_y=-90))

    seqs.append(bot1)
    seqs.append(tote1)

    b2 = 'bot_2'
    t2 = 'tote_2'
    
    bot2 = Sequence([])
    tote2 = Sequence([])
    bot2.add_state(a.Asset(id=b2,x=2325,y=0,z=-4342))
    bot2.add_duration(6.5)
    bot2.add_state(a.Asset(id=b2,x=2325,y=0,z=-4342))
    bot2.add_duration(3)
    bot2.add_state(a.Asset(id=b2,x=1670,y=0,z=-4342))
    bot2.add_duration(22)
    bot2.add_state(a.Asset(id=b2,x=1670,y=0,z=-4342))
    bot2.add_duration(8)
    bot2.add_state(a.Asset(id=b2,x=335,y=0,z=-3390))
    bot2.add_duration(2)
    bot2.add_state(a.Asset(id=b2,x=180,y=0,z=-3390))

    tote2.add_state(a.Asset(id=t2,x=2552.86,y=80,z=-4205.26))
    tote2.add_duration(3)
    tote2.add_state(a.Asset(id=t2,x=2552.86,y=80,z=-4205.26))
    tote2.add_duration(3.5)
    tote2.add_state(a.Asset(id=t2,x=2325+50,y=h2,z=-4342+50))
    tote2.add_duration(3)
    tote2.add_state(a.Asset(id=t2,x=1670+50,y=h2,z=-4342+50))
    tote2.add_duration(22)
    tote2.add_state(a.Asset(id=t2,x=1670+50,y=h2,z=-4342+50))
    tote2.add_duration(8)
    tote2.add_state(a.Asset(id=t2,x=335+50,y=h2,z=-3390+50))
    tote2.add_duration(2)
    tote2.add_state(a.Asset(id=t2,x=180+50,y=h2,z=-3390+50))

    seqs.append(bot2)
    seqs.append(tote2)


    b3 = 'bot_3'
    t3 = 'tote_3'
    
    bot3 = Sequence([])
    tote3 = Sequence([])
    bot3.add_state(a.Asset(id=b3,x=110,y=0,z=-400))
    bot3.add_duration(6)
    bot3.add_state(a.Asset(id=b3,x=110,y=0,z=-400))
    bot3.add_duration(10)
    bot3.add_state(a.Asset(id=b3,x=1350,y=0,z=-590))
    bot3.add_duration(10)
    bot3.add_state(a.Asset(id=b3,x=2530,y=0,z=-590))
    bot3.add_duration(10)
    bot3.add_state(a.Asset(id=b3,x=1350,y=0,z=-590))
    bot3.add_duration(10)
    bot3.add_state(a.Asset(id=b3,x=110,y=0,z=-400))
    bot3.add_duration(10)
    bot3.add_state(a.Asset(id=b3,x=110,y=0,z=-400))

    tote3.add_state(a.Asset(id=t3,x=110+50,y=h2,z=-400+50))
    tote3.add_duration(6)
    tote3.add_state(a.Asset(id=t3,x=110+50,y=h2,z=-400+50))
    tote3.add_duration(10)
    tote3.add_state(a.Asset(id=t3,x=1350+50,y=h2,z=-590+50))
    tote3.add_duration(10)
    tote3.add_state(a.Asset(id=t3,x=2530+50,y=h2,z=-590+50))
    tote3.add_duration(10)
    tote3.add_state(a.Asset(id=t3,x=1350+50,y=h2,z=-590+50))
    tote3.add_duration(10)
    tote3.add_state(a.Asset(id=t3,x=110+50,y=h2,z=-400+50))
    tote3.add_duration(6)
    tote3.add_state(a.Asset(id=t3,x=110+50,y=h2,z=-400+50))
    seqs.append(bot3)
    seqs.append(tote3)


    runAsGroup(seqs,client)


def oscillate(client):
    arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805)
    arm.liveUpdate(client)
    # arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805,rot_y=90)
    # arm.liveUpdate(client)
    angle = 90
    originX,originZ = (arm.x,arm.z)
    rads = math.radians(angle)
    
    offsetX, offsetZ = (150,300)
   
    time.sleep(2)
    
    for i in range(0,angle):
        rads = math.radians(i)
        rotatedX = math.cos(rads) * (arm.x-offsetX) - math.sin(rads) * (arm.z - offsetZ) + originX
        rotatedZ = math.cos(rads) * (arm.x-offsetX) + math.sin(rads) * (arm.z - offsetZ) + originZ
        arm = a.Asset(id='kuka_arm1',x=rotatedX,y=-42,z=rotatedZ,rot_y= i)
        arm.liveUpdate(client)
        time.sleep(.05)

def tempSpikeDemo(client):
    seqs = []
    name = 'boiler_1'
    x,y,z =(-1300,0,-2800)
    rot_x =-90
    boiler = Sequence([])
    boiler.add_state(a.Asset(id=name,x=x,y=y,z=z,temp=25,rot_x=rot_x))
    boiler.add_duration(1)
    boiler.add_state(a.Asset(id=name,x=x,y=y,z=z,temp=60,rot_x=rot_x))
    boiler.add_duration(1)
    boiler.add_state(a.Asset(id=name,x=x,y=y,z=z,temp=48,rot_x=rot_x))
    boiler.add_duration(2)
    boiler.add_state(a.Asset(id=name,x=x,y=y,z=z,temp=125,rot_x=rot_x))
    boiler.add_duration(.1)
    boiler.add_state(a.Asset(id=name,x=x,y=y,z=z,temp=25,rot_x=rot_x))
    seqs.append(boiler)
    boiler.runSolo(client)

def followLine(client):
    seqs = []
    subName = 'bot_1'
    height = 0
    points = [
        [0,0],
        [1000,0],
        [1000,1000],
        [0,1000]
    ]
    bot_1 = Sequence([])
    for point in points:
        bot_1.add_state(a.Asset(id=subName,x=point[0],y=height,z=point[1]))
        bot_1.add_duration(3.5) # add duration based on dist
    bot_1.add_state(a.Asset(id=subName,x=points[-1][0],y=height,z=points[-1][1]))
    bot_1.runSolo(client)