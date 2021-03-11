
exports.min = function min (array) {
  if (array == undefined || array.length === 0) return 0;
  return array.sort(function(a, b) {  return a - b;})[0];
}

exports.max = function max (array) {
  if (array == undefined || array.length === 0) return 0;
  return array.sort(function(a, b) {  return a - b; }).reverse()[0];
}

exports.avg = function avg (array) {
  if (array == undefined || array.length === 0) return 0;
  let sum = 0;
  array.forEach(function(value) {
    sum += value;
  })
  return sum/array.length;
}
