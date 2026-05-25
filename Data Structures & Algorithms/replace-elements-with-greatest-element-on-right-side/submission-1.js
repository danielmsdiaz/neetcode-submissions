class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const output = new Array(arr.length);
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            output[i] = maxRight;
            maxRight = Math.max(maxRight, arr[i]);
        }

        return output;
    }
}
