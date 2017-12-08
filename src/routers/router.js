import React from 'react';
import { Route, Redirect, Switch } from  "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Movie from "../pages/movie/movie";
import Cinema from "../pages/cinema/cinema";

export default class Roouers extends React.Component {

	render() {
		return (
			<Switch>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/home" exact component={Home}></Route>
				<Home>
					<Route path="/home/movie" component={Movie}></Route>
					<Route path="/home/cinema" component={Cinema}></Route>
				</Home>
				<Redirect to="/login"></Redirect>
			</Switch>
		)
	}
}