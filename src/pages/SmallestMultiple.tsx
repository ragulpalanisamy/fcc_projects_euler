import React from 'react'

export default function SmallestMultiple() {
    const codesnippet = `
    //LCM of two numbers
        function lcm(a, b) {
        return (a * b) / gcd(a, b);
        }

        //Euclidean recursive algorithm
        function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
        }

        function smallestMult(n) {
        let maxLCM = 1;

        //Getting the LCM in the range
        for (let i = 2; i <= n; i++) {
            maxLCM = lcm(maxLCM, i);
        }
        return maxLCM;
        }`;

    //LCM of two numbers
    function lcm(a: any, b: any) {
        return (a * b) / gcd(a, b);
    }

    //Euclidean recursive algorithm
    function gcd(a: any, b: any) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    function smallestMult(n: any) {
        let maxLCM = 1;

        //Getting the LCM in the range
        for (let i = 2; i <= n; i++) {
            maxLCM = lcm(maxLCM, i);
        }
        return maxLCM;
    }
    return (
        <div>
            <h1>Smallest Multiple</h1>
            <pre>
                <code>{codesnippet}</code>
            </pre>
            <p>
                2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
            </p>
            <p>
                What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
            </p>
            <p>
                {smallestMult(20)}
            </p>
        </div>
    )
}
