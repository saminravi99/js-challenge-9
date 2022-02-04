// Find if the number is a prime number

function isPrimeNumber(number) {
    if (number == 1) {
            return 'Not a prime number';
        }

    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'Prime number';

}

let myNumber = 2;
console.log("The number " + myNumber + " is " + isPrimeNumber(myNumber));