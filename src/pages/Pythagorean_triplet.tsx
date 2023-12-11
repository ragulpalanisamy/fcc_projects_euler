import React from 'react'
import '../app/globals.css'
import DesignTypeScript from '../components/DesignTypeScript';


export default function Pythagorean_triplet() {
    const codesnippet = `
    function specialPythagoreanTriplet(n) {
        let sumOfabc = n;
        for (let a = 1; a < n; a++) {
          for (let b = a; b < n; b++) {
            let c = n - a - b;
            if (c > 0) {
              if (c ** 2 == a ** 2 + b ** 2) {
                return a * b * c;
              }
            }
          }
        }
      }
      
      specialPythagoreanTriplet(1000);
    `;
    function specialPythagoreanTriplet(n) {
        let sumOfabc = n;
        for (let a = 1; a < n; a++) {
            for (let b = a; b < n; b++) {
                let c = n - a - b;
                if (c > 0) {
                    if (c ** 2 == a ** 2 + b ** 2) {
                        return a * b * c;
                    }
                }
            }
        }
    }

    specialPythagoreanTriplet(1000);
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Pythagorean_triplet
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                {specialPythagoreanTriplet(1000)}
            </p>
        </div>
    )
}