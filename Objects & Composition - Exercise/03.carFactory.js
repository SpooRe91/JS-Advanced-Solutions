function carFactory(obj) {

    let car = {};
    car.model = obj.model;
    
    let engine = {};
    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (obj.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    car.engine = engine;

    let carriage = {};
    carriage.type = obj.carriage;
    carriage.color = obj.color;
    car.carriage = carriage;

    let newSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    car.wheels = new Array(4).fill(newSize);

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
