/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sortedArr = salary.sort((a, b) => a - b)
    sortedArr.splice(0, 1)
    sortedArr.splice(sortedArr.length-1, 1)

return sortedArr.reduce((a, b) => a + b) /sortedArr.length
};