const twoSums = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 === target) return (result = [i, j]);
    }
  }
  return result;
};
let test = twoSums([2, 7, 11, 15], 9);
console.log("🚀 ~ file: twoSums.js ~ line 15 ~ test", test);
