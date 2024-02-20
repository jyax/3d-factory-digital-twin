import {Color} from "@orillusion/core";

/**
 * @module ColorGradient
 * @fileoverview Contains ColorGradient class.
 */

/**
 * Used to hold Color values in a gradient form. Colors can be added to the gradient at
 * specific points from 0 to 1, and they (along with the colors in between) can be retrieved
 * at specified points.
 * @class
 */
class ColorGradient {

    // Presets

    /**
     * Create a new gradient containing all colors of the rainbow.
     * @returns {ColorGradient} Rainbow gradient
     * @static
     */
    static makeRainbow() {
        const gradient = new ColorGradient();

        const step = 1 / 9;

        gradient.set(0, Color.RED);
        gradient.set(step, Color.ORANGE);
        gradient.set(step * 2, Color.YELLOW);
        gradient.set(step * 3, Color.LIME);
        gradient.set(step * 4, Color.GREEN);
        gradient.set(step * 5, Color.AQUA);
        gradient.set(step * 6, Color.BLUE);
        gradient.set(step * 7, Color.PURPLE);
        gradient.set(step * 8, Color.MAGENTA);
        gradient.set(step * 9, Color.RED);

        return gradient;
    }


    // Creation

    /**
     * Create a new ColorGradient.
     * @param snap (Optional) Whether the get() function should return interpolated values between the
     * colors (false), or snap to the color at the closest lower point (true). Set to false by default.
     * @constructor
     */
    constructor(snap = false) {
        this.points = [];
        this.colors = [];

        this.snap = snap;
    }


    // Access and manipulation

    /**
     * Get the color on the gradient at a specified point.
     * @param point Point along the gradient (0-1)
     * @returns Color color at the specified point along the gradient
     */
    get(point) {
        if (this.points.length === 0)
            return new Color(0, 0, 0);

        if (this.points.length === 1)
            return this.colors[0];

        if (point < this.points[0])
            return this.colors[0];

        if (point > this.points[this.points.length - 1])
            return this.colors[this.colors.length - 1];

        let last = 0;
        for (let i = 1; i < this.points.length; i++) {
            if (point < this.points[i]) {
                if (this.snap)
                    return this.colors[last];

                let alpha = (point - this.points[last]) / (this.points[i] - this.points[last]);
                return this._lerpColor(this.colors[last], this.colors[i], alpha);
            }

            last = i;
        }
    }

    /**
     * Set a Color at a point
     * @param point Point to set the color at (0-1)
     * @param color Color to set at the point
     */
    set(point, color) {
        this.points.push(point);
        this.colors.push(color);
    }

    /**
     * Remove all color entries from the gradient (reset).
     */
    clear() {
        this.points = [];
        this.colors = [];
    }


    // Linear interpolation

    /**
     * Perform linear interpolation between two number values.
     * @param {number} a First value
     * @param {number} b Second value
     * @param {number} alpha Progress between values (0 - 1)
     * @returns {number} Resulting value between a and b
     */
    _lerp(a, b, alpha) {
        return (b - a) * alpha + a;
    }

    /**
     * Perform linear interpolation between two colors.
     * @param {Color} a First color
     * @param {Color} b Second color
     * @param {number} point Progress between colors (0 - 1)
     * @returns {Color} Resulting color between a and b
     */
    _lerpColor(a, b, point) {
        let red = this._lerp(a.r, b.r, point);
        let green = this._lerp(a.g, b.g, point);
        let blue = this._lerp(a.b, b.b, point);
        let alpha = this._lerp(a.a, b.a, point);

        return new Color(red, green, blue, alpha);
    }
}

export default ColorGradient;