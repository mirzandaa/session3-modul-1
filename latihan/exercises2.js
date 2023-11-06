// write a code to find factorial a number

// 5
// 5 * 4 * 3 * 2 * 1
// 1 * 2 * 3 * 4 * 5

// const numberOfFactorial = 5;
// let result = 1;

// for (let i = 1; i <= 5; i++) {
//   result = result * i;
// }

// console.log("result:", result);

// write a code to convert celcius to fahrenheit

// let tempCelcius = 60;
// let tempFahrenheit = (celcius * 9) / 5 + 32;
// console.log(tempFahrenheit)

// write a code to check wheter the number is odd or even
// example 25 -> odd number, 2-> even number

// if (n % 2 == 0) {
//   let n = 24;
//   console.log(n + "" + "is an even number.");
// } else if (n % 2 !== 0) {
//   console.log(n + "" + "is an odd number.");
// } else {
//   console.log("Wrong integer!");
// }

// write a code to find the sum of the numbers 1 to N
// examples 5 -> 1 + 2 + 3 + 4 + 5 = 15
// examples : 6 => 1 + 2 + 3 = 7

let i = 3;
let sumNumber = ((i * (i + 1)) / 2);
console.log(sumNumber);

const N = 5; // Change N to the desired number
const result = sumNumbersUpToN(N);

function sumNumbersUpToN(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
}
console.log(`Sum of numbers from 1 to ${N} is ${result}`);

// write a code to check whether the number is prime number or not
// examples 7 => 7 is a prime number
// examples 6 => 6 is not a prime number

let z = 13;
let isPrime = true;
for (i = 2; i < z; i++) {
  if (z % i === 0) {
    isPrime = false;
    break;
  }
}

// // write a code to find the factorial of a number  4 & 6
console.log(z + " " + "is not a prime number.");

// const input = 4;
// let result = 1;
// for (let i = 2; i <= input; i++) {
//   result *= i;
// }

// console.log("result:", result);

// write a code to print the first N fibonacci numbers
// examples 15 -> 610
// 0 1 1 2 3 5 8

// const ntargetOffibonacci = 16;

// let lastValueOffibonacci = 1;
// let secondLastValueOffibbonaci = 0;
// let fibonacciNumber = "";

// if (!ntargetOffibonacci) {
//   fibonacciNumber += "invalid";
// } else if (ntargetOffibonacci === 1) {
//   fibonacciNumber += secondLastValueOffibbonaci;
// } else if (ntargetOffibonacci === 2) {
//   fibonacciNumber += `${secondLastValueOffibbonaci} ${lastValueOffibonacci}`;
// } else {
//   if (ntargetOffibonacci >= 3) {
//     fibonacciNumber += secondLastValueOffibbonaci + lastValueOffibonacci;

//     for (let i = 3; i <= ntargetOffibonacci; i++) {
//       const sumOfTwoNumbers = secondLastValueOffibbonaci + lastValueOffibonacci;

//       fibonacciNumber += `${sumOfTwoNumbers}`;
//       secondLastValueOffibbonaci = lastValueOffibonacci;
//       lastValueOffibonacci = SubmitEvent;
//     }
//   }
// }


const ntargetOffibonacci = 16;

let lastValueOffibonacci = 1;
let secondLastValueOffibbonaci = 0;
let fibonacciNumber = "";

if (ntargetOffibonacci <= 0) {
  fibonacciNumber = "invalid";
} else if (ntargetOffibonacci === 1) {
  fibonacciNumber = secondLastValueOffibbonaci.toString();
} else if (ntargetOffibonacci === 2) {
  fibonacciNumber = `${secondLastValueOffibbonaci} ${lastValueOffibonacci}`;
} else {
  fibonacciNumber = `${secondLastValueOffibbonaci} ${lastValueOffibonacci}`;
  for (let i = 3; i <= ntargetOffibonacci; i++) {
    const sumOfTwoNumbers = secondLastValueOffibbonaci + lastValueOffibonacci;
    fibonacciNumber += ` ${sumOfTwoNumbers}`;
    secondLastValueOffibbonaci = lastValueOffibonacci;
    lastValueOffibonacci = sumOfTwoNumbers;
  }
}

// console.log(fibonacciNumber);


// const n = 16;
// let fibonacci = [0, 1];

// for (let i = 2; i < n; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// const fibonacciNumber = fibonacci.slice(0, n).join(" ");

// / console.log(fibonacciNumber);


