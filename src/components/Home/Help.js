import React from 'react';

const Help = props => {
    return (
        <div className='help-wrapper'>
            <div className='title'>
                {props.info}
            </div>
        </div>
    );
};

export default Help;