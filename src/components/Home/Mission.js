import React from 'react';

const Mission = () => {
    return (
        <div className='page-mission'>
            <div className='mission-section col-1'>
                <div className='card-top'></div>
                <h6 className='card-tag'>A0</h6>
            </div>
            <div className='mission-section col-2'>
                <div className='card-top'>Mission</div>
                <div className='card-main-content'>In pursuit to become a master of my craft.  I'm currently developing my skills in Python, WebGL, GSAP and always eager to learn more.</div>
            </div>
            <div className='mission-section col-3'>
                <div className='card-top'>Education</div>
                <div className='card-education-content'>
                    Rutgers University: <br/>Bachelors in Comp Sci
                    <br/>V School: Full Stack Web Development
                </div>
            </div>
            <div className='mission-section col-4'>
                <div className='card-top'>Ventures</div>
                <div className='card-ventures-content'>United States Marine Corps: Data Systems Specialist/Network Engineer</div>
            </div>
        </div>
    );
};

export default Mission;