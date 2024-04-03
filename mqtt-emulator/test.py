from changes import *
import math
import asset as a





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
    originX,originZ = (2465,-3475)
    rads = math.radians(angle)
   
    # time.sleep(2)
    
    for i in range(0,angle):
        rads = math.radians(i)
        rotatedX = math.cos(rads) * (arm.x-originX) - math.sin(rads) * (arm.z - originZ) + originX
        rotatedZ = math.cos(rads) * (arm.x-originX) + math.sin(rads) * (arm.z - originZ) + originZ

        arm = a.Asset(id='kuka_arm1',x=rotatedX,y=-42,z=rotatedZ,rot_y= i)
        arm.liveUpdate(client)
        time.sleep(.05)

def tempSpikeDemo(client):
    seqs = []
    boiler = Sequence([])
    boiler.add_state(a.Asset(id='boiler_1',x=2350,y=-42,z=-3805,temp=25))
    boiler.add_duration(1)
    boiler.add_state(a.Asset(id='boiler_1',x=2350,y=-42,z=-3805,temp=60))
    boiler.add_duration(1)
    boiler.add_state(a.Asset(id='boiler_1',x=2350,y=-42,z=-3805,temp=48))
    boiler.add_duration(2)
    boiler.add_state(a.Asset(id='boiler_11',x=2350,y=-42,z=-3805,temp=82))
    boiler.add_duration(2)
    boiler.add_state(a.Asset(id='boiler_1',x=2350,y=-42,z=-3805,temp=125))
    seqs.append(boiler)
    runAsGroup(seqs,client)

def followLine(client):
    seqs = []
    subName = 'forklift_1'
    height = 120
    points = [
        [0,0],
        [0,0],
        [0,0]
    ]
    forklift1 = Sequence([])
    for point in points:
        forklift1.add_state(a.Asset(id=subName,x=point[0],y=height,z=point[1]))
        forklift1.add_duration(1) # add duration based on dist
    forklift1.add_state(a.Asset(id=subName,x=points[-1][0],y=height,z=points[-1][1]))
    seqs.append(forklift1)
    runAsGroup(seqs,client)