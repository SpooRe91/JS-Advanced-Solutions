function heroInventory(input) {

    let result = [];
    input.forEach((el) => {

        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items = items.split(", ") : items = [];
        result.push({ name, level, items });

    });

    console.log(JSON.stringify(result));
}
heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);