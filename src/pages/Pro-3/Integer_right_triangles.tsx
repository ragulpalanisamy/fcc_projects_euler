import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Integer_right_triangles() {
    const codeSnippet = `
    function numSolutions(p) {
        let counter = 0;
        for (let side1 = Math.floor(p / 4); side1 < p / 2; side1++) {
          // Formula for the 2nd side given side1 + p
          let side2 = p * (p - 2 * side1) / (2 * p - 2 * side1);
          if (side1 > side2 && Number.isInteger(side2))
            counter++;
        }
        return counter;
      }
      
      function intRightTriangles(n) {
        let bestP = 0, mostSolutions = 0;
        for (let p = 12; p < n; p++) {
          // Right triangles can't have one odd side
          if (p % 3 === 1)
            continue;
          const numSolutionsP = numSolutions(p);
          if (numSolutionsP > mostSolutions) {
            bestP = p;
            mostSolutions = numSolutionsP;
          }
        }
        return bestP;
      }
      
      intRightTriangles(500);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>Integer right triangles</h1>
        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
    </div>
  )
}
