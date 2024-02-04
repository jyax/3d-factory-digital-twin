import paho.mqtt.client as mqtt

# Define the callback functions
def on_connect(client, userdata, flags, rc):
    print("Connected to the broker")

def on_message(client, userdata, msg):
    print("Received message:", msg.topic, msg.payload)

# Create an MQTT client instance
client = mqtt.Client()

# Connect to the MQTT broker
client.connect("localhost", 1883)

# Subscribe to the topic "test/topic"
client.subscribe("test/topic")

# Start a loop to listen for messages
client.loop_forever()