import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}></Route>
            </Router>
        )
    }
}
export default App;