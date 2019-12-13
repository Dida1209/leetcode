/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length - 1;) {
        let maxStep = nums[i] + i;
        let _j = 0;
        if(i + nums[i] >= nums.length-1 || nums[i] === 0) {
            result += 1;
            break;
        }
        for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
            if(maxStep <= nums[i + j] + i + j) {
                maxStep = nums[i + j] + i + j;
                _j = j;
            }
        }
        if(_j) {
            i = i + _j;
        }else {
            i = i + nums[i]
        }    
        result += 1;   
    }
    return result;
};
module.exports = jump;