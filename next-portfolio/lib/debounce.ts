export default function debounce(func: Function, delay: number) {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  return function (...args: any) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}
