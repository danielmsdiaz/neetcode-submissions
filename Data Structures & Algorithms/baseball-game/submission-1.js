class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];
        let previousOne = "";

        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            const length = record.length;

            if (operation === "+" && length >= 2) {
                previousOne = Number(record[length - 1]);
                const previousTwo = Number(record[length - 2]);
                record.push(previousOne + previousTwo);
            } else if (operation === "C") {
                record.pop();
            } else if (operation === "D") {
                previousOne = Number(record[length - 1]);
                record.push(previousOne * 2);
            } else {
                record.push(Number(operation));
            }
        }

        return record.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }
}
