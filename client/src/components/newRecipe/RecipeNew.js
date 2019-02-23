// RecipeNew shows RecipeForm
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import RecipeForm from './RecipeForm';
import RecipeFormReview from './RecipeFormReview';

class RecipeNew extends Component {

	// initialize state, a more compact way using create react app
	state = {
		showFormReview: false
	};

	renderContent() {
		if (this.state.showFormReview) {
			return <RecipeFormReview onCancel={() => this.setState({showFormReview: false})}/>
		}
		else {
			return <RecipeForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
		}
	}

	render() {
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

export default reduxForm({
	form: 'recipeForm'
})(RecipeNew);