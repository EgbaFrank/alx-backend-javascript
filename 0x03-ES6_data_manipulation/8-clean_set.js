export default function cleanSet(set, startString) {
  if (!startString || !set.size) {
    return ' ';
  }

  const filteredValues = [...set].filter((val) => val.startsWith(startString));
  return filteredValues.map((val) => val.slice(startString.length)).join('-');
}
