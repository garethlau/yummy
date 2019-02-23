import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import RecipeField from './RecipeField';

import formFields from './formFields';


class RecipeForm extends Component {

	renderFields() {
		return _.map(formFields, ({label, name}) => {
			return <Field
				key={name}
				component={RecipeField} type="text" label={label} name={name}/>
		})

	}

	render() {
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
				{this.renderFields()}
					<Link to={'/recipes'}>Cancel</Link>
				<button type="submit">Next</button>
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {};

	_.each(formFields, ({name}) =>  {
		if (!values[name]) {
			errors[name] = "You must provide a value"
		}
	});

	return errors;
}

export default reduxForm({
	validate: validate,
	form: 'recipeForm',
	destroyOnUnmount: false
})(RecipeForm);