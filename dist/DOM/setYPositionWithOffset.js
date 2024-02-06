"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeYPositionListeners = exports.setYPositionWithOffset = void 0;
/**
 * Sets the Y position of an HTML element based on a percentage offset of the screen height.
 * @param elementSelector - The CSS selector for the target element.
 * @param yOffsetPercent - The Y offset as a percentage of the screen height.
 */
const setYPositionWithOffset = (elementSelector, yOffsetPercent) => {
    const targetElement = document.querySelector(elementSelector);
    if (targetElement) {
        const yPosPixels = window.innerHeight * (yOffsetPercent / 100);
        targetElement.style.position = "absolute";
        targetElement.style.top = `${yPosPixels}px`;
    }
    window.addEventListener("load", () => (0, exports.setYPositionWithOffset)(".example-element", yOffsetPercent));
    window.addEventListener("resize", () => (0, exports.setYPositionWithOffset)(".example-element", yOffsetPercent));
};
exports.setYPositionWithOffset = setYPositionWithOffset;
const removeYPositionListeners = () => {
    window.removeEventListener("load", () => exports.setYPositionWithOffset);
    window.removeEventListener(".example-element", () => exports.setYPositionWithOffset);
};
exports.removeYPositionListeners = removeYPositionListeners;
//# sourceMappingURL=setYPositionWithOffset.js.map