function solve(steps, footLength, speed) {
    //razstoqnie v M
    let totalDistanceInMeters = steps * footLength;
    //skorost v M/sec, 1 meters pers Sec = 3.6km/h
    let speedInMetersPerSec = speed * 1000 / 3600;
    //Vreme za pochivka v minuti
    let totalRestTime = Math.floor(totalDistanceInMeters / 500) * 60;
    //Vreme v Minuti
    let time = (totalDistanceInMeters / speedInMetersPerSec) + totalRestTime;

    let timeInMin = Math.floor(time / 60).toFixed(0).padStart(2, "0");
    let timeInSec = Math.round(time % 60).toFixed(0).padStart(2, "0");
    let timeInHr = Math.floor(time / 3600).toFixed(0).padStart(2, "0");

    console.log(`${timeInHr}:${timeInMin}:${timeInSec}`);
    // console.log(`${(timeInHr < 10 ? "0" : "") + timeInHr}:${ (timeInMin + totalRestTime < 10 ? "0" : "") + (timeInMin + totalRestTime) }:${ (timeInSec < 10 ? "0" : "") + timeInSec } `);
}
solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)