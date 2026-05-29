class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const sortedWords = words.sort((a, b) => a.length - b.length);
        const set = new Set();

        for (let i = 0; i < sortedWords.length; i++) {
            for (let j = i + 1; j < sortedWords.length; j++) {
                if(sortedWords[i].includes(sortedWords[j])){
                    set.add(sortedWords[j])
                    continue;
                }
                else if(sortedWords[j].includes(sortedWords[i])){
                    set.add(sortedWords[i])
                    continue;
                }
            }
        }
        
        return [...set.values()];
    }
}
