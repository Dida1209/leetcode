/**
 * @param {number[]} nums
 * @return {number}
 */
// export const firstMissingPositive = function(nums) {
//     let arr = new Array(nums.length).fill(false);
//     let i = 0;
//     for(;i < nums.length; i++) {
//         let value = nums[i];
//         if(value > 0 && value <= nums.length) {
//             if(value !== i+1 && !arr[value - 1]){
//                 let temp = nums[value - 1];
//                 nums[value - 1] = value;
//                 nums[i] = temp;
//                 arr[value - 1] = true;
//                 i--;
//             }else if(arr[value - 1] && value - 1 !== i){
//                 arr[i] = false;
//             }else {
//                 arr[i] = true
//             }
//         } else {
//             arr[i] = false;
//         }        
//     }
//     i = 0;
//     while (i < arr.length) {
//         if(!arr[i]) {
//             break;
//         } else {
//             i++ ;
//         }
//     }
//     return i + 1;
// };

function firstMissingPositive (nums) {
    let arr = new Array(nums.length).fill(false);
    let i = 0;
    for(;i < nums.length; i++) {
        let value = nums[i];
        if(value > 0 && value <= nums.length) {
            if(value !== i+1 && !arr[value - 1]){
                let temp = nums[value - 1];
                nums[value - 1] = value;
                nums[i] = temp;
                arr[value - 1] = true;
                i--;
            }else if(arr[value - 1] && value - 1 !== i){
                arr[i] = false;
            }else {
                arr[i] = true
            }
        } else {
            arr[i] = false;
        }        
    }
    i = 0;
    while (i < arr.length) {
        if(!arr[i]) {
            break;
        } else {
            i++ ;
        }
    }
    return i + 1;
};
module.exports = firstMissingPositive;