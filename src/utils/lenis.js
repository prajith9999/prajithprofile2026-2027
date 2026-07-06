/** Shared Lenis instance — set by useSmoothScroll, read by scroll helpers. */

let lenisInstance = null;

export function setLenis(instance) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function clearLenis() {
  lenisInstance = null;
}
