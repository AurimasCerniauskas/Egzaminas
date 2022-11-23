const reList = (data, name) => {
  const d = new Map();
  data.forEach(line => {
      if (d.has(line[name])) {
          d.set(line[name], [...d.get(line[name]), line]);
      } else {
          d.set(line[name],[line]);
      }
  });
  return [...d];
}

export default reList