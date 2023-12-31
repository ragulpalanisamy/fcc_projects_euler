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

  const codesnippet3 = `
  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type === "LOGIN") {
      return {
        login: true
      };
    } else {
      return state;
    }
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: "LOGIN"
    };
  };
  `;

  const codesnippet5 = `
  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: "LOGIN"
    };
  };
  
  const logoutUser = () => {
    return {
      type: "LOGOUT"
    };
  };
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

       <h1>
       Handle an Action in the Store
       </h1>

       <pre>
          <code>
              {codesnippet3}
          </code>
       </pre>

       <h1>
       Use a Switch Statement to Handle Multiple Actions
       </h1>

       <pre>
          <code>
              {codesnippet5}
          </code>
       </pre>
    </div>
  )
}
