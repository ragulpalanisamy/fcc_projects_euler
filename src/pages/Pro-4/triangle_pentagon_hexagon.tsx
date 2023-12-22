import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function triangle_pentagon_hexagon() {
    const codesnippet = `
    function isPentagonal(num) {
        const n = (Math.sqrt(24 * num + 1) + 1) / 6;
        return (n - parseInt(n) === 0) ? n : 0;
      }
      
      function nearestHexagonal(num) {
        return parseInt((Math.sqrt(8 * num + 1) + 1) / 4);
      }
      
      function hexagonal(num) {
        return num * (2 * num - 1);
      }
      
      function triPentaHexa(num) {
        let n = nearestHexagonal(num) + 1;
        let h_n = hexagonal(n);
        // Note, each hexagonal number is also triangular
        //   so we only need to check for pentagonal
        while (!isPentagonal(h_n)) {
          n++;
          h_n = hexagonal(n);
        }
        return h_n;
      }
      
      triPentaHexa(40756);
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Triangle Pentagon Hexagon
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
