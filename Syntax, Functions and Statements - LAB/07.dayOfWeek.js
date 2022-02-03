function solve(day) {

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (!week.includes(day)) {
        console.log("error");
    } else {
        const index = week.indexOf(day);
        console.log(index + 1);
    }
}
// switch (day) {
//     case "Monday": result = 1; break
//     case "Tuesday": result = 2; break
//     case "Wednesday": result = 3; break
//     case "Thursday": result = 4; break
//     case "Friday": result = 5; break
//     case "Saturday": result = 6; break
//     case "Sunday": result = 7; break
//     default: return "error";
// }
//     return result;
// }
solve('Thursday');