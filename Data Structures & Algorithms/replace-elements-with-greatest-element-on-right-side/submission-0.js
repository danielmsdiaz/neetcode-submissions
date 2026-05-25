class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const output = [];

        for(let i = 0; i < arr.length; i++){
            let max = 0;
            for(let j = i + 1; j < arr.length; j++){
                max = max > arr[j] ? max : arr[j];
            }
            output.push(max);
        }
        output.pop();
        output.push(-1);
        return output
    }
}
