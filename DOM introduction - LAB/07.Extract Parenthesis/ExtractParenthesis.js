function extract(content) {

    const pattern = /\((.+?)\)/g;

    const text = document.getElementById("content").textContent;
    let result = "";

    let matches = pattern.exec(text);
    while (matches !== null) {
        result += `${matches[1]}; `;
        matches = pattern.exec(text);
    }

    return result

}


