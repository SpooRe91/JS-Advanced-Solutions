function sumTable() {

    const rows = Array.from(document.querySelectorAll('table tr'));
    rows.shift();
    rows.pop();
    let sum = 0;

    rows.forEach((el) => {

        const cell = el.lastElementChild;
        sum += Number(cell.textContent);

    });

    document.getElementById('sum').textContent = sum;

}