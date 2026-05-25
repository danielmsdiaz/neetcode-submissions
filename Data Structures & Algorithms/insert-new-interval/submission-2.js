class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < intervals.length; i++) {
            // merge pela esquerda
            if (newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
                newInterval = [intervals[i][0], Math.max(newInterval[1], intervals[i][1])];

                intervals.splice(i, 1);
                i--;
            }

            // merge pela direita
            else if (newInterval[1] >= intervals[i][0] && newInterval[1] <= intervals[i][1]) {
                newInterval = [Math.min(newInterval[0], intervals[i][0]), intervals[i][1]];

                intervals.splice(i, 1);
                i--;
            }

            // novo intervalo engloba totalmente
            else if (newInterval[0] <= intervals[i][0] && newInterval[1] >= intervals[i][1]) {
                intervals.splice(i, 1);
                i--;
            }

            // inserir antes
            else if (newInterval[1] < intervals[i][0]) {
                intervals.splice(i, 0, newInterval);
                return intervals;
            }
        }

        // inserir no final
        intervals.push(newInterval);

        return intervals;
    }
}
