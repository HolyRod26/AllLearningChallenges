function closest_pair_from_two_sorted_array(arr1 = [], arr2 = [], x) {
  // Crear dos pointers para los dos arrays
  // Crear el valor para la diferencia entre x y la suma
  // Iniciar el pointer 1 en la posicion inicial 0 y el segundo en final del segundo array
  // Hacer la suma entre los pointers
  // Si la suma es mayor a x
  // Si la suma es menor o igual a x añadir al segundo pointer
  // Si la suma menos x es menor que la diferencia actual
  // Calcular la nueva diferencia y asignarla
  // Actualizar los valores de resultado

  // si es menor agregarle al primer pointer
  // Revisar si la diferencia de la suma es menor a la diferencia actual.

  let res_1,
    res_2,
    pointer1 = 0,
    pointer2 = arr2.length - 1,
    diff = Number.MAX_VALUE;

  while (pointer1 < arr1.length && pointer2 >= 0) {
    if (Math.abs(arr1[pointer1] + arr2[pointer2] - x) < diff) {
      res_1 = pointer1;
      res_2 = pointer2;
      diff = Math.abs(arr1[pointer1] + arr2[pointer2] - x);
    }
    if (arr1[pointer1] + arr2[pointer2] > x) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
  return [arr1[res_1], arr2[res_2]];
}

console.log(
  closest_pair_from_two_sorted_array([1, 4, 6, 7, 9], [10, 20, 30, 40, 50], 54)
);
