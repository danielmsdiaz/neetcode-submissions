class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        const left = [];
        
        for (let i = 0; i < nums.length; i++) {
            let res = 1;

            for (let j = i + 1; j < nums.length; j++) {
                res *= nums[j];
            }

            if (left.length) {
                for (let k = 0; k < left.length; k++) {
                    res *= left[k];
                }
            }

            output.push(res);
            left.push(nums[i]);
        }

        return output
    }
}
