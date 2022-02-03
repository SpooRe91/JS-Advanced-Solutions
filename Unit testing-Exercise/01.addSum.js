function solve(nums, start, end) {

    if (!Array.isArray(nums)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, nums.length - 1);

    let subNums = nums.slice(startIndex, endIndex + 1);

    let sum = subNums.reduce((a, b) => a + Number(b), 0);

    return sum;
}