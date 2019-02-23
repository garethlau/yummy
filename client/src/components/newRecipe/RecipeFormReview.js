import React from 'react';
import { connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const RecipeFormReview = ({onCancel, formValues, submitRecipe, history}) => {
	const reviewFields = _.map(formFields, ({name, label}) => {
		return(
			<div key={name}>
				<label>{label}</label>
				<div>
					{formValues[name]}
				</div>
			</div>	
		)
	});
	
	return (
		<div>
			<h2>Submit this recipe?</h2>
			{reviewFields}
			<button onClick={onCancel}>
				Back
			</button>
			<button onClick={() => submitRecipe(formValues, history)}>
				Submit Recipe
			</button>
		</div>
	)
};

function mapStateToProps(state) {
	return {formValues: state.form.recipeForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(RecipeFormReview));