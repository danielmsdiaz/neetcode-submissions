class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let res = [];
        const restart = nums.length - 1

        while(left <= right){
            if(right === left){
                left++
                right = restart
                continue;
            }

            let sum = nums[left] + nums[right];

            if(sum === target){
                return res = [left,right];
            }

            right--
        }

        return res;
    }
}
