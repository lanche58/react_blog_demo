import React from 'react';
import { Button } from 'antd';
import './style.scss';

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.clickLoginHandle = this.clickLoginHandle.bind(this);
    }

    render() {
        return (
            <div className="page-header clearfix">
                <p className="title">{this.props.title}</p>
                <div className="fr">
                    {this.props.currentUser ? <p className="name">{this.props.currentUser}</p> : <Button className="btn-entry" onClick={this.clickLoginHandle}>登录</Button>}
                </div>
            </div>
        )
    }

    clickLoginHandle() {
        this.props.loginFn(true);
    }
}
export default PageHeader;