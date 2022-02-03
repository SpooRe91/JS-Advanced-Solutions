/**
 * 
 * @param {*} num 
 * @returns 
 */

function add(num) {
    let sum = num;
/**
 * 
 * @param {*} n 
 * @returns 
 */
    function calculate(n) {
        sum += n;
        return calculate;
    }

    calculate.toString = () => sum;


    return calculate;
}

console.log(add(1)(28)(-3).toString())
