# Getting Started.
- Go [HERE](https://www.docker.com/products/personal/) and sign up with your github account
> If you have github student you get premium access for free to a lot of extra stuff

## Containerization
- Install Docker Desktop
- Make sure you have this directory cloned
	- As of rn it's on it's own branch so `git checkout mqtt-emulator`
- Make sure Docker Desktop is OPEN
- Run with this command:
	- `docker-compose -f compose-mongo-emqx.yaml up --build --force-recreate -d`
>For future use just stop and restart the container in the desktop UI

## Python and Packages
- Install python3
- to get mqtt- emqx plugin
	- `pip install paho-mqtt==1.6.1`


# References
- [EMQX in Python](https://www.emqx.com/en/blog/how-to-use-mqtt-in-python)

