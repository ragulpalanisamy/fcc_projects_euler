import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Digit_n_powers() {
    const codeSnippet = `
    function digitnPowers(n) {
        // Pre-compute powers
        const POWERS = Array(10)
          .fill(0)
          .map((_, index) => index ** n);
      
        // Checks if the digits in 'num' raised to n have a sum equal to 'num'
        function isPowerSum(num) {
          let sum = 0;
          let staysUnder = num
            .toString()
            .split("")
            .every(digit => {
              sum += POWERS[digit];
              return sum <= num;
            });
          return staysUnder && (sum === num);
        }
      
        // Bounds of integers we need to check
        const minVal = 2 ** n;
        const maxVal = 9 ** (n + 1);
      
        // Check integers in range
        let sum = 0;
        for (let i = minVal; i < maxVal; i++) {
          if (isPowerSum(i))
            sum += i;
        }
        return sum;
      }
    `;

    function digitnPowers(n) {
        // Pre-compute powers
        const POWERS = Array(10)
          .fill(0)
          .map((_, index) => index ** n);
      
        // Checks if the digits in 'num' raised to n have a sum equal to 'num'
        function isPowerSum(num) {
          let sum = 0;
          let staysUnder = num
            .toString()
            .split("")
            .every(digit => {
              sum += POWERS[digit];
              return sum <= num;
            });
          return staysUnder && (sum === num);
        }
      
        // Bounds of integers we need to check
        const minVal = 2 ** n;
        const maxVal = 9 ** (n + 1);
      
        // Check integers in range
        let sum = 0;
        for (let i = minVal; i < maxVal; i++) {
          if (isPowerSum(i))
            sum += i;
        }
        return sum;
      }
  return (
    <div>
        <DesignTypeScript/>
        <h1>
        Digit n powers</h1>
        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
        <p>
            The sum of all the numbers that can be written as the sum of the nth powers of their digits is {digitnPowers(5)}.
        </p>
        </div>
  )
}
