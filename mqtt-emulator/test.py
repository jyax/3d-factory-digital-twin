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

    forklift1 = Sequence([])
    forklift1.add_state(a.Asset(id='forklift_1',x=1162,y=120,z=-2013))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id='forklift_1',x=1162,y=120,z=-3775/2))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id='forklift_1',x=1162,y=120,z=-3775))
    forklift1.add_duration(1)
    forklift1.add_state(a.Asset(id='forklift_1',x=1162,y=120,z=-3775,rot_y=-90))
    forklift1.add_duration(4)
    forklift1.add_state(a.Asset(id='forklift_1',x=366,y=120,z=-3775,rot_y=-90))
    seqs.append(forklift1)


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