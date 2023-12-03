import React from 'react'

export default function Largest() {
    const codeSnippet = `
    const largestPrimeFactor = (number) => {
        let largestFactor = number;
      
        for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
          if (!(largestFactor % i)) {
            let factor = largestFactor / i;
            let candidate = largestPrimeFactor(factor);
      
            return i > candidate ? i : candidate;
          }
        }
      
        return largestFactor;
      }`;

    const largestPrimeFactor = (number) => {
        let largestFactor = number;

        for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
            if (!(largestFactor % i)) {
                let factor = largestFactor / i;
                let candidate = largestPrimeFactor(factor);

                return i > candidate ? i : candidate;
            }
        }

        return largestFactor;
    };
    return (
        <div>
            <h1>Largest Prime Factor</h1>
            <pre>
                <code>{codeSnippet}</code>
            </pre>
            <p>
                The largest prime factor of the number 600851475143 is: {largestPrimeFactor(600851475143)}
            </p>

        </div>
    )
}
