function solve(string1, string2, string3) {

    let length = string1.length + string2.length + string3.length;
    console.log(`${length}\n${Math.floor(length / 3)}`);
}
solve('chocolate', 'ice cream', 'cake')