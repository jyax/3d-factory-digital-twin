# import tkinter as tk
# from Publisher import publish, connect_mqtt
# from asset import Asset

# # Initialize data
# TestItem1 = Asset("0",0,12.0,0,25.0)
# TestItem2 = Asset("1",0,12.0,0,25.0)
# TestItem3 = Asset("2",0,12.0,0,25.0)

# assetList = [TestItem1,TestItem2, TestItem3]
# entries = []

# def main(client):
    
#     def handle_entry_change(event, AssetID, row, col):
#         unpacked = AssetID.unpacked()
#         index = (row-1) * len(unpacked) + col
#         unpacked[col] = entries[index].get()
#         AssetID.UpdateSelf(*unpacked)
#         print(index)

#         publish(client, AssetID.toMsg())

#     # Create the main window
#     root = tk.Tk()
#     root.title("Item Positions and Temperatures")

#     # Create labels and entry fields for x, y, z positions, temperature, and rotation
#     attributes = ["Asset ID", "X Position", "Y Position", "Z Position", "Temperature","Rotation X", "Rotation Y", "Rotation Z",
#                   "Start Time", "Duration","X Position", "Y Position", "Z Position", "Temperature","Rotation X", "Rotation Y", "Rotation Z" ]
#     header_label = tk.Label(root, text=" TO", bg="grey80")
#     header_label.grid(row=0, column=8, padx=5, pady=5, columnspan=2)
#     for row, AssetID in enumerate(assetList):
#         row +=  1 # offset for column headers  

#         for col, attribute in enumerate(AssetID.unpacked() + [0] *  12):  # Extend the unpacked list with zeros for new attributes
#             if col <  5:  # Existing attributes
#                 header_label = tk.Label(root, text=attributes[col],)
#                 header_label.grid(row=0, column=col)
                
#                 entry = tk.Entry(width=10)
#                 entry.grid(row=row, column=col, padx=5, pady=5)
#                 entry.insert(0, str(attribute))
#                 entries.append(entry)
#                 entry.bind("<FocusOut>", lambda event, col=col, AssetID=AssetID, row=row:
#                             handle_entry_change(event, AssetID, row, col))
#             else:  # New attributes
#                 if attributes[col] in ['Start Time', 'Duration']:
#                     frame = tk.Frame(root, bg='light grey', bd=1)  # Create a frame with a border
#                     frame.grid(row=row, column=col, padx=5, pady=5)

#                     header_label = tk.Label(frame, text=attributes[col])
#                     header_label['bg'] = 'light grey'
#                     header_label.pack()

#                     entry = tk.Entry(frame, width=10)
#                     entry.pack()
#                     entry.insert(0, str(attribute))
#                     entries.append(entry)
#                     entry.bind("<FocusOut>", lambda event, col=col, AssetID=AssetID, row=row:
#                                 handle_entry_change(event, AssetID, row, col))
#                 else:
#                     header_label = tk.Label(root, text=attributes[col])
#                     header_label.grid(row=0, column=col, padx=5, pady=5)
#                     entry = tk.Entry(width=10)
#                     entry.grid(row=row, column=col, padx=5, pady=5)
#                     entry.insert(0, str(attribute))
#                     entries.append(entry)
#                     entry.bind("<FocusOut>", lambda event, col=col, AssetID=AssetID, row=row:
#                             handle_entry_change(event, AssetID, row, col))
#     run_button = tk.Button(root, text="Run", command=lambda: run_command(client))
#     run_button.grid(row=len(assetList) +  1, column=9, padx=5, pady=5)

#     add_row_button = tk.Button(root, text="Add Row", command=lambda: add_row_command())
#     add_row_button.grid(row=len(assetList) +  1, column=8, padx=5, pady=5)

#     root.mainloop()

#     def run_command(client):
#     # Define the command for the "Run" button here
#         pass

#     def add_row_command():
#     # Define the command for the "Add Row" button here
#         pass

        


# client = connect_mqtt()
# main(client)
