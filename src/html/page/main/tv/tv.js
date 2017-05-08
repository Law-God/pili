import "../main.less";

import React,{Component} from "react";
import { Link } from 'react-router';

const xmjgImg = require("./images/xmjf.jpg");
const gyzbImg = require("./images/gyzb.jpg");
const wjctImg = require("./images/wjct.jpg");
const jllyImg = require("./images/jlly.jpg");
const xmjg2zmlImg = require("./images/xmjg2zmlImg.jpg");

export default class Role extends Component{
	render(){
		const Elements = (<main role="main">
			<article>
				<section>
					<Link to="/tv/detail"><img src={xmjg2zmlImg}/></Link>
					<dl>
						<dt><h3><span className="cover"></span>仙魔鏖锋II斩魔录</h3></dt>
						<dd>
							末日十七殉道行，厄祸之始鬼神惊。<br/>
							风云尽写斩魔录，邪心魔佛动苍穹。
						</dd>
					</dl>
				</section>
			</article>
			<article>
				<section>
					<img src={xmjgImg}/>
					<dl>
						<dt><h3><span className="cover"></span>霹雳天命之仙魔鏖锋</h3></dt>
						<dd>
							天命苦劫修罗海，三光尽现仙门在；<br/>
							仙魔鏖锋战云开，邪心魔佛见如来。
						</dd>
					</dl>
				</section>
			</article>
			<article>
				<section>
					<img src={gyzbImg}/>
					<dl>
						<dt><h3><span className="cover"></span>霹雳狼烟之古原争霸</h3></dt>
						<dd>
							单锋破天枪贯地，剑争日辉弓坠月；<br/>
							狩宇奇风气吞雷，术水阴阳刀电夜。<br/>
							古原争霸，八雄峰会；<br/>
							山海奇观，谁主生灭。
						</dd>
					</dl>
				</section>
			</article>
			<article>
				<section>
					<img src={wjctImg}/>
					<dl>
						<dt><h3><span className="cover"></span>霹雳狼烟之万堺尘涛</h3></dt>
						<dd>
							千古尘涛江湖路，太上府下非道悟。<br/>
							九州锋镝何人解，九轮征伐几时无。<br/>
							万堺同修会朝城，万魔惊座镇幽都。<br/>
							刀剑忘机希奇叹，武林再开英雄途。
						</dd>
					</dl>
				</section>
			</article>
			<article>
				<section>
					<img src={jllyImg}/>
					<dl>
						<dt><h3><span className="cover"></span>霹雳狼烟之九轮燎原</h3></dt>
						<dd>
							千日失忆，还真忘，莲生解锋镝。<br/>
							一线生数，史迁笔，清荷新纪元。<br/>
							百器争锋，封剑主，奇局定唯一。<br/>
							九轮降世，天譩裁，神州尽燎原。
						</dd>
					</dl>
				</section>
			</article>
		</main>);
		return (
			<div>
                { this.props.children || Elements }
			</div>
		);
	}
}



