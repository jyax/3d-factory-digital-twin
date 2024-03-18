
import time
import Publisher as pub
import json


#constants
CYCLE_TIME = 0.05 # in seconds
START_TIME = time.perf_counter()

# GETTER for current time
def getTime():
    return time.perf_counter() - START_TIME


# Calculates what a value should be between 2 values and times
def calc_val(start_val, end_val, start_time, duration):
    #print(getTime())
    if(start_time <= getTime() and start_time+duration >= getTime()):
        frac = getTime()-start_time
        delta = ((end_val-start_val)*frac)/duration
        return round(start_val+delta,2)
    elif(start_time > getTime()):
        return start_val
    else:
        return end_val

class Asset:

    def __init__(self,id='0',x=0,y=0,z=0,rot_x=0,rot_y=0,rot_z=0,temp=25,voltage=12,qty=0,qty_MAX=10):
       
        self.name = 'Thing'
        self.last_updated = {}
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
            

    def animateSelf(self, goalstate, start_time, duration):
        
        curr = self.asDict()
        vals = list(curr.values())
        keys =list(curr.keys())
        end = goalstate.asDict()

        for i in range(1,len(keys)):
            curr.update({keys[i]:calc_val(vals[i],end[keys[i]],start_time,duration/CYCLE_TIME)})
            # print(calc_val(vals[i],end[keys[i]],start_time,duration))
        self.UpdateSelf((curr.values()))
        
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
        
def animate3cube(client):

    TestItem = Asset("1",0,0,0,25.0)
    TestItemFinal = Asset("1",0,3,0,25.0)
    TestItem2 = Asset("2",0,0,0,25.0)
    TestItemFinal2 = Asset("2",3,0,0,25.0)
    TestItem3 = Asset("0",0,0,0,25.0)
    TestItemFinal3 = Asset("0",0,0,3,25.0)

    while (getTime()<10):
        time.sleep(CYCLE_TIME)
        # print(TestItem.asDict())
        TestItem.animateSelf(TestItemFinal,0,10)
        pub.publish(client,json.dumps(TestItem.asDict()))
        
        TestItem2.animateSelf(TestItemFinal2,0,10)
        pub.publish(client,json.dumps(TestItem2.asDict()))

        TestItem3.animateSelf(TestItemFinal3,0,10)
        pub.publish(client,json.dumps(TestItem3.asDict()))

def tempSpikeDemo(client):
    TestItem = Asset("0",0,0,0,0)
    TestItemFinal = Asset("0",0,3,0,105.0)

    while (getTime()<6):
        time.sleep(CYCLE_TIME)
       
        TestItem.animateSelf(TestItemFinal,0,2)
        TestItem.liveUpdate(client)

def animateLoop(client,animated_objects):
    threshold = 30
    while(getTime() < threshold):
        for change_obj in animated_objects:
            for change in change_obj.get_states():
                change.animate(client)
                
                
                
