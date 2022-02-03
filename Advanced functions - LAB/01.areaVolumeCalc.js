function solve(area, vol, input) {

    return JSON.parse(input).map(el => ({
        area: area.apply(el),
        volume: vol.apply(el)
    }));

}

const data = (area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)


function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function area() {
    return Math.abs(this.x * this.y);
};
