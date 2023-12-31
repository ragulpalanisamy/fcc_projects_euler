import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css"

export default function Abudant_sum() {
    const codesnippet = `
    function abundantCheck(number) {
        let sum = 1;
        for (let i = 2; i <= Math.sqrt(number); i += 1) {
          if(number % i === 0) {
            sum += i + +(i !== Math.sqrt(number) && number / i);
          }
        }
        return sum > number;
      }
      function sumOfNonAbundantNumbers(n) {
        let sum = 0;
        const memo = {};
        let abundantList = [];
        // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
        const checkSum = (num, stack, memo) => {
          for (let i = 0; i < stack.length; i += 1) {
            if ((num - stack[i]) in memo) return true;
          }
          return false;
        };
        for (let i = 1; i <= n; i += 1) {
          if (abundantCheck(i)) {
            abundantList.push(i);
            memo[i] = 1;
          }
          if (checkSum(i, abundantList, memo)) continue;
          sum += i;
        }
        return sum;
      }
    `;
    function abundantCheck(number) {
        let sum = 1;
        for (let i = 2; i <= Math.sqrt(number); i += 1) {
            if (number % i === 0) {
                sum += i + +(i !== Math.sqrt(number) && number / i);
            }
        }
        return sum > number;
    }
    function sumOfNonAbundantNumbers(n) {
        let sum = 0;
        const memo = {};
        let abundantList = [];
        // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
        const checkSum = (num, stack, memo) => {
            for (let i = 0; i < stack.length; i += 1) {
                if ((num - stack[i]) in memo) return true;
            }
            return false;
        };
        for (let i = 1; i <= n; i += 1) {
            if (abundantCheck(i)) {
                abundantList.push(i);
                memo[i] = 1;
            }
            if (checkSum(i, abundantList, memo)) continue;
            sum += i;
        }
        return sum;
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Abudant sum
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                The sum of all the positive integers which cannot be written as the sum of two abundant numbers is: {sumOfNonAbundantNumbers(28123)}
            </p>
        </div>
    )
}
