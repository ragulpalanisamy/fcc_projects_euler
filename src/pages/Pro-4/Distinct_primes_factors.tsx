import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Distinct_primes_factors() {
    const codesnippet = `
    // Initalize factor count with seive
const NUMFACTORS = Array(150000).fill(0);
(function initFactors(num) {
  for (let i = 2; i < num; i++)
    if (NUMFACTORS[i] === 0)
      for (let j = i; j < num; j += i)
        NUMFACTORS[j]++;
})(150000);

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  let numConsecutive = 0;
  let currNumber = 10;
  while (numConsecutive < targetConsecutive) {
    if (NUMFACTORS[currNumber] === targetNumPrimes)
      numConsecutive++;
    else
      numConsecutive = 0;
    currNumber++;
  }
  return currNumber - targetConsecutive;
}

distinctPrimeFactors(4, 4);
    `;
  return (
    <div>
        <DesignTypeScript />

        <h1>
            Distinct primes factors
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
