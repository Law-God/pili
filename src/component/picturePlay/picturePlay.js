/**
 * Created by Administrator on 2017/5/10.
 */
import styles from "./picturePlay.css";

import React,{Component} from "react";

var img01 = require("./miages/01.jgp");
var img02 = require("./miages/02.jgp");
var img03 = require("./miages/03.jgp");
var img04 = require("./miages/04.jgp");

export default class PicturePlay extends Component{
    render(){
        return(
            <div id="fsD1" className={styles['focus']}>
                <div id="D1pic1" className={styles['fPic']}>
                    <div className={styles['fcon']} style="display: none;">
                        <a  href="http://sc.chinaz.com/"><img src={img01} style="opacity: 1; "/></a>
                        <span className={styles['shadow']}><a  href="#">红三代叶明子太庙办盛典 白色羽毛装高贵动人</a></span>
                    </div>

                    <div className={styles['fcon']} style="display: none;">
                        <a  href="http://sc.chinaz.com/"><img src={img02} style="opacity: 1; "/></a>
                        <span className={styles['shadow']}><a  href="#">佟大为登封面表情搞怪 成熟男人也是天真男孩</a></span>
                    </div>

                    <div className={styles['fcon']} style="display: none;">
                        <a  href="http://sc.chinaz.com/"><img src={img03} style="opacity: 1; "/></a>
                        <span className={styles['shadow']}><a  href="#">21岁出柜超模巴厘自曝搞笑全裸照</a></span>
                    </div>

                    <div className={styles['fcon']} style="display: none;">
                        <a  href="http://sc.chinaz.com/"><img src={img04} style="opacity: 1; "/></a>
                        <span className={styles['shadow']}><a  href="#">金喜善出道21年 皮肤白皙越长越“嫩”！</a></span>
                    </div>
                </div>
                <div className={styles['fbg']}>
                    <div className={styles['D1fBt']} id="D1fBt">
                        <a href="javascript:void(0)" hidefocus="true" target="_self" className=""><i>1</i></a>
                        <a href="javascript:void(0)" hidefocus="true" target="_self" className=""><i>2</i></a>
                        <a href="javascript:void(0)" hidefocus="true" target="_self" className={styles['current']}><i>3</i></a>
                        <a href="javascript:void(0)" hidefocus="true" target="_self" className=""><i>4</i></a>
                    </div>
                </div>
                <span className={styles['prev']}></span>
                <span className={styles['next']}></span>
            </div>
        );
    }
}