function subtract() {

    const number1 = document.getElementById("firstNumber").value;
    const number2 = document.getElementById("secondNumber").value;
    const resultElement = document.getElementById("result");

    resultElement.textContent = Number(number1) - Number(number2);


}