class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let finalWord = "";

        for (let i = 0; i < word1.length; i++) {
            finalWord += word1[i];

            for (let j = i; j < word2.length; j++) {
                finalWord += word2[j];
                if(i === word1.length - 1){
                    continue;
                }
                else{
                    break;
                }
            }
        }

        return finalWord;
    }
}
