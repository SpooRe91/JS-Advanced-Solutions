window.addEventListener('load', solution);

function solution() {

    let [fullName, email, fNumber, adress, postalCode] = document.querySelectorAll('div input');

    let labelsArray = Array.from(document.querySelectorAll('div label'));

    let button = document.querySelector('input[value="Submit"]');
    let ulElement = document.getElementById('infoPreview');

    let [btnEdit, btnCont] = ulElement.parentElement.querySelectorAll('input[type="button"]');
    let obj = {};

    button.addEventListener('click', addInfo);

    function addInfo(ev) {

        [fullName, email, fNumber, adress, postalCode].forEach((el, index) => {

            obj[el.id] = el.value;

            if (fullName.value && email.value) {
                if (el.value !== '') {
                    createEl('li', (labelsArray[index]).textContent, el.value, ulElement);
                }
                ev.target.disabled = true;
                Array.from(ulElement.parentElement.querySelectorAll('input[type="button"]'))
                    .map(el => el.disabled = false);
            }
        });
        [fullName, email, fNumber, adress, postalCode].map(el => el.value = "");
    }
    btnEdit.addEventListener('click', edit);

    function edit(ev) {

        let liArrPrev = Array.from(ulElement.children);

        liArrPrev.forEach((li) => {
            li.remove();
        });

        Object.keys(obj).forEach((key) => {
            [fullName, email, fNumber, adress, postalCode].forEach((el) => {

                if (key === el.id) {
                    el.value = obj[el.id];
                }
            });
        });
        btnEdit.disabled = true;
        btnCont.disabled = true;
        button.disabled = false;
    }

    btnCont.addEventListener('click', removeAll);

    function removeAll(ev) {

        const blockDiv = document.querySelector('#block');
        blockDiv.innerHTML = "";
        let newH3 = document.createElement('h3');
        newH3.textContent = "Thank you for your reservation!";
        blockDiv.replaceChildren(newH3);
    }

    function createEl(type, key, textContent, curParent) {
        let el = document.createElement(type);
        el.textContent = `${key} ${textContent}`;
        curParent.appendChild(el);
    }
}