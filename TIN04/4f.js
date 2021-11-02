function isPrime(number) {
  for(var i = 2; i < number; i++) {
    if(number % i === 0) {   
    return false;
    }
  }
  return number > 1;
}

console.log(`is 23 prime? ${isPrime(23)}`);
console.log(`is 44 prime? ${isPrime(44)}`);