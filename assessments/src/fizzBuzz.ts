


export const fizzBuzz = (numberSet: number[]) => {
    numberSet.forEach((num, index) => {
        console.log("\n\t num: ", num);
        const rem1 = num % 3;
        const rem2 = num % 5;
        if(rem1 === 0){
            console.log("\n\t Fizz")
        }else if(rem2 === 0){
            console.log("\n\t Buzz")
        }else if((rem1 === 0) && (rem2 === 0)){
            console.log("\n\t Fizz Buzz")
        }
    })
}

const main = () => {
    fizzBuzz([3, 5, 18, 24, 12])
};

main();