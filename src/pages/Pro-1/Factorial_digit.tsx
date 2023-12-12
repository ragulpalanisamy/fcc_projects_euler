import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import '../../app/globals.css';

export default function Factorial_digit() {
    const codesnippet = `
    // Implement bigInt as array
    // Multiply bigInt by scalar value
    function multiplyBigInt(bigInt, num) {
      let carry = 0;
      for (let i = 0; i < bigInt.length; i++) {
        bigInt[i] = bigInt[i] * num + carry;
        carry = parseInt(bigInt[i] / 10);
        bigInt[i] = bigInt[i] % 10;
      }
      while (carry > 0) {
        bigInt.push(carry % 10);
        carry = parseInt(carry / 10);
      }
      return bigInt; 
    }
    
    // Compute factorial as BigInt
    function factorialBigInt(num) {
      if (num <= 1)
        return [1];
      else
        return multiplyBigInt(factorialBigInt(num - 1), num);
    }
    
    // Sum digits in factorial BigInt result
    function sumFactorialDigits(n) {
      return factorialBigInt(n)
        .reduce((a, b) => a + b);
    }
    `;

    const anotherSolution = `
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

    function sumFactorialDigit(n) {
        return bigIntFactorial(n)
            .toString()
            .split("")
            .reduce((a, b) => a + Number(b), 0);
    }
    // Implement bigInt as array
    // Multiply bigInt by scalar value
    function multiplyBigInt(bigInt, num) {
        let carry = 0;
        for (let i = 0; i < bigInt.length; i++) {
            bigInt[i] = bigInt[i] * num + carry;
            carry = parseInt(bigInt[i] / 10);
            bigInt[i] = bigInt[i] % 10;
        }
        while (carry > 0) {
            bigInt.push(carry % 10);
            carry = parseInt(carry / 10);
        }
        return bigInt;
    }

    // Compute factorial as BigInt
    function factorialBigInt(num) {
        if (num <= 1)
            return [1];
        else
            return multiplyBigInt(factorialBigInt(num - 1), num);
    }

    // Sum digits in factorial BigInt result
    function sumFactorialDigits(n) {
        return factorialBigInt(n)
            .reduce((a, b) => a + b);
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
            <pre>
                <code>
                    {anotherSolution}
                </code>
            </pre>
            <p>
                The sum of the digits in the number 100! is: {sumFactorialDigit(100)}
            </p>
        </div>
    )
}
