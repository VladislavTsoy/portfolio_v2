import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = (props) => {
    return (
        <Fragment>
            <div className='project-item-container'>
                <div className='project-item col-1'>
                    <div className='card-top'></div>
                    <h6 className='project-tag'>P1</h6>
                </div>
                <div className='project-item col-2'>
                    <div className='card-top'>Full Stack</div>
                    <Link to='/music-stream'>
                        <div className='project-main-content'>Music Streaming: Spotify Clone</div>
                        <div className='project-description'>Online web application for music lovers.</div>
                    </Link>
                </div>
            </div>

            <div className='project-item-container'>
                <div className='project-item col-1'>
                    <div className='card-top'></div>
                    <h6 className='project-tag'>P2</h6>
                </div>
                <div className='project-item col-2'>
                    <div className='card-top'>Full Stack</div>
                    <Link to='/aughotti'>
                        <div className='project-main-content'>Digital Activity Tracker</div>
                        <div className='project-description'>Time management? No problem.  Track your activities to see how you spend your time.</div>
                    </Link>
                </div>
            </div>

            <div className='project-item-container'>
                <div className='project-item col-1'>
                    <div className='card-top'></div>
                    <h6 className='project-tag'>P3</h6>
                </div>
                <div className='project-item col-2'>
                    <div className='card-top'>Front End</div>
                    <Link to='/nba-daily'>
                        <div className='project-main-content'>NBA Daily News</div>
                        <div className='project-description'>Developed a digital platform for NBA fans.</div>
                    </Link>
                </div>
            </div>

            <div className='project-item-container'>
                <div className='project-item col-1'>
                    <div className='card-top'></div>
                    <h6 className='project-tag'>P4</h6>
                </div>
                <div className='project-item col-2'>
                    <div className='card-top'>Front End</div>
                    <Link to='/finstagram'>
                        <div className='project-main-content'>Finstagram</div>
                        <div className='project-description'>Instagram Clone: Like, comment, and post your favorite pictures</div>
                    </Link>
                </div>
            </div>

            <div className='project-item-container'>
                <div className='project-item col-1'>
                    <div className='card-top'></div>
                    <h6 className='project-tag'>P5</h6>
                </div>
                <div className='project-item col-2'>
                    <div className='card-top'>Full Stack</div>
                    <Link to='/bounty-hunter'>
                        <div className='project-main-content'>Bounty Hunter</div>
                        <div className='project-description'>Post, edit, and delete Star Wards bounties for Django Fett.</div>
                    </Link>
                </div>
            </div>



        </Fragment>
    );
};

export default ProjectItem;