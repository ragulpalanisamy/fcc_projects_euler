import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Quadratic_primes() {
    const codesnippet = `
    // Initalize prime number list with seive
const PRIMES = Array(50000).fill(false);
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
})(50000);

// Check if num is prime
function isPrime(num) {
  // Check known primes
  if (num < 2)
    return false;
  if (PRIMES[num] !== undefined)
    return PRIMES[num];
  // Compute if num is prime
  const sqrt = parseInt(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0)
      return PRIMES[num] = false;
  }
  return PRIMES[num] = true;
}

// Counts the consecutive primes for a and b
function countPrimes(a, b) {
  let output = b, n = 0, count = 0;
  while (isPrime(output)) {
    count++;
    n++;
    output = n ** 2 + (a * n) + b;
  }
  return count;
}

// Find best run of primes in quadratic range
function quadraticPrimes(range) {
  let winningProduct = 0, winningCount = 0;
  for (let b = 2; b <= range; b++) {
    // We only need to check a/b when b is prime
    if (!isPrime(b))
      continue;
    for (let a = -range + 1; a < range; a++) {
      // a must have opposite parity of b
      if ((b === 2 && a % 2 === 1) ||
          (a % 2 === 0))
        continue;
      // Check count of primes from formula
      let currentCount = countPrimes(a, b);
      if (currentCount > winningCount) {
        winningProduct = a * b;
        winningCount = currentCount;
      }
    }
  }
  return winningProduct;
}

quadraticPrimes(1000);
    `;

    // Initalize prime number list with seive
    const PRIMES = Array(50000).fill(false);
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
    })(50000);

    // Check if num is prime
    function isPrime(num) {
        // Check known primes
        if (num < 2)
            return false;
        if (PRIMES[num] !== undefined)
            return PRIMES[num];
        // Compute if num is prime
        const sqrt = parseInt(Math.sqrt(num).toString());
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0)
                return PRIMES[num] = false;
        }
        return PRIMES[num] = true;
    }

    // Counts the consecutive primes for a and b
    function countPrimes(a, b) {
        let output = b, n = 0, count = 0;
        while (isPrime(output)) {
            count++;
            n++;
            output = n ** 2 + (a * n) + b;
        }
        return count;
    }

    // Find best run of primes in quadratic range
    function quadraticPrimes(range) {
        let winningProduct = 0, winningCount = 0;
        for (let b = 2; b <= range; b++) {
            // We only need to check a/b when b is prime
            if (!isPrime(b))
                continue;
            for (let a = -range + 1; a < range; a++) {
                // a must have opposite parity of b
                if ((b === 2 && a % 2 === 1) ||
                    (a % 2 === 0))
                    continue;
                // Check count of primes from formula
                let currentCount = countPrimes(a, b);
                if (currentCount > winningCount) {
                    winningProduct = a * b;
                    winningCount = currentCount;
                }
            }
        }
        return winningProduct;
    }

    quadraticPrimes(1000);
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Quadratic primes
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {quadraticPrimes(1000)}
            </p>
        </div>
    )
}
