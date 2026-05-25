class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                const index = map.get(nums[i]);
                if (Array.isArray(index)) {
                    map.set(nums[i], [...index, i]);
                } else {
                    map.set(nums[i], [index, i]);
                }
            } else {
                map.set(nums[i], i);
            }
        }

        const values = [...map.values()].filter((val) => Array.isArray(val));

        for (let i = 0; i < values.length; i++) {
            const arr = values[i];

            for (let j = 1; j < arr.length; j++) {
                if (arr[j] - arr[j - 1] <= k) {
                    return true;
                }
            }
        }

        return false;
    }
}
