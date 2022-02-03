function solve(x, y) {

    let first = Number(Math.abs(x));
    let second = Number(Math.abs(y));
    // while (first !== second) {
    //     // if (first > second) {
    //     //     first -= second;
    //     // } else {
    //     //     second -= first;
    //     // }
    while (second) {
        let t = second;
        second = first % second;
        first = t;
    }
    console.log(first);
}
solve(18, 5);
solve(2154, 458);