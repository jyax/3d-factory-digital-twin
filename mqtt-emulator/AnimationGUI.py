import tkinter as tk
import json
import Publisher
from asset import Asset




TestItem1 = Asset("0",0,12.0,0,25.0)
TestItem2 = Asset("1",0,12.0,0,25.0)
TestItem3 = Asset("2",0,12.0,0,25.0)

assetList = [TestItem1,TestItem2, TestItem3]
entries = []

def main(client):
    
    def handle_entry_change(event,AssetID,row,col):
            unpacked = AssetID.unpacked()
            index =(row-1)*len(unpacked)+col
            unpacked[col] = entries[index].get()
            AssetID.UpdateSelf(*unpacked)


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
        button = tk.Button(text='Update',command=lambda obj=obj, client=client:obj.liveUpdate(client))
        button.grid(row=row, column=len(attributes)+1,padx=5,pady=5,)
       
            
    
             

    root.mainloop()
