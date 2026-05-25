class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        let seq = new Set();

        const sortedNums = [...nums].sort((a, b) => a - b);

        if (sortedNums.length === 0) {
            return 0;
        }

        seq.add(sortedNums[0]);

        for (let i = 0; i < sortedNums.length - 1; i++) {
            const first = sortedNums[i];
            const second = sortedNums[i + 1];
            const diff = second - first;

            // ignora números repetidos
            if (diff === 0) {
                continue;
            }

            if (diff === 1) {
                seq.add(second);
            } else {
                map.set(new Set(seq), seq.size);

                seq.clear();
                seq.add(second);
            }
        }

        // salva a última sequência
        map.set(new Set(seq), seq.size);

        let max = 0;

        for (const size of map.values()) {
            max = Math.max(max, size);
        }

        return max;
    }
}
