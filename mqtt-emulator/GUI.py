import tkinter as tk
from tkinter import ttk, filedialog
import json
from asset import Asset
from PIL import Image, ImageTk
import test


# COLOR SCHEME## -> sampled from Discord
NOTIFICATION = '#7289da'
TEXTBOX = '#424549'
PANE = '#36393e'
SIDEBAR = '#282b30'
BACKDROP = '#1e2124'

SERVERLESS = True

assetList = []
SWITCHABLES = []


SYNCED = None
CLIENT = None



def switchAnimation():
	global SWITCHABLES
	for f in SWITCHABLES:
		f.grid_forget()

	SWITCHABLES[1].grid(row=1, column=0, pady=5)


def switchKeyframe():
	global SWITCHABLES
	for f in SWITCHABLES:
		f.grid_forget()

	SWITCHABLES[3].grid(row=1, column=0, pady=5)


def switchDemo():
	global SWITCHABLES
	for f in SWITCHABLES:
		f.grid_forget()

	SWITCHABLES[2].grid(row=1, column=0, pady=5,sticky='nsew')


def switchBase():
	global SWITCHABLES
	for f in SWITCHABLES:
		f.grid_forget()

	SWITCHABLES[0].grid(row=1, column=0, pady=5,sticky='w')


def loadFromFile():
	filepath = filedialog.askopenfilename()
	# filepath = './mqtt-emulator/factory_jsons/sample.json'
	global assetList
	with open(filepath, "r") as read:
		dictList = json.load(read)

		for asset in dictList:
			temp = Asset()
			temp.UpdateSelf(*asset.values())
			assetList.append(temp)

	# print(assetList[1].asDict())
	# print(assetList[2].asDict())
	# print(assetList[2].getDiffs(assetList[1]))


def resetBtnPressed(client):
	global assetList
	for asset in assetList:
		asset.liveUpdate(client)


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

		server_toggle = tk.Button(self, text='Toggle Server', command=toggle)
		server_toggle.config(bg=PANE, fg='white')
		server_toggle.pack(side='left', padx=5, pady=2)

		target = tk.Label(self, text='localhost:8083', bg=TEXTBOX,
						  fg='white', width=20, justify='left', anchor='w', padx=1)
		target.pack(side='left', padx=2, pady=2)

		# ,style={'color':TEXTBOX}
		separator = ttk.Separator(self, orient='vertical')
		separator.pack(side='left', padx=2, pady=4)

		AnimationMode = tk.Button(
			self, text='Animation', bg=PANE, fg='white', width=15, command=switchAnimation)
		AnimationMode.pack(padx=5, pady=5, side='right')

		DemoMode = tk.Button(self, text='Demo Mode', bg=PANE, fg='white',
							 # ,command=page.set('demo'))
							 width=10, command=switchDemo)
		DemoMode.pack(padx=5, pady=5, side='right')

		BaseMode = tk.Button(self, text='Live Data', bg=PANE,
							 fg='white', width=10, command=switchBase)
		BaseMode.pack(padx=5, pady=5, side='right')

		modeLbl = tk.Label(self, text='Mode:', bg=SIDEBAR, fg='white')
		modeLbl.pack(side='right', padx=2, pady=2)

		self.grid(row=0, column=0, columnspan=2, pady=2)


class collectionPane(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR)
		self.createCards()

	def remove(self):
		self.destroy()

	def createCards(self):
		def readIn(filepath):
			global assetList
			with open(filepath, "r") as read:
				dictList = json.load(read)

				assetList = []
				for asset in dictList:
					temp = Asset()
					temp.UpdateSelf(*asset.values())
					assetList.append(temp)
			return assetList

		filepath = './mqtt-emulator/factory_jsons/sample.json'
		assetList = readIn(filepath)

		def createCard(asset, idx):
			card = tk.Frame(self, bd=1, bg=PANE, width=30,
							height=40, padx=5, pady=5)
			header = tk.Label(card, text=asset.getName(), bg=PANE, fg='white')
			header.grid(row=0, column=0, columnspan=2)
			idLbl = tk.Label(card, text='Asset ID:', bg=PANE, fg='white')
			idLbl.grid(row=1, column=0)
			idVal = tk.Label(card, text=str(
				asset.asDict()['id']), bg=PANE, fg='white')
			idVal.grid(row=1, column=1)
			statusLbl = tk.Label(card, text='Synced: ', bg=PANE, fg='white')
			statusLbl.grid(row=2, column=0)
			status = tk.Canvas(card, bg=PANE, width=12,
							   height=12, bd=0, highlightthickness=0)
			status.grid(row=2, column=1, sticky='w', padx=15)
			status.create_image(5, 7, image=SYNCED)
			animateBtn = tk.Button(
				card, text='Run Animation', bg=NOTIFICATION, fg='white')
			animateBtn.grid(row=3, column=0, columnspan=2)

			def on_click(event):
				pass

			card.bind("<Button-1>", on_click)

			row = idx // 4
			col = idx % 4
			card.grid(row=row, column=col, padx=5, pady=5, sticky='nw')

		for idx, asset in enumerate(assetList):
			createCard(asset, idx)


class itemPane(tk.Frame):
	def __init__(self, asset):
		super().__init__()
		self.asset = Asset()
		self.config(bg=SIDEBAR, bd=1)
		self.createPreview()
		self.createPane()

	def createPreview(self):
		pass

	def createPane(self):
		row = 0
		header = tk.Label(self, text='NAME', bg=SIDEBAR, bd=1,
						  justify='left', anchor='w', fg='white', padx=1, pady=1)
		header.grid(row=0, columnspan=2)
		for key, val in self.asset.asDict().items():
			row += 1
			lbl = tk.Label(self, text=key+':', bg=SIDEBAR, bd=1,
						   justify='left', anchor='w', fg='white', padx=1, pady=1)
			lbl.grid(column=0, row=row, sticky='w')
			entry = tk.Entry(self, bg=TEXTBOX, justify='left',
							 width=10, fg='white')
			entry.insert(0, str(val))
			# entry.bind("<FocusOut>", lambda event, col=col, AssetID=obj,row= row:
			#              handle_entry_change(event,AssetID,row,col))
			entry.grid(column=1, row=row, sticky='w')
		updateBtn = tk.Button(self, text='Update', bg=NOTIFICATION, fg='white')
		updateBtn.grid(row=row+1, column=0, columnspan=2,
					   sticky='nsew', padx=2, pady=2)
		editAnim = tk.Button(self, text='Edit Animation',
							 bg=NOTIFICATION, fg='white', command=switchKeyframe)
		editAnim.grid(row=row+2, column=0, columnspan=2,
					  sticky='nsew', padx=2, pady=1)


class footerBar(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR, bd=1)
		self.createFooter()

	def createFooter(self):

		animateAll = tk.Button(self, text='Animate All',
							   bg=PANE, fg='white', width=12)
		animateAll.pack(padx=5, pady=5, side='left')

		resetAll = tk.Button(self, text='Reset/Update All', bg=PANE, fg='white',
							 width=15, command=lambda client=CLIENT: resetBtnPressed(client))
		resetAll.pack(padx=5, pady=5, side='left')

		# separator = ttk.Separator(self, orient='vertical')#,style={'color':TEXTBOX}
		# separator.pack(anchor='w', fill='y',expand=True,padx=2,pady=3)

		saveBtn = tk.Button(self, text='Save', bg=PANE, fg='white', width=10)
		saveBtn.pack(padx=5, pady=5, side='right')

		loadBtn = tk.Button(self, text='Load from file...',
							bg=PANE, fg='white', width=16, command=loadFromFile)
		loadBtn.pack(padx=5, pady=5, side='right')


class itemView(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR, bd=1)
		self.createViewer()

	def createViewer(self):
		global assetList
		columns = list(assetList[0].asDict().keys())

		style = ttk.Style(self)
		style.configure("Treeview",bg=SIDEBAR,fg='white')
		view = ttk.Treeview(self, columns=columns, show='headings')
		for column in view["columns"]:
			view.column(column, stretch=False, width=50)
		for column in columns:
			view.heading(column, text=column)
		for asset in assetList:
			view.insert('', 'end', values=asset.asDict().values())

		view.pack(side='left')


class demoMode(tk.Frame):
	def __init__(self):
		super().__init__()
		self.config(bg=SIDEBAR, bd=1)
		self.createButtons()

	def createButtons(self):
		button1= tk.Button(self,text='Temp Demo',bg=PANE,fg='white',height=5,width=10, command=lambda client=CLIENT: test.tempSpikeDemo(client))
		button1.pack(side='left',padx=5)

		button2= tk.Button(self,text='Factory Demo',bg=PANE,fg='white',height=5,width=10, command=lambda client=CLIENT: test.testMain(client))
		button2.pack(side='left',padx=5)

		button3= tk.Button(self,text='Follow Line',bg=PANE,fg='white',height=5,width=10, command=lambda client=CLIENT: test.followLine(client))
		button3.pack(side='left',padx=5)

		button4= tk.Button(self,text='Oscillate',bg=PANE,fg='white',height=5,width=10, command=lambda client=CLIENT: test.oscillate(client))
		button4.pack(side='left',padx=5)        


class editKeyframe(tk.Frame):
	def __init__(self,id):
		super().__init__()
		self.config(bg=BACKDROP, bd=1)
		self.id = id
		self.sequence = None
	
		self.renderStates()
  
  
	def createPane(self,state,num):
		pane = tk.Frame(self,bg=SIDEBAR)
		row = 0
		header = tk.Label(pane, text=state.getName(), bg=SIDEBAR, bd=1,
						  justify='left', anchor='w', fg='white', padx=1, pady=1)
		header.grid(row=0, columnspan=2)

		entries2asset = []

		def handle_entry_change(event):
			_asDict =[]
			for attr in entries2asset:
				_asDict.append(attr.event.get())
		

		for key, val in state.asDict().items():
			row += 1
			lbl = tk.Label(pane, text=key+':', bg=SIDEBAR, bd=1,
						   justify='left', anchor='w', fg='white', padx=1, pady=1)
			lbl.grid(column=0, row=row, sticky='w')
			entry = tk.Entry(pane, bg=TEXTBOX, justify='left',
							 width=10, fg='white')
			entry.insert(0, str(val))
			entries2asset.append(entry)
			# entry.bind("<KeyRelease>",lambda event, idx=idx:
            #             handle_entry_change(event,idx))
			entry.grid(column=1, row=row, sticky='w')
		stateNum = tk.Label(pane, text='State: '+str(num), bg=SIDEBAR, bd=1,
						  justify='left', anchor='w', fg='white', padx=1, pady=1)
		stateNum.grid(row=row+1, columnspan=2)
		
		return pane


	def createDurCtrl(self):
		frm = tk.Frame(self,bg=BACKDROP)
		arrow = tk.Canvas(frm,bg=BACKDROP,width=20,height=20)
		duration = tk.Entry(frm,bg=TEXTBOX,fg='white',width=6)
		arrow.grid(row=0,column=0)
		duration.grid(row=1,column=0)
		return frm


	def renderStates(self):
		global assetList
		for asset in assetList:
			if asset.getID() == self.id:
				self.asset = asset
    
		col=0
		schedule = [Asset(),Asset()]
		for num,state in enumerate(schedule):
			self.createPane(state,num).grid(row=1,column=col)
			if num < len(schedule)-1:
				self.createDurCtrl().grid(row=1,column=col+1,padx=2)
			col+=2
	

  


def main(client):
	global CLIENT
	global SWITCHABLES
	CLIENT = client
	global SYNCED
	root = tk.Tk()
	page = tk.StringVar(value='animate')
	img = Image.open("./mqtt-emulator/UI/UNSYNCED.png").resize((10, 10))
	UNSYNCED = ImageTk.PhotoImage(img)
	img2 = Image.open("./mqtt-emulator/UI/SYNCED.png").resize((10, 10))
	SYNCED = ImageTk.PhotoImage(img2)
	root.title("LiveData Simulator")
	scale = 0.5
	root.geometry(str(600)+'x'+str(425))
	root.config(bg=BACKDROP)

	browser = collectionPane()
	viewer = itemView()
	demo = demoMode()
	keyframe = editKeyframe('0')

	toolbar()

	SWITCHABLES = [viewer, browser, demo,keyframe]

	viewframe = itemPane(Asset()).grid(row=1, column=1, sticky='e')
	footer = footerBar()
	footer.grid(row=2, column=0, columnspan=2, sticky='sew')

	root.mainloop()



