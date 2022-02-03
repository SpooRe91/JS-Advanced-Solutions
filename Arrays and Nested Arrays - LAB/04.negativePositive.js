function solve(arr) {

    let result = [];
    arr.forEach((el) => {
        el >= 0 ? result.push(el) : result.unshift(el);
    })
    result.forEach(el => console.log(el));
}
solve([7, -2, 8, 9])