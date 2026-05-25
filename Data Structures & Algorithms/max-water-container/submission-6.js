class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            const volume = Math.min(heights[left], heights[right]) * Math.abs(left - right);

            if (heights[right] > heights[left]) {
                left++;
            } else {
                right--;
            }

            if (volume > max) {
                max = volume;
            }
        }

        return max;
    }
}
