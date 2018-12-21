import React, { Fragment } from 'react';

// components
import PageHeader from './PageHeader';
import ProjectsPreviewSection from './ProjectsPreviewSection';
import Mission from './Mission';
import Help from './Help'
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={"Software developer, designer, and strategist with a passion for technology and solving real-world problems."}/>
                <Mission />
            </div>
            <ProjectsPreviewSection />
            <Help info={`Let's build something incredible together.`}/>
            <div className='home-footer-title'>
                <PageHeader info={"Based in New Jersey."} />
            </div>
            <div className='home-footer-wrapper'>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Home;