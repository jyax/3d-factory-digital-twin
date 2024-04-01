import {ComponentBase, Engine3D, Plane, Vector3} from "@orillusion/core";

/**
 * @module DragComponent
 * @fileoverview Contains DragComponent class.
 */

/**
 * @class
 * @extends ComponentBase
 * Component for handling mouse dragging of objects (attach to camera object).
 */
class DragComponent extends ComponentBase {
    /**
     * Create a new DragComponent.
     */
    constructor() {
        super();

        this.mgr = null;

        this.plane = null;
    }

    /**
     * Handle dragging every frame.
     * @param view Current Orillusion view
     */
    onUpdate(view) {
        if (this.mgr === null || !this.mgr.dragging) {
            this.plane = null;
            return;
        }

        const center = this._getCenter();

        if (this.plane === null)
            this.plane = new Plane(center, Vector3.UP);

        const input = Engine3D.inputSystem;
        const ray = this.mgr.cam.screenPointToRay(input.mouseX, input.mouseY);

        const pos = new Vector3();

        this.plane.intersectsRay(ray, pos);

        this._moveSelected(center, pos);
    }

    /**
     * Calculate the center of all currently selected objects.
     * @returns {Vector3} Center of all selected objects
     * @private
     */
    _getCenter() {
        let pos = null;

        for (const object of this.mgr.getSelected()) {
            if (pos === null)
                pos = object.pos;
            else
                pos = pos.add(object.pos);
        }

        if (pos !== null)
            pos = pos.mul(1 / this.mgr.selectedCount);
        else
            pos = new Vector3();

        return pos;
    }

    /**
     * Apply the new positions after dragging to each currently selected object.
     * @param {Vector3} center Old center of selection (from)
     * @param {Vector3} pos New center of selection (to)
     * @private
     */
    _moveSelected(center, pos) {
        if (this.mgr.isKeyDown("shift")) {
            const bounds = this.mgr.getSelectedBounds();
            const a = bounds.min;
            const b = bounds.max;
            a.y = 0;
            b.y = 0;

            const scale = b.subtract(a).length;
            const snap = 10 ** Math.floor(Math.log10(scale));

            pos = new Vector3(
                Math.round(pos.x / snap) * snap,
                pos.y,
                Math.round(pos.z / snap) * snap
            );
        }

        for (const object of this.mgr.getSelected()) {
            const diff = object.pos.subtract(center);
            object.pos = pos.add(diff);
        }

        this.mgr.updateSelectBox();
    }
}

export default DragComponent;