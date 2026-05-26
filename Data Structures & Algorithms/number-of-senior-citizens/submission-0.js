class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        const arr = [];

        for(let detail of details){
            const age = detail.slice(11, detail.length - 2);
            
            if(Number(age) > 60){
                arr.push(detail);
            }
        }

        return arr.length
    }
}
