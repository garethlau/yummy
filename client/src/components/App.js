import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Explore from './Explore/Explore';
import RecipeNew from './newRecipe/RecipeNew';
import MyRecipes from './myProfile/MyRecipes';
import ExploreSingleRecipe from './SingleRecipe';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return(
			<div>
				<BrowserRouter>
					<div>
						<Header/>
						<Route exact={true} path="/" component={Landing}/>
						<Route path="/explore" component={Explore}/>
						<Route exact={true} path="/my_recipes" component={MyRecipes}/>
						<Route path="/recipes/new" component={RecipeNew}/>
						<Route path="/recipe" component={ExploreSingleRecipe}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);