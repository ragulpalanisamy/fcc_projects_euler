import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Lexicographic_permutations() {
    const codesnippet = `
    const FACTORIALS = Array(9)
  .fill(0)
  .reduce((factorials, _, indx) => {
    factorials.push(factorials[indx] * (indx + 1));
    return factorials;
  },
  [1])
  .reverse();

function lexicographicPermutations(n) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let permutation = "";
  for (let i = 0; i < 10; i++) {
    permutation += digits.splice(Math.floor(n / FACTORIALS[i]), 1);
    n = n % FACTORIALS[i];
  }
  return Number(permutation);
}
    `;

    const FACTORIALS = Array(9)
        .fill(0)
        .reduce((factorials, _, indx) => {
            factorials.push(factorials[indx] * (indx + 1));
            return factorials;
        },
            [1])
        .reverse();

    function lexicographicPermutations(n) {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let permutation = "";
        for (let i = 0; i < 10; i++) {
            permutation += digits.splice(Math.floor(n / FACTORIALS[i]), 1);
            n = n % FACTORIALS[i];
        }
        return Number(permutation);
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Lexicographic_permutations
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {lexicographicPermutations(362880)}
            </p>
        </div>
    )
}
