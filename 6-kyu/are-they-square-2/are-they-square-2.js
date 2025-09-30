var isSquare = function(arr) {
  if (!arr || arr.length === 0) return undefined;
  let collection = []
​
  function flatten(input) {
    for (const x of input) {
      if (Array.isArray(x)) {
        flatten(x)
      } else {
        collection.push(x)
      }
    }
  }
  flatten(arr)
  return collection.length === 0? undefined: collection.every(y => Math.sqrt(y) % 1 === 0)
};
​