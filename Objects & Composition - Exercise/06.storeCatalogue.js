function storeCatalogue(arr) {
    
    let firstChar = '';
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((el) => {

        let [name, price] = el.split(" : ");
        const firstLetter = name[0];

        if (firstLetter !== firstChar) {
            console.log(firstLetter);
        }
        console.log(`  ${name}: ${price}`);
        firstChar = firstLetter;
    });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)