import {
    Vector3,
    View3D,
    Color
} from "@orillusion/core";

class Line{
    constructor(view, points =  []){
        this.view = view;
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

    drawLine(num){
        var pointList = [];
        this.pointMap.forEach(function(value, key) {
            pointList.push(value);
        });
        console.log('line'+num);
        this.view.graphic3D.drawLines('line'+num, pointList, new Color().hexToRGB(Color.WHITE));
    }
    
}

export default Line;