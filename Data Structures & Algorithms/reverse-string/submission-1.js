class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            const firstLetter  = s[left];
            const lastLetter = s[right];

            s[right] = firstLetter;
            s[left] = lastLetter;

            left++
            right--

        }

        return console.log(s)
    }
}
