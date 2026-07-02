class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let res = 0;
        let last = 0;

        for (let i = 0; i < s.length; i++) {
            if (i === 0) {
                last = s[i].charCodeAt(0);
                continue;
            }

            res += Math.abs(s[i].charCodeAt(0) - last);
            last = s[i].charCodeAt(0);
        }

        return res;
    }
}
