class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    sanitize(str) {
        return str
            .split("")
            .filter((char) => {
                const code = char.charCodeAt(0);

                return (
                    (code >= 48 && code <= 57) || // 0-9
                    (code >= 65 && code <= 90) || // A-Z
                    (code >= 97 && code <= 122) // a-z
                );
            })
            .join("").toLowerCase();
    }

    isPalindrome(s) {
        const clearStr = this.sanitize(s);
        let left = 0;
        let right = clearStr.length - 1;

        while(left < right){
            if(clearStr[left] === clearStr[right]){
                left++
                right--
                continue;
            }
            return false; 
        }

        return true

    }
}
