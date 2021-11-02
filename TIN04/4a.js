const recursion = (number) => {
     if (number == 0) 
        return 1;
        return number > 0
        ? number * recursion(number - 1)
    	: "number is negative";
};

console.log(`Recursion: ${recursion(4)}`);
console.log(`Recursion: ${recursion(-1)}`);

function iteration(number) {
    var factorial = 1;
    if (number < 0) {
        return 'number is negative';
    }
    for (let i =  1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log(`Iteration: ${iteration(4)}`);