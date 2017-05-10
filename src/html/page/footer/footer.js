import styles from "./footer.less";

import React,{Component} from "react";

export default class Footer extends Component{
    render(){
        return (
            <footer className={styles['index-footer']} role="contentinfo">
                <section className={styles['footer-left']}>
                    <div>
                        <a href="#">网站首页</a><a href="#">联系我们</a><a href="#">常见问题</a><a href="#">意见反馈</a><a href="#">友情链接</a>
                    </div>
                    <div>
                        <p><small>Copyright &copy; 2017 Phantom</small></p>
                    </div>
                </section>
                <section className={styles['footer-right']}>
                    <a href="#" className={styles['follous'] + " " + styles['follous-weixin']}><i className={styles['follous'] + " " + styles['follous-weixin-extend']}></i></a>
                    <a href="#" className={styles['follous'] + " " + styles['follous-weibo']}></a>
                    <a href="#" className={styles['follous'] + " " + styles['follous-qzone']}></a>
                </section>
            </footer>
        );
    }
}


