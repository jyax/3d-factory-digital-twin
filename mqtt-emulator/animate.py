
import time

#constants
CYCLE_TIME = 0.1 # in seconds
START_TIME = time.perf_counter()


def getTime():
    return time.perf_counter() - START_TIME

def calc_val(start_val, end_val, start_time, duration):
    
    if(start_time <= getTime()  and  start_time + duration >= getTime()):
        frac = getTime()-start_time
        delta = ((end_val-start_val)*frac)
        return start_val+delta
    elif start_time > getTime():
        return start_val
    else:
        pass

def animate():
    while getTime()<2:
        print(calc_val(0,1,1,2))
        time.sleep(CYCLE_TIME)

animate()



