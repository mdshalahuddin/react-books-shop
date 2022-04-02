import React from 'react';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {


  return (
    <div className="App">
      <h3>স্টকের প্রোডাক্ট সমূহ</h3>
      <Shop></Shop>
      <div className="ans">
        <h3>কিভাবে React.js কাজ করে?</h3>
        <p> <strong>Ans:</strong> Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.</p>
        <h3>Difference Between React Props And  State</h3>
        <table>
          <tr>
            <th>PROPS	</th>
            <th>STATE</th>
          </tr>
          <tr>
            <td>Is read-only.</td>
            <td>Can be asynchronous.</td>
          </tr>
          <tr>
            <td>Is immutable.	</td>
            <td>Is mutable.</td>
          </tr>
          <tr>
            <td>Allow the user to pass data from one component to other components as an argument.</td>
            <td>Holds information about the components.</td>
          </tr>
          <tr>
            <td>Can be accessed by the child component.	</td>
            <td>Cannot be accessed by child components.</td>
          </tr>
          <tr>
            <td>Used to communicate between components.	</td>
            <td>Can be used for rendering dynamic changes with the component.</td>
          </tr>
          <tr>
            <td>Stateless components can have them.	</td>
            <td>Stateless components can not have them.</td>
          </tr>
          <tr>
            <td>Are external and is controlled by whatever renders the component.	</td>
            <td>Is internal and is controlled by the React Component itself.</td>
          </tr>
          <tr>
            <td>Can not change inside Component.	</td>
            <td>Can change inside Component.
            </td>
          </tr>
          <tr>
            <td>Can change in child Components.	</td>
            <td>Can not change in child Components.</td>
          </tr>
        </table>

        <h3>How does useState work?</h3>
        <p><strong>Ans:</strong> useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
      </div>
    </div>
  );
}

export default App;
