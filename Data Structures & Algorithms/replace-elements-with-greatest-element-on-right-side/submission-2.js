class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1
        const output = [];

        for(let i = arr.length - 1; i >= 0; i--){
            output[i] = max;
            max = max > arr[i] ? max : arr[i];
        }

        return output
    }
}
