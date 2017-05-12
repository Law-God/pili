import detailLess from "./detail.less";
import commonLess from "css/common.less";

import React,{Component} from "react";
import { Link } from 'react-router';

import SlideBox from "component/slideBox/slideBox";


var gyzbImg = require("./images/gyzb.jpg");
var jllyImg = require("./images/jlly.jpg");
var wjctImg = require("./images/wjct.jpg");

export default class Role extends Component{
	scrollToAnchor(anchorName){
		if(anchorName){
			//找到描点
			let anchorElement = document.getElementById(anchorName);
			//如果对应id的锚点存在，就跳转到锚点
			if(anchorElement){
				anchorElement.scrollIntoView();
			}
		}
	}
	render(){
		return(
			<main role="main" className={detailLess['main']}>
				<div className={detailLess['picture-play']}>
					<article className={commonLess['poster']}>
						<SlideBox></SlideBox>
					</article>
					<article className={commonLess['poster']}>
						<dl>
							<dt><h3>剧集名称：<span>霹雳狼烟之古原争霸</span></h3></dt>
							<dd>
								<p>
									该剧集主要延续上一部《霹雳狼烟之古原争霸》，古原争霸进入了尾声，蜕变而出的夸幻之父，将对武林产生怎样的改变？逆神旸再度苏醒，武林将陷入一场未知的腥风血雨。昔日精幽大战，幽界与精灵天下埋藏的过往，真相究竟如何？
								</p>
							</dd>
							<dd><span className={commonLess['f-bold']}>类型：</span><span>布袋戏</span></dd>
							<dd><span className={commonLess['f-bold']}>导演：</span><span>王嘉祥</span></dd>
							<dd><span className={commonLess['f-bold']}>首播时间：</span><span>2016年4月15日</span></dd>
							<dd><span className={commonLess['f-bold']}>在线播放：</span><span>优酷、土豆、爱奇艺等</span></dd>
						</dl>
					</article>
				</div>
				<div className={detailLess['list'] + " " + commonLess['poster']} >
					<section><h1>目录</h1></section>
					<section>
						<dl>
							<dd><a onClick={()=>this.scrollToAnchor('baseInfo')}>1  基本信息</a></dd>
							<dd><a href="#">2  剧集简介</a></dd>
							<dd><a href="#">3  角色介绍</a></dd>
							<dd><a href="#">4  新登场角色</a></dd>
						</dl>						
					</section>
					<section>
						<dl>
							<dd><a href="#">5  章节列表</a></dd>
							<dd><a href="#">6  分集剧情</a></dd>
						</dl>
					</section>
				</div>
				<div id="baseInfo">基本信息</div>
				<div>剧集介绍</div>
			</main>
		);
	}
}




