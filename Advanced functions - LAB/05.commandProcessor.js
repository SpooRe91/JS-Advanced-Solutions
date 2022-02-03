function solve() {

    let state = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    };

    function append(str) {
        return state += str;
    };

    function removeStart(n) {
        state = state.slice(n);
    };
    function removeEnd(n) {
        state = state.slice(0, -n);
    };
    function print() {
        console.log(state);
    }

}

const processor = solve();
processor.append('hello');
processor.append('again');
processor.removeStart(3);
processor.removeEnd(4);
processor.print();
