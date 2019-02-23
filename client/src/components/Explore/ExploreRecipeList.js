import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExploreRecipes} from '../../actions';

class ExploreRecipeList extends Component {
	componentDidMount() {
		this.props.fetchExploreRecipes();
	}

	renderRecipes() {
		return this.props.recipes.map( recipe => {
			return(
				<div>
					<h1>{recipe.title}</h1>
					<h3>cook time: {recipe.time}</h3>
					<h3>by: {recipe.author.name}</h3>
				</div>
			)
		})
	}

	render() {
		return(
			<div>
				{this.renderRecipes()}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {recipes: state.recipes};
}

export default connect(mapStateToProps, {fetchExploreRecipes})(ExploreRecipeList);