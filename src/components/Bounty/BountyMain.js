import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import OverviewTemplate from '../Projects/OverviewTemplate';
import NextTemplate from '../Projects/NextTemplate';
import Footer from '../Home/Footer';
import Visit from '../Projects/Visit';

// resources
import './bounty.scss';

const BountyMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Bounty Hunter - Django Fett'} />
            </div>
            <OverviewTemplate nums={'P5'} title={'overview'} desc={`This was a fun and exciting project to work on, it was my first full stack project.  On the back end I created my own RESTful API and consumed it on the front end.  This was also the first project I launched using Heroku. I certainly learned a lot on the full scope of an application and excited about learning more and developing my skills as a full stack developer.  Users can post, edit, and delete bounty's, and it will be stored in my database.`}/>
            <div id='bounty-wallpaper'></div>
            <OverviewTemplate nums={'T5'} title={'technology'} desc={'The technologies I used to craft this digital platform was Node, Express, MongoDB, and Mongoose on the back end, I used React, Redux, and Material-UI on the front end.'} />
            <div id='bounty-wallpaper-2'></div>
            <div className='bounty-link'>
                <Visit name={'Click here to visit Bounty Hunter'} link={'https://bounty-hunter-og.herokuapp.com/'}/>
            </div>
            <OverviewTemplate nums={'##'} title={'challenges'} desc={'I faced many challenges during this project, but most importantly I learned how to develop a full stack application, using applications like Postman to test my API requests like get, post, put, and delete.  It was challenge implementing the right action handlers in Redux.  Another challenge I faced was deploying a production level application on Heroku.  Resolving those issue was a sweet moment to say the least.'}/>            
            <NextTemplate info={'Next: Music Streaming - Spotify Clone'} link={'/music-stream'}/>
            <Footer />
        </Fragment>
    );
};

export default BountyMain;