class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let seq = 0
        const arr = [];
        
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 1){
                arr.push(seq);
                seq = 0;
                continue;
            }
            seq++
        }

        arr.push(seq)

        return Math.max(...arr)
    }
}
