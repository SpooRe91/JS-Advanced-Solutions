function findPairs(matrix) {
    const end = matrix.length;
    const rowLength = matrix[0].length;
    let pairs = 0;

    for (let row = 0; row < end; row++) {
        const currentRow = matrix[row];
        for (let col = 0; col < rowLength; col++) {
            let element = currentRow[col];
            let nextRowElement = '';
            if (row < end - 1) {
                nextRowElement = matrix[row + 1][col];
            }
            let nextElement = currentRow[col + 1];

            if (element === nextElement) {
                pairs++;
            }

            if (element === nextRowElement) {
                pairs++;
            }
        }
    }

    return pairs;
}