import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import DesignMission from './DesignMission';
import Footer from '../Home/Footer';

// resources
import './styles/designs.scss';

const DesignsMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={"Design tools and processes can generate innovative ideas, improve business performance and help growth."}/>
            </div>
            <DesignMission />
            <div className='design-img'></div>
            <div className='design-footer'>
                <PageHeader info={"Have an idea? Get in touch."} />
            </div>
            <Footer />
        </Fragment>
    );
};

export default DesignsMain;