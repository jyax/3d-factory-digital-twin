import { CEvent } from '../CEvent';
/**
 * enum keyboard event{@link InputSystem}
 * @group Events
 */
export declare class KeyEvent extends CEvent {
    /**
     *
     * Constant Definition Key Press Event Identification
     * Event response status: Responds every time the keyboard is pressed.
     * Response event parameters: keyboard key
     * @platform Web,Native
     */
    static KEY_DOWN: string;
    /**
     *
     * Constant Definition Key up Event Identification
     * Event response status: Responds every time the keyboard is released.
     * Response event parameters: keyboard key
     * @platform Web,Native
     */
    static KEY_UP: string;
    /**
     *
     * Key code value, enumeration type see KeyCode {@link KeyCode}
     * @default 0
     * @platform Web,Native
     */
    keyCode: number;
}
