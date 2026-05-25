class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
    const arr = [];
    let i = 0;

    while (arr.length !== nums.length * 2) {
        if (i === nums.length) {
            i = 0;
        }

        arr.push(nums[i]);
        i++;
    }

    return arr;
}
}
