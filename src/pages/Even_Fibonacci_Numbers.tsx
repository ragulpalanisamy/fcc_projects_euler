import React from 'react';

const codeSnippet = `
const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      fibNum = 2;
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 === 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};

const number = 100;
const evenFibonacciSum = fiboEvenSum(number);

console.log("The sum of even Fibonacci numbers up to", number, "is:", evenFibonacciSum);
`;

const fiboEvenSum = (number) => {
    if (number <= 1) {
        return 0;
    } else {
        let evenSum = 0,
            prevFibNum = 1,
            fibNum = 2;
        for (let i = 2; fibNum <= number; i++) {
            if (fibNum % 2 === 0) {
                evenSum += fibNum;
            }
            [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
        }
        return evenSum;
    }
};


function EvenFibonacciNumbers() {
    const number = 100;
    const evenFibonacciSum = fiboEvenSum(number);
    return (
        <div>
            <h1>Even Fibonacci Numbers</h1>
            <pre>
                <code>{codeSnippet}</code>
            </pre>
            <p>
                The sum of even Fibonacci numbers up to {number} is: {evenFibonacciSum}
            </p>
        </div>
    );
}

export default EvenFibonacciNumbers;
