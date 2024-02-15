
import random
import time
import TEST_GUI 
from paho.mqtt import client as mqtt_client


broker = '35.9.22.105'
port = 1883
topic = "python/mqtt"
# Generate a Client ID with the publish prefix.
client_id = f'publish-{random.randint(0, 1000)}'
username = 'root'
password = 'M0nG0$$w0rd'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc,properties=None):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id,protocol=mqtt_client.MQTTv5)
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def publish(client, msg):
    result = client.publish(topic, msg)
    # result: [0, 1]
    status = result[0]
    if status == 0:
        print(f"Send `{msg}` to topic `{topic}`")
    else:
        print(f"Failed to send message to topic {topic}")
        

def run():
    client = connect_mqtt()
    client.loop_start()
    TEST_GUI.main(client)
    client.loop_stop()

if __name__ == '__main__':
    run()