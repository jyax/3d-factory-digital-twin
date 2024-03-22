from changes import *




s = Sequence([])

for i in range(4):
    s.add_state('2')

s.add_duration(2)
s.add_duration(3)
s.add_duration(2)

s.run()