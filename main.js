// Find the even numbers from an array of numbers   

function findEvenNumbers(inputArray) {
    var evenNumbers = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 == 0) {
            evenNumbers.push(inputArray[i]);
        }
    }
    return evenNumbers;
}

let myArray1 = [ 10, 34, 45, 78, 90, 110, 130, 155, 200, 300, 400,  600, 700, 800, 900, 1000 ];
console.log( "The  even numbers from myArray1 is " + findEvenNumbers(myArray1));
console.log(findOddNumbers(myArray1));




// Find the odd numbers from an array of numbers   

function findOddNumbers(inputArray) {
    var oddNumbers = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 != 0) {
            oddNumbers.push(inputArray[i]);
        }
    }
    return oddNumbers;
}

let myArray2 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of odd numbers from myArray2 is " + findOddNumbers(myArray2));
console.log(findEvenNumbers(myArray2));



// Find the prime numbers from an array of numbers  

function findPrimeNumbers(inputArray) {
    var primeNumbers = [];
    for (var i = 0; i < inputArray.length; i++) {
        var isPrime = true;
        for (var j = 2; j < inputArray[i]; j++) {
            if (inputArray[i] % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(inputArray[i]);
        }
    }
    return primeNumbers;
}


let myArray3 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of prime numbers from myArray3 is " + findPrimeNumbers(myArray3));
console.log(findOddNumbers(myArray3));


// Find the palindrome numbers from an array of numbers

function findPalindromeNumbers(inputArray) {
    var palindromeNumbers = [];
    for (var i = 0; i < inputArray.length; i++) {
        var temp = inputArray[i];
        var reverse = 0;
        while (temp != 0) {
            var remainder = temp % 10;
            reverse = reverse * 10 + remainder;
            temp = parseInt(temp / 10);
        }
        if (inputArray[i] == reverse) {
            palindromeNumbers.push(inputArray[i]);
        }
    }
    return palindromeNumbers;
}


let myArray4 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of palindrome numbers from myArray4 is " + findPalindromeNumbers(myArray4));
console.log(findPrimeNumbers(myArray4));


// Remove the duplicates from an array of numbers   

function removeDuplicate(inputArray) {
    var uniqueArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (uniqueArray.indexOf(inputArray[i]) == -1) {
            uniqueArray.push(inputArray[i]);
        }
    }
    return uniqueArray;
}


let myArray5 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of unique numbers from myArray5 is " + removeDuplicate(myArray5));
console.log(findPalindromeNumbers(myArray5));


// Find the square of each number from an array of numbers

function findNumber(inputArray) {
    var squareArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        squareArray.push(inputArray[i] * inputArray[i]);
    }
    return squareArray;
}


let myArray6 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of square numbers from myArray6 is " + findNumber(myArray6));
console.log(removeDuplicate(myArray6));


// Find the cube of each number from an array of numbers

function cubeNumbers(inputArray) {
    var cubeArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        cubeArray.push(inputArray[i] * inputArray[i] * inputArray[i]);
    }
    return cubeArray;
}


let myArray7 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The array of cube numbers from myArray7 is " + cubeNumbers(myArray7));
console.log(findNumber(myArray7));


// Find the factorial of each number from an array of numbers

function factorial(inputArray) {
    var factorialArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var fact = 1;
        for (var j = 1; j <= inputArray[i]; j++) {
            fact = fact * j;
        }
        factorialArray.push(fact);
    }
    return factorialArray;
}


let myArray8 = [ 1, 2, 3, 4, 5];
console.log("The array of factorial numbers from myArray8 is " + factorial(myArray8));


// Find the sum of all the numbers from an array of numbers

function sumOfNumbers(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i];
    }
    return sum;
}


let myArray9 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the numbers from myArray9 is " + sumOfNumbers(myArray9));



// Find the average of all the numbers from an array of numbers


function averageOfNumbers(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i];
    }
    return sum / inputArray.length;
}


let myArray10 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The average of all the numbers from myArray10 is " + averageOfNumbers(myArray10));
console.log(sumOfNumbers(myArray10));


// Find the maximum number from an array of numbers


function maximumNumber(inputArray) {
    var max = inputArray[0];
    for (var i = 0; i < inputArray.length; i++) {
        if (max < inputArray[i]) {
            max = inputArray[i];
        }
    }
    return max;
}   


let myArray11 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The maximum number from myArray11 is " + maximumNumber(myArray11));
console.log(averageOfNumbers(myArray11));


// Find the minimum number from an array of numbers


function minimumNumber(inputArray) {
    var min = inputArray[0];
    for (var i = 0; i < inputArray.length; i++) {
        if (min > inputArray[i]) {
            min = inputArray[i];
        }
    }
    return min;
}


let myArray12 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The minimum number from myArray12 is " + minimumNumber(myArray12));
console.log(maximumNumber(myArray12));


// Find the product of all the numbers from an array of numbers


function productOfNumbers(inputArray) {
    var product = 1;
    for (var i = 0; i < inputArray.length; i++) {
        product = product * inputArray[i];
    }
    return product;
}


let myArray13 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The product of all the numbers from myArray13 is " + productOfNumbers(myArray13));
console.log(minimumNumber(myArray13));


// Find the sum of all the even numbers from an array of numbers


function sumOfEvenNumbers(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 == 0) {
            sum = sum + inputArray[i];
        }
    }
    return sum;
}


let myArray14 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the even numbers from myArray14 is " + sumOfEvenNumbers(myArray14));
console.log(productOfNumbers(myArray14));


// Find the sum of all the odd numbers from an array of numbers


function sumOfOddNumbers(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 != 0) {
            sum = sum + inputArray[i];
        }
    }
    return sum;
}


let myArray15 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the odd numbers from myArray15 is " + sumOfOddNumbers(myArray15));
console.log(sumOfEvenNumbers(myArray15));


// Find the sum of all the prime numbers from an array of numbers


function sumOfPrimeNumbers(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (sumOfPrimeNumbers(inputArray[i])) {
            sum = sum + inputArray[i];
        }
    }
    return sum;
}


let myArray16 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the prime numbers from myArray16 is " + sumOfPrimeNumbers(myArray16));
console.log(sumOfOddNumbers(myArray16));


// Find the sum of all the perfect squares from an array of numbers


function sumOfPerfectSquares(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (sumOfPerfectSquares(inputArray[i])) {
            sum = sum + inputArray[i];
        }
    }
    return sum;
}


let myArray17 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the perfect squares from myArray17 is " + sumOfPerfectSquares(myArray17));
console.log(sumOfPrimeNumbers(myArray17));


// Find the sum of all the perfect cubes from an array of numbers


function sumOfPerfectCubes(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (sumOfPerfectCubes(inputArray[i])) {
            sum = sum + inputArray[i];
        }
    }
    return sum;
}


let myArray18 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The sum of all the perfect cubes from myArray18 is " + sumOfPerfectCubes(myArray18));
console.log(sumOfPerfectSquares(myArray18));


// Area of Triangle given the length of the three sides

function areaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

let firstSide = 12;
let secondSide = 15;
let thirdSide = 17;
console.log("The area of the triangle is " + areaOfTriangle(firstSide, secondSide, thirdSide) + " square units");


// Find if the number is a prime number

function isPrime(inputNumber) {
    for (var i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'Prime Number';
}

let myNumber = 11;
console.log("The number " + myNumber + " is " + isPrime(myNumber));



// Find the prime numbers between 1 and 100

function primeNumbersArray(inputArray) {
    var myPrimeNumbersArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (primeNumbersArray(inputArray[i])) {
            myPrimeNumbersArray.push(inputArray[i]);
        }
    }
    return myPrimeNumbersArray;
}

let myArray19 = [ 23, 28, 30, 33, 53, 68, 90, 110, 130, 155, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];
console.log("The prime numbers between 1 and 100 are " + primeNumbersArray(myArray19));
console.log(primeNumbersArray(myArray19));




// Find odd numbers between 50 and 80


function oddNumbersArray(inputArray) {
    var myOddNumbersArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (oddNumbersArray(inputArray[i])) {
            myOddNumbersArray.push(inputArray[i]);
        }
    }
    return myOddNumbersArray;
}


let myArray20 = [53, 68, 73, 67, 79, 66, 56, 67,77];
console.log("The odd numbers between 50 and 80 are " + oddNumbersArray(myArray20));
console.log(oddNumbersArray(myArray20));


// Find even numbers between 50 and 80


function evenNumbersArray(inputArray) {
    var myEvenNumbersArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (evenNumbersArray(inputArray[i])) {
            myEvenNumbersArray.push(inputArray[i]);
        }
    }
    return myEvenNumbersArray;
}


let myArray21 = [53, 68, 73, 67, 79, 66, 56, 67,77];
console.log("The even numbers between 50 and 80 are " + evenNumbersArray(myArray21));
console.log(evenNumbersArray(myArray21));


