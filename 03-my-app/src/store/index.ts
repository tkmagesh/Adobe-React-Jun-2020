import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bugsReducer from '../bug-tracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;
