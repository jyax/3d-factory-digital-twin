import { UITransform } from "../uiComponents/UITransform";
import { UIPanel } from "../uiComponents/UIPanel";
/**
 * This class is responsible for performing the Geometry reconstruction work of the GUI
 * @group GPU GUI
 */
export declare class GUIGeometryRebuild {
    private _textureMap;
    private _textureList;
    /**
     * Rebuild a specified GUI Mesh
     * Check and rebuild a GUI Mesh, including geometry and materials
     * @param transforms Fill in the UITransform list for the specified GUI Mesh
     * @param panel Specify the GUI Mesh object for reconstructing Geometry
     * @param forceUpdate whether need to force refactoring
     * @returns Return the build result (the maximum number of textures supported by GUIMaterials for a single UIPanel is limited and cannot exceed the limit)
     */
    build(transforms: UITransform[], panel: UIPanel, forceUpdate: boolean): boolean;
    private collectQuads;
    private push;
}
