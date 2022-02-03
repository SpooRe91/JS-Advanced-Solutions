function calorieCreater(array) {

    let calories = array.reduce((acc, el, index) => {

        index % 2 === 0 ? acc[el] = Number(array[index + 1]) : acc[el];
        return acc;
    }, {});
    console.log(calories);
}
// array.forEach((el, index) => {
//     if (index % 2 === 0) {
//         calories[el] = Number(array[index + 1]);
//     }
// });
calorieCreater(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);