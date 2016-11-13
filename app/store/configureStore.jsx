import * as redux from 'redux';
import thunk from 'redux-thunk';

import {showMessageReducer}  from 'reducers';

export var configure = (initialState = {}) => {
 var reducer = redux.combineReducers({
  showMessage: showMessageReducer
 });
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
 var store = redux.createStore(reducer, initialState, composeEnhancers(  redux.applyMiddleware(thunk)
));

 return store;
};
