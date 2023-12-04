export default function cleanSet(set, startString) {
  const strAr = [];

  if (startString === undefined || startString === '') return '';

  set.forEach((str) => {
    if (String(str).startsWith(startString)) strAr.push(str.replace(startString, ''));
  });

  return strAr.join('-');
}
