import {combineReducers} from 'redux';
import everythingReducer from './everythingReducer.js';
import headlinesReducer from './headlinesReducer.js';

export default combineReducers ({
  headlines: headlinesReducer,
  everything: everythingReducer
});
