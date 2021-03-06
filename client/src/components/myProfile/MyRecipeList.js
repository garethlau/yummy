import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMyRecipes} from "../../actions";
import {Link} from 'react-router-dom';
class MyRecipeList extends Component {
	// call the action fetchMyRecipes()
	componentDidMount() {
		this.props.fetchMyRecipes();
	}

	// helper function to render each recipe
	renderRecipes() {
		return this.props.recipes.map(recipe => {
			return(
				<Link to={'/recipe/' + recipe._id}>
					<div key={recipe._id}>
						<h1>{recipe.title}</h1>
						<h3>cook time: {recipe.time}</h3>
						<h3>main ingredients: {recipe.ingredients.mainIngredients}</h3>
					</div>
				</Link>
			)
		})
	}

	render() {
		return(
			<div>
				{this.renderRecipes()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {recipes: state.recipes};
}

export default connect(mapStateToProps, {fetchMyRecipes})(MyRecipeList);