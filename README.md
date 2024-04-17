# Factory Digital Twin

# Getting Started / Prerequisites 
## On Workstation/ PC
- [Install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)
- Navigate to project directory
    - `npm install`

- Clone this repository
    - `git remote add origin https:// gitlab.msu.edu/cse-498-magna-spring-24/factory-digital-twin.git`

    - `git branch -M main`
    - `git pull origin`
        

## On Ubuntu Server
- When setting up check box for adding docker daemon to server
	- otherwise `apt-get docker` in CLI
### Port forwarding
- Handled in [docker compose](./compose-mongo-emqx.yaml)
	- Using ports:
		- `8083`
		- `27107`
		- `1883`
		- `8883`
	- Firewall settings
		- `ufw allow <PORT #>` for all ports you want public
> REQUIRES root/admin privelidge or prefix with `sudo`
- MQTT/ EMQX Debugging tools
	- On Linux server CLI do `sudo apt-get install mosquitto`
	- [Documentation](https://mosquitto.org/)
### Setting up code
-  Install Node on server
	- `apt-get nodejs`



## Run Locally
### Containerization 
- [Install Docker Desktop](https://www.docker.com/products/personal)
> For commercial use you may need alternate liscencing
- Make sure Docker Desktop is OPEN
- Run with these commands: (from project directory)
	- `cd ./mqtt-emulator/setup`
	- `docker-compose -f compose-mongo-emqx.yaml up --build --force-recreate -d`


## Live-Data Emulator 
### Python and Packages
#### Windows
- In CLI/ Terminal`install python3`
	- If not installed this will take you to the windows store download of python
- to get mqtt- emqx plugin
	- `pip install paho-mqtt==1.6.1`
- Python Image Library for UI
	- `pip install pillow`	

#### MacOS / Linux
- [Install Python](https://www.python.org/)
- In CLI/ Terminal
	- To get mqtt-emqx plugin
		- `pip install paho-mqtt==1.6.1`
	- Python Image Library for UI
		- `pip install pillow`	

### Running the Emulator
`Python3 publisher.py` OR run publisher.py from IDE

### Running the Web Application
- Navigate to project directory in  terminal
- `npm run dev`
    - View [app](localhost:5173) in Chrome Browser
        - localhost from vite address in terminal
- In a second CLI/ Terminal `cd ./dbconnnect`
    - `nodemon` to launch database connection

#### References
- [EMQX in Python](https://www.emqx.com/en/blog/how-to-use-mqtt-in-python)



## Description
Magna's Factory Digital Twin is a senior thesis(Capstone) project developed by Michigan State University Computer Science students to allow for 3D live-monitoring of assets in an industrial production environment.

The project utilizes WebGPU through Orillusion, Vue and Vite for its' front end and runs in a chrome-based browser.

The backend is comprised of MongoDB, Node.js Package Manager, EMQX MQTT broker and can be implemented in many different ways depending on use case.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.


## Authors and acknowledgment
This project was a collaboration between the Michigan State University Computer Science - Senior Capston Design course and Magna International. Student Developers are:
- Logan Gillis : email
- Cody Girard : email
- Gabe Kubiak : gabe@gabekubiak.dev
- Joey Vesche : joeyvesche@yahoo.com
- Jake Yax : email

These students all graduated Spring 2024 and for any employment or project related inquiies please email them at the above addresses.

## Project status
This project is far from complete. It was developed using WebGPU and Orrilusion which at the time of writing are relatively new libraries and technologies. This was a proof of concept for 3D factory live monitoring. If you wish to develop further please contact Sundar Selvaraj at Sundareswaran.Selvaraj@magna.com