import React from 'react'
import '../app/globals.css'
import DesignTypeScript from '../components/DesignTypeScript';

export default function Larg_Palindrome_product() {
    const codeSnippet = `
    function largestPalindromeProduct(n) {
        //To get the maximum n digit number, + operator type castes String to Number type
        let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
      
        //Next we get minimum n digit number from the max
        let min = (max + 1) / 10;
      
        //To store the result
        let largest = -1;
      
        //Starting the loop from max to min
        for (let i = max; i >= min; i--) {
          //Another loop
          for (let j = max; j >= min; j--) {
            //Getting the product
            let num = i * j;
      
            //Reversing the number
            let numReverse = [...String(num)].reverse().join("");
      
            //Checking for palindromic number
            if (num == numReverse) {
              //Check if max and break the loop
              largest = Math.max(num, largest);
              break;
            }
          }
        }
      
        // Returning largest found
        return largest;
      }`;

    function largestPalindromeProduct(n: any) {
        //To get the maximum n digit number, + operator type castes String to Number type
        let max = +[...Array(n)].reduce((a, c) => (a += 9), "");

        //Next we get minimum n digit number from the max
        let min = (max + 1) / 10;

        //To store the result
        let largest = -1;

        //Starting the loop from max to min
        for (let i = max; i >= min; i--) {
            //Another loop
            for (let j = max; j >= min; j--) {
                //Getting the product
                let num = i * j;

                //Reversing the number
                let numReverse = [...String(num)].reverse().join("");

                //Checking for palindromic number
                if (num == numReverse) {
                    //Check if max and break the loop
                    largest = Math.max(num, largest);
                    break;
                }
            }
        }

        // Returning largest found
        return largest;
    }
    return (
        <><DesignTypeScript /><div>largest palindrome product
            <pre>
                <code>{codeSnippet}</code>
            </pre>
            <p>
                {largestPalindromeProduct(3)}
            </p>

        </div></>


    )
}
