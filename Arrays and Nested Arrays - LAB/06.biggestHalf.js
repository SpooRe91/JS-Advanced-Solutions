function solve(arr) {

    arr = arr.sort((a, b) => a - b).slice((arr.length / 2), arr.length);
    console.log(arr);
    return arr;
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);