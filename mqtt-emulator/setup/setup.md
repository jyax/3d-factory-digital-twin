# Getting Started.
- Go [HERE](https://www.docker.com/products/personal/) and sign up with your github account
> If you have github student you get premium access for free to a lot of extra stuff

# BASH installation

## Node.js // Node Package Manager

## MongoDB

## Ubuntu Server
- Port forwarding
	- handled in [compose](compose-mongo-emqx.yaml)
		- using ports:
			- ``
			- ``
			- ``
			- ``
- Firewall settings
	- `ufw allow <PORT #>` for all ports you want public
- testing EMQX
	- Mosquito

## EMQX Broker

## Containerization 
- Install Docker Desktop
<!-- - Make sure you have this directory cloned
	- As of rn it's on it's own branch so `git checkout mqtt-emulator` -->
- Make sure Docker Desktop is OPEN
- Run with these commands:
	- `cd ./mqtt-emulator/setup`
	- `docker-compose -f compose-mongo-emqx.yaml up --build --force-recreate -d`
>For future use just stop and restart the container in the desktop UI

## Python and Packages
- Install python3
	- If not installed this will take you to the windows store download of python
- to get mqtt- emqx plugin
	- `pip install paho-mqtt==1.6.1`
- Python Image Library for UI
	- `pip install pillow`	

### Running the Emulator
<!-- - `Python3 publisher.py --debug` serverless / local /localhost -->
<!-- argparse -->

# References
- [EMQX in Python](https://www.emqx.com/en/blog/how-to-use-mqtt-in-python)

