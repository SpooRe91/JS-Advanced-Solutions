function commandParser(arr) {

    let array = arr;
    let result = [];

    array.forEach((el) => {
        let [command, string] = el.split(" ");
        if (command === "add") {
            return add(string);

        } else if (command === "remove") {
            return remove(string);

        } else {
            return print();
        }

    });

    function add(str) {
        result.push(str);
    }
    function remove(str) {
        result = result.filter((el) => el !== str);
    }
    function print() {
        console.log(result.join(","));
    }
}
commandParser(['add hello', 'add again', 'remove hello', 'add again', 'print']);
