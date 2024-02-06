/**
 * Centers an element vertically and horizontally within the viewport.
 * This function adds event listeners to re-center the element on window load and resize.
 *
 * @param elementName - The selector for the element to be centered (e.g., '.my-element').
 */
export declare const centerElement: (elementName: string) => void;
/**
 * Removes any listeners that center the element
 * @param elementName The selector for the element to be centered (e.g., '.my-element').
 */
export declare const removeCenterListeners: (elementName: string) => void;
