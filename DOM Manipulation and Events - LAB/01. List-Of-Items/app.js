function addItem() {
    const inputElement = document.getElementById("newItemText");
    let inputText = inputElement.value;

    let mainElement = document.querySelector("main ul");
    let newLi = document.createElement("li");

    newLi.textContent = inputText;
    mainElement.appendChild(newLi);
}