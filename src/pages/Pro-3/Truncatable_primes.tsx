import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Truncatable_primes() {
    const codesnippet = `
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

// We can skip numbers with 4, 6, 8, or 0
function hasEvenDigit(n) {
  return n
    .toString()
    .split('')
    .some(digit => digit % 2 === 0 && digit !== '2');
}

// Test if every truncated version is prime
function isTruncatable(n) {
  if (!isPrime(n))
    return false;
  for (let i = 10; i < n; i *= 10) {
    if (!isPrime(n % i))
      return false;
    if (!isPrime(Math.floor(n / i)))
      return false;
  }
  return true;
}

// Find first n truncatable primes
function truncatablePrimes(n) {
  let numTruncatablePrimes = 0;
  let currentNum = 11;
  let sum = 0;
  while (numTruncatablePrimes < n) {
    if (isTruncatable(currentNum)) {
      sum += currentNum;
      numTruncatablePrimes++;
    }
    currentNum += 2;
    while (hasEvenDigit(currentNum)) {
      currentNum += 2;
    }
  }
  return sum;
}

truncatablePrimes(11);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Truncatable primes
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
