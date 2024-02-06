"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCenterListeners = exports.centerElement = void 0;
/**
 * Centers an element vertically and horizontally within the viewport.
 * This function adds event listeners to re-center the element on window load and resize.
 *
 * @param elementName - The selector for the element to be centered (e.g., '.my-element').
 */
const centerElement = (elementName) => {
    const element = document.querySelector(elementName);
    console.log(element);
    if (element) {
        const xCenter = (window.innerWidth - element.offsetWidth) / 2;
        const yCenter = (window.innerHeight - element.offsetHeight) / 2;
        element.style.left = `${xCenter}px`;
        element.style.top = `${yCenter}px`;
    }
    window.addEventListener('load', () => (0, exports.centerElement)(elementName));
    window.addEventListener('resize', () => (0, exports.centerElement)(elementName));
};
exports.centerElement = centerElement;
/**
 * Removes any listeners that center the element
 * @param elementName The selector for the element to be centered (e.g., '.my-element').
 */
const removeCenterListeners = (elementName) => {
    window.removeEventListener('load', () => (0, exports.centerElement)(elementName));
    window.removeEventListener('resize', () => (0, exports.centerElement)(elementName));
};
exports.removeCenterListeners = removeCenterListeners;
//# sourceMappingURL=centerElement.js.map