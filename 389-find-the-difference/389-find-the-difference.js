/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
let arr = [...s,...t]
let res = arr.reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});  
  let as =''
  for (const [key, value] of Object.entries(res)) {
 if(value%2 !== 0 ){
   as = key
 }
}
  return as
};