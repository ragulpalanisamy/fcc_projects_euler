import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Reciprocal_cycles() {
    const codesnippet = `
    // Initalize prime number list with seive
const PRIMES = Array(1000).fill(false);
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
})(1000);

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

// Find cycle length
function cycleLength(n) {
  let k = 1, mod = 10 % n;
  while (mod !== 1) {
    mod = (mod * 10) % n;
    k++;
  };
  return k;
}

// Find longest cycle
function reciprocalCycles(n) {
  let maxCycle = 1, winningDigit = 3;
  for (let i = 7; i <= n; i++) {
    if (!isPrime(i))
      continue;
    let cycle = cycleLength(i);
    if (cycle > maxCycle) {
      maxCycle = cycle;
      winningDigit = i;
    }
  }
  return winningDigit;
}

reciprocalCycles(1000);
    `;

    // Initalize prime number list with seive
    const PRIMES = Array(1000).fill(false);
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
    })(1000);

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

    // Find cycle length
    function cycleLength(n) {
        let k = 1, mod = 10 % n;
        while (mod !== 1) {
            mod = (mod * 10) % n;
            k++;
        };
        return k;
    }

    // Find longest cycle
    function reciprocalCycles(n) {
        let maxCycle = 1, winningDigit = 3;
        for (let i = 7; i <= n; i++) {
            if (!isPrime(i))
                continue;
            let cycle = cycleLength(i);
            if (cycle > maxCycle) {
                maxCycle = cycle;
                winningDigit = i;
            }
        }
        return winningDigit;
    }

    reciprocalCycles(1000);
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Reciprocal cycles
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {reciprocalCycles(1000)}
            </p>
        </div>
    )
}
