import {FETCH_SINGLE_RECIPE} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_SINGLE_RECIPE:
			return action.payload
		default:
			return state
	}
}