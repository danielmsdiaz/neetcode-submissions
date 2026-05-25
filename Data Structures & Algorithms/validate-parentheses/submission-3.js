class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if(stack.length === 0){
                    return false;
                }
                
                const lastOpenChar = stack.pop();

                if (lastOpenChar !== pairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
