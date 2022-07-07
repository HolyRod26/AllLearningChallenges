/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let wStart = 0;
  let freqChar = new Map();
  let maxLength = Infinity;
  let subString = "";

  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    let rightChar = s[wEnd];
    subString += rightChar;
    if (freqChar.has(rightChar)) {
      freqChar.set(rightChar, freqChar.get(rightChar) + 1);
      let charToReduce = s[wStart];
      if (freqChar.get(charToReduce) > 1) {
        freqChar.set(charToReduce, freqChar.get(charToReduce) - 1);
      } else {
        freqChar.delete(charToReduce);
      }
      subString = subString.slice(wStart + 1);
      maxLength = subString.length;
      wStart++;
    }
    maxLength = subString.length;
    freqChar.set(rightChar, 1);
    maxLength = Math.max(maxLength, subString.length);
  }
  return maxLength;
};

lengthOfLongestSubstring("abcabcbb");
