
import time

#constants
CYCLE_TIME = 0.1 # in seconds
START_TIME = time.perf_counter()


def getTime():
    return time.perf_counter() - START_TIME

def calc_val(start_val, end_val, start_time, duration):
    ##print(getTime())
    if(start_time <= getTime() and start_time+duration >= getTime()):
        frac = getTime()-start_time
        delta = ((end_val-start_val)*frac)
        return round(start_val+delta,2)
    elif(start_time > getTime()):
        return start_val
    else:
        return end_val



def animate():
    while (getTime()<3):
        print(calc_val(0,1.0,1.0,1))
        time.sleep(CYCLE_TIME)

animate()



