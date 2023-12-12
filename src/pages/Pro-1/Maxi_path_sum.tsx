import React from 'react'
import "../../app/globals.css";
import DesignTypeScript from '../../components/DesignTypeScript';

export default function Maxi_path_sum() {
    const codesnippet = `
    function maximumPathSumI(triangle) {
        // Copy the triangle
        //   Note: not needed if we are ok with mutating the input
        const triangleCopy = triangle.map(row => [...row]);
        // Find max path
        for (let i = triangleCopy.length - 2; i >= 0; i--) {
          for (let j = 0; j <= i; j++) {
            triangleCopy[i][j] += Math.max(triangleCopy[i + 1][j], triangleCopy[i + 1][j + 1]);
          }
        }
        return triangleCopy[0][0];
      }
    `;
    function maximumPathSumI(triangle) {
        // Copy the triangle
        //   Note: not needed if we are ok with mutating the input
        const triangleCopy = triangle.map(row => [...row]);
        // Find max path
        for (let i = triangleCopy.length - 2; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                triangleCopy[i][j] += Math.max(triangleCopy[i + 1][j], triangleCopy[i + 1][j + 1]);
            }
        }
        return triangleCopy[0][0];
    }
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Maxi_path_sum
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                The sum of the digits in the number 2^15 is: {maximumPathSumI([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]])}
            </p>
        </div>
    )
}
