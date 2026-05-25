class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for (let i = 0; i < nums.length; i++) {
            const map = new Map();

            for (let j = i + 1; j < nums.length; j++) {
                const diff = nums[i] - nums[j];

                if (nums[i] > nums[j]) {
                    if (map.has(diff)) {
                        map.get(diff).push(j);
                    } else {
                        map.set(diff, [j]);
                    }
                }
            }

            if (map.size > 0) {
                const biggestKey = Math.max(...map.keys());

                const indexes = map.get(biggestKey);

                let current = i;

                for (let k = 0; k < indexes.length; k++) {
                    const idx = indexes[k];

                    [nums[current], nums[idx]] = [nums[idx], nums[current]];

                    current = idx;
                }
            }
        }

        return nums;
    }
}
