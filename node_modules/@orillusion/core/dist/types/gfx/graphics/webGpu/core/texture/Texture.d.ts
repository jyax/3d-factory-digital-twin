/// <reference types="@webgpu/types" />
/**
 * Texture
 * @group Texture
 */
export declare class Texture implements GPUSamplerDescriptor {
    /**
     * name of texture
     */
    name: string;
    /**
     * source url
     */
    url: string;
    /**
     * gpu texture
     */
    protected gpuTexture: GPUTexture;
    /**
     * Return index in texture array
     */
    pid: number;
    /**
     * GPUTextureView
     */
    view: GPUTextureView | GPUExternalTexture;
    /**
     * GPUSampler
     */
    gpuSampler: GPUSampler;
    /**
     * GPUSampler for comparison
     */
    gpuSampler_comparison: GPUSampler;
    /**
     * GPUTextureFormat
     */
    format: GPUTextureFormat;
    /**
     * GPUTextureUsage
     */
    usage: GPUFlagsConstant;
    /**
     * texture width
     */
    width: number;
    /**
     * texture height
     */
    height: number;
    /**
     * depth or layers, default value is 1
     */
    depthOrArrayLayers: number;
    /**
     * depth or layers, default value is 1
     */
    numberLayer: number;
    /**
     * GPUTextureViewDescriptor
     */
    viewDescriptor: GPUTextureViewDescriptor;
    /**
     * GPUTextureDescriptor
     */
    textureDescriptor: GPUTextureDescriptor;
    /**
     * GPUShaderStage
     */
    visibility: number;
    /**
     * GPUTextureBindingLayout, contains viewDimension and multisampled
     */
    textureBindingLayout: GPUTextureBindingLayout;
    /**
     * GPUSamplerBindingLayout
     */
    samplerBindingLayout: GPUSamplerBindingLayout;
    /**
     * GPUSamplerBindingLayout
     */
    sampler_comparisonBindingLayout: GPUSamplerBindingLayout;
    /**
     * whether to flip the image on the y-axis
     */
    flipY: boolean;
    /**
     *  whether is video texture
     */
    isVideoTexture?: boolean;
    isHDRTexture?: boolean;
    private _useMipmap;
    private _sourceImageData;
    /**
    */
    private _addressModeU?;
    /**
     *
     */
    private _addressModeV?;
    /**
     * Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth
     * coordinates, respectively.
     */
    private _addressModeW?;
    /**
     * Specifies the sampling behavior when the sample footprint is smaller than or equal to one
     * texel.
     */
    private _magFilter?;
    /**
     * Specifies the sampling behavior when the sample footprint is larger than one texel.
     */
    private _minFilter?;
    /**
     * Specifies behavior for sampling between mipmap levels.
     */
    private _mipmapFilter?;
    /**
    */
    private _lodMinClamp?;
    /**
     * Specifies the minimum and maximum levels of detail, respectively, used internally when
     * sampling a texture.
     */
    private _lodMaxClamp?;
    /**
     * When provided the sampler will be a comparison sampler with the specified
     * {@link GPUCompareFunction}.
     * Note: Comparison samplers may use filtering, but the sampling results will be
     * implementation-dependent and may differ from the normal filtering rules.
     */
    private _compare?;
    /**
     * Specifies the maximum anisotropy value clamp used by the sampler.
     * Note: Most implementations support {@link GPUSamplerDescriptor#maxAnisotropy} values in range
     * between 1 and 16, inclusive. The used value of {@link GPUSamplerDescriptor#maxAnisotropy} will
     * be clamped to the maximum value that the platform supports.
     */
    private _maxAnisotropy?;
    /**
     *  mipmap Count, default value is 1
     */
    mipmapCount: number;
    protected _textureChange: boolean;
    /**
     * Create a texture2D
     * @param width size of texture width
     * @param height height of texture width
     * @param numberLayer number layer of texture
     * @returns
     */
    constructor(width?: number, height?: number, numberLayer?: number);
    init(): this;
    /**
     * creatTextureDescriptor
     */
    protected createTextureDescriptor(width: number, height: number, mipLevelCount: number, format: GPUTextureFormat, usage?: number, sizeCount?: number, sampleCount?: number): void;
    protected generate(imageBitmap: HTMLCanvasElement | ImageBitmap | OffscreenCanvas): void;
    private createTexture;
    /**
     * enable/disable mipmap
     */
    get useMipmap(): boolean;
    /**
     * get mipmap
     */
    set useMipmap(value: boolean);
    get sourceImageData(): HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
    getMipmapCount(): number;
    protected updateTextureDescription(): void;
    protected updateGPUTexture(): void;
    /**
     * create or get GPUTexture
     * @returns GPUTexture
     */
    getGPUTexture(): GPUTexture;
    /**
     * create or get GPUTextureView
     * @returns GPUTextureView | GPUExternalTexture
     */
    getGPUView(index?: number): GPUTextureView | GPUExternalTexture;
    protected _stateChangeRef: Map<any, Function>;
    bindStateChange(fun: Function, ref: any): void;
    unBindStateChange(ref: any): void;
    protected noticeChange(): void;
    /**
     * release the texture
     */
    destroy(force?: boolean): void;
    get addressModeU(): GPUAddressMode;
    set addressModeU(value: GPUAddressMode);
    get addressModeV(): GPUAddressMode;
    set addressModeV(value: GPUAddressMode);
    get addressModeW(): GPUAddressMode;
    set addressModeW(value: GPUAddressMode);
    get magFilter(): GPUFilterMode;
    set magFilter(value: GPUFilterMode);
    get minFilter(): GPUFilterMode;
    set minFilter(value: GPUFilterMode);
    get mipmapFilter(): GPUMipmapFilterMode;
    set mipmapFilter(value: GPUMipmapFilterMode);
    get lodMinClamp(): number;
    set lodMinClamp(value: number);
    get lodMaxClamp(): number;
    set lodMaxClamp(value: number);
    get compare(): GPUCompareFunction;
    set compare(value: GPUCompareFunction);
    get maxAnisotropy(): number;
    set maxAnisotropy(value: number);
    private static _texs;
    static delayDestroyTexture(tex: GPUTexture): void;
    static destroyTexture(): void;
}
