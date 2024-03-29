/**
 * Centers an element vertically and horizontally within the viewport.
 * This function adds event listeners to re-center the element on window load and resize.
 *
 * @param elementName - The selector for the element to be centered (e.g., '.my-element').
 */
export const centerElement = (elementName: string): void => {
  const element = document.querySelector(elementName) as HTMLElement;
  if (element) {
    const xCenter = (window.innerWidth - element.offsetWidth) / 2;
    const yCenter = (window.innerHeight - element.offsetHeight) / 2;

    element.style.left = `${xCenter}px`;
    element.style.top = `${yCenter}px`;
  }

  window.addEventListener("load", () => centerElement(elementName));
  window.addEventListener("resize", () => centerElement(elementName));
};

/**
 * Removes any listeners that center the element
 */
export const removeCenterListeners = (): void => {
  window.removeEventListener("load", () => centerElement);
  window.removeEventListener("resize", () => centerElement);
};
