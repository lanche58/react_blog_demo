import React from 'react';
import PageHeader from '../../components/pageHeader';
import HomeList from '../../components/homeList';
import LoginPopup from '../../components/loginPopup';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.loginHandle = this.loginHandle.bind(this);
        this.state = {
            isLogin: false
        }
    }

    render() {
        const isLogin = this.state.isLogin;
        return (
            <div className="home-wrap page-wrap">
                <PageHeader 
                    title="首页"
                    loginFn={this.loginHandle} 
                    // currentUser={this.props.currentUser}
                />
                <HomeList/>
                { isLogin ? <LoginPopup 
                    loginFn={this.loginHandle} 
                /> : null }
            </div>
        )
    }
    // 打开登录弹窗，不一定登录
    loginHandle(login) {
        this.setState({
            isLogin: login
        });
    }
}
export default Home;