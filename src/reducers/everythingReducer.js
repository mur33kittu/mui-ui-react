import { GET_EVERYTHING, SET_SEARCHSTRING } from '../actions/types';

let initialState = {
    everything: {},
    searchString: ""
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVERYTHING:
            initialState = {
                everything: action.payload,
                searchString: state.searchString
            }
            return initialState;
        case SET_SEARCHSTRING:
            initialState = {
                searchString: action.payload,
                everything: state.everything
            }
            return initialState;
        default:
            return state;
    }
}
