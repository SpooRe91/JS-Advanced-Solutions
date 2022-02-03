function addItem() {

    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const dropDown = document.getElementById('menu');

    let option = document.createElement('option');

    option.text = newItemText.value;
    option.value = newItemValue.value;

    if (newItemText.value !== '' && newItemValue.value !== '') {
        dropDown.appendChild(option);
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}
