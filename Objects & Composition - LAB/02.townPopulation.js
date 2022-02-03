function solve(arr) {

    let towns = arr.reduce((acc, el) => {
        let [name, pop] = el.split(" <-> ");
        if (!acc[name]) {
            acc[name] = 0;
        }
        acc[name] += Number(pop);
        return acc;
    }, {});
    Object.keys(towns).forEach((el) => console.log(`${el} : ${towns[el]}`));
}
// for (let el of arr) {
//     let [name, pop] = el.split(" <-> ");
//     if (towns[name]) {
//         towns[name] += Number(pop);
//     } else {
//         towns[name] = Number(pop);
//     }
// }
// Object.keys(towns).forEach((el) => console.log(`${el} : ${towns[el]}`));

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);