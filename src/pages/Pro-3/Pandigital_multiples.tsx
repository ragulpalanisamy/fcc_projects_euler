import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Pandigital_multiples() {
    const codesnippet = `
    function pandigitalMultiples() {
        const nDigit = 9;
      
        function get9DigitConcatenatedProduct(num) {
          // returns false if concatenated product is not 9 digits
          let concatenatedProduct = num.toString();
          for (let i = 2; concatenatedProduct.length < nDigit; i++) {
            concatenatedProduct += num * i;
          }
          return concatenatedProduct.length === nDigit ? concatenatedProduct : false;
        }
      
        function is1to9Pandigital(num) {
          const numStr = num.toString();
      
          // check if length is not 9
          if (numStr.length !== nDigit) {
            return false;
          }
      
          // check if pandigital
          for (let i = nDigit; i > 0; i--) {
            if (numStr.indexOf(i.toString()) === -1) {
              return false;
            }
          }
          return true;
        }
      
        let largestNum = 0;
        for (let i = 9999; i >= 9000; i--) {
          const concatenatedProduct =  get9DigitConcatenatedProduct(i);
          if (is1to9Pandigital(concatenatedProduct) && concatenatedProduct > largestNum) {
            largestNum = parseInt(concatenatedProduct);
            break;
          }
        }
        return largestNum;
      }
    `;
    const codesnippet1 = `
    function pandigitalMultiples() {
        const nDigits = 9;
        let bigPandigital = 918273645; // Given in prompt
        // Loop through possible range of values
        //   i must have fewer than 5 digits
        for (let i = 1; i < 10000; i++) {
          // Build pandigital candidate
          let candidate = i.toString() + (2*i).toString();
          let j = 3;
          while (candidate.length < nDigits) {
            candidate += i*j;
            j++;
          }
          // Check candidate
          if (candidate.length === nDigits && candidate > bigPandigital) {
            // Test for pandigital
            let isPandigital = true;
            for (let j = 1; isPandigital && j <= nDigits; j++) {
              isPandigital = candidate.indexOf(j.toString()) >= 0;
            }
            // Update largest
            if (isPandigital) {
              bigPandigital = Number(candidate);
            }
          }
        }
        return bigPandigital;
      }
      
      console.log(pandigitalMultiples());
    `;
    const codesnippet2 = `
    function isPandigital(str) {
        return new Set([...str.replace(/0/g, '')]).size === str.length && str.length === 9;
      }
      
      function concatiply (max, num) {
        return [...Array(max)].reduce((a, _, i) => a + num * (i + 1), '');
      }
      
      function pandigitalMultiples() {
        for (let i = 9876; i > 0; i--) {
          const product = concatiply(2, i);
          if (isPandigital(product)) return +product;
        }
      }
    `;
   return (
    <div>
        <DesignTypeScript />
        <h1>
            Pandigital Multiples
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>

        <h1>
            Pandigital Multiples
        </h1>
        <pre>
            <code>
                {codesnippet1}
            </code>
        </pre>

        <h1>
            Pandigital Multiples
        </h1>
        <pre>
            <code>
                {codesnippet2}
            </code>
        </pre>
    </div>
  )
}
