import styles from "./header.less";
import commonLess from "css/common.less";

import React,{Component}from 'react';
import {IndexLink,Link} from 'react-router';

export default class Header extends Component{
    render(){
        return (
            <header className={styles['index-header']} role="banner">
                <div className={styles['head-left']}>
                    <a href="/" className={styles['logo']}></a>
                </div>
                <nav role="navigation" className={styles['nav-main']}>
                    <ul>
                        <li><IndexLink to="/" activeClassName={commonLess['active']}>首页</IndexLink></li>
                        <li><Link to="/tv" activeClassName={commonLess['active']}>剧集</Link></li>
                        <li><Link to="/role" activeClassName={commonLess['active']}>角色</Link></li>
                    </ul>
                </nav>
                <div className={styles['head-right']}>
                    <a href="#">登陆</a> | <a href="#">注册</a>
                </div>
            </header>
        );
    }
}

