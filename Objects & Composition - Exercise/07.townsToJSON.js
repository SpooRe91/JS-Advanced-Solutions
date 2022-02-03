function townsToJson(array) {

    let towns = [];
    const regex = new RegExp(/\s*\|\s*/);
    array.shift();
    array.forEach((el) => {

        let [name, lat, long] = el.split(regex).filter((el) => { return el });
        towns.push({
            Town: name,
            Latitude: +Number(lat).toFixed(2),
            Longitude: +Number(long).toFixed(2),
        });
    });
    console.log(JSON.stringify(towns));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);