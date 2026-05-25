class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let word of strs){
            const letters = [...word]
            const formedWord = letters.sort().join("");

            if(!map.has(formedWord)){
                map.set(formedWord, [word]);
                continue;
            }

            map.get(formedWord).push(word)
        }

        return Array.from(map.values())
    }
}
