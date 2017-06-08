/**
 * Created by Administrator on 2017/5/14.
 */
import styleLess from './paging.bar.less';

import React,{Component} from 'react';

export default  class PagingBar extends Component {
    constructor(props){
        super(props);
        this.state = {current : 1,value : ''}
    }
    handleClick(e) {
        let sel = this;
        return function () {
            sel.setState({current: e});
        }
    }
    handChange(e) {
        this.setState({value: e.target.value});
    }
    goNext() {
        let cur = this.state.current;
        if (cur < this.props.total) {
            this.setState({current: cur + 1});
        }
    }
    goPrev() {
        let cur = this.state.current;
        if (cur > 1) {
            this.setState({current: cur - 1});
        }
    }
    goPage() {
        var val = this.state.value;
        if (!/^[1-9]\d*$/.test(val)) {
            alert('页码只能输入大于1的正整数');
        } else if (parseInt(val) > parseInt(this.props.total)) {
            alert('没有那么多页');
        } else {
            this.setState({current: val});
        }
    }

    render() {
        let self = this;
        let total = this.props.total;
        let cur = this.state.current;
        let items = [];
        let begin, len;
        if (total > 5) {
            len = 5;
            if (cur >= total - 2) {
                begin = total - 4;
            } else if (cur <= 3) {
                begin = 1;
            } else {
                begin = cur - 2;
            }
        } else {
            len = total;
            begin = 1;
        }
        for (let i = 0; i < len; i++) {
            let cur = this.state.current;
            let showI = begin + i;
            if (cur == showI) {
                items.push({num: showI, cur: true});
            } else {
                items.push({num: showI, cur: false});
            }
        }
        return(
            <div className={styleLess['ui-pagnation']}>
                <a className={this.state.current == 1 ? styleLess['prev']+ ' ' + styleLess['disable'] : styleLess['prev']} onClick={()=>this.goPrev()}></a>
                <span className={styleLess['pagnation-cols']}>
                    {
                        items.map(function(item) {
                            return <a onClick={self.handleClick(item.num)}
                                      className={item.cur ? styleLess['num'] + ' ' + styleLess['current'] : styleLess['num']}>{item.num}</a>
                        })
                    }
                </span>
                <a className={this.state.current == this.props.total ? styleLess['next'] + ' ' + styleLess['disable'] : styleLess['next']} onClick={()=>this.goNext()}></a>
                <div className={styleLess['f1']}>
                    共<span className={styleLess['num-total']}>{total}</span>页，第<input type="text" value={this.state.value} onChange={this.handChange.bind(this)}/>页
                </div>
                <a onClick={()=>this.goPage()} className={styleLess['page-go']}>确定</a>
            </div>
        );
    }
}