import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Consecutive_prime_sum() {
    const codeSnippet = `   
    // Initalize prime number list with seive
const NUM_PRIMES = 1000000;
const PRIMES = [2];
const PRIME_SEIVE = Array(Math.floor((NUM_PRIMES-1)/2)).fill(true);
(function initPrimes(num) {
  const upper = Math.floor((num - 1) / 2);
  const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
  for (let i = 0; i <= sqrtUpper; i++) {
    if (PRIME_SEIVE[i]) {
      // Mark value in PRIMES array
      const prime = 2 * i + 3;
      PRIMES.push(prime);
      // Mark all multiples of this number as false (not prime)
      const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
      for (let j = primeSqaredIndex; j < upper; j += prime)
        PRIME_SEIVE[j] = false;
    }
  }
  for (let i = sqrtUpper + 1; i < upper; i++) {
    if (PRIME_SEIVE[i])
      PRIMES.push(2 * i + 3);
  }
})(NUM_PRIMES);

function isPrime(num) {
  if (num === 2)
    return true;
  else if (num % 2 === 0)
    return false
  else
    return PRIME_SEIVE[(num - 3) / 2];
}

function consecutivePrimeSum(limit) {
  // Initalize for longest sum < 100
  let bestPrime = 41;
  let bestI = 0;
  let bestJ = 5;

  // Find longest sum < limit
  let sumOfCurrRange = 41;
  let i = 0, j = 5;
  // -- Loop while current some starting at i is < limit
  while (sumOfCurrRange < limit) {
    let currSum = sumOfCurrRange;
    // -- Loop while pushing j towards end of PRIMES list
    //      keeping sum under limit
    while (currSum < limit) {
      if (isPrime(currSum)) {
        bestPrime = sumOfCurrRange = currSum;
        bestI = i;
        bestJ = j;
      }
      // -- Increment inner loop
      j++;
      currSum += PRIMES[j];
    }
    // -- Increment outer loop
    i++;
    j = i + (bestJ - bestI);
    sumOfCurrRange -= PRIMES[i - 1];
    sumOfCurrRange += PRIMES[j];
  }
  // Return
  return bestPrime;
}

consecutivePrimeSum(1000000);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Consecutive prime sum
        </h1>

        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
    </div>
  )
}
