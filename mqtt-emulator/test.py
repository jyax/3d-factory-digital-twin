from changes import *
import asset as a





def testMain(client):
    s = Sequence([])

    # for i in range(4):
    #     s.add_state('2')

    s.add_state(a.Asset(x=0))
    s.add_state(a.Asset(x=5))
    s.add_state(a.Asset(x=0))
    s.add_state(a.Asset(x=5))

    s.add_duration(2)
    s.add_duration(3)
    s.add_duration(2)

    s.runSolo(client)
