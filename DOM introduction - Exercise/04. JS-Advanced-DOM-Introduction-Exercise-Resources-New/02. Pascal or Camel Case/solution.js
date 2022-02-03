function solve(textInput, transformerInput) {

  textInput = document.getElementById("text").value.toLowerCase();
  transformerInput = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");
  let output = "";

  textInput = textInput.split(" ");
  if (transformerInput === "Camel Case") {

    output += textInput[0][0].toLowerCase() +
      textInput[0].slice(1, textInput[0].length).toLowerCase();

    for (let i = 1; i < textInput.length; i++) {
      output += textInput[i][0].toUpperCase() + textInput[i].slice(1, textInput[i].length).toLowerCase();
    }
    resultElement.innerHTML = output;
  } else if (transformerInput === "Pascal Case") {

    for (let i = 0; i < textInput.length; i++) {
      output += textInput[i][0].toUpperCase() +
        textInput[i].slice(1, textInput[i].length).toLowerCase();
    }
    resultElement.innerHTML = output;
  } else {
    resultElement.textContent = "Error!"
  }

}
