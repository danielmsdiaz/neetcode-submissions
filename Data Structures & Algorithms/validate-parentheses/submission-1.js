class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            // se for abertura
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            }
            // se for fechamento
            else {
                // pega último da pilha
                const top = stack.pop();

                // verifica se combina
                if (top !== pairs[char]) {
                    return false;
                }
            }
        }

        // se sobrou algo na pilha, é inválido
        return stack.length === 0;
    }
}
