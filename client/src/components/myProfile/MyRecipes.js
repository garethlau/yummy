import React from 'react';
import {Link} from 'react-router-dom';
import RecipeList from './MyRecipeList';

const MyRecipes = () => {
	return(
		<div>
			<h1>My recipes!</h1>
			<RecipeList/>
			<Link to={'/recipes/new'}>Make a new recipe</Link>
		</div>
	)
};

export default MyRecipes;