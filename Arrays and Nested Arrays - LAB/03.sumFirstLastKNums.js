function solve(arr) {

    arr = arr.map((el) => Number(el));
    return arr = arr.shift() + arr.pop();

}
solve(['20', '30', '40'])