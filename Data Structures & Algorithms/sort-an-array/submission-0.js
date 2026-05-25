class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            const map = new Map();

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    map.set(nums[i] - nums[j], j);
                }
            }

            // evita Map vazio
            if (map.size > 0) {
                const biggestKey = Math.max(...map.keys());
                const index = map.get(biggestKey);

                const firstNum = nums[i];
                const lower = nums[index];

                nums[i] = lower;
                nums[index] = firstNum;
            }
        }

        return nums;
    }
}
