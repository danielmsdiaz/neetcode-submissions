class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let seq = 0

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                seq += 1
                max = Math.max(max, seq);
            }
            else{
                seq = 0;
            }
        }

        return max
    }
}
