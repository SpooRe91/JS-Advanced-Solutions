function editElement(ref, match, replacer) {

    let allRefs = Array.from(document.querySelectorAll('h1'));

    for (let el of allRefs) {
        if (el.textContent.includes(match)) {
            el.textContent = el.textContent.replace(match, replacer);
        }
    }
}
    // ref.textContent = ref.textContent.replace(match, replacer)
    // return ref;
