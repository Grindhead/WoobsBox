/**
 * Sets the Y position of an HTML element based on a percentage offset of the screen height.
 * @param elementSelector - The CSS selector for the target element.
 * @param yOffsetPercent - The Y offset as a percentage of the screen height.
 */
export declare const setYPositionWithOffset: (elementSelector: string, yOffsetPercent: number) => void;
/**
 * Removes the event listeners added by setYPositionWithOffset.
 */
export declare const removeYPositionListeners: () => void;
