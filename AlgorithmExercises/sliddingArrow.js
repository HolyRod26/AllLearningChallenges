/*function reverseText(text = "RandomText") {
  let reverse = [];
  for (let index = text.length; index >= 0; index--) {
    const element = text[index];
    reverse = [...reverse, element].join('');
  }
  return reverse;
}

console.log(reverseText());
*/

const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let index = 0; index < k; index++) {
    currentSum += arr[index];
  }
  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum -= arr[i - k];
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
