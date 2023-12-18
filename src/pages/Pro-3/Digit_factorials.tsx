import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'

export default function Digit_factorials() {
    const codesnippet = `
    const FACTORIALS = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function digitFactorial() {
  let result = { 'sum': 0, 'numbers': [] };
  // 10^(d-1) <= n < 10^d => d <= 7.33 < d + 1
  //  7 digits maximum
  // max = 7 * 9! = 2_540_160
  // So, first digit cannot exceed 2
  // max = 2! + 6 * 9! = 2_177_282
  let max = 2177282;
  for (let i = 10; i <= max; i++) {
    let factorialSum = i
      .toString()
      .split("")
      .reduce((sum, digit) => sum + FACTORIALS[digit], 0);
    if (factorialSum === i) {
      result['sum'] += i;
      result['numbers'].push(i);
    }
  }
  return result;
}

digitFactorial();
    `;
    const FACTORIALS = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function digitsFactorial() {
  let result = { 'sum': 0, 'numbers': [] };
  // 10^(d-1) <= n < 10^d => d <= 7.33 < d + 1
  //  7 digits maximum
  // max = 7 * 9! = 2_540_160
  // So, first digit cannot exceed 2
  // max = 2! + 6 * 9! = 2_177_282
  let max = 2177282;
  for (let i = 10; i <= max; i++) {
    let factorialSum = i
      .toString()
      .split("")
      .reduce((sum, digit) => sum + FACTORIALS[digit], 0);
    if (factorialSum === i) {
      result['sum'] += i;
      result['numbers'].push(i);
    }
  }
  return result;
}
  return (
    <div>
        <DesignTypeScript
        />
        <h1>Digit factorials</h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
        <p>
            {digitsFactorial()}
        </p>
    </div>
  )
}
