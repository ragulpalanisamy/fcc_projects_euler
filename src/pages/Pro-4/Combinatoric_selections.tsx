import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Combinatoric_selections() {
    const codeSnippet=`
    function combinatoricSelections(limit) {
        // Function to calculate factorial
        function factorial(n) {
          if (n === 0 || n === 1) {
            return 1;
          } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
              result *= i;
            }
            return result;
          }
        }
      
        // Function to calculate (n choose r)
        function calculateCombination(n, r) {
          return factorial(n) / (factorial(r) * factorial(n - r));
        }
      
        let count = 0;
        for (let n = 1; n <= 100; n++) {
          for (let r = 1; r <= n; r++) {
            if (calculateCombination(n, r) > limit) {
              count++;
            }
          }
        }
        return count;
      }
      
      console.log(combinatoricSelections(1000));   // Output should be 4626
      
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Combinatoric s  elections
        </h1>

        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
    </div>
  )
}
