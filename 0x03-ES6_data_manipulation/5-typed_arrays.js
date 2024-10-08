export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const data = new DataView(buffer);
  data.setUint8(position, value);

  return data;
}
