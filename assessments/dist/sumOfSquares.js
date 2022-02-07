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
    return summedSquares;
};
