function solution() {
    const container = document
        .querySelector(".container")
        .addEventListener("click", onClick);
    const [add, list, send, discarded] = document.querySelectorAll(".card");
    const input = document.querySelector('input[type="text"]');

    function createNewElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        return parent.appendChild(element);
    }


    function onClick(ev) {
        ev.preventDefault();

        //   add button
        if (ev.target.textContent == "Add gift") {
            let ul = list.querySelector("ul");
            let li = createNewElement("li", input.value, ul);

            let sendBtn = createNewElement("button", "Send", li);
            sendBtn.setAttribute("id", "sendButton");

            let discardBtn = createNewElement("button", "Discard", li);
            discardBtn.setAttribute("id", "discardButton");

            Array.from(ul.querySelectorAll('li'))
                .sort((a, b) => { return a.textContent.localeCompare(b.textContent) })
                .forEach((li) => ul.appendChild(li));

            input.value = '';
        };

        //   send items
        if (ev.target.textContent == "Send") {
            let currentLi = ev.target.parentNode;
            send.querySelector("ul").appendChild(currentLi);
            Array.from(currentLi.querySelectorAll("button")).forEach((element) =>
                element.remove()
            );
        };

        // discard items
        if (ev.target.textContent == "Discard") {
            let currentLi = ev.target.parentNode;
            discarded.querySelector("ul").appendChild(currentLi);
            Array.from(currentLi.querySelectorAll("button")).forEach(
                (element) => element.remove()
            );
        };
    }
}