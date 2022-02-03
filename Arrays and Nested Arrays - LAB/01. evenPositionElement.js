function solve(arr) {

    console.log(arr.filter((el) => arr.indexOf(el) % 2 == 0).join(" "));
}
solve(['20', '30', '40', '50', '60'])