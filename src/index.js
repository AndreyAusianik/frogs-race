module.exports = function getBestRacer(distance) {
  const log = a => {
    console.log(a);
    return a;
  }
  return distance.map((line) => {
    for(let step = 1, i = 0; step <= line.length && i < line.length; step++) {
      i+= line[i];
      if(i >= line.length) {
        return step;
      }
      if(i < 0) {
        return Infinity;
      }
    }
    return Infinity;
  }).reduce((bestIndex, item, index, arr) => item < arr[bestIndex] ? index : bestIndex, 0);  
}
