import {
    Vector3,
    Ray
} from "@orillusion/core";

/**
 * A visual line object that as addable points and is drawn by creating scene objects between each point
 */
class Line{
    constructor({manager, points =  []} = {}){
        this._manager = manager; 
        this.view = manager.view;
        this.pointMap = new Map();
        this.pointNum = points.length;
        for(let i = 0; i < points.length; i++){
            this.pointMap.set(i, points[i]);
        }
    }

    // Adds point 'point' to the line object
    addPoint(point = Vector3){
        this.pointMap.set(this.pointNum, point);
        this.pointNum++;
    }

    // Updates the point of the line at index 'index' to 'newPoint'
    updateLine(index, newPoint) {
        this.pointMap.set(index, newPoint);
    }

    // Creates scene objects between each pair of points and scales acccordingly to the width
    drawLine(mgr, width){
        // Transfer points in map to a list
        var pointList = [];
        this.pointMap.forEach(function(value, key) {
            pointList.push(value);
        });
        
        // Create each line segment
        for(let i = 0; i < pointList.length - 1; i++){
            
            // Gets the direction of the line
            let startPoint = pointList[i];
            let endPoint = pointList[i+1];
            let ray = new Ray(startPoint, endPoint);
            let direction = ray.direction;

            // Gets direction for edge cases
            let slope = direction;
            if(direction.x == 0){
                slope.x = 1;
                slope.z = 0; 
            }
            else if(direction.z == 0){
                slope.x = 0;
                slope.z = 1;
            }

            // Creates the scene object
            let line = mgr.createNewObject({pos: new Vector3(0,0,0), 
                select: true
                });

            // Scale, rotate, and transpose scene object
            line.scale = new Vector3(.01, .01, .01);
            line._object.scaleX *= Vector3.distance(startPoint, endPoint);
            line._object.scaleY *= 0;
            line._object.scaleZ *= width;
            let originPoint = new Vector3(0,0,0);
            originPoint.x += (startPoint.x + endPoint.x) / 2;
            originPoint.y += (startPoint.y + endPoint.y) / 2;
            originPoint.z += (startPoint.z + endPoint.z) / 2;
            line.pos = originPoint;
            line._object.rotationY = -(Math.atan( (endPoint.z - startPoint.z) / (endPoint.x - startPoint.x)) * (180/Math.PI));
        }
    }
    
}

export default Line;