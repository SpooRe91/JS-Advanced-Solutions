// function deleteByEmail() {

//     let inputField = document.querySelector('input[name="email"]');
    
//     const tableElements = Array.from(document.querySelectorAll('tbody tr'))
//         .filter((el) => el.lastElementChild.textContent == inputField.value);
//     tableElements.forEach((el) => el.remove());

//     document.getElementById("result").textContent =
//         tableElements.length > 0 ? "Deleted." : "Not found.";
// }
function deleteByEmail() {

    let inputField = document.querySelector("input");;
    let tableElements = Array.from(document.querySelectorAll("tbody tr"));
    let isRemoved = false;
    tableElements.forEach((el) => {

        let emailToCheck = el.lastElementChild;
        if (emailToCheck.textContent == inputField.value) {
            el.remove();
            isRemoved = true;
        }
    });
    if (isRemoved) {
        document.getElementById("result").textContent = "Deleted."
    } else {
        document.getElementById("result").textContent = "Not found."
    }
}