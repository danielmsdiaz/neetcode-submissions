class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arrS = [...s];
        const arrT = [...t];

        if(arrS.length !== arrT.length){
            return false
        };

        return arrS.sort().join("") === arrT.sort().join("")
    }
}
