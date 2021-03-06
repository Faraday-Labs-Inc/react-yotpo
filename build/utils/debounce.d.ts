/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param func the function to delay
 * @param wait the number of milliseconds to delay the function call
 * @param immediate a boolean indicating if the function should be called
 * immediately
 *
 * @returns a function that will be debounced when it is invoked
 */
export default function debounce(func: Function, wait: number, immediate?: boolean): (...args: unknown[]) => void;
