let nums = [1, 3, 7, 9, 2];
let t = 11;

// function twoSum(nums, target) {
//   for (p1 = 0; p1 < nums.length; p1++) {
//     const numberToFind = target - nums[p1];
//     for (p2 = p1 + 1; p2 < nums.length; p2++) {
//       if (numberToFind === nums[p2]) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// }
// console.log(twosum([1, 3, 7, 9, 2], 11));

// optimal solution//

function findTwoSum(nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}
console.log(findTwoSum([1, 3, 7, 9, 2], 11));
