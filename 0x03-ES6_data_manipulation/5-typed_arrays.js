export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  

  const view = new DataView(buffer, position, 1);
  view.setInt8(0, value);

  return buffer;
}
