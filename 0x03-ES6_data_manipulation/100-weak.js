export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);
}
