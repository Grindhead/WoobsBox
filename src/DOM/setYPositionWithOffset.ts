/**
 * Sets the Y position of an HTML element based on a percentage offset of the screen height.
 * @param elementSelector - The CSS selector for the target element.
 * @param yOffsetPercent - The Y offset as a percentage of the screen height.
 */
export const setYPositionWithOffset = (
  elementSelector: string,
  yOffsetPercent: number
): void => {
  /**
   * @type {HTMLElement | null} targetElement - The target HTML element.
   */
  const targetElement = document.querySelector(
    elementSelector
  ) as HTMLElement | null;

  if (targetElement) {
    const yPosPixels = window.innerHeight * (yOffsetPercent / 100);
    targetElement.style.position = "absolute";
    targetElement.style.top = `${yPosPixels}px`;
  }

  window.addEventListener("load", () =>
    setYPositionWithOffset(".example-element", yOffsetPercent)
  );
  window.addEventListener("resize", () =>
    setYPositionWithOffset(".example-element", yOffsetPercent)
  );
};

/**
 * Removes the event listeners added by setYPositionWithOffset.
 */
export const removeYPositionListeners = () => {
  window.removeEventListener("load", () =>
    setYPositionWithOffset(".example-element", 0)
  );
  window.removeEventListener("resize", () =>
    setYPositionWithOffset(".example-element", 0)
  );
};
