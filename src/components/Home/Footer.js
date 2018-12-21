import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='mission-section col-1'>
                <div className='card-top'></div>
                <h6 className='card-tag'>C1</h6>
            </div>
            <div className='mission-section col-2'>
                <div className='card-top'>Contact</div>
                <div className='card-main-content'>Vlad Tsoy</div>
                <a className='card-email-content' href="mailto:vitsoy3@gmail.com">vitsoy3@gmail.com</a>
            </div>
            <div className='mission-section col-3'>
                <div className='card-top'>Links</div>
                <div className='footer-links'>
                    <a href='https://www.linkedin.com/in/vladislavtsoyru/'>Linkedin</a>
                    <a href='https://github.com/VladislavTsoy'>Github</a>
                    <a href='https://www.instagram.com/vladislavtsoy/'>Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;