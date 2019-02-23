import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExploreRecipes} from '../../actions';
import {Link} from 'react-router-dom';

class ExploreRecipeList extends Component {
	componentDidMount() {
		this.props.fetchExploreRecipes();
	}

	renderRecipes() {
		return this.props.recipes.map( recipe => {
			return(
			<Link to={'/recipe/' + recipe._id}>
				<div key={recipe._id}>
					<h1>{recipe.title}</h1>
					<h3>cook time: {recipe.time}</h3>
					<h3>by: {recipe.author.name}</h3>
					<p>id: {recipe._id}</p>
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
		);
	}
};

function mapStateToProps(state) {
	return {recipes: state.recipes};
}

export default connect(mapStateToProps, {fetchExploreRecipes})(ExploreRecipeList);