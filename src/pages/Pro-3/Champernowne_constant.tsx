import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Champernowne_constant() {
    const codesnippet = `
    // Break Champernowne's constant into blocks,
    //  divided by how many digits we are adding
    function getDigit(n) {
      // lower is the number of digits before this block
      // upper is the number of digits with this block
      let lower = 0, upper = 0, digitsPerNum = 0;
      while (n > upper) {
        lower = upper;
        upper += 9 * 10 ** digitsPerNum * ++digitsPerNum;
      }
      // How many digits into the block we need to look
      const digitsIntoBlock = n - lower - 1;
      // Find the number which has the digit we want
      const num = 10 ** (digitsPerNum - 1) + digitsIntoBlock / digitsPerNum;
      // Return the specific digit
      return num.toString()[digitsIntoBlock % digitsPerNum];
    }
    
    function champernownesConstant(n) {
      let product = 1;
      for (let i = 1; i <= n; i *= 10) {
        product *= getDigit(i);
      }
      return product;
    }
    
    champernownesConstant(100);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>Champernowne constant</h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
