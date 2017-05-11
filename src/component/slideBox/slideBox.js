
import styles from "./jquery.slideBox.css";

import React,{Component} from "react";

var SlideBoxPlugin = require('imports-loader?$=jquery!./jquery.slideBox');

var img1 = require("./images/1.jpg");
var img2 = require("./images/2.jpg");
var img3 = require("./images/3.jpg");
var img4 = require("./images/4.jpg");
var img5 = require("./images/5.jpg");

export default class SlideBox extends Component{
	render(){
		return(
			<div id="demo1" className={styles['slideBox']}>
			  <ul className={styles['items']}>
			    <li><a href="#" title="这里是测试标题一"><img src={img1} /></a></li>
			    <li><a href="#" title="这里是测试标题二"><img src={img2} /></a></li>
			    <li><a href="#" title="这里是测试标题三"><img src={img3} /></a></li>
			    <li><a href="#" title="这里是测试标题四"><img src={img4} /></a></li>
			    <li><a href="#" title="这里是测试标题五"><img src={img5}/></a></li>
			  </ul>
			</div>
		);
	}
}
