/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * Returns square of a number
     * @param value any number
     */
    //% blockId=square
    //% block="square"
    //% weight=50
    //% parts="v2"
    //% group="micro:bit (V2)"
    //% help=github:pxt-rdk-translation/docs/square
    export function square(value: number): number {
        return value * value;
    }
}
