import mainLess from "../main.less";
import detailLess from "./detail.less";

import React,{Component} from "react";
import { Link } from 'react-router';

import PicturePlay from "../../../../component/picturePlay/picturePlay";

var gyzbImg = require("./images/gyzb.jpg");
var jllyImg = require("./images/jlly.jpg");
var wjctImg = require("./images/wjct.jpg");



export default class Role extends Component{
	render(){
		return(
			<main role="main" className={mainLess['main'] + " " + detailLess['main']}>
				<div>
					<PicturePlay></PicturePlay>
				</div>
				<div>导航</div>
				<div>基本信息</div>
				<div>剧集介绍</div>
			</main>
		);
	}
}



