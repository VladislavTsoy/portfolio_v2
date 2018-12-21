import React, { Fragment }from 'react';

// components
import PageHeader from '../Home/PageHeader';
import OverviewTemplate from '../Projects/OverviewTemplate';
import NextTemplate from '../Projects/NextTemplate';
import Footer from '../Home/Footer';
import Visit from '../Projects/Visit';

// resources
import './music.scss';

const MusicMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Music Streaming: Spotify Clone'} />
            </div>
            <OverviewTemplate title={'Overview'} nums={'P1'} desc={`Enjoy intuitive UI and listen to some of my favorite tracks on my fully functional music streaming web application.  Being a huge fan of music this was a fun and exciting project to work on.  I also learned and implemented GraphQL which is an incredible query language and I'm excited to use it in future projects.`}/>
            <div className='spot-project-img'></div>
            <OverviewTemplate title={'technology'} nums={'T1'} desc={'Designed and developed a music streaming web application using React, Redux, Apollo and Material-UI front end technologies, Node, Express, MongoDB, and GraphQL back end technologies.'}/>
            <div className='music-link'>
                <Visit name={'Click here to visit my music streaming app'} link={'https://music-stream-app.herokuapp.com/'}/>
            </div>
            <OverviewTemplate nums={'##'} title={'challenges'} desc={'The challenging part of this project was learning and debugging GraphQL.  After a dozen plus google and stackoverfow searches I was able to get the ball rolling.  GraphQL is incredible and I was able to make all the data I needed with a single API request.  I highly recommend implementing GraphQL to any project for a smooth developing process.'}/>
            <div className='second-project-img'></div>
            <NextTemplate info={'Next: AuGhotti - Digital Activity Tracker.'} link={'/aughotti'}/>
            <Footer />
        </Fragment>
    );
};

export default MusicMain;