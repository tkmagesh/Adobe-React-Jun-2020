import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import BugTracker from './bug-tracker';
import Spinner from './spinner';
import appStore from './store';

//rendering the components
  ReactDOM.render(
    <Provider store={appStore}>
      <div>
        <Spinner/>
        <hr/>
        <div>
          <label htmlFor="">Apply Filter : </label>
          <input type="checkbox"/>
        </div>
        <hr/>
        <BugTracker/>
      </div>
    </Provider>
    , document.getElementById('root'))



//import * as calculator from './calculator';
/* 
import { add } from './calculator';
add(10,20) 
*/

/* 
import calculator from './calculator';
console.log(calculator); 
*/

/* import calculator, { Calculator } from './calculator'; */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
