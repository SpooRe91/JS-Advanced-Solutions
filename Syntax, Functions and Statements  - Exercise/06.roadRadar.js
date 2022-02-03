function solve(speed, area) {
    let areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let status = "";
    let difference = Number(speed - areas[area]);

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    } else {
        speedCheck(areas[area], difference);
    }

    function speedCheck(location, difference) {
        if (difference <= 20) {
            status = "speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${location} - ${status}`);
        } else if (difference <= 40) {
            status = "excessive speeding"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${location} - ${status}`);
        } else {
            status = "reckless driving"
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${location} - ${status}`);
        }
    }
}
// if (currArea === "motorway") {
//     if (currSpeed <= motorwayLimit) {
//         console.log(`Driving ${currSpeed} km/h in a ${motorwayLimit} zone`);
//     } else {
//         speedCheck(currSpeed, motorwayLimit);
//     }

// } else if (currArea === "interstate") {
//     if (currSpeed <= interstateLimit) {
//         console.log(`Driving ${currSpeed} km/h in a ${interstateLimit} zone`);
//     } else {
//         speedCheck(currSpeed, interstateLimit);
//     }

// } else if (currArea === "city") {
//     if (currSpeed <= cityLimit) {
//         console.log(`Driving ${currSpeed} km/h in a ${cityLimit} zone`);
//     } else {
//         speedCheck(currSpeed, cityLimit);
//     }

// } else if (currArea === "residential") {
//     if (currSpeed <= residentialLimit) {
//         console.log(`Driving ${currSpeed} km/h in a ${residentialLimit} zone`);
//     } else {
//         speedCheck(currSpeed, residentialLimit)
//     }


solve(40, 'city')
