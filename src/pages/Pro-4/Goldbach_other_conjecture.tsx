import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'

export default function Goldbach_other_conjecture() {
    const codesnippet = `
    let PRIMES = [false, false, true];

function isPrime(n) {
  if (PRIMES[n] !== undefined)
    return PRIMES[n];
  if (n % 2 === 0)
    return false;
  const upperBound = Math.sqrt(n);
  for (let i = 3; i < upperBound; i += 2) {
    if (n % i === 0)
      return PRIMES[n] = false;
  }
  return PRIMES[n] = true;
}

function isSquarePrimeSum(n) {
  const upperBound = Math.sqrt(n / 2);
  for (let i = 1; i <= upperBound; i++) {
    if (isPrime(n - 2 * (i ** 2)))
      return true;
  }
  return false;
}

function goldbachsOtherConjecture() {
  let currNum = 3;
  while (isPrime(currNum) || isSquarePrimeSum(currNum)) {
    currNum += 2;
  }
  return currNum;
}

goldbachsOtherConjecture();
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Goldbach's other conjecture
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
