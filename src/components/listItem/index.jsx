import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const data = props.data;
    return (
        <div className="list-item">
            <Link to="/">
                <div className="content-wrap">
                    <div className="title-wrap">
                        <p className="title">{data.title}</p>
                        <p className="more">more</p>
                    </div>
                    <div className="desc">
                        <p className="text">{data.content}</p>
                        <p className="date">{data.createtime}</p>
                    </div>
                </div>
            </Link>
            <Link to="/"><p className="author">{data.author}</p></Link>
        </div>
    )
}

export default ListItem;