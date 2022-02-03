function getDaysInMonth(month, year) {

    const date = new Date(year, month, 0);
    return date.getDate();
    // console.log(date.getDate());
}
getDaysInMonth(2, 2021);