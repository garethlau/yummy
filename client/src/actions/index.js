import axios from 'axios';
import {FETCH_USER} from "./types";
import {FETCH_RECIPES} from "./types";
import {FETCH_SINGLE_RECIPE} from "./types";

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({type: FETCH_USER, payload: res.data});
};

export const submitRecipe = (values, history) => async dispatch => {
	// format the data into the format the api expects here

	// test values for fields not yet covered by the form
	const TEST_VALUES = {
		seasonings: [],
		garnishes: [],
		requiredKitchenware: [],
		directions: [],
		favourite: true,
		public: true,
		authorName: "Gareth",
		authorId: "5c70c27384120c0fcc332d78"
	};

	const {title, ingredientsMain, serves, time} = values;
	let data = {
		title: title,
		time: time,
		serves: serves,
		ingredients: {
			seasonings: TEST_VALUES.seasonings,
			mainIngredients: [ingredientsMain],
			garnishes: TEST_VALUES.garnishes
		},
		requiredKitchenware: TEST_VALUES.requiredKitchenware,
		directions: TEST_VALUES.directions,
		favourite: TEST_VALUES.favourite,
		public: TEST_VALUES.public,
		author: {
			name: TEST_VALUES.authorName,
			id: TEST_VALUES.authorId
		}
	};

	console.log(values);

	const res = await axios.post('/api/recipes/add', data);
	history.push('/my_recipes');
	dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchExploreRecipes = () => async dispatch => {
	const res = await axios.get('/api/explore');
	console.log("in the fetch explore recipes action", res);
	dispatch({type: FETCH_RECIPES, payload: res.data});
};

export const fetchMyRecipes = () => async dispatch => {
	const res = await axios.get('/api/my_recipes');
	console.log("in the my recipes action", res);
	dispatch({type: FETCH_RECIPES, payload: res.data});
};

export const fetchSingleRecipe = (id) => async dispatch => {
	const url = '/api/recipes/' + id;
	const res = await axios.get(url);
	dispatch({type: FETCH_SINGLE_RECIPE, payload: res.data});
};