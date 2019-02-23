import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleRecipe} from "../actions";
import {Link} from "react-router-dom";


class SingleRecipe extends Component {



	componentDidMount() {
		const id = (this.props.location.pathname).split('/')[2];
		console.log(id);
		this.props.fetchSingleRecipe(id);
	}
	
	renderContent() {
		return this.props.recipe.map( recipe => {
			return(

				<div key={recipe._id}>
					<h1>{recipe.title}</h1>
					<h3>cook time: {recipe.time}</h3>
					<h3>serves: {recipe.serves}</h3>
					<h3>by: {recipe.author.name}</h3>
					<p>{recipe.ingredients.mainIngredients}</p>
					<p>{recipe.ingredients.garnishes}</p>
					<p>{recipe.ingredients.seasonings}</p>
					<p>{recipe.requiredKitchenware}</p>
					<p>{recipe.directions}</p>
					<p>id: {recipe._id}</p>
					<Link to={'/explore'}>
						Back to explore
					</Link>
				</div>

			)
		})
	}

	render() {
		return(
			<div>
				{this.renderContent()}

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {recipe: state.recipe};
}

export default connect(mapStateToProps, {fetchSingleRecipe})(SingleRecipe);