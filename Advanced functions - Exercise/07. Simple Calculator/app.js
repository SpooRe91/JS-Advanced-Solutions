function calculator() {

    let [num1, num2, result] = '';

    let parser = {
        init: function (selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: function () {
            result.value = Number(num1.value) + Number(num2.value)
        },
        subtract: function () {
            result.value = Number(num1.value) - Number(num2.value)
        },
    }
    return parser;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




