import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Pandigital-products() {
    const codesnippet =`function pandigitalProducts(n) {
        function is1toNPandigital(n, digitStr) {
          // check if length is n
          if (digitStr.length !== n) {
            return false;
          }
          // check if pandigital
          for (let i = digitStr.length; i > 0; i--) {
            if (digitStr.indexOf(i.toString()) === -1) {
              return false;
            }
          }
          return true;
        }
        function concatenateNums(...numbers) {
          let digitStr = '';
          for (let i = 0; i < numbers.length; i++) {
            digitStr += numbers[i].toString();
          }
          return digitStr;
        }
      
        const pandigitalNums = [];
        const limit = 10 ** Math.floor(n / 2) - 1;
        let sum = 0;
        for (let mult1 = 2; mult1 < limit; mult1++) {
          for (let mult2 = 2; mult2 < limit; mult2++) {
            const product = mult1 * mult2;
            const concatenated = concatenateNums(mult1, mult2, product);
            if (concatenated.length > n) {
              break;
            } else if (concatenated.length < n) {
              continue;
            }
            if (
              is1toNPandigital(n, concatenated) &&
              !pandigitalNums.includes(product)
            ) {
              pandigitalNums.push(product);
              sum += product;
            }
          }
        }
        return sum;
      }`;

      function pandigitalsProducts(n: number) {
        function is1toNPandigital(n, digitStr) {
          // check if length is n
          if (digitStr.length !== n) {
            return false;
          }
          // check if pandigital
          for (let i = digitStr.length; i > 0; i--) {
            if (digitStr.indexOf(i.toString()) === -1) {
              return false;
            }
          }
          return true;
        }
        function concatenateNums(...numbers) {
          let digitStr = '';
          for (let i = 0; i < numbers.length; i++) {
            digitStr += numbers[i].toString();
          }
          return digitStr;
        }
      
        const pandigitalNums = [];
        const limit = 10 ** Math.floor(n / 2) - 1;
        let sum = 0;
        for (let mult1 = 2; mult1 < limit; mult1++) {
          for (let mult2 = 2; mult2 < limit; mult2++) {
            const product = mult1 * mult2;
            const concatenated = concatenateNums(mult1, mult2, product);
            if (concatenated.length > n) {
              break;
            } else if (concatenated.length < n) {
              continue;
            }
            if (
              is1toNPandigital(n, concatenated) &&
              !pandigitalNums.includes(product)
            ) {
              pandigitalNums.push(product);
              sum += product;
            }
          }
        }
        return sum;
      }
  return (
    <div>
        <DesignTypeScript />
        <h1>Pandigital products</h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
        <p>The sum of the products of the first four pandigital numbers is {pandigitalsProducts(4)}</p>
    </div>
  )
}
function products() {
    throw new Error('Function not implemented.');
}

