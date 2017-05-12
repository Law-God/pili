
import "./jquery.slideBox.css";

import React,{Component} from "react";


//var $ = require("jquery");
//var SlideBoxPlugin = require("./jquery.slideBox");


var img1 = require("./images/1.jpg");
var img2 = require("./images/2.jpg");
var img3 = require("./images/3.jpg");
var img4 = require("./images/4.jpg");
var img5 = require("./images/5.jpg");

export default class SlideBox extends Component{
	shouldComponentUpdate() {
        return false; //告诉react这个component我们打算自己瞎搞，叫它别碰
    }
	componentDidMount(){
		//按需加载，保证调用slideBox不会报slideBox未定义
		require.ensure([], (require)=>{
		  	var SlideBoxPlugin = require('imports-loader?$=jquery!./jquery.slideBox');
			$(this.refs.slideBox).slideBox();
		});	
	}
	render(){
		return(
			<div ref="slideBox" className='slideBox'>
			  <ul className='items'>
			    <li><a href="javascript:void(0)" title="这里是测试标题一"><img src={img1} /></a></li>
			    <li><a href="javascript:void(0)" title="这里是测试标题二"><img src={img2} /></a></li>
			    <li><a href="javascript:void(0)" title="这里是测试标题三"><img src={img3} /></a></li>
			    <li><a href="javascript:void(0)" title="这里是测试标题四"><img src={img4} /></a></li>
			    <li><a href="javascript:void(0)" title="这里是测试标题五"><img src={img5}/></a></li>
			  </ul>
			</div>
		);
	}
}
