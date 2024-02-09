
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



        

