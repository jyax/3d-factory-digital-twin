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
    with open(filepath, "r") as read: 
        dictList = json.load(read)
    
    for i in dictList:
        assetList.append(Asset(i['id'],i['x'],i['y'],i['z'],i['temp']))
   

entries = []

def main(client):

    readIn('./mqtt-emulator/sample.json')
    
    def handle_entry_change(event,AssetID,row,col):
            unpacked = AssetID.unpacked()
            index =(row-1)*len(unpacked)+col
            unpacked[col] = entries[index].get()
            AssetID.UpdateSelf(*unpacked)
            save(assetList,'./mqtt-emulator/sample.json')


    # Create the main window
    root = tk.Tk()
    root.title("Item Positions and Temperatures")


    # Create labels and entry fields for x, y, z positions, and temperature
    attributes = ["Asset ID", "X Position", "Y Position", "Z Position", "Temperature"]
    
    for row, obj in enumerate(assetList):
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
        button = tk.Button(text='Update',command=lambda obj=obj, client=client, assetList=assetList:obj.liveUpdate(client))
        button.grid(row=row, column=len(attributes)+1,padx=5,pady=5,)
       
            
    
             

    root.mainloop()
