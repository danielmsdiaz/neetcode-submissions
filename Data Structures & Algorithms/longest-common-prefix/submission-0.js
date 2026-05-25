class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";
        const firstWord = strs[0];
        let equals = true;

        for(let i = 0; i < firstWord.length; i++){
            for(let j = 1; j < strs.length; j++){
                if(firstWord[i] !== strs[j][i]){
                    equals = false;
                    break;
                }
            }
            if(equals){
                prefix += firstWord[i];
            }
        }

        return prefix
    }
}
