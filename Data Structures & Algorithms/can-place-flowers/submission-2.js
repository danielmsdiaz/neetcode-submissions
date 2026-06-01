class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let can = 0;
        let last = 0;
        
        for(let i = 0; i < flowerbed.length; i++){
            if(flowerbed[i] === 0){
                if(flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && i !== (last + 1)){
                    can++
                    last = i;
                }
            }
        }

        return can >= n
    }
}
