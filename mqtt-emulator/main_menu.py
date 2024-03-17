import tkinter as tk
from tkinter import ttk
import json
from asset import Asset


##COLOR SCHEME## -> from Discord themes
NOTIFICATION = '#7289da'
TEXTBOX = '#424549'	
PANE = '#36393e'	
SIDEBAR = '#282b30'	
BACKDROP = '#1e2124'

SERVERLESS = True

class toolbar(tk.Frame):
	def __init__(self):
		super().__init__()
		
		self.addToolbar()
		
		
	def addToolbar(self):
		toolbar = tk.Frame(self.master,relief='raised')
		toolbar.config(bg=SIDEBAR)
		
		
		
		def toggle():
			global SERVERLESS
			SERVERLESS = not SERVERLESS
			if SERVERLESS:
				target.config(text='localhost:8083')
			else:
				target.config(text='SERVER_IP_HERE:8083')
			

		server_toggle = tk.Button(toolbar, text='Toggle Server',command=toggle)
		server_toggle.config(bg=SIDEBAR,fg='white')
		server_toggle.pack(side= 'left',padx=2,pady=2)
		
		target = tk.Label(toolbar,text='localhost:8083',bg=TEXTBOX,fg='white',width=20,justify='left',anchor='w',padx=1)
		target.pack(side= 'left',padx=2,pady=2)
		
		separator = ttk.Separator(toolbar, orient='vertical')
		separator.pack(expand=True)
		
		toolbar.pack(side='top',fill='x')

class collectionPane(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR)
		self.createCards()
	
	def createCards(self):
		def readIn(filepath):
			global assetList
			with open(filepath, "r") as read: 
				dictList = json.load(read)

				assetList =[]
				for asset in dictList:
					temp =Asset()
					temp.UpdateSelf(*asset.values())
					assetList.append(temp)
			return assetList
		
		filepath = './mqtt-emulator/sample.json'            
		assetList = readIn(filepath)
		
		def createCard(asset,idx):
			card = tk.Frame(self,bd=1,bg=PANE,width=30,height=40,padx=5,pady=5)
			header = tk.Label(card,text='ASSET_ID: '+str(asset.asDict()['id']),bg=PANE,fg='white')
			header.pack(side='top')
			
			def on_click(event):
				pass

			card.bind("<Button-1>",on_click)
			
			row = idx // 4
			col = idx % 4
			card.grid(row=row,column=col,padx=5,pady=5,sticky='nw')
			
		for idx, asset in enumerate(assetList):
			createCard(asset,idx)
			
		self.pack(side='left',anchor='nw')
			
		

class itemPane(tk.Frame):
	def __init__(self,asset):
		super().__init__()
		self.asset = Asset()
		self.config(bg=SIDEBAR,bd=1)
		self.createPreview()
		self.createPane()
		
	def createPreview(self):
		pass
	  
	def createPane(self):
		row = 0
		header = tk.Label(self,text='NAME',bg=SIDEBAR,bd=1,justify='left',anchor='w',fg='white',padx=1,pady=1)
		header.grid(row=0, columnspan=2)
		for  key, val in self.asset.asDict().items():
			row+=1
			lbl = tk.Label(self,text=key+':',bg=SIDEBAR,bd=1,justify='left',anchor='w',fg='white',padx=1,pady=1)
			lbl.grid(column=0,row =row,sticky='w')
			entry = tk.Entry(self,bg=TEXTBOX,justify='left',width=10,fg='white')
			entry.insert(0,str(val))
			# entry.bind("<FocusOut>", lambda event, col=col, AssetID=obj,row= row:
			#              handle_entry_change(event,AssetID,row,col))
			entry.grid(column=1,row=row,sticky='w')
			
		self.pack(side='right',expand=True,anchor='e')

if __name__ == '__main__':

	root = tk.Tk()
	root.title("LiveData Simulator")
	scale = 0.5         
	root.geometry(str(int(root.winfo_screenwidth()*scale))+'x'+str(int( root.winfo_screenheight()*scale)))
	root.config(bg=BACKDROP)
	toolbar()
	collectionPane()
	separator = ttk.Separator(root, orient='vertical')
	separator.pack(expand=True)
	itemPane(Asset())

	root.mainloop()

