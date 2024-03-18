from asset import Asset
import Publisher
import json

# class state:
#     def __init__(self,start_state,end_state,start_time,duration):
#         self.start_state= start_state
#         self.end_state = end_state
#         self.start_time = start_time
#         self.duration = duration
        
#     def get_start_state(self):
#         return self.start_state
    
#     def get_end_state(self):
#         return self.end_state    
    
#     def get_start_time(self):
#         return self.start_time
    
#     def get_duration(self):
#         return self.duration
    
#     def animate(self,client):
#         start = Asset(self.start_state.asDict().values())
#         self.start_state.animateSelf(self.end_state,self.start_time,self.duration)
        
#         Publisher.publish(client, json.dumps(start.getDiffs(self.start_state)))
        
    
class sequence:
    def __init__(self,states):
        self.states = []
        
    def add_state(self,state):
        self.states.append(state)
        
    def delete_state(self, index):
        self.states.pop(index)
    
    def get_states(self):
        return self.states