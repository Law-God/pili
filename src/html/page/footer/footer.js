import "./footer.less";

import React,{Component} from "react";

export default class Footer extends Component{
    render(){
        return (
            <footer className="index-footer" role="contentinfo">
                <section className="footer-left">
                    <div>
                        <a href="#">网站首页</a><a href="#">联系我们</a><a href="#">常见问题</a><a href="#">意见反馈</a><a href="#">友情链接</a>
                    </div>
                    <div>
                        <p><small>Copyright &copy; 2017 Phantom</small></p>
                    </div>
                </section>
                <section className="footer-right">
                    <a href="#" className="follous follous-weixin"><i className="follous follous-weixin-extend"></i></a>
                    <a href="#" className="follous follous-weibo"></a>
                    <a href="#" className="follous follous-qzone"></a>
                </section>
            </footer>
        );
    }
}


