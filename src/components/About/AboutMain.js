import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import Footer from '../Home/Footer';

// resources 
import './styles/about.scss';

const AboutMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={`I'm a visually oriented developer with a passion for creating beautiful and functional applications.`}/>
            </div>
            <div className='page-mission' id='about-overview'>
                <div className='mission-section col-1'>
                    <div className='card-top'></div>
                    <h6 className='card-tag'>A1</h6>
                </div>
                <div className='mission-section col-2'>
                    <div className='card-top'>About</div>
                    <div className='card-main-content'>
                    I served 5 years in the Marine Corps as a Network Engineer.  
                    After my term I continued my education at Rutgers University, where I studied Computer Science and developed a passion for software development.
                    Aside from my passion for programming. I enjoy my coffee black.
                    I'm not a big fan of IPA's.
                    I also have a hyperactive terrier-shih tzu, who doesn't look like a terrier nor a shih tzu.
                    Anyway, let's build something incredible together.
                    </div>
                </div>
            </div>
            <div className='about-wallpaper'>
            </div>
            <PageHeader info={'Want to connect? Drop me a line.'}/>
            <Footer />
        </Fragment>
    );
};

export default AboutMain;