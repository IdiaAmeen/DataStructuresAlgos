function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}
let a = [];
for (let i = 0; i < 10; i++) {
  a[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(a);
// console.log();
console.log(qSort(a));
