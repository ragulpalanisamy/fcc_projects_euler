import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Double_base() {
const codesnippet = `
function isPalindromes(n) {
    const numString = n.toString();
    for (let i = 0; i < numString.length / 2; i++) {
      if (numString[i] !== numString[numString.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  function doubleBasePalindromes(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (isPalindromes(i) && isPalindromes(i.toString(2))) {
        sum += i;
      }
    }
    return sum;
  }
  
  doubleBasePalindromes(1000000);
`;

const codesnippet1 = `
function buildPalindromesBase10(len) {
    // Base cases
    const palindromes = [];
    if (len > 0) {
      palindromes.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    }
    if (len > 1) {
      palindromes.push([11, 22, 33, 44, 55, 66, 77, 88, 99, 0]);
    }
  
    for (let i = 3; i <= len; i++) {
      const lengthIPalindromes = [];
  
      for (let j = 1; j < 10; j++) {
        const firstDigit = j * (10 ** (i - 1));
        const lastDigit = j;
        // Build off of palindromes 2 digits shorter
        {
          const shorterPalindromes = palindromes[i - 3];
  
          for (const palindrome of shorterPalindromes) {
            lengthIPalindromes.push(firstDigit + palindrome * 10 + lastDigit);
          }
        }
        // Build off of palindromes 4 digits shorter
        if (i > 4) {
          const shorterPalindromes = palindromes[i - 5];
  
          for (const palindrome of shorterPalindromes) {
            lengthIPalindromes.push(firstDigit + palindrome * 100 + lastDigit);
          }
        }
      }
      palindromes.push(lengthIPalindromes);
    }
    return palindromes.flat();
  }
  
  function isPalindrome(num) {
    const numAsString = num.toString();
    const numDigits = numAsString.length;
    for (let i = 0; i < numDigits / 2; i++) {
      if (numAsString[i] !== numAsString[numDigits - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function isPalindromeBase2(num) {
    return isPalindrome(num.toString(2));
  }
  
  function doubleBasePalindromes(n) {
    let palindromeSum = 0;
    const maxDigits = Math.ceil(Math.log10(n));
    const palindromesBase10 = buildPalindromesBase10(maxDigits);
  
    // Loop over all palindromes less than n
    for (let i = 0; i < palindromesBase10.length && palindromesBase10[i] < n; i++) {
      if (isPalindromeBase2(palindromesBase10[i])) {
        palindromeSum += palindromesBase10[i];
      }
    }
    return palindromeSum;
  }
`;
  return (
    <div>
        <DesignTypeScript />
        <h1>
         Double-base palindromes
        </h1>
        <pre>
          <code>
            {codesnippet}
          </code>
        </pre>

        <h1>
          another approach
        </h1>
        <pre>
          <code>
            {codesnippet1}
          </code>
        </pre>
    </div>
  )
}
function base() {
    throw new Error('Function not implemented.')
}

