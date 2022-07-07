const smallest_subarray_sum = function (s, arr) {
  // Crear una variable para el valor de la suma maxima
  // Crear una variable para la longitud maxima
  // Variable para controlar la sliding window

  let minLength = Infinity;
  let maxSum = 0;
  let windowStart = 0;

  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
    while (maxSum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      maxSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};

console.log(smallest_subarray_sum(9, [1, 2, 3, 4, 5]));
