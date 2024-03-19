/**
 * @module
 * @fileoverview Contains Util class.
 */

/**
 * @class
 * Contains globally accessible functions for utility purposes.
 */
class Util {
    static getBoundingBoxScale(boundingBox) {
        const min = boundingBox.min;
        const max = boundingBox.max;

        const diff = max.subtract(min);

        return diff.length;
    }

    static inputFocused() {
        const inputs = document.querySelectorAll("input, textarea");
        for (const input of inputs)
            if (input.matches(":focus"))
                return true;
        
        return false;
    }
}

export default Util;