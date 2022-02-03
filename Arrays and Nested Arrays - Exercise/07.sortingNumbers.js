function solve(arr) {

    let result = arr.sort((a, b) => a - b)
        .reduce((acc) => {
            while (arr.length) {
                acc.push(arr.shift());
                if (arr.length) {
                    acc.push(arr.pop());
                }
            }
            return acc;
        }, []);
    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 12]);