import React from 'react'
import Design from '../../components/Design'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css"

export default function Substring_divisibility() {
    const codesnippet = `
    // test if digits of size n has correctly divisible substrings
const DIVISORS = [2, 3, 5, 7, 11, 13, 17];
function testDivisibility(digits, n) {
  for (let i = 0; i < n - 2; i++) {
    let threeDigits = 100 * digits[i + 1] + 10 * digits[i + 2] + digits[i + 3];
    if (threeDigits % DIVISORS[i] !== 0)
      return false;
  }
  return true;
}

function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}

// make the next lexical permutation of digits
// See https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
function permuteDigits(digits) {
  const upperBound = digits.length - 1;
  for (let i = upperBound; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      for (let j = upperBound; j > i; j--) {
        if (digits[i] < digits[j]) {
          [digits[i], digits[j]] = [digits[j], digits[i]];
          const numSwaps = (upperBound - i) / 2;
          for (let k = 1; k <= numSwaps; k++) {
            [digits[i + k], digits[upperBound - k + 1]] =
              [digits[upperBound - k + 1], digits[i + k]];
          }
          return digits;
        }
      }
    }
  }
  return digits;
}

function substringDivisibility(n) {
  let sum = 0;
  const numPermutations = factorial(n + 1);
  let permutation = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 0; i < numPermutations; i++) {
    if (testDivisibility(permutation, n))
      sum += parseInt(permutation.join(""));
    permutation = permuteDigits(permutation);
  }
  return sum;
}

substringDivisibility(5);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Sub-string divisibility
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
