import tkinter as tk
from tkinter import ttk
import json
from asset import Asset
from PIL import Image, ImageTk


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
		self.config(bg=SIDEBAR)
		
		
		
		def toggle():
			global SERVERLESS
			SERVERLESS = not SERVERLESS
			if SERVERLESS:
				target.config(text='localhost:8083')
			else:
				target.config(text='SERVER_IP_HERE:8083')
			

		server_toggle = tk.Button(self, text='Toggle Server',command=toggle)
		server_toggle.config(bg=PANE,fg='white')
		server_toggle.pack(side= 'left',padx=5,pady=2)
		
		target = tk.Label(self,text='localhost:8083',bg=TEXTBOX,fg='white',width=20,justify='left',anchor='w',padx=1)
		target.pack(side= 'left',padx=2,pady=2)
		
		separator = ttk.Separator(self, orient='vertical')#,style={'color':TEXTBOX}
		separator.pack(side='left', fill='y',expand=True,padx=2,pady=4)

  
		AnimationMode = tk.Button(self,text='Animation',bg=PANE,fg='white',width=15)
		AnimationMode.pack(padx=5,pady=5,side='right')

		DemoMode = tk.Button(self,text='Demo Mode',bg=PANE,fg='white',width=10)
		DemoMode.pack(padx=5,pady=5,side='right')
  
		BaseMode = tk.Button(self,text='Live Data',bg=PANE,fg='white',width=10)
		BaseMode.pack(padx=5,pady=5,side='right')
  
		modeLbl = tk.Label(self,text='Mode:',bg=SIDEBAR,fg='white')
		modeLbl.pack(side='right',padx=2,pady=2)
		
		self.pack(side='top',fill='x',pady=2)

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
		
		filepath = './mqtt-emulator/factory_jsons/sample.json'            
		assetList = readIn(filepath)
		
		def createCard(asset,idx):
			card = tk.Frame(self,bd=1,bg=PANE,width=30,height=40,padx=5,pady=5)
			header = tk.Label(card,text=asset.getName(),bg=PANE,fg='white')
			header.grid(row = 0, column=0, columnspan=2)
			idLbl = tk.Label(card,text='Asset ID:',bg=PANE,fg='white')
			idLbl.grid(row = 1, column=0)
			idVal = tk.Label(card,text=str(asset.asDict()['id']),bg=PANE,fg='white')
			idVal.grid(row = 1, column=1)
			statusLbl = tk.Label(card,text='Synced: ',bg=PANE,fg='white')
			statusLbl.grid(row = 2, column=0)
			status = tk.Canvas(card, bg=PANE, width=12, height=12,bd=0, highlightthickness=0)
			status.grid(row=2,column=1,sticky='w',padx=15)
			status.create_image(5, 7, image=SYNCED)
			animateBtn = tk.Button(card,text='Run Animation',bg=NOTIFICATION,fg='white')
			animateBtn.grid(row=3,column=0,columnspan=2)
	
			def on_click(event):
				pass

			card.bind("<Button-1>",on_click)
			
			row = idx // 4
			col = idx % 4
			card.grid(row=row,column=col,padx=5,pady=5,sticky='nw')
			
		for idx, asset in enumerate(assetList):
			createCard(asset,idx)
		
		self.pack(anchor='nw',side='left',pady=5)
				
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
		updateBtn = tk.Button(self,text='Update',bg=NOTIFICATION,fg='white')
		updateBtn.grid(row=row+1,column=0, columnspan=2,sticky='nsew',padx=1,pady=2)
		editAnim = tk.Button(self,text='Edit Animation',bg=NOTIFICATION,fg='white')
		editAnim.grid(row=row+2,column=0, columnspan=2,sticky='nsew',padx=1,pady=1)
	
			
		self.pack(anchor='e',expand=True,fill='y')

class footerBar(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR,bd=1)
		self.createFooter()
  
	def createFooter(self):
		footer= tk.Frame(self.master,relief='raised')
		footer.config(bg=SIDEBAR)

		animateAll = tk.Button(self,text='Animate All',bg=PANE,fg='white',width =12)
		animateAll.pack(padx=5,pady=5,side='left')
 
		resetAll = tk.Button(self,text='Reset/Update All',bg=PANE,fg='white',width=15)
		resetAll.pack(padx=5,pady=5,side='left')

		# separator = ttk.Separator(self, orient='vertical')#,style={'color':TEXTBOX}
		# separator.pack(anchor='w', fill='y',expand=True,padx=2,pady=3)
  
		saveBtn = tk.Button(self,text='Save',bg=PANE,fg='white',width=10)
		saveBtn.pack(padx=5,pady=5,side='right')
  
		laodBtn = tk.Button(self,text='Load from file...',bg=PANE,fg='white',width=16)
		laodBtn.pack(padx=5,pady=5,side='right')

		self.pack(side='bottom',before=browser,expand=True,pady=2,fill='x')
		
     
if __name__ == '__main__':

	root = tk.Tk()
	img = Image.open("./mqtt-emulator/UI/UNSYNCED.png").resize((10,10))
	UNSYNCED = ImageTk.PhotoImage(img)
	img2 = Image.open("./mqtt-emulator/UI/SYNCED.png").resize((10,10))
	SYNCED = ImageTk.PhotoImage(img2)
	root.title("LiveData Simulator")
	scale = 0.5         
	root.geometry(str(int(root.winfo_screenwidth()*scale))+'x'+str(int( root.winfo_screenheight()*scale*1.05)))
	root.config(bg=BACKDROP)
	toolbar()
	
	browser = collectionPane()

	viewframe = itemPane(Asset())
	footer = footerBar()


	root.mainloop()


##TODO LOOK INTO TREEVIEW