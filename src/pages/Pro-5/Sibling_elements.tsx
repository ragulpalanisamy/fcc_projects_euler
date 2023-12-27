import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function sibling_elements() {
    const codesnippet = `
    const frontEndFrameworks = [
        'React',
        'Angular',
        'Ember',
        'Knockout',
        'Backbone',
        'Vue'
      ];
      
      function Frameworks() {
        const renderFrameworks = frontEndFrameworks.map((item,number) => {
          return  <li key={number}>{item}</li>
        }); // Change this line
        return (
          <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
              {renderFrameworks}
            </ul>
          </div>
        );
      };
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
        Give Sibling Elements a Unique Key Attribute
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
