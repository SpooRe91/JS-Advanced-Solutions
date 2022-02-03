function addItem() {
    let itemsElement = document.getElementById("items");
    itemsElement.addEventListener("click", deleteItem);

    let newItemText = document.getElementById("newItemText");
    let newItem = document.createElement("li");

    newItem.innerHTML = `${newItemText.value}<a href="#">[Delete]</a>`;
    itemsElement.appendChild(newItem);
    newItem.value = '';
    // newItemText.value = '';//this is added just to clear the input field(not required);

    function deleteItem(ev) {
        let element = ev.target;
        element.remove();
    }
}
