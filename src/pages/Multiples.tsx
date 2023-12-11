import React from 'react'
import '../app/globals.css'
import DesignTypeScript from '../components/DesignTypeScript';

export default function Multiples() {
    const codesnippet = `
    function multiplesOf3and5(number) {
        let sum = 0,
          i = 3;
        while (i < number) {
          if (i % 3 == 0 || i % 5 == 0) sum += i;
          i++;
        }
        return sum;
      }
    `
    function multiplesOf3and5(number) {
        let sum = 0,
            i = 3;
        while (i < number) {
            if (i % 3 == 0 || i % 5 == 0) sum += i;
            i++;
        }
        return sum;
    }


    return (
        <div>
            <DesignTypeScript />
            <h1>Multiples of 3 or 5</h1>
            <pre>
                <code>{codesnippet}</code>
            </pre>
            <p>
                If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
            </p>
            <p>
                Find the sum of all the multiples of 3 or 5 below 1000.
            </p>
            <p>
                {multiplesOf3and5(1000)}
            </p>

        </div>
    )
}
