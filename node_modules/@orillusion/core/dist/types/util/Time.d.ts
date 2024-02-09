/**
 * Tool of time
 * @group Util
 */
export declare class Time {
    /**
     * The time the engine has been running
     */
    static time: number;
    /**
     * the frame count engine is running
     */
    static frame: number;
    /**
     * Time from previous frame to present
     */
    static delta: number;
    private static _startTime;
    private static _timeLabel;
    /**
     * @internal
     * @param label
     */
    static start(label: string): void;
    /**
     * @internal
     */
    static end(): void;
}
