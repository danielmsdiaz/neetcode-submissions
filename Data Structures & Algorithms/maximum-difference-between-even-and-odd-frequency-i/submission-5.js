class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const map = new Map();

        for(let i = 0; i < s.length; i++){
            if(map.has(s[i])){
                map.set(s[i], map.get(s[i]) + 1);
            }
            else{
                map.set(s[i], 1);
            }
        }

        return Math.max(...[...map.values()].filter(val => val % 2 !== 0)) - Math.min(...[...map.values()].filter(val => val % 2 === 0))
    }
}
