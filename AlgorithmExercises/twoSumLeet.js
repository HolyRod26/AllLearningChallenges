/**
 * We loop through the array, and for each element, we loop through the array again to see if the
 * difference between the target and the element exists in the array
 * @param nums - [2, 7, 11, 15]
 * @param target - 9
 * @returns The index of the two numbers that add up to the target
 */
const twoSum = function (nums, target) {
  let cutToArray = 0;
  while (cutToArray < nums.length) {
    let difference = target - nums[cutToArray];
    let numsCompare = nums.slice(cutToArray + 1);

    for (let counterEnd = 0; counterEnd < numsCompare.length; counterEnd++) {
      let numCompared = numsCompare[counterEnd];
      if (difference === numCompared) {
        return [cutToArray, cutToArray + (counterEnd + 1)];
      }
    }
    cutToArray++;
  }
};

console.log(`The result of the twoSum is: ${twoSum([2, 7, 11, 15], 9)}`);
console.log(`The result of the twoSum is: ${twoSum([3, 2, 3], 6)}`);

// Obtener el primer elemento de mi array
// Calcular la diferencia entre el target y el elemento 1
// hacer una copia del array sin el elemento 1
// Revisar si la diferencia existe en el array
// Si existe regresar el elemento y el contador del loop

// TODO: Do same question with hash map resolution
