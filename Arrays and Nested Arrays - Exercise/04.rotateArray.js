function solve(arr, num) {

    let index = 0
    while (index < num) {
        let el = arr.pop();
        arr.unshift(el);
        index++;
    }
    console.log(arr.join(" "));
}
// solve(['1', '2', '3', '4'],
//     2
// );
solve(['Banana', 'Orange', 'Coconut', 'Apple'],
    15);