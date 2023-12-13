import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Fibonacci_Number() {
    const codesnippet = `
    function digitFibonacci(n) {
        let f_0 = 0, f_1 = 1, i = 1;
        while (String(f_1).length < n) {
          [f_0, f_1] = [f_1, f_0 + f_1];
          i++;
        }
        return i; 
      }
    `;

    function digitFibonacci(n) {
        let f_0 = 0, f_1 = 1, i = 1;
        while (String(f_1).length < n) {
            [f_0, f_1] = [f_1, f_0 + f_1];
            i++;
        }
        return i;
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Fibonacci Number
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {digitFibonacci(1000)}
            </p>
        </div>
    )
}
