import React from 'react';
import PageHeader from '../../components/pageHeader';
import HomeList from '../../components/homeList';
class Home extends React.Component {
    render() {
        return (
            <div className="home-wrap page-wrap">
                <PageHeader title="首页"/>
                <HomeList/>
            </div>
        )
    }
}
export default Home;