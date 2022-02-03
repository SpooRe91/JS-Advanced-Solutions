//NOT READY!
// function previousDay(year, month, date) {

//     let currDate = new Date(year, month, date);
//     let oneDay = 24 * 60 * 60 * 1000;
//     let nextDate = new Date(currDate.getTime() - oneDay);
//     console.log(`${nextDate.getFullYear()}-${nextDate.getMonth()}-${nextDate.getDate()}`);
//     // return nextDate.getFullYear() + "-" + nextDate.getMonth() + "-" + nextDate.getDate().toFixed(2);


// }

// console.log(date.getDate());
function previousDay2(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    // return date.getFullYear() + "-" + date.getMonth() + "-" + (date.getDate() - 1);
}
previousDay2(2016, 9, 30);
previousDay2(2016, 10, 1);