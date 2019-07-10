import React from 'react';
import { Input, Icon, Button } from 'antd';
import './style.scss';
import axios from 'axios';
import { setCurrentUserAction } from '../../pages/home/store/actionCreators';
import { connect } from 'react-redux';
class LoginPopup extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
        this.userChangeHandle = this.userChangeHandle.bind(this);
        this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
        this.state = {
            error: '',
            userValue: '',
            passwordValue: ''
        }
    }
    render() {
        return (
            <div className="Popup-wrap aaa" onClick={this.blankCloseHandle.bind(this)}>
                <div className="login-wrap">
                    <Button type="link" className="close" onClick={this.closeHandle.bind(this)}><Icon type="close" /></Button>
                    <p className="title">登录</p>
                    <form onSubmit={this.submitHandle}>
                        <Input 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="请输入用户名" 
                            allowClear
                            className={`input-area ${!this.state.userValue&&this.state.error ? 'error' : ''}`}
                            value={this.state.userValue}
                            onChange={this.userChangeHandle}
                        />
                        <Input.Password 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入密码" 
                            className={`input-area ${!this.state.passwordValue&&this.state.error ? 'error' : ''}`}
                            value={this.state.passwordValue}
                            onChange={this.passwordChangeHandle}
                        />
                        <p className="error-text">{this.state.error}</p>
                        <Button type="primary" htmlType="submit" className="btn-submit">登录</Button>
                    </form>
                </div>
            </div>
        )
    }

    closeHandle() {
        this.props.loginFn(false);
    }

    blankCloseHandle(e) {
        const target = e.target;
        let classStr = target.className;
        if (typeof classStr !== 'string') {
            classStr = '';
        }
        const result = classStr.indexOf('Popup-wrap');
        if (result !== -1) {
            this.props.loginFn(false);
        }
    }

    userChangeHandle(e) {
        this.setState({
            userValue: e.target.value
        })
    }

    passwordChangeHandle(e) {
        this.setState({
            passwordValue: e.target.value
        })
    }

    submitHandle(e) {
        e.preventDefault();
        const user_value = this.state.userValue;
        const password_value = this.state.passwordValue;
        console.log(user_value, typeof password_value);
        if (!user_value&&!password_value) {
            this.setState({
                error: '用户名和密码不能为空'
            });
            return;
        }
        if (!user_value) {
            this.setState({
                error: '用户名不能为空'
            });
            return;
        }
        if (!password_value) {
            this.setState({
                error: '密码不能为空'
            });
            return;
        }
        axios.post('/api/user/login', {
            "username": user_value,
            "password": password_value
        }, {headers: {'Content-Type': 'application/json'}}).then(res => {
            console.log(res);
            if (res.data.errno !== -1) {
                // 关闭弹窗
                this.props.loginFn(false);
                // 传递登录状态
                this.props.setCurrentUser(user_value);
                
            }
        });
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser(username) {
            dispatch(setCurrentUserAction(username))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPopup);