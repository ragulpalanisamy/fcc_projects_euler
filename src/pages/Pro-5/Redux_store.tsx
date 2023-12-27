import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Redux_store() {
  const codesnippet = `
  const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store = Redux.createStore(reducer)
  
  `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
        Create a Redux Store
        </h1>

        <pre>
          <code>
            {codesnippet}
          </code>
        </pre>
    </div>
  )
}
