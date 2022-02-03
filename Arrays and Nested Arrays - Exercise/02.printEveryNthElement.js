function solve(arr, num) {

    let result = arr.reduce((acc, el, index) => {
        if (index % num === 0) {
            acc.push(el);
        }
        return acc;
    }, [])
    return result;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)
solve(['dsa',
    'asd',
    'test',
    'tset'],
    2
)