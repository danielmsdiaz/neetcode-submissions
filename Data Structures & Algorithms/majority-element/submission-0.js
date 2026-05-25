class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])){
                map.set(nums[i], 1);
            }
            else{
                map.set(nums[i], map.get(nums[i]) + 1)
            }
        }

        for (const value of map.keys()) {
            if(map.get(value) > Math.floor(nums.length/2)){
                return value
            }
        }

    }
}
