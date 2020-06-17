import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';

import bugActionCreators from './bug-tracker/actions';
import spinnerActionCreators from './spinner/actions';

import BugTracker from './bug-tracker';
import Spinner from './spinner';

import appStore from './store';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp(){
  const storeState = appStore.getState();
  const bugs = storeState.bugsData;
  const spinnerValue = storeState.spinnerData;
  ReactDOM.render(
    <div>
      <Spinner {...spinnerActionDispatchers} value={spinnerValue} />
      <BugTracker {...bugActionDispatchers} bugs={bugs}/>
    </div>
    , document.getElementById('root'))
}

renderApp();
appStore.subscribe(renderApp);


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
