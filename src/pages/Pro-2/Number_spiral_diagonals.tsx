import "../../app/globals.css";
import DesignTypeScript from "../../components/DesignTypeScript";

export default function Number_spiral_diagonals() {
    const codesnippet=`
    function spiralDiagonals(n) {
        // Start with a 1x1 spiral
        let sum = 1, size = 1, upperRightCorner = 1;
        while (size < n) {
          size += 2;
          // Formula for sum increase when adding one layer
          sum += upperRightCorner * 4 + 10 * (size - 1);
          upperRightCorner = size ** 2;
        }
        return sum;
      }
    `;
    function spiralDiagonals(n) {
        // Start with a 1x1 spiral
        let sum = 1, size = 1, upperRightCorner = 1;
        while (size < n) {
          size += 2;
          // Formula for sum increase when adding one layer
          sum += upperRightCorner * 4 + 10 * (size - 1);
          upperRightCorner = size ** 2;
        }
        return sum;
      }
      
  return (
    <div>
      <DesignTypeScript />
        <h1>
          
            Number_spiral_diagonals
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
      
            <p>
                {spiralDiagonals(1001)}
            </p>
            </div>
  )
}
