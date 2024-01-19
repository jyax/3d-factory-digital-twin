#Read This
## Steps to run
1. Generate Access Token
2. Clone Repo
3. Navigate to `./troisjs` dir in terminal
4. enter `npm install`
5. enter `npm run dev`
6. Project is now live on that localhost.
    - CTRL + Click to launch in default browser

##  To change model to another
- Find a model in a file format
- Open in CAD software. Autodesk Inventor or Fusion 360 both free with .edu email
- File > Export to CAD format > .glb OR .gltf
- Put in project
    - Currently at ./troisjs/src/Models/MODELNAME.EXT
- Change ./troisjs/src/App.vue > line 7