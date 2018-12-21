import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import Footer from '../Home/Footer';
import Help from '../Home/Help';

// resources
import './contact.scss';

const Contact = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={`I'd love to hear from you.`}/>
            </div>
            <div className='contact-footer'>
                <Footer />
            </div>
            <div className='contact-help'>
                <Help info={'This portfolio was developed using: React.js, Anime.js, p5.js, WebGL, and SASS 3.'}/>
            </div>
        </Fragment>
    );
};

export default Contact;