import {combineReducers} from 'redux';
import {reducer as reduxForm}  from 'redux-form';
import authReducer from './authReducer';
import recipesReducer from './recipesReducer';
import singleRecipeReducer from './singleRecipeReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	recipes: recipesReducer,
	recipe: singleRecipeReducer
});