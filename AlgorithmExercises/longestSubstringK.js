const longest_substring_with_k_distinct = function (str, k) {
  /**
   * Hash map de frecuencias de aparicion de caracteres
   * Obtener k caracteres del string como ventana principal
   * Agregar caracteres a la ventana
   * Recordar el valor de la longitud maxima de caracteres
   * agregar al string characteres solo si son iguales a la ventana
   * agregar a la longitud
   * Si son diferentes
   */
  let freqChar = new Map();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!freqChar.has(rightChar)) {
      freqChar.set(rightChar, 1);
    }
    freqChar.set(rightChar, freqChar.get(rightChar) + 1);

    while (freqChar.size > k) {
      const leftChar = str[windowStart];
      freqChar.delete(leftChar);
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
