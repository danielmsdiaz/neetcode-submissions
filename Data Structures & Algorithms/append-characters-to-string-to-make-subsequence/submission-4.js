class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let sPointer = 0;
        let tPointer = 0;

        while(sPointer < s.length && tPointer < t.length){
            if(s[sPointer] === t[tPointer]){
                sPointer++
                tPointer++
            }
            else{
                sPointer++
            }
        }

        return t.length - tPointer
    }
}
