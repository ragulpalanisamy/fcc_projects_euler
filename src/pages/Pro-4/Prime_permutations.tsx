import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Prime_permutations() {
    const codeSnippet = `
    // Initalize prime number list with seive
const NUM_PRIMES = 10000;
const PRIMES = Array(NUM_PRIMES).fill(false);
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
})(NUM_PRIMES);

function isPrime(num) {
  return PRIMES[num];
}

function isPermutation(base, test) {
  const baseDigits = base.toString().split("");
  const testDigits = test.toString().split("");
  return baseDigits.length === testDigits.length &&
    testDigits
    .every(
      digit => baseDigits.indexOf(digit) !== -1
    )
}

function primePermutations() {
  const STEP = 3330, STEP_2 = 6660;
  const upperBound = 9999 - STEP_2;
  for (let i = 1235; i < upperBound; i+= 2) {
    if (i === 1487)
      continue;
    if (isPrime(i) && isPrime(i + STEP) && isPrime(i + STEP_2) &&
        isPermutation(i, i + STEP) && isPermutation(i, i + STEP_2))
      return parseInt(
        i.toString() + (i + STEP).toString() + (i + STEP_2).toString()
      );
  }
}

primePermutations();
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Prime permutations
        </h1>

        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>

    </div>
  )
}
