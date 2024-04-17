/**
 * @module
 * @fileoverview Contains Util class.
 */

import {BoundingBox, Vector3, Matrix4} from "@orillusion/core";

/**
 * @class
 * Contains globally accessible functions for utility purposes.
 */
class Util {
    /**
     * Check if a string is formatted as a number.
     * @param {string} string String to check
     * @returns {boolean} Whether string is formatted to be a number
     */
    static isNumber(string) {
        return string.match(/^-?\d+(\.\d+)?$|^-?0?\.\d+$/);
    }

    /**
     * Get a scale value from a bounding box.
     * @param {BoundingBox} boundingBox Bounding box to get scale from
     * @returns {number} Scale value
     */
    static getBoundingBoxScale(boundingBox) {
        const min = boundingBox.min;
        const max = boundingBox.max;

        const diff = max.subtract(min);

        return diff.length;
    }

    /**
     * Apply a transformation matrix to a bounding box (will remain axis-aligned).
     * @param {BoundingBox} box Bounding box to transform
     * @param {Matrix4} matrix Transformation matrix to apply
     * @returns {BoundingBox} Transformed bounding box
     */
    static transformBoundingBox(box, matrix) {
        const dir = box.max.subtract(box.min);

        const corners = [];
        let vec = new Vector3();
        for (let x = 0; x < 2; x++) {
            vec.x = x;
            for (let y = 0; y < 2; y++) {
                vec.y = y;
                for (let z = 0; z < 2; z++) {
                    vec.z = z;

                    const pos = box.min.add(dir.multiply(vec));

                    corners.push(matrix.transformVector(pos));
                }
            }
        }

        const min = new Vector3(
            Math.min(...corners.map(v => v.x)),
            Math.min(...corners.map(v => v.y)),
            Math.min(...corners.map(v => v.z))
        );

        const max = new Vector3(
            Math.max(...corners.map(v => v.x)),
            Math.max(...corners.map(v => v.y)),
            Math.max(...corners.map(v => v.z))
        );

        const bb = new BoundingBox();
        bb.setFromMinMax(min, max);

        return bb;
    }

    /**
     * Check if any text inputs are currently in focus.
     * @returns {boolean} Whether any inputs are focused
     */
    static inputFocused() {
        const inputs = document.querySelectorAll("input, textarea");
        for (const input of inputs)
            if (input.matches(":focus"))
                return true;
        
        return false;
    }
}

export default Util;