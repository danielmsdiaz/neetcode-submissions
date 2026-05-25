class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let position = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === target) return i

            if(nums[i] > target){
                return position
            }

            position++
        }

        return nums.length
    }
}
