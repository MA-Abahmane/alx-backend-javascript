export default function updateUniqueItems(map) {
  for (const [key, val] of map.entries()) {
    if (val === 1) map.set(key, 100);
  }
}