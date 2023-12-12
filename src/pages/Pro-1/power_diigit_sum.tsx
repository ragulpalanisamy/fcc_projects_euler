import React from 'react'
import "../../app/globals.css";
import DesignTypeScript from '../../components/DesignTypeScript';

export default function power_diigit_sum() {
    const codesnippet = `
    function powerDigitSum(exponent) {
        // Take exponent and convert to string of digits
        const num = BigInt(Math.pow(2, exponent));
        const digits = num.toString().split('');
        // Sum digits in string representation
        return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
      }
      
      powerDigitSum(15);
    `;

    function powerDigitSum(exponent) {
        // Take exponent and convert to string of digits
        const num = BigInt(Math.pow(2, exponent));
        const digits = num.toString().split('');
        // Sum digits in string representation
        return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    powerDigitSum(15);
    return (
        <div>
            <DesignTypeScript />
            <h1>
                power_diigit_sum
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                The sum of the digits in the number 2^15 is: {powerDigitSum(15)}
            </p>
        </div>
    )
}
