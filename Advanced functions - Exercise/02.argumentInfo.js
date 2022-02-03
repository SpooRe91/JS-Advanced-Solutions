function argumentInfo() {

    let uniqueArguments = params.reduce((acc, el) => {
        let currentType = typeof el;
        console.log(`${currentType}: ${el}`);

        if (!acc[currentType]) {
            acc[currentType] = 0;
        }
        acc[currentType]++;

        return acc;
    }, {});

    Object.keys(uniqueArguments)
        .sort((a, b) => uniqueArguments[b] - uniqueArguments[a])
        .forEach((el) => console.log(`${el} = ${uniqueArguments[el]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!') });