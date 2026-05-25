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
        let checkStr = "";
        
        for(let i = clearStr.length - 1; i >= 0; i--){
            checkStr += clearStr[i];
        }

        return clearStr === checkStr

    }
}
