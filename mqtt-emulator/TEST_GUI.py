import tkinter as tk
import Publisher


# Initialize data
data = [0.0] * 20
def main(client):

   
        

    

    def handle_entry_change(event):
        # Retrieve the index of the changed entry
        entry = event.widget
        index = entries.index(entry)

        # Update the corresponding value in the data list
        if data[index] is not float(entry.get()):
            data[index] = float(entry.get())
            Publisher.publish(client, str(data))

    # Create the main window
    root = tk.Tk()
    root.title("Item Positions and Temperatures")

    # Create column headers
    headers = ["Item", "X Position", "Y Position", "Z Position", "Temperature"]
    for col, header_text in enumerate(headers):
        header_label = tk.Label(root, text=header_text)
        header_label.grid(row=0, column=col, padx=5, pady=5)

    # Create a list to store entry widgets
    entries = []

    # Create labels and entry fields for x, y, z positions, and temperature
    for i in range(1, 4):
        label = tk.Label(root, text=f"{i}")
        label.grid(row=i, column=0, padx=5, pady=5)

        x_entry = tk.Entry(root, width=10)
        x_entry.grid(row=i, column=1, padx=5, pady=5)
        x_entry.insert(0, "0.0")
        x_entry.bind("<FocusOut>", handle_entry_change)
        entries.append(x_entry)

        y_entry = tk.Entry(root, width=10)
        y_entry.grid(row=i, column=2, padx=5, pady=5)
        y_entry.insert(0, "0.0")
        y_entry.bind("<FocusOut>", handle_entry_change)
        entries.append(y_entry)

        z_entry = tk.Entry(root, width=10)
        z_entry.grid(row=i, column=3, padx=5, pady=5)
        z_entry.insert(0, "0.0")
        z_entry.bind("<FocusOut>", handle_entry_change)
        entries.append(z_entry)

        temp_entry = tk.Entry(root, width=10)
        temp_entry.grid(row=i, column=4, padx=5, pady=5)
        temp_entry.insert(0, "0.0")
        temp_entry.bind("<FocusOut>", handle_entry_change)
        entries.append(temp_entry)

    root.mainloop()
