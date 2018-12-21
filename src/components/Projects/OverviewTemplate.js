import React from 'react';

// resources
import './styles/template.scss';

const OverviewTemplate = props => {
    return (
            <div className='template-wrapper'>
                <div className='mission-section col-1'>
                    <div className='card-top'></div>
                    <h6 className='card-tag'>{props.nums}</h6>
                </div>
                <div className='mission-section col-2'>
                    <div className='card-top'>{props.title}</div>
                    <div className='card-main-content'>
                    {props.desc}
                    </div>
                </div>
            </div>
    );
};

export default OverviewTemplate;