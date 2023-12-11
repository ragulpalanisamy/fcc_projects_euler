import React from 'react'
import '../app/globals.css'
import DesignTypeScript from '../components/DesignTypeScript';

export default function SumSquareDifference() {
    const codesnippet = `
    function sumSquareDifference(n) {
        const sumOfN = (n*(n+1))/2;
        const sumOfNSquare = (n*(n+1)*(2*n+1))/6;
        
        //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)
        return (sumOfN ** 2) - sumOfNSquare;
    `;

    function sumSquareDifference(n: any) {
        const sumOfN = (n * (n + 1)) / 2;
        const sumOfNSquare = (n * (n + 1) * (2 * n + 1)) / 6;

        //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)`
        return (sumOfN ** 2) - sumOfNSquare;
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>Sum Square Difference</h1>
            <pre>
                <code>{codesnippet}</code>
            </pre>
            <p>
                The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is: {sumSquareDifference(100)}
            </p>
            <p>
                Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
            </p>
            <p>
                {sumSquareDifference(100)}
            </p>
        </div>
    )
}
