import detailLess from "./detail.less";
import commonLess from "css/common.less";

import React,{Component} from "react";
import { Link } from 'react-router';

import SlideBox from "component/slideBox/slideBox";


var gyzbImg = require("./images/gyzb.jpg");
var jllyImg = require("./images/jlly.jpg");
var wjctImg = require("./images/wjct.jpg");

var roleCtxImg = require("./images/role/ctx.jpg");
var roleJtsImg = require("./images/role/jts.jpg");
var roleYsImg = require("./images/role/ys.jpg");

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
				<div id="baseInfo" className={commonLess['poster']}>
					<div className={detailLess['tip']}><h2 className={detailLess['headline']}><span>基本信息</span></h2></div>
					<div className={detailLess['base-info']}>
						<section>
							<dl>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>中文名</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>霹雳布袋戏</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>外文名</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>PILI</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>出品时间</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>1988年</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>出品公司</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>霹雳国际多媒体股份有限公司</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>制片地区</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>中国台湾</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>发行公司</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>大霹雳国际整合行销股份有限公司</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>编    剧</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>黄强华</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>主    演</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>素还真，叶小钗，一页书</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
							</dl>
						</section>
						<section>
							<dl>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>集    数</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>至2017年（至仙魔鏖锋）已制作成2209集（加轰动武林的序章）</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>类    型</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>布袋戏</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>在线播放平台</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>斗鱼TV，优酷、土豆、爱奇艺等</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>别    名</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>霹雳系列布袋戏</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>统筹口白</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>黄文择</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>所属类型</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>电视偶动漫、长篇连载剧</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
								<dt className={detailLess['baseInfo-item'] + " " + detailLess['name']}>语    言</dt>
								<dd className={detailLess['baseInfo-item'] + " " + detailLess['value']}>闽南语、国语</dd>
								<div className={commonLess['clearfix']+" " + commonLess['b-b-d']}></div>
							</dl>
						</section>
					</div>
				</div>
				<div id="roleInfo" className={commonLess['poster']+" "+detailLess['roleInfo']}>
					<div className={detailLess['tip']}><h2 className={detailLess['headline']}><span>角色介绍</span></h2></div>
					<section>
						<h3>禅剑一如·寄昙说</h3>
						<article>
							<div><img src={roleJtsImg} /></div>
							<div>
								<p>
									夸幻之父遭逆神旸极招所灭后，因体内梵天之灵珠而蝉蜕重生，成为佛教修者“禅剑一如·寄昙说”，也是梵天寄体重生之新身份。寄昙说身背三光之器“三恒曌世”，功力更胜夸幻之父，以禅行剑，天涯行迹。
								</p>
							</div>
						</article>
					</section>
					<section>
						<h3>旸神·逆神旸</h3>
						<article>
							<div><img src={roleYsImg} /></div>
							<div>
								<p>
									精灵天下最顶尖的高手。沉稳高傲、睥睨天下，为狩宇之创主，被敬称为“旸神”。爱护能与环境和平共处的精灵，对破坏环境的人族与魔族，有种近乎歧视的厌恶，誓要灭尽人魔两族，净化天下。在面对同族子民以及非我族类者，旸神有着截然不同的两面性格。
								</p>
							</div>
						</article>
					</section>
					<section>
						<h3>九风萍舟·楚天行</h3>
						<article>
							<div><img src={roleCtxImg} /></div>
							<div>
								<p>
									闲游江湖、来历不明的高人，根基深不可测，常乘舟游山玩水，自甘乐为江湖飘萍。手持仙人萍，腰插竹简陋室铭，身背古雅剑袋，其人玉树临风，似儒似道，有绝世文采与智慧，饱学而深藏不露，一路帮助夸幻之父逢凶化吉。
								</p>
							</div>
						</article>
					</section>
				</div>
			</main>
		);
	}
}




