import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function DigitCancellingFractions() {
    const codeSnippet = `
    // Prime factorization of both numbers can only have digits < 10
function simplifyFrac(denom, num) {
  let sDenom = denom, sNum = num;
  for (let i = 2; i < 10; i++) {
    if (sDenom % i === 0 && sNum % i === 0) {
      sDenom /= i;
      sNum /= i;
      i = 2;
    }
  }
  return [sDenom, sNum];
}

// Cancels out the shared digit, or returns false if there is no shared digit
function cancelPair(denom, num) {
  const dDigits = [Math.floor(denom / 10), denom % 10];
  const nDigits = [Math.floor(num / 10), num % 10];
  // If there is a 0, we can't cancel a digit
  if (dDigits.indexOf(0) > -1)
    return false;
  else if (dDigits[0] === nDigits[0]) {
    return [dDigits[1], nDigits[1]];
  } else if (dDigits[0] === nDigits[1]) {
    return [dDigits[1], nDigits[0]];
  } else if (dDigits[1] === nDigits[0]) {
    return [dDigits[0], nDigits[1]];
  } else if (dDigits[1] === nDigits[1]) {
    return [dDigits[0], nDigits[0]];
  } else {
    return false;
  }
}

function digitCancellingFractions() {
  let finalN = 1;
  let finalD = 1;
  for (let denom = 11; denom < 100; denom++) {
    for (let num = 11; num < denom; num++) {
      const test = cancelPair(denom, num);
      if (!test)
        continue;
      if (num / denom === test[1] / test[0]) {
        finalN *= test[1];
        finalD *= test[0];
      }
    }
  }
  return simplifyFrac(finalD, finalN)[0];
}

digitCancellingFractions();`;

// Prime factorization of both numbers can only have digits < 10
function simplifyFrac(denom, num) {
    let sDenom = denom, sNum = num;
    for (let i = 2; i < 10; i++) {
      if (sDenom % i === 0 && sNum % i === 0) {
        sDenom /= i;
        sNum /= i;
        i = 2;
      }
    }
    return [sDenom, sNum];
  }
  
  // Cancels out the shared digit, or returns false if there is no shared digit
  function cancelPair(denom, num) {
    const dDigits = [Math.floor(denom / 10), denom % 10];
    const nDigits = [Math.floor(num / 10), num % 10];
    // If there is a 0, we can't cancel a digit
    if (dDigits.indexOf(0) > -1)
      return false;
    else if (dDigits[0] === nDigits[0]) {
      return [dDigits[1], nDigits[1]];
    } else if (dDigits[0] === nDigits[1]) {
      return [dDigits[1], nDigits[0]];
    } else if (dDigits[1] === nDigits[0]) {
      return [dDigits[0], nDigits[1]];
    } else if (dDigits[1] === nDigits[1]) {
      return [dDigits[0], nDigits[0]];
    } else {
      return false;
    }
  }
  
  function digitCancellingFractions() {
    let finalN = 1;
    let finalD = 1;
    for (let denom = 11; denom < 100; denom++) {
      for (let num = 11; num < denom; num++) {
        const test = cancelPair(denom, num);
        if (!test)
          continue;
        if (num / denom === test[1] / test[0]) {
          finalN *= test[1];
          finalD *= test[0];
        }
      }
    }
    return simplifyFrac(finalD, finalN)[0];
  }
  
  digitCancellingFractions();
  return (
    <div>
        <DesignTypeScript />
        <h1>Digit Cancelling Fractions</h1>
        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
        <p>
            The answer is: {digitCancellingFractions()}
        </p>
    </div>
  )
}
