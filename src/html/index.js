import "../css/common.less";

import React,{ Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute} from 'react-router';

//page
import Header from './page/header/Header';
import Footer from './page/footer/Footer';
import Tv from "./page/main/tv/Tv";
import Role from './page/main/role/Role';
import Detail from './page/main/detail/detail';

class Application extends Component{
	render(){
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={Application}>
				<IndexRoute component={Tv}/>
				<Route path="header" component={Header}>
				</Route>
				<Route path="tv" component={Tv}>
					<Route path="detail" component={Detail}></Route>
				</Route>
				<Route path="role" component={Role}>
				</Route>
				<Route path="footer" component={Footer}>
				</Route>
			</Route>
		</Router>
	),document.getElementById("body")
);