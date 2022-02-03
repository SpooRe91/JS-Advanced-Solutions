function solve(arr) {
    let results = [];
    const result1 = arr.reduce((a, b) => a + b);
    const result2 = arr.reduce((a, b) => a + 1 / b, 0);
    const result3 = arr.join("");
    results.push(result1, result2, result3);
    results.forEach((el) => console.log(el));
}
solve([1, 2, 3]);