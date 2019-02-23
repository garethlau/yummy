import {FETCH_USER} from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			// determine what state the user is
			// if no response, set it to false
			return action.payload || false;
		default:
			// by default, state is null
			return state;
	}
}