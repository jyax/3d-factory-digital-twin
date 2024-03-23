from changes import *
import asset as a





def testMain(client):
    s = Sequence([])

    # for i in range(4):
    #     s.add_state('2')

    s.add_state(a.Asset(rot_x=0))
    s.add_state(a.Asset(rot_x=180))
    s.add_state(a.Asset(rot_x=0))
    s.add_state(a.Asset(rot_x=-180))

    s.add_duration(5)
    s.add_duration(5)
    s.add_duration(5)

    s.runSolo(client)
