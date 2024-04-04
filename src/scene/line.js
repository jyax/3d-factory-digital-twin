import {
    Vector3,
    Ray,
    Color,
    MeshRenderer,
    BoxGeometry,
    LitMaterial,
    Object3D,
    scale
} from "@orillusion/core";
import SceneObject from './scene_object'

class Line{
    constructor({manager, points =  []} = {}){
        this._manager = manager;
        console.log(this._manager);
        this.view = manager.view;
        this.pointMap = new Map();
        this.pointNum = points.length;
        for(let i = 0; i < points.length; i++){
            this.pointMap.set(i, points[i]);
        }
        console.log(this.pointMap)
    }

    addPoint(point = Vector3){
        this.pointMap.set(this.pointNum, point);
        this.pointNum++;
    }

    updateLine(index, newPoint) {
        this.pointMap.set(index, newPoint);
    }

    drawLine(mgr, width){
        var pointList = [];
        this.pointMap.forEach(function(value, key) {
            pointList.push(value);
        });
        
        for(let i = 0; i < pointList.length - 1; i++){
            
            let startPoint = pointList[i];
            let endPoint = pointList[i+1];
            let ray = new Ray(startPoint, endPoint);
            let direction = ray.direction;

            console.log(mgr);
            // mgr.view.graphic3D.drawLines("line"+i, [startPoint, endPoint], new Color().hexToRGB(Color.WHITE));

            let slope = direction;
            if(direction.x == 0){
                slope.x = 1;
                slope.z = 0; 
            }
            else if(direction.z == 0){
                slope.x = 0;
                slope.z = 1;
            }

            let line = mgr.createNewObject({pos: new Vector3(0,0,0), 
                select: true
                });

            console.log("points", [startPoint, endPoint]);
            line.scale = new Vector3(.01, .01, .01);
            line._object.scaleX *= Vector3.distance(startPoint, endPoint);
            line._object.scaleY *= 0;
            line._object.scaleZ *= width;
            let originPoint = new Vector3(0,0,0);
            originPoint.x += (startPoint.x + endPoint.x) / 2;
            originPoint.y += (startPoint.y + endPoint.y) / 2;
            originPoint.z += (startPoint.z + endPoint.z) / 2;
            line.pos = originPoint;
            console.log("origin", originPoint);
            console.log("line object: ", line);
            line._object.rotationY = -(Math.atan( (endPoint.z - startPoint.z) / (endPoint.x - startPoint.x)) * (180/Math.PI));


            // mgr.view.graphic3D.drawLines("lineL"+i, [startPoint.add(slope.multiply(new Vector3(-1, 1, 1)).mul(width)),
            //             endPoint.add(slope.multiply(new Vector3(-1, 1, 1)).mul(width))], new Color().hexToRGB(Color.RED));
            // console.log([startPoint.add(slope.multiply(new Vector3(-1, 1, 1)).mul(width)),
            //     endPoint.add(slope.multiply(new Vector3(-1, 1, 1)).mul(width))]);
            //
            // mgr.view.graphic3D.drawLines("lineR"+i, [startPoint.add(slope.multiply(new Vector3(1, 1, -1)).mul(width)),
            //             endPoint.add(slope.multiply(new Vector3(1, 1, -1)).mul(width))], new Color().hexToRGB(Color.BLUE));
            // console.log([startPoint.add(slope.multiply(new Vector3(1, 1, -1)).mul(width)),
            //     endPoint.add(slope.multiply(new Vector3(1, 1, -1)).mul(width))]);
            
        }
    }
    
}

export default Line;