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
    // Calculate the Y position in pixels based on the screen height
    const yPosPixels = window.innerHeight * (yOffsetPercent / 100);

    targetElement.style.position = 'absolute';
    targetElement.style.top = `${yPosPixels}px`;
  }
};

// Example usage
window.onload = () => setYPositionWithOffset('.example-element', 10); // 10% offset from the top of the viewport
window.onresize = () => setYPositionWithOffset('.example-element', 10);
