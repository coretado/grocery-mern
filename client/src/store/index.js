import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};

const middleWare = [thunk];

export const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleWare),
  window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
));