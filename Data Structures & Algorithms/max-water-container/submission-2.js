class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const arr = [];
        let max = 0;

        for(let i = 0; i < heights.length; i++){
            for(let j = i + 1; j < heights.length; j++){
                const volume = Math.min(heights[i], heights[j]) * Math.abs(i - j);

                if(volume > max){
                    arr.pop();
                    arr.push(volume);
                    max = volume;
                }
                
            }
        }

        return max
    }
}
