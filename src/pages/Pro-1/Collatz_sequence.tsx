import React from 'react'
import Design from '../../components/Design';

export default function Collatz_sequence() {
    const codesnippet = `
    function longestCollatzSequence(limit) {
        let longest = 1;
        let maxLength = 1;
        for (let i = Math.floor(limit / 2); i < limit; i++) {
          let len = colLen(i);
          if (len > maxLength) {
            longest = i;
            maxLength = len;
          }
        }
        return longest;
      }
      
      const knownSequence = { '1': 1 };
      
      function colLen(n) {
        if (knownSequence[n]) {
          return knownSequence[n];
        } else {
          const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
          knownSequence[n] = len;
          return len;
        }
      }
    `;

    function longestCollatzSequence(limit) {
        let longest = 1;
        let maxLength = 1;
        for (let i = Math.floor(limit / 2); i < limit; i++) {
            let len = colLen(i);
            if (len > maxLength) {
                longest = i;
                maxLength = len;
            }
        }
        return longest;
    }

    const knownSequence = { '1': 1 };

    function colLen(n) {
        if (knownSequence[n]) {
            return knownSequence[n];
        } else {
            const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
            knownSequence[n] = len;
            return len;
        }
    }
    return (
        <div>
            <Design />
            <h1>
                Collatz_sequence
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                What is the value of the first triangle number to have over five hundred divisors?
            </p>

        </div>
    )
}
