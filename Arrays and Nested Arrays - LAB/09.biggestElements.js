function solve(matrix) {

    let result = matrix.flat().reduce((acc, val) => {
        acc.push(val);
        return acc;
    }, [])
    return ((result.sort((a, b) => a - b).pop()));
}

// let result = matrix.flat().sort((a, b) => a - b).pop();
// return result;


// for (let i = 0; i < input.length; i++) {
    //     let currArr = input[i];
    //     currArr.forEach(el => {
    //         newArr.push(el);
    //     });
    // }
    // console.log(newArr.sort((a, b) => a - b).pop());

    // function getBiggestElement(matrix) {
    //     return (matrix
    //         .flat()
    //         .sort((a, b) => b - a).shift());
    // }
    // getBiggestElement([[20, 50, 10],
    // [8, 33, 145]]
    // )

solve([[20, 50, 10],
[8, 33, 145]]
)