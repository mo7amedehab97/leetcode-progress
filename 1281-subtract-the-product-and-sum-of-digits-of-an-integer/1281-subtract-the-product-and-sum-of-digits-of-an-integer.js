/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var digits = n.toString().split('').map(iNum => parseInt(iNum, 10))
    return digits.reduce((acc, curr)=> acc * curr ) - digits.reduce((acc, curr)=> acc + curr )
};