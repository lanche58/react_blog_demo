import React from 'react';
import { Button } from 'antd';
import './style.scss';

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <div className="page-header clearfix">
                <p className="title">{this.props.title}</p>
                <div className="fr">
                    {this.state.isLogin ? <p className="name">任瑞</p> : <Button className="btn-entry">登录</Button>}
                </div>
            </div>
        )
    }
}
export default PageHeader;