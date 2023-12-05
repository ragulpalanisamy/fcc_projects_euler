import React from 'react'

export default function Summation_of_Primes() {
    const codesnippet = `
    function primeSummation(num) {
        // Helper function to check primality
        function isPrime(num) {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
              return false;
          }
          return true;
        }
      
        // Check all numbers for primality
        let sum = 0;
        for (let i = 2; i < num; i++) {
          if (isPrime(i))
            sum += i;
        }
        return sum;
      }
    `;

    function primeSummation(num: any) {
        // Helper function to check primality
        function isPrime(num: any) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }

        // Check all numbers for primality
        let sum = 0;
        for (let i = 2; i < num; i++) {
            if (isPrime(i))
                sum += i;
        }
        return sum;
    }
    return (
        <div>
            <h1>
                Summation_of_Primes
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {primeSummation(2000)}
            </p>
        </div>
    )
}
