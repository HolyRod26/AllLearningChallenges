var twoSum = function (nums, target) {
  // Crear una variable para guardar el resultado, los indices de los dos numeros
  // Recorrer el array
  // Restar el target con el primer elemento del array y guardarlo
  // Comparar el valor previo con el resto del array, (si es igual retornar la posicion de los dos numeros.)

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let comparison = target - nums[i];
    let i2 = nums.findIndex((item) => item === comparison);
    if (i2 !== -1) return (result = [i, i2]);
  }
  return result;
};

console.log(twoSum([3, 2, 4], 6));
