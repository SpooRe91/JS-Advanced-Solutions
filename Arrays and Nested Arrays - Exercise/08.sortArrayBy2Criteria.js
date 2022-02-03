function solve(arr) {

    arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach((el) => console.log((el)));
}
solve(['alpha',
    'beta',
    'gamma']
)