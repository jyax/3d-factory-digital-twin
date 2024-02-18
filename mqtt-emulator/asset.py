
import time

#constants
CYCLE_TIME = 0.25 # in seconds
START_TIME = time.perf_counter()


def getTime():
    return time.perf_counter() - START_TIME

def calc_val(start_val, end_val, start_time, duration):
    ##print(getTime())
    if(start_time <= getTime() and start_time+duration >= getTime()):
        frac = getTime()-start_time
        delta = ((end_val-start_val)*frac)
        return round(start_val+delta,2)
    elif(start_time > getTime()):
        return start_val
    else:
        return end_val







class Asset:

    def __init__(self,id,x,y,z,temp):
       
        ## Unique Asset ID
        self.id = "FFFFF"

        #Position data in inches
        self.x = 0.0
        self.y = 12.0
        self.z = 0.0

        # Tempurature in celcius
        self.temp = 25.0

    def UpdateSelf(self,id,x,y,z,temp):
        self.id = id
        self.x = x
        self.y = y
        self.z = z
        self.temp = temp

    def toMsg(self):
        return str(self.id)+","+ str(self.x)+","+ str(self.y)+","+ str(self.z)+","+str(self.temp)
    
    def unpacked(self):
        return [self.id,self.x, self.y, self.z, self.temp]
    
    def asDict(self):
        attributes = ['id','x','y','z','temp']
        vals = self.unpacked()
        return dict(zip(attributes,vals))
        


    
    def animateSelf(self, goalstate, start_time, duration):
        curr = self.asDict()
        vals = list(curr.values())
        keys =list(curr.keys())
        end = goalstate.asDict()

        for i in range(1,len(keys)):
            curr.update({keys[i]:calc_val(vals[i],end[keys[i]],start_time,duration)})
        
        self.UpdateSelf(curr['id'], curr['x'],curr['y'],curr['z'],curr['temp'])
        print(curr)

def animate():
    TestItem = Asset("00001",0,0,0,25.0)
    TestItemFinal = Asset("00001",10,10,10,25.0)
    while (getTime()<3):
        time.sleep(CYCLE_TIME)
        TestItem.animateSelf(TestItemFinal,0,2)

animate()
