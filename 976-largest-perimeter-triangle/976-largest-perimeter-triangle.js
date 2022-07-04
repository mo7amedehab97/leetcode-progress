/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let sorted = nums.sort((a,b)=> a-b)
    for(let i = sorted.length-1 ; i>=2; i--){
        if( sorted[i] < sorted[i-1] + sorted[i-2]){
            return sorted[i] + sorted[i-1] + sorted[i-2]
        }

    }
    return 0
};