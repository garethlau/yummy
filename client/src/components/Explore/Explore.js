import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ExploreRecipeList from './ExploreRecipeList';

class Explore extends Component {



	render() {
		return(
			<div>
				Explore
				<ExploreRecipeList/>
				<Link to={'/recipes/new'}>Make a new recipe</Link>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {auth: state.auth};
}

export default connect(mapStateToProps)(Explore);