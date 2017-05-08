import "./header.less";

import React,{Component}from 'react';
import {IndexLink,Link} from 'react-router';

export default class Header extends Component{
    render(){
        return (
            <header className="index-header" role="banner">
                <div className="head-left">
                    <a href="/" className="logo"></a>
                </div>
                <nav role="navigation" className="nav-main">
                    <ul>
                        <li><IndexLink to="/" activeClassName="active">首页</IndexLink></li>
                        <li><Link to="/tv" activeClassName="active">剧集</Link></li>
                        <li><Link to="/role" activeClassName="active">角色</Link></li>
                    </ul>
                </nav>
                <div className="head-right">
                    <a href="#">登陆</a> | <a href="#">注册</a>
                </div>
            </header>
        );
    }
}

