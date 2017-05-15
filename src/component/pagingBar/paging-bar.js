/**
 * Created by Administrator on 2017/5/14.
 */
import React,{Component} from 'react';

class PagingBar extends Component{
    render(){
        var pagingOptions = {
            showNumber: 5,
            firstText : "<<",
            firstTitle: "第一页",
            prevText : "<",
            prevTitle: "上一页",
            beforeTitle : "前",
            afterTitle : "后",
            pagingTitle : "页",
            nextText : ">",
            nextTitle : "下一页",
            lastText : ">>",
            lastTitle : "最后一页",
            classNames : "grx-pagingbar pull-right"
        };
        $.extend(pagingOptions,this.props.pagingOptiions);
        return(
            <div className={pagingOptions.classNames}>
                <PagingFirst {...pagingOptions} {...this.props}/>
                <PagingBeforAfter isBefore="true" {...pagingOptions} {...this.props}/>
                <PagingList {...pagingOptions} {...this.props}/>
                <PagingBeforAfter isBefore="false" {...pagingOptions} {...this.props}/>
                <PagingLast {...pagingOptions} {...this.props}/>
                <PagingInfo {...pagingOptions} {...this.props}/>
            </div>
        );
    }
}

/*分页头组件*/
class PagingFirst extends Component{
    render(){
        var ids = [];
        let paging = this.props.item.get("paging");
        var current = paging.get("PagingIndex");
        let pagingIndex = current - 1;
        if(paging.get("PagingIndex") != 1){
            ids.push(1);
        }

        let html = ids.map(
            (v,i) =>
            <span>
                <PagingNumber title={this.props.firstTitle} text={this.props.firstText} pagingIndex={1} {...this.props}/>
                <PagingNumber title={this.props.prevTitle} text={this.props.prevText} pagingIndex={pagingIndex} {...this.props}/>
            </span>
        )

        return(
            <span className={pagingbar-fl}>
                {html}
            </span>
        );
    }
}

/*分页前后组件*/
class PagingBeforeAfter extends Component{
    render(){
        var ids = [];
        let isBefore = this.props.isBefore == "true" ? true : false;
        let paging = this.props.items.get("Paging");
        let pagingCount = paging.get("PagingCount");
        let current = paging.get("PagingIndex");

        let pagingIndex = isBefore ? current - this.props.showNumber : current + this.props.showNumber;
        let title = (isBefor ? this.props.beforeTitle : this.props.afterTitle) + (this.props.showNumber+1) + this.props.pagingTitle;

        if(isBefore && current > this.props.showNumber + 1){
            ids.push(1);
        }else if(!isBefore && current < pagingCount - this.props.showNumer){
            ids.push(1);
        }

        var html = ids.map(
            (v,i) =>
            <a href="###" onClick={this.props.actions.pagingAction.bind(this,pagingIndex)} title={title}>..</a>
        )
    }
}

/*分页页码列表组件*/
class PagingList extends Component{
    render(){
        let paging = this.props.items.get("Paging");
        let count = paging.get("PagingCount");
        let current = paging.get("PagingIndex");
        let start = current - this.props.showNumber;
        let end = current + this.props.showNumber;

        var pageIndexs = new Array();
        for(var i=start;i<end;i++){
            if(i == current){
                pageIndexs.push(i);
            }else if(i>0&i<=count){
                pageIndexs.push(i);
            }
        }

        var pagingList = pageIndexs.map(
            (v,i)=>
            current == v ?
                count > 1 ? <span className="pagingbar-current">{v}</span> : ""
            :
            <PagingNumber  pagingIndex={v} {...this.props} />
        );

        return(
            <span>{pagingList}</span>
        )
    }
}

/*分页尾部组件*/
class PagingLast extends Component{
    render(){
        var ids = [];
        let paging = this.props.items.get("Paging");
        let pagingCount = paging.get("PagingCount");
        var current = paging.get("PagingIndex");
        var pagingIndex = current + 1;

        if(paging.get("PagingIndex") < paging.get("PagingCount")){
            ids.push(1);
        }

        let html = ids.map(
            (v,i) =>
            <span>
                <PagingNumber title={this.props.nextTitle} text={this.props.nextText} pagingIndex={pagingIndex} {...this.props}/>
                <PagingNumber title={this.props.lastTitle} text={this.props.lastText} pagingIndex={pagingCount} {...this.props}/>
            </span>
        );

        return(
          <span className="pagingbar-fl">
              {html}
          </span>
        );
    }
}

/*分页页码组件*/
class PagingNumber extends Component{
    render(){
        let pagingIndex = this.props.pagingIndex;
        let title = "第" + pagingIndex + this.props.pagingTitle;
        let text = pagingIndex;

        if(this.props.title){
            title = this.props.title;
        }
        if(this.props.text){
            text = this.props.text;
        }
        return(
            <a href="###" onClick={this.props.actions.pagingAction.bind(this,pagingIndex)} title={title}>{text}</a>
        );
    }
}

/*分页信息组件*/
class PagingInfo extends Component{
    render(){
        let paging = this.props.items.get("Paging");
        let pagingIndex = paging.get("PagingIndex");
        let pagingCount = paging.get("PagingCount");
        let totalRecord = paging.get("TotalRecord");

        return(
            <span className="pagingbar-info">第{pagingIndex}/{pagingCount}页,共{totalRecord}条数据</span>
        )
    }
}

/*导出分页模块*/
export default PagingBar;






















