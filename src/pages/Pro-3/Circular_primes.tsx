import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Circular_primes() {
    const codesnippet = `
    // Initalize prime number list with seive
    const PRIMES = Array(999999).fill(false);
    (function initPrimes(num) {
      const upper = Math.floor((num - 1) / 2);
      const isPrime = Array(upper).fill(true);
      const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
      for (let i = 0; i <= sqrtUpper; i++) {
        if (isPrime[i]) {
          // Mark value in PRIMES array
          const prime = 2 * i + 3;
          PRIMES[prime] = true;
          // Mark all multiples of this number as false (not prime)
          const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
          for (let j = primeSqaredIndex; j < upper; j += prime)
            isPrime[j] = false;
        }
      }
      for (let i = sqrtUpper + 1; i < upper; i++) {
        if (isPrime[i])
          PRIMES[2 * i + 3] = true;
      }
    })(999999);
    
    function isCircularPrime(n) {
      const nString = n.toString();
      return nString
        .split("")
        .every(
          (_, index) => PRIMES[nString.slice(index) + nString.slice(0, index)]
        );
    }
    
    function circularPrimes(n) {
      if (n < 2)
        return 0;
      let count = 1;
      for (let i = 3; i < n; i += 2) {
        if (isCircularPrime(i))
          count++;
      }
      return count;
    }
    
    circularPrimes(1000000);
    `;

    const codesnippet1 = `
    const PRIMES = [false, false, true];

function circularPrimes(n) {
  // Prime checker
  function checkPrime(num) {
    if (PRIMES[num] !== undefined)
      return PRIMES[num];
    if (num % 2 == 0)
      return false;
    const bound = parseInt(Math.sqrt(num));
    for (let i = 3; i <= bound; i += 2) {
      if (num % i === 0)
        return PRIMES[num] = false;
    }
    return PRIMES[num] = true;
  }
  // Circular prime checker
  function isCirclePrime(num) {
    if (num
      .toString()
      .split("")
      .some(digit => digit % 2 === 0))
      return false;
    let currentRotation = num;
    for (let i = 0; i < num.toString().length; i++) {
      if (!checkPrime(currentRotation))
        return false;
      currentRotation = spin(currentRotation);
    }
    return true;
  }
  // Rotate number
  function spin(num) {
    const digits = num.toString().split('');
    digits.push(digits.shift());
    return parseInt(digits.join(""));
  }
  // Count number of circular primes
  let numCircular = 1;
  for (let i = 3; i < n; i += 2) {
    if (isCirclePrime(i))
      numCircular++;
  }
  return numCircular;
}

circularPrimes(1000000);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Circular primes
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
        <h1>Another approach</h1>
        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>
    </div>
  )
}
