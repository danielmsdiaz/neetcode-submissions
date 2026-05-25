class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let len = 0;
        const arr = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== " ") {
                len++;
                continue;
            }
            if (s[i] === " ") {
                if (len > 0) {
                    arr.push(len);
                }
                len = 0;
                continue;
            }
        }

        if (len > 0) {
            arr.push(len);
        }

        return arr.pop()
    }
}
