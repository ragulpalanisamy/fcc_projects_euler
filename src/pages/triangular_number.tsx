import React from 'react'

export default function triangular_number() {
    const codesnippet = `
    function divisibleTriangleNumber(n) {
        let i = 1;
        let triangleNumber = i;
        // Compute triangular numbers until n divisors found
        while (numOfDivisors(triangleNumber) < n) {
          i += 1;
          triangleNumber += i;
        }
      
        return triangleNumber;
      }
      
      function numOfDivisors(n) {
        let count = 0;
        // Divisors come in pairs
        for (let i = 1; i < Math.sqrt(n); i++)
          if (n % i === 0) count += 2;
        // Except for the sqrt
        if (n % Math.sqrt(n) === 0) count += 1;
      
        return count;
      }
    `;

    function divisibleTriangleNumber(n: any) {
        let i = 1;
        let triangleNumber = i;
        // Compute triangular numbers until n divisors found
        while (numOfDivisors(triangleNumber) < n) {
            i += 1;
            triangleNumber += i;
        }

        return triangleNumber;
    }

    function numOfDivisors(n: any) {
        let count = 0;
        // Divisors come in pairs
        for (let i = 1; i < Math.sqrt(n); i++)
            if (n % i === 0) count += 2;
        // Except for the sqrt
        if (n % Math.sqrt(n) === 0) count += 1;

        return count;
    }
    return (
        <div>
            <h1>
                Highly divisible triangular number
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {divisibleTriangleNumber(500)}
            </p>
        </div>
    )
}
