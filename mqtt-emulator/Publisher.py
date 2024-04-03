
import random
import GUI
# from asset import animate3cube
from paho.mqtt import client as mqtt_client

import test

###TOGGLE TEST MODES###
#######################
SERVERLESS  =  False###
#######################

if not SERVERLESS:
    broker = '35.9.22.105'
else:
    broker = 'localhost'
port = 1883
topic = "python/mqtt"


# Generate a Client ID with the publish prefix.
client_id = f'publish-{random.randint(0, 1000)}'
username = 'root'
password = 'password'

## Connect to client
def connect_mqtt():
    def on_connect(client, userdata, flags, rc,properties=None):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id,protocol=mqtt_client.MQTTv5)
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    try:
        client.connect(broker, port)
    except:
        print('Target address: '+ broker,'is not running')
    
    return client

## publish to client
def publish(client, msg):
    result = client.publish(topic, msg)
    # result: [0, 1]
    status = result[0]
    if status == 0:
        print(f"Sent `{msg}` to topic `{topic}`")
    else:
        print(f"Failed to send message to topic {topic}")
        
## Code to run on launch
def run():
    client = connect_mqtt()

    client.loop_start()

    GUI.main(client)

    client.loop_stop()



if __name__ == '__main__':
    run()


