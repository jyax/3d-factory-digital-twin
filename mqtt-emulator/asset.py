

import Publisher as pub
import json
   
def calcVal(start_val, end_val, start_time, duration, curr_time):
    delta =  end_val-start_val
    fraction = (curr_time-start_time)/(duration*10)
    return round(start_val + (delta*fraction),3)


    
class Asset:

    def __init__(self,id='0',x=0,y=0,z=0,rot_x=0,rot_y=0,rot_z=0,temp=25,voltage=12,qty=0,qty_MAX=10):
       
        self.name = 'Thing'
        self.last_updated = {}
        self.schedule =[]
        
        ## Unique Asset ID
        self.id = id

        #Position data in inches
        self.x = x
        self.y = y
        self.z = z
        
        #Rotation values
        self.rot_x = rot_x
        self.rot_y = rot_y
        self.rot_z = rot_z

        # Tempurature in celcius
        self.temp = temp
        
        #Voltage
        self.voltage = voltage
        
        # Inventory units
        self.qty = qty
        
        #Capacity
        self.qty_MAX = qty_MAX
        
        
    def setName(self,str):
        self.name = str
        
    def getName(self):
        return self.name
    
    def getSchedule(self):
        return self.schedule
    
    def getID(self):
        return self.id
        
    def getLastUpdated(self):
        return self.last_updated
            
    def UpdateSelf(self,id,x,y,z,rot_x,rot_y,rot_z,temp,voltage,qty,qty_MAX):
        self.id = id
        self.x = x
        self.y = y
        self.z = z
        self.rot_x = rot_x
        self.rot_y = rot_y
        self.rot_z = rot_z
        self.temp = temp
        self.voltage = voltage
        self.qty = qty
        self.qty_MAX = qty_MAX
    
    
    def toMsg(self):
        out =''
        for attr in self.asDict().values():
            out += attr+', '
        
        return out
    
    def unpacked(self):
        return [self.id,self.x, self.y, self.z, self.rot_x, self.rot_y, self.rot_z, self.temp,self.voltage,self.qty,self.qty_MAX]
    
    def asDict(self):
        attributes = ['id','x','y','z','rot_x','rot_y','rot_z','temp','voltage','qty','qty_MAX']
        vals = self.unpacked()
        return dict(zip(attributes,vals))
        
    def liveUpdate(self,client):
        pub.publish(client,json.dumps(self.asDict()))
        self.last_updated = self.asDict()
        #TODO get diff here before publish
            

    def animateSelf(self, goalstate, start_time, duration,curr_time):
        
        curr = self.asDict()
        vals = list(curr.values())
        keys =list(curr.keys())
        end = goalstate.asDict()

        for i in range(1,len(keys)):
            curr.update({keys[i]:calcVal(vals[i],end[keys[i]],start_time,duration,curr_time)})
     
        self.UpdateSelf(*(curr.values()))
        
    def getDiffs(self, other):
        if self.id != other.getID():
            return
        
        delta = {'id':self.id}
        for key in self.asDict().keys():
            if self.asDict()[key] == other.asDict()[key]:
                pass
            else:
                delta.update({str(key):other.asDict()[key]})
                
        return delta
    
    def isSynced(self):
        return self.last_updated.getDiffs(self) == {'id':self.id} 
        
