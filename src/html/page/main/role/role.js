import "../main.less";

import React,{Component} from "react";

const shzImg = require("./images/shz.jpg");
const yxcImg = require("./images/yxc.jpg");
const yysImg = require("./images/yys.jpg");
const qjxImg = require("./images/qjx.jpg");
const fjfsImg = require("./images/fjfs.jpg");
const sllxImg = require("./images/sllx.jpg");
const lskdImg = require("./images/lskd.jpg");
const jstImg = require("./images/jst.jpg");

export default class Role extends Component{
	render(){
		return (
			<main role="main" className="main">
				<article>
					<section>
						<img src={shzImg}/>
						<dl>
							<dt><h3><span className="cover"></span>素还真</h3></dt>
							<dd>
								半神半圣亦半仙，全儒全道是全贤，<br/>
								脑中真书藏万卷，掌握文武半边天。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={yxcImg}/>
						<dl>
							<dt><h3><span className="cover"></span>叶小钗</h3></dt>
							<dd>
								一使刀狂越九霄，长挥剑痴踏沧浪。<br/>
								断刃重续心无悔，已许江湖是故乡。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={yysImg}/>
						<dl>
							<dt><h3><span className="cover"></span>一页书</h3></dt>
							<dd>
								世事如棋，乾坤莫测，笑尽英雄啊！<br/>
								六道同坠，魔劫万千，引渡如来。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={qjxImg}/>
						<dl>
							<dt><h3><span className="cover"></span>秦假仙</h3></dt>
							<dd>
								真仙非假仙，根基远无边。<br/>
								闲闲谈文武，独占一片天。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={fjfsImg}/>
						<dl>
							<dt><h3><span className="cover"></span>佛剑分说</h3></dt>
							<dd>
								杀生为护生，斩业非斩人。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={sllxImg}/>
						<dl>
							<dt><h3><span className="cover"></span>疏楼龙宿</h3></dt>
							<dd>
								华阳初上鸿门红，疏楼更迭，<br/>龙麟不减风采；
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={lskdImg}/>
						<dl>
							<dt><h3><span className="cover"></span>乱世狂刀</h3></dt>
							<dd>
								一箫一剑平生意，负尽狂名十五年。
							</dd>
						</dl>
					</section>
				</article>
				<article>
					<section>
						<img src={jstImg}/>
						<dl>
							<dt><h3><span className="cover"></span>倦收天</h3></dt>
							<dd>
								江天一色无纤尘，鱼龙潜跃观道身。<br/>
								天人焉有两般义，道不虚行只在人。
							</dd>
						</dl>
					</section>
				</article>
			</main>
		);
	}
}



