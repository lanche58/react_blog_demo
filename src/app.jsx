import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}></Route>
            </Router>
        )
    }
    componentDidMount() {
        // axios.post('/api/user/login', {
        //     "username": user_value,
        //     "password": password_value
        // }, {headers: {'Content-Type': 'application/json'}}).then(res => {
        //     console.log(res);
        //     if (res.data.errno !== -1) {
        //         // 关闭弹窗
        //         this.props.loginFn(false);
        //         // 传递登录状态
        //         this.props.setCurrentUser(user_value);
                
        //     }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);