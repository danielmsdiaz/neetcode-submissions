class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0;
        let right = x;
        let ans = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const square = mid * mid;

            if (square === x) return mid;

            if (square < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }
}
