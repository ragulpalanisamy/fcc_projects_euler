import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Self_powers() {
    const codesnippet = `
    // Find last digts of num**num
function powerLastDigits(num, mask) {
  let lastDigits = 1;
  for (let i = 0; i < num; i++) {
    lastDigits = (lastDigits * num) % mask;
  }
  return lastDigits;
}

function selfPowers(power, lastDigits) {
  let sum = 0;
  const mask = 10 ** lastDigits;
  for (let i = 1; i <= power; i++) {
    sum = (sum + powerLastDigits(i, mask)) % mask;
  }
  return sum;
}

selfPowers(1000, 10);
    `;
  return (
    <div>
        <DesignTypeScript />

        <h1>
            Self powers
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
