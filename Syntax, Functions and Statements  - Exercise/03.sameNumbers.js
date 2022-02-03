function solve(input) {
    let isTrue = true;
    let result = 0
    const arr = input.toString().split("");
    arr.forEach((el => {
        if (el !== arr[0]) {
            isTrue = false;
        }
    }));

    result = arr.map(el => Number(el)).reduce((a, b) => a + b);
    isTrue ? console.log(`true\n${result}`) : console.log(`false\n${result}`);
}
// if (isTrue) {
//     console.log(`true\n${result}`);
// } else {
//     console.log(`false\n${result}`);
// }
solve(2222222);
solve(1234);