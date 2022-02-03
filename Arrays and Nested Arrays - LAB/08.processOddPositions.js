function solve(arr) {

    let result = arr.reduce((acc, el, index) => {
        if (index % 2 !== 0) {
            acc.push(el * 2);
        }
        return acc;
    }, []);
    return result;

    // let result = [];
    // arr.forEach((el, index) => {
    //     if (index % 2 !== 0) {
    //         result.push(el * 2);
    //     }
    // })

}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
