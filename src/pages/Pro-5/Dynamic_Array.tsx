import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'
import "../../app/globals.css";

export default function Dynamic_Array() {
    const codesnippet = `
    class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            users: [
              {
                username: 'Jeff',
                online: true
              },
              {
                username: 'Alan',
                online: false
              },
              {
                username: 'Mary',
                online: true
              },
              {
                username: 'Jim',
                online: false
              },
              {
                username: 'Sara',
                online: true
              },
              {
                username: 'Laura',
                online: true
              }
            ]
          };
        }
        render() {
          const usersOnline = this.state.users.filter(user => user.online === true); // Change this line
      
          const renderOnline = usersOnline.map((item,index) => {
            return <li key={index}>{item.username}</li>
          });// Change this line
          return (
            <div>
              <h1>Current Online Users:</h1>
              <ul>{renderOnline}</ul>
            </div>
          );
        }
      }
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
        Use Array.filter() to Dynamically Filter an Array
        </h1>
        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
