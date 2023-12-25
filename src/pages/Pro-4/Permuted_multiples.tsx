import React from 'react'
import Design from '../../components/Design'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Permuted_multiples() {
    const codesnippet = `
    function permutedMultiples(n) {
        const isPermutation = (a, b) =>
            a.length !== b.length
                ? false
                : a.split('').sort().join() === b.split('').sort().join();
    
    
        let start = 1;
        let found = false;
        let result = 0;
    
        while (!found) {
            start *= 10;
            for (let i = start; i < start * 10 / n; i++) {
                found = true;
                for (let j = 2; j <= n; j++) {
                    if (!isPermutation(i + '', j * i + '')) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    result = i;
                    break;
                }
            }
        }
    
        return result;
    }
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Permuted multiples
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
