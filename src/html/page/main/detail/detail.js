import detailLess from "./detail.less";

import React,{Component} from "react";
import { Link } from 'react-router';

export default class Role extends Component{
	render(){
		return(
			<main role="main" className="main">
				<div>轮播图</div>
				<div>导航</div>
				<div>基本信息</div>
				<div>剧集介绍</div>
			</main>
		);
	}
}



