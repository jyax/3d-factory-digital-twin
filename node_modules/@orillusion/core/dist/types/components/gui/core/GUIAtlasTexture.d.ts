import { GUISprite } from './GUISprite';
import { GUITexture } from './GUITexture';
import { Vector2 } from '../../../math/Vector2';
/**
 * Atlas data
 * @group GPU GUI
 */
export declare class GUIAtlasTexture {
    private _spriteMap;
    private _spriteList;
    readonly textureSize: Vector2;
    name: string;
    constructor(size: {
        x: number;
        y: number;
    });
    /**
     * create a sprite
     * @param srcTexture Usually it's an atlas diagram
     * @param id key of sprite
     * @param detail description of sprite
     * @returns GUISprite
     */
    setTexture(srcTexture: GUITexture, id: string, detail: any): GUISprite;
    /**
    * get a sprite by key/id/name
    * @param id key of sprite
    * @returns GUISprite
    */
    getSprite(id: string): GUISprite;
    /**
    * Returns all sprite list
    * @returns list of GUISprite
    */
    get spriteList(): GUISprite[];
}
