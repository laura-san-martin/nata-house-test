import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './style/main.scss';

import Default from "./views/layouts/default";
import Home from "./views/pages/home";
import About from "./views/pages/about";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path={"/"} exact render={props => <Default Component={Home} {...props} />} />
			<Route path={"/about"} render={props => <Default Component={About} {...props} />} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);