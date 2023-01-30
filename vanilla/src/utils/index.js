export function selector(target) {
  const items = [...document.querySelectorAll(target)];
  
  return items.length === 1 ? items.pop() : items;
}