function toggle() {
    const buttonElement = document.querySelector(".button");
    const textInfo = document.getElementById("extra");

    buttonElement.textContent = buttonElement.textContent === "More" ? "Less" : "More";
    textInfo.style.display = textInfo.style.display == "none" || textInfo.style.display == "" ?
        textInfo.style.display = "block" : textInfo.style.display = "none";

    // if (buttonElement.textContent === "More") {
    //     buttonElement.textContent = "Less";
    //     textInfo.style.display = "block"
    // } else if (buttonElement.textContent === "Less") {
    //     buttonElement.textContent = "More";
    //     textInfo.style.display = "none";
    // }
}
