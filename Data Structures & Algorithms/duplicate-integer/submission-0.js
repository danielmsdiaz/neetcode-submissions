class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!map.get(nums[i])){
                map.set(nums[i], 1);
            }
            else{
                map.set(nums[i], map.get(nums[i])+ 1)
            }
        }

        const values = Array.from(map.values());

        return values.some((val) => val > 1)
    }
}
