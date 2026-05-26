class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const arr = [];

        for (let i = 0; i < numRows; i++) {
            const temp = [];

            for (let j = 0; j <= i; j++) {
                // bordas
                if (j === 0 || j === i) {
                    temp.push(1);
                } else {
                    temp.push(arr[i - 1][j - 1] + arr[i - 1][j]);
                }
            }

            arr.push(temp);
        }

        return arr;
    }
}
