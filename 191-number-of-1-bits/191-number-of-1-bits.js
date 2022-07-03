/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let nStr = n.toString(2)
   let arr = nStr.split("")
   const ones = arr.filter((digit) => digit === "1")
   return ones.length
};