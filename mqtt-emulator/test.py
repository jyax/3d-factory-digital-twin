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
    forklift1.add_state(a.Asset(id='forklift1',x=1162,y=120,z=-2013))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id='forklift1',x=1162,y=120,z=-3775/2))
    forklift1.add_duration(6)
    forklift1.add_state(a.Asset(id='forklift1',x=1162,y=120,z=-3775))
    forklift1.add_duration(1)
    forklift1.add_state(a.Asset(id='forklift1',x=1162,y=120,z=-3775,rot_y=-90))
    forklift1.add_duration(4)
    forklift1.add_state(a.Asset(id='forklift1',x=366,y=120,z=-3775,rot_y=-90))
    seqs.append(forklift1)

    # kuka_arm1 = Sequence([])
    # kuka_arm1.add_state(a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805,temp=25))
    # kuka_arm1.add_duration(5)
    # kuka_arm1.add_state(a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805,temp=125))
    # # kuka_arm1.add_state(a.Asset(id='kuka_arm1',x=1300,y=-42,z=-1935))
    # # kuka_arm1.add_duration(2)
    # # kuka_arm1.add_state(a.Asset(id='kuka_arm1',x=1300,y=-42,z=-1935,rot_y=-180))
    # seqs.append(kuka_arm1)

   

    

    runAsGroup(seqs,client)

def oscillate(client):
    arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805)
    arm.liveUpdate(client)
    # arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805,rot_y=90)
    # arm.liveUpdate(client)
    angle = 90
    originX,originZ = (arm.x-200,arm.z+420)
    rads = math.radians(angle)
   
    time.sleep(2)
    
    for i in range(0,angle):
        rads = math.radians(i)
        rotatedX = math.cos(rads) * (arm.x-originX) - math.sin(rads) * (arm.z - originZ) + originX
        rotatedZ = math.cos(rads) * (arm.x-originX) + math.sin(rads) * (arm.z - originZ) + originZ

        arm = a.Asset(id='kuka_arm1',x=rotatedX,y=-42,z=rotatedZ,rot_y= i)
        arm.liveUpdate(client)
        time.sleep(.05)
# def oscillate(client):
#     arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805)
#     arm.liveUpdate(client)
#     # arm = a.Asset(id='kuka_arm1',x=2350,y=-42,z=-3805,rot_y=90)
#     # arm.liveUpdate(client)
#     angle = 90
#     originX,originZ = (2465,-3475)
#     rads = math.radians(angle)
   
#     # time.sleep(2)
    
#     for i in range(0,angle):
#         rads = math.radians(i)
#         rotatedX = math.cos(rads) * (arm.x-originX) - math.sin(rads) * (arm.z - originZ) + originX
#         rotatedZ = math.cos(rads) * (arm.x-originX) + math.sin(rads) * (arm.z - originZ) + originZ

#         arm = a.Asset(id='kuka_arm1',x=rotatedX,y=-42,z=rotatedZ,rot_y= i)
#         arm.liveUpdate(client)
#         time.sleep(.05)