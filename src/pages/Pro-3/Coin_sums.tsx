import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Coin_sums() {
    const codesnippet = `
    function coinSums(n) {
        const ways = Array(n + 1).fill(0);
        ways[0] = 1
        for (let x of [1, 2, 5, 10, 20, 50, 100, 200])
          for (let i = x; i <= n; i++)
            ways[i] += ways[i - x];
        return ways[n]
      }
      
      coinSums(200);
    `;

    function coinSums(n) {
        const ways = Array(n + 1).fill(0);
        ways[0] = 1
        for (let x of [1, 2, 5, 10, 20, 50, 100, 200])
          for (let i = x; i <= n; i++)
            ways[i] += ways[i - x];
        return ways[n]
      }
      
      coinSums(200);
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Coin sums
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
