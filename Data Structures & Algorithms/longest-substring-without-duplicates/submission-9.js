class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subseq = [];
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (subseq.includes(s[i])) {
                const repeatedIndex = subseq.indexOf(s[i]);

                // remove tudo até depois da repetição
                subseq = subseq.slice(repeatedIndex + 1);
            }

            subseq.push(s[i]);

            if(maxLength < subseq.length){
                maxLength = subseq.length;
            }
        }

        return maxLength
    }
}
