"use strict";
const square = (num) => {
    return num * num;
};
const sumOfSquares = (numberSet) => {
    let summedSquares = 0;
    numberSet.forEach(num => {
        const squareOfNumber = square(num);
        summedSquares += squareOfNumber;
    });
    console.log("\n\t Sum of squares: ", summedSquares);
    return summedSquares;
};
const main = () => {
    sumOfSquares([3, 5, 18, 24, 12]);
};
main();
