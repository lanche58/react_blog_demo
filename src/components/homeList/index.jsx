import React from 'react';
import { Row, Col } from 'antd';
import axios  from 'axios';
import './style.scss';
import ListItem from '../listItem';
import { setDateFormat } from '../../util/date';

class HomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        } 
    }
    render() {
        const list = this.state.listData;
        return (
            <div className="home-list">
                <Row gutter={16}>
                {
                    list.map(item =>
                    <Col key={item.id} className="gutter-row" span={6}>
                        <ListItem data={item}/>
                    </Col>
                    )
                }
                </Row>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/blog/list').then(res => {
            let data = res.data.data;
            data.forEach(item => {
                item.createtime = setDateFormat(item.createtime);
            });
            this.setState({
                listData: data
            });
        });
    }

}
export default HomeList;