import React from 'react'
import "../../app/globals.css";
import DesignTypeScript from '../../components/DesignTypeScript';

export default function Factorial_digit_sum() {
    const codesnippet = `
    function bigIntFactorial(n) {
        return n <= 1 ? BigInt(1) : BigInt(n) * bigIntFactorial(n - 1);
      }
      
      function sumFactorialDigits(n) {
        return bigIntFactorial(n)
          .toString()
          .split("")
          .reduce((a, b) => a + Number(b), 0);
      }
    `;
    function bigIntFactorial(n) {
        return n <= 1 ? BigInt(1) : BigInt(n) * bigIntFactorial(n - 1);
    }

    function sumFactorialDigits(n) {
        return bigIntFactorial(n)
            .toString()
            .split("")
            .reduce((a, b) => a + Number(b), 0);
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Factorial digit sum
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                The sum of the digits in the number 100! is: {sumFactorialDigits(100)}
            </p>
        </div>
    )
}
