import React from 'react';
import { Link } from 'react-router-dom';

const NextTemplate = props => {
    return (
        <div className='next-wrapper'>
            <div className='title'>
                <Link to={props.link}>{props.info}</Link>
            </div>
        </div>
    );
};

export default NextTemplate;