import {GET_HEADLINES} from '../actions/types';

let initialState = {
  headlines: {}
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEADLINES:
      initialState = {
        headlines: action.payload
      }
      return initialState;   
    default:
      return state;
  }
}
