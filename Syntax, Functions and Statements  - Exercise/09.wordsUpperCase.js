function solve(input) {

    const template = /\w+/g;
    let matcher = input.match(template);
    if (matcher && matcher !== undefined) {
        console.log(matcher.join(', ').toUpperCase());
    } else {
        return;
    }
    // console.log(input.match(/\w+/g).join(', ').toUpperCase());
}

solve('Hi, how are you?');
solve('hello');
solve('');