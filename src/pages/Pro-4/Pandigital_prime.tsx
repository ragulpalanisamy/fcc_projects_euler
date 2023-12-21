import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css"

export default function Pandigital_prime() {
    const codesnippet = `
    // Initalize prime number list with seive
const PRIMES = Array(7654321).fill(false);
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
})(7654321);

function isPandigital(num) {
  const numAsString = num.toString();
  return Array(numAsString.length)
    .fill(0)
    .every((_, i) => numAsString.indexOf(i + 1) !== -1);
}

function pandigitalPrime(n) {
  const upperBound = parseInt(
    Array(n)
      .fill(0)
      .map((_, i) => n - i)
      .join("")
  );
  for (let i = upperBound; i > 0; i -= 2) {
    if (PRIMES[i] && isPandigital(i))
      return i;
  }
}

pandigitalPrime(7);
`;
    const codesnippet1=`
    const PRIMES = [false, false, true];
function isPrime(num) {
  if (PRIMES[num] !== undefined)
    return PRIMES[num];
  if (num % 2 === 0)
    return false;
  const upperBound = Math.sqrt(num);
  for (let i = 3; i <= upperBound; i += 2) {
    if (num % i === 0)
      return PRIMES[num] = false;
  }
  return PRIMES[num] = true;
}


function isPandigital(num) {
  const numAsString = num.toString();
  return Array(numAsString.length)
    .fill(0)
    .every((_, i) => numAsString.indexOf(i + 1) !== -1);
}

function pandigitalPrime(n) {
  const upperBound = parseInt(
    Array(n)
      .fill(0)
      .map((_, i) => n - i)
      .join("")
  )
  for (let i = upperBound; i > 0; i -= 2) {
    if (isPandigital(i) && isPrime(i))
      return i;
  }
}

pandigitalPrime(7);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Pandigital prime
        </h1>
        <pre>
            <code>
                {codesnippet}   
            </code>
        </pre>

        <h1>
            Another solution   
        </h1>
        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>
    </div>
  )
}
