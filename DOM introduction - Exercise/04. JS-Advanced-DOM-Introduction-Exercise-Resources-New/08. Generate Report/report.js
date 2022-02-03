function generateReport() {

    let currInfo = Array.from(document.querySelectorAll("input"));
    let table = Array.from(document.querySelectorAll("tbody tr"));

    let tableArr = new Array(table)[0];

    let output = [];

    for (let i = 0; i < table.length; i++) {

        let employeeInfo = {};
        currInfo.forEach((el2, j) => {

            if (el2.checked === true) {
                let header = el2.name;
                let result = tableArr[i].textContent
                    .split("\n")
                    .map(x => x.trim(" "))
                    .filter(x => x !== "")[j];

                employeeInfo[header] = result;
            };
        });
        output.push(employeeInfo);
    };

    let otuputResult = JSON.stringify(output);
    let divOut = document.getElementById("output");
    divOut.value = otuputResult;
}
