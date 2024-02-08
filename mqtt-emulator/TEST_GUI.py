import tkinter as tk
import Publisher
from asset import Asset

# Initialize data
# TODO change from global to item specific and create topic subscribers
data = [0.0] *4

TestItem1 = Asset("0001",0,12.0,0,25.0)
TestItem2 = Asset("0002",0,12.0,0,25.0)
TestItem3 = Asset("0003",0,12.0,0,25.0)


assetList = [TestItem1,TestItem2, TestItem3]

def main(client):
    
    def handle_entry_change(event):
        # Retrieve the index of the changed entry
        entry = event.widget
        index = entries.index(entry)

        # Update the corresponding value in the data list
        if data[index] is not float(entry.get()):
            data[index] = float(entry.get())

            TestItem1.UpdateSelf(*entries)
            Publisher.publish(client, TestItem1.toMsg())

    # Create the main window
    root = tk.Tk()
    root.title("Item Positions and Temperatures")

    # Create column headers
    attributes = ["Asset ID", "X Position", "Y Position", "Z Position", "Temperature"]
    for col, header_text in enumerate(attributes):
        header_label = tk.Label(root, text=header_text)
        header_label.grid(row=0, column=col, padx=5, pady=5)

    # Create a list to store entry widgets
    entries = []

    # Create labels and entry fields for x, y, z positions, and temperature
    
    for row, AssetID in enumerate(assetList):
        row+=1 #offset for column headers 
        
        unpacked = [AssetID.id,AssetID.x, AssetID.y, AssetID.z, AssetID.temp]

        for col, attribute in enumerate(unpacked):
            entry = tk.Entry(root, width=10)
            entry.grid(row=row, column=col, padx=5, pady=5)
            entry.insert(0, str(attribute))
            entry.bind("<FocusOut>", handle_entry_change)
            entries.append(entry)


    root.mainloop()
