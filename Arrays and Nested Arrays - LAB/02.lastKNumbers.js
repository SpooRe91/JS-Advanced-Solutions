function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k)
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b);
        result.push(currentElement);
    }
    return result;
}
solve(6, 3)