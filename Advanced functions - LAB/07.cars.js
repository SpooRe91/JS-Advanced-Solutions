function buildCars(commands) {
    const cars = {};

    function inherit(name, prop, value, priority) {
        for (const child of cars[name].children) {
            cars[child][prop] = {
                value,
                priority
            }

            if (cars[child].hasOwnProperty('children')) {
                inherit(child, prop, value, --priority);
            }
        }
    }
    const functions = {
        create(name, inherit, parentName) {
            if (inherit) {
                cars[name] = {};
                if (!cars[parentName].hasOwnProperty('children')) {
                    cars[parentName].children = [];
                }
                cars[parentName].children.push(name);
            } else {
                cars[name] = {};
            }
        },
        set(car, prop, value) {
            cars[car][prop] = {
                value,
                priority: 1,
            };

            if (cars[car].hasOwnProperty('children')) {
                inherit(car, prop, value, 0);
            }
        },
        print(car) {
            let entries = Object.entries(cars[car]).sort((a, b) => b[1].priority - a[1].priority);
            entries = entries.filter(item => item[0] !== 'children');
            const props = entries.map(item => `${item[0]}:${item[1].value}`);
            console.log(props.join(','));
        }
    };

    for (const command of commands) {
        const [method, car, args1, args2] = command.split(' ');
        functions[method](car, args1, args2);
    }
}