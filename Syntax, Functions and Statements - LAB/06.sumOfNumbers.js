function solve(n, m) {
    const num1 = Number(n);
    const num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}
solve('5', '5')