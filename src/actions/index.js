import {
  GET_EVERYTHING,
  GET_HEADLINES,  
  SET_SEARCHSTRING
} from './types';

export function getHeadLines (input) {
  return async function (dispatch) {
    const api = await fetch (`https://bq9on6ogk9.execute-api.us-east-1.amazonaws.com/dev/headlines/${input}`);
    const headlines = await api.json ();
    dispatch ({
      type: GET_HEADLINES,
      payload: headlines,
    });    
  };
}

export function setSearchString (input) {
  return async function (dispatch) {
    console.log("inside dispatch");
    dispatch ({
      type: SET_SEARCHSTRING,
      payload: input,
    });    
  };
}

export function getSearchResults (input) {
  return async function (dispatch) {
    const api = await fetch (`https://bq9on6ogk9.execute-api.us-east-1.amazonaws.com/dev/everything/${input}`);
    const data = await api.json ();
    dispatch ({
      type: GET_EVERYTHING,
      payload: data,
    });    
  };
}