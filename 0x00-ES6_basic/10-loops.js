export default function appendToEachArrayValue(array, appendString) {
  const apnArr = [];
  for (const value of array) {
    apnArr.push(`${appendString}${value}`);
  }

  return apnArr;
}
