class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subseq = [];
        let maxLength = 0;

        if (s === "") {
            return 0;
        }

        for (let i = 0; i < s.length; i++) {
            // se já existir na subsequência
            if (subseq.includes(s[i])) {
                // pega índice da repetição
                const repeatedIndex = subseq.indexOf(s[i]);

                // remove tudo até depois da repetição
                subseq = subseq.slice(repeatedIndex + 1);
            }

            // adiciona letra atual
            subseq.push(s[i]);

            // atualiza maior tamanho
            maxLength = Math.max(maxLength, subseq.length);
        }

        return maxLength;
    }
}
