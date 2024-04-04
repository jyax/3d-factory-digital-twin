import time

class Sequence:
	def __init__(self,states):
		self.states = []
		self.durations = []
		self.start_times = [0]
		
	def add_state(self,state):
		self.states.append(state)
		
	def delete_state(self, index):
		self.states.pop(index)
	
	def get_states(self):
		return self.states
	
	def add_duration(self,duration):
		self.durations.append(duration)
		
	def delete_duration(self, index):
		self.durations.pop(index)
	
	def get_durations(self):
		return self.durations

	def updateState(self,index,new_state):
		self.states[index] = new_state

	def updateDuration(self,index,new_dur):
		self.durations[index] = new_dur

	def runSolo(self,client):
		
		#constants
		CYCLE_TIME = .07 # in seconds
		START_TIME = time.perf_counter()
		LIMIT = sum(self.durations)

		# GETTER for current time
		def getTime():
			return time.perf_counter() - START_TIME

		
		total = 0
		for t in self.durations:
			total +=t
			self.start_times.append(total)

		# self.states[0].liveUpdate(client)
	   
		while getTime() < LIMIT:
			for idx in range(0,len(self.states)-1):
				if(idx < len(self.durations)-1):
					while self.start_times[idx] <= getTime() and getTime() < self.start_times[idx + 1]:
						print('Animate OBJ',idx,'&',idx+1,'| Time:',getTime())
						self.states[idx].animateSelf(self.states[idx+1],self.start_times[idx],self.durations[idx],getTime())
						self.states[idx].liveUpdate(client)
						time.sleep(CYCLE_TIME)
				else:
					while self.start_times[idx] <= getTime() and getTime() < LIMIT:
						print('Animate OBJ',idx,'&',idx+1,'| Time:',getTime())
						self.states[idx].animateSelf(self.states[len(self.states)-1],self.start_times[idx],self.durations[idx],getTime())
						self.states[idx].liveUpdate(client)
						time.sleep(CYCLE_TIME)
					
		self.states[len(self.states)-1].liveUpdate(client)

	
def runAsGroup(sequences,client):

	#constants
		CYCLE_TIME = .07 # in seconds
		START_TIME = time.perf_counter()
		LIMIT = 90 # seconds

		# GETTER for current time
		def getTime():
			return time.perf_counter() - START_TIME


		for seq in sequences:
			start_times = [0]
			total = 0
			for t in seq.durations:
				total +=t
				seq.start_times.append(total)


	   
		while getTime() < LIMIT:
			for seq in sequences:
				if sum(seq.durations) < getTime():
					continue
				for idx in range(0,len(seq.states)-1):
					if(idx < len(seq.durations)-1):
						if seq.start_times[idx] <= getTime() and getTime() < seq.start_times[idx + 1]:
							seq.states[idx].animateSelf(seq.states[idx+1],seq.start_times[idx],seq.durations[idx],getTime())
							seq.states[idx].liveUpdate(client)
							
					else:
						if seq.start_times[idx] <= getTime() and getTime() < LIMIT:
							seq.states[idx].animateSelf(seq.states[len(seq.states)-1],seq.start_times[idx],seq.durations[idx],getTime())
							seq.states[idx].liveUpdate(client)

			time.sleep(CYCLE_TIME)		
					
		