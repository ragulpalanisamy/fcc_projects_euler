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

  const codesnippet1 =  `
  const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  const currentState = store.getState();
  console.log(currentState)
  `;

  const codesnippet2 = `
  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction())
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

       <h1>
       Get State from the Redux Store
       </h1>
       <pre>
        <code>
          {codesnippet1}
        </code>
       </pre>

       <h1>
       Dispatch an Action Event
       </h1>
       <pre>
          <code>
            {codesnippet2}
          </code>
       </pre>
    </div>
  )
}
