/**
 * Sets the Y position of an HTML element based on a percentage offset of the screen height.
 * @param elementSelector - The CSS selector for the target element.
 * @param yOffsetPercent - The Y offset as a percentage of the screen height.
 */
export const setYPositionWithOffset = (
  elementSelector: string,
  yOffsetPercent: number
): void => {
  const targetElement = document.querySelector(
    elementSelector
  ) as HTMLElement | null;

  if (targetElement) {
    const yPosPixels = window.innerHeight * (yOffsetPercent / 100);
    targetElement.style.position = "absolute";
    targetElement.style.top = `${yPosPixels}px`;
  }

  // Add event listeners to reposition the element on window load and resize
  window.addEventListener("load", () =>
    setYPositionWithOffset(".example-element", yOffsetPercent)
  );
  window.addEventListener("resize", () =>
    setYPositionWithOffset(".example-element", yOffsetPercent)
  );
};

/**
 * Removes any listeners that reposition the element
 */
export const removeYPositionListeners = (): void => {
  window.removeEventListener("load", () => setYPositionWithOffset);
  window.removeEventListener("resize", () => setYPositionWithOffset);
};
