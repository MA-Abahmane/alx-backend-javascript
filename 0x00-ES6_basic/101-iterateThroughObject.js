export default function iterateThroughObject(reportWithIterator) {
  let str = ''; let
    flag = 0;

  for (const nm of reportWithIterator) {
    if (flag !== 0) {
      str += ' | ';
    }
    str += nm;
    flag += 1;
  }

  return str;
}
