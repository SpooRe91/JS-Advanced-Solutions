function lowestPricesInCities(input) {

    let fullObject = {};

    input.forEach((el) => {
        let [city, product, price] = el.split(" | ");

        if (!fullObject[product]) {
            fullObject[product] = {};
        }
        if (!fullObject[product][city]) {
            fullObject[product][city] = Number(price);
        }
    });

    Object.keys(fullObject).forEach((key) => {

        const arr = Object.entries(fullObject[key]).sort((a, b) => a[1] - b[1]);
            console.log(`${key} -> ${arr[0][1]} (${arr[0][0]})`);//arr=['city', price] = arr[0] & arr[1];
        //arr has multiple arrays, so we take the first after the sorting: 
        //arr[0][1](this is the price of 1st element) and arr[0][0] (name of the city of the 1st element);
    });
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);