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
    seqs.append(forklift1)

   
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
    tote1.add_state(a.Asset(id=t1,x=1650,y=h2,z=-1172))
    tote1.add_duration(6)
    

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


    tote2.add_state(a.Asset(id=t2,x=2552.86,y=80,z=-4205.26))
    tote2.add_duration(3)
    tote2.add_state(a.Asset(id=t2,x=2552.86,y=80,z=-4205.26))
    tote2.add_duration(3.5)
    tote2.add_state(a.Asset(id=t2,x=2325+50,y=h2,z=-4342+50))
    tote2.add_duration(3)
    tote2.add_state(a.Asset(id=t2,x=1670+50,y=h2,z=-4342+50))


    seqs.append(bot2)
    seqs.append(tote2)



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