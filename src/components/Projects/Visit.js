import React from 'react';

const Visit = props => {
    return (
        <div className='visit-wrapper'>
            <a href={props.link}>{props.name}</a>
        </div>
    );
};

export default Visit;