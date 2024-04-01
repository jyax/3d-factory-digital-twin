from changes import *
import asset as a





def testMain(client):
    s = Sequence([])
    s2 = Sequence([])

    # for i in range(4):
    #     s.add_state('2')

    s.add_state(a.Asset(x=2450,y=170,z=-3500,rot_y=0))
    s.add_state(a.Asset(x=2450,y=170,z=-3500,rot_y=180))
    s.add_state(a.Asset(x=2450,y=170,z=-3500,rot_y=0))
    s.add_state(a.Asset(x=2450,y=170,z=-3500,rot_y=180))

    s.add_duration(5)
    s.add_duration(5)
    s.add_duration(5)

    s2.add_state(a.Asset(id=1,x=2450,y=170,z=-3500,rot_y=0))
    s2.add_state(a.Asset(id=1,x=2450,y=170,z=-3500,rot_y=180))
    s2.add_state(a.Asset(id=1,x=2450,y=170,z=-3500,rot_y=0))
    s2.add_state(a.Asset(id=1,x=2450,y=170,z=-3500,rot_y=180))

    s2.add_duration(5)
    s2.add_duration(5)
    s2.add_duration(5)

    seqs = [s,s2]

    runAsGroup(seqs,client)
