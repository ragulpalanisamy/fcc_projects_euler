import React from 'react'

export default function Lattice_paths() {
    const codesnippet = `
    function latticePaths(gridSize) {
        let n = gridSize;
        let result = [];
      
        // Make n+1 size rows and columns
        for (let i = n; i >= 0; i--) {
          let row = [];
          row[n] = 1;
          result.push(row);
        }
      
        // Each point in row assign value of posible ways
        //  to reach bottom right point
        for (let i = n; i >= 0; i--) {
          for (let j = n - 1; j >= 0; j--) {
            if (i === n) {
              result[i][j] = 1;
            } else {
              result[i][j] = result[i][j + 1] + result[i + 1][j]
            }
          }
        }
      
        // Starting position is top left corner,
        //  so the answer is first element of first array
        return result[0][0];
      }
    `;

    function latticePaths(gridSize: any) {
        let n = gridSize;
        let result = [];

        // Make n+1 size rows and columns
        for (let i = n; i >= 0; i--) {
            let row: any[] = [];
            row[n] = 1;
            result.push(row);
        }

        // Each point in row assign value of posible ways
        //  to reach bottom right point
        for (let i = n; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                if (i === n) {
                    result[i][j] = 1;
                } else {
                    result[i][j] = result[i][j + 1] + result[i + 1][j]
                }
            }
        }

        // Starting position is top left corner,
        //  so the answer is first element of first array
        return result[0][0];
    }
    return (
        <div>
            <h1>
                Lattice paths
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
            </p>
            <p>
                How many such routes are there through a 20×20 grid?
            </p>
            <p>
                Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
            </p>
            <p>
                How many such routes are there through a 20×20 grid?
            </p>
            <p>
                Answer: {latticePaths(20)}
            </p>
        </div>
    )
}
