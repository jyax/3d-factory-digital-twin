import tkinter as tk
import json
import Publisher
from asset import Asset

assetList = []

def save(data, filepath):
    parse = []
    for item in data:
        parse.append(item.asDict())

    parsed = json.dumps(parse)
    with open(filepath, "w") as outfile:
        outfile.write(parsed)

def readIn(filepath):
    global assetList
    with open(filepath, "r") as read: 
        dictList = json.load(read)

        for asset in dictList:
            temp =Asset()
            temp.UpdateSelf(*asset.values())
            assetList.append(temp)

        
def updateAll(client,assetList):
    for obj in assetList:
        obj.liveUpdate(client)

def addRow(assetList):
    assetList.append(Asset())


entries = []

def main():
    global assetList
    filepath = './mqtt-emulator/sample.json'
   
    readIn(filepath)

    
    def handle_entry_change(event,AssetID,row,col):
            unpacked = AssetID.unpacked()
            index =(row-1)*len(unpacked)+col
            unpacked[col] = entries[index].get()
            AssetID.UpdateSelf(*unpacked)


    # Create the main window
    root = tk.Tk()
    root.title("Item Positions and Temperatures")


    # Create labels and entry fields for x, y, z positions, and temperature
    attributes = ['id','x','y','z','rot_x','rot_y','rot_z','temp','voltage','qty','qty_MAX']
    nextAttr = attributes
    
    row =0
    for obj in assetList:
        row+=1 #offset for column headers 
        
        for col, attribute in enumerate(obj.asDict().values()):
            header_label = tk.Label(root, text=attributes[col])
            header_label.grid(row=0, column=col, padx=5, pady=5)
            
            entry = tk.Entry(width=10)
            entry.grid(row=row, column=col, padx=5, pady=5)
            entry.insert(0, str(attribute))
            entries.append(entry)
            entry.bind("<FocusOut>", lambda event, col=col, AssetID=obj,row= row:
                        handle_entry_change(event,AssetID,row,col))
            
    #     button = tk.Button(text='Update',command=lambda obj=obj, client=client:obj.liveUpdate(client))
    #     button.grid(row=row, column=len(attributes)+1,padx=5,pady=5,)

    # button= tk.Button(text='Save', command=lambda filepath=filepath, assetList=assetList:save(assetList,filepath))
    # button.grid(row=len(assetList)+2,column=0)
    
    # button= tk.Button(text='Update All', command=lambda client=client, assetList=assetList:updateAll(client,assetList))
    # button.grid(row=len(assetList)+2,column=1)

    # button= tk.Button(text='Add Row', command=lambda assetList=assetList: addRow(assetList))
    # button.grid(row=len(assetList)+2,column=2)

       
             

    root.mainloop()


# if __name__ == '__main__':
#     filepath = './mqtt-emulator/sample.json'
#     main()