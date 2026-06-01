class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const output = [];

        for (const val of nums1) {
            const start = nums2.indexOf(val);
            let greater = -1;

            for (let j = start + 1; j < nums2.length; j++) {
                if (nums2[j] > val) {
                    greater = nums2[j];
                    break;
                }
            }

            output.push(greater);
        }

        return output;
    }
}
