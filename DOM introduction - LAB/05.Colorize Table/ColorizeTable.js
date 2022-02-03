function colorize() {
    const rows = Array.from(document.querySelectorAll('table tr'));

    rows.forEach((el, index) => {
        if (index % 2 !== 0) {
            el.style.backgroundColor = 'teal';
        }
    });
}
