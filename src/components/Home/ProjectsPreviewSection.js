import React from 'react';
import { Link } from 'react-router-dom';
// components
import PageHeader from './PageHeader';

const ProjectsSection = () => {
    return (
        <div className='projects-preview-section-container'>
            <div className='projects-preview-header-container'></div>
            <div className='design-wrapper'>
                <div className='design-item-container'>
                    <div className='design-item col-1'>
                        <div className='card-top-design'></div>
                        <h6 className='design-tag'>D1</h6>
                    </div>
                    <div className='design-item col-2'>
                        <Link to='/designs'><div className='card-top-design'>Contemporary Design</div></Link>
                        <div className='design-main-content'>Adobe</div>
                        <Link to='/designs'><div className='design-description'>Project planning and designing using Adobe Illustrator and Adobe XD.</div></Link>
                    </div>
                </div>
                <div className='design-handler-wrapper'>
                    {/* <Link to='/designs'>
                        <h3>
                            See designs here
                        </h3>
                    </Link> */}
                </div>
            </div>
            <div className='preview-projects-title'>
                <PageHeader info={'Selected projects.'} />
            </div>
            <div className='projects-preview-container'>
                <div className='projects-preview-section col-1'>
                    <div className='card-top'></div>
                    <h6 className='card-tag'>P0</h6>
                </div>
                <div className='projects-preview-section col-2'>
                    <Link to='/music-stream'>
                        <div className='card-top'>Full-stack</div>
                        <div className='card-main-content'>
                            Engineered a Spotify clone.
                        </div>
                        <div className='card-description'>Enjoy intuitive UI/UX and the 12 songs I've uploaded.</div>
                    </Link>
                </div>
                <div className='projects-preview-section col-2'>
                    <Link to='aughotti'>
                    <div className='card-top'>Full-stack</div>
                    <div className='card-main-content'>
                        Activity tracking software.
                    </div>
                    <div className='card-description'>Time management? No problem, track your activities and see how you spend your time.</div>
                    </Link>
                </div>
                <div className='projects-preview-section col-2'>
                    <Link to='nba-daily'>
                        <div className='card-top'>Front-end</div>
                        <div className='card-main-content'>NBA daily news and statistics.</div>
                        <div className='card-description'>Developed a digital platform for NBA's biggest fans.</div>
                    </Link>
                </div>
            </div> 
        </div>
    );
};

export default ProjectsSection;