function fibonacci (number) {
   return number == 0 || number == 1
   ? number
   : fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(`Fibonacci of 7 is ${fibonacci(7)}`);