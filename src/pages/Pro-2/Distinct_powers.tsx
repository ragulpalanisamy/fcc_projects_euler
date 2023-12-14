import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css";

export default function Distinct_powers() {
    const codesnippet = `
    function distinctPowers(n) {
        let powers = {};
        for (let i = 2; i <= n; i++) {
          for (let j = 2; j <= n; j++) {
            powers[Math.pow(i, j)] = true; // Repeated instances will not add additional key
          }
        }
        return Object.keys(powers).length;
      }
    `;

    function distinctPowers(n) {
        let powers = {};
        for (let i = 2; i <= n; i++) {
          for (let j = 2; j <= n; j++) {
            powers[Math.pow(i, j)] = true; // Repeated instances will not add additional key
          }
        }
        return Object.keys(powers).length;
      }
  return (
    <div>
        <DesignTypeScript />
            <h1>
                 Distinct powers
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {distinctPowers(100)}
            </p>
          </div>
  )
}
