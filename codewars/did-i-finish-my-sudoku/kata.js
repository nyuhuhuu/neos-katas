const range = n => Array(n).fill().map((_, idx) => idx);

const getRow = (board, index) => new Set(board[index]);

const getColumn = (board, index) => {
    const column = board.reduce((column, arr) => {
        return column.concat([arr[index]]);
    }, []);
    return new Set(column);
};

const getRegion = (board, index, size) => {
    const x = index % size;
    const y = Math.floor(index / size);
    const region = board.reduce((region, row, index) => {
        if (index < y * size || index >= y * size + size) return region;
        return region.concat(row.slice(x * size, x * size + size));
    }, []);
    return new Set(region);
};

const doneOrNot = board => {
    const size = 9;
    const isValidSet = set => set.size == size;
    const isValidBoard = range(size).every(n => {
        return isValidSet(getColumn(board, n)) &&
            isValidSet(getRow(board, n)) &&
            isValidSet(getRegion(board, n, Math.sqrt(size)));
    });
    if (isValidBoard) return "Finished!";
    return "Try again!";
};

// test
console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                       [6, 7, 2, 1, 9, 5, 3, 4, 8],
                       [1, 9, 8, 3, 4, 2, 5, 6, 7],
                       [8, 5, 9, 7, 6, 1, 4, 2, 3],
                       [4, 2, 6, 8, 5, 3, 7, 9, 1],
                       [7, 1, 3, 9, 2, 4, 8, 5, 6],
                       [9, 6, 1, 5, 3, 7, 2, 8, 4],
                       [2, 8, 7, 4, 1, 9, 6, 3, 5],
                       [3, 4, 5, 2, 8, 6, 1, 7, 9]]));

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                       [6, 7, 2, 1, 9, 0, 3, 4, 9],
                       [1, 0, 0, 3, 4, 2, 5, 6, 0],
                       [8, 5, 9, 7, 6, 1, 0, 2, 0],
                       [4, 2, 6, 8, 5, 3, 7, 9, 1],
                       [7, 1, 3, 9, 2, 4, 8, 5, 6],
                       [9, 0, 1, 5, 3, 7, 2, 1, 4],
                       [2, 8, 7, 4, 1, 9, 6, 3, 5],
                       [3, 0, 0, 4, 8, 1, 1, 7, 9]]));
