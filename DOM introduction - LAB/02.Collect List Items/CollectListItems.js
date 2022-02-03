function extractText() {
    const textElements = document.getElementById("items").textContent;

    let textArea = document.getElementById("result");
    textArea.textContent = textElements.trim();
}