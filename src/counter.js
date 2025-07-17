/**
 * Sets up a clickable counter on the provided DOM element.
 * Each click will increment the counter and update the element's display.
 * @param {HTMLElement} element - The DOM element to attach the counter to.
 */
export function setupCounter(element) {
  let counter = 0;

  // Updates the counter value and the element's displayed text
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  // Increment counter on each click
  element.addEventListener('click', () => setCounter(counter + 1));

  // Initialize counter display
  setCounter(0);
}
