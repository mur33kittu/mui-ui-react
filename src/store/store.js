import reducers from '../reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {getHeadLines} from '../actions';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
  headlines: {},
};
const middlewares = [thunk];

const store = createStore (
  reducers,
  initialState,
  composeWithDevTools (applyMiddleware (...middlewares))
);

store.dispatch (getHeadLines ('us'));

export default store;
