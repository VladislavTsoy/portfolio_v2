import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import Footer from '../Home/Footer';
import OverviewTemplate from '../Projects/OverviewTemplate';
import NextTemplate from '../Projects/NextTemplate';

// resources
import './aughotti.scss';


const AuGhottiMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Digital Activity Tracker'} />
            </div>
            <OverviewTemplate nums={'P2'} title={'Overview'} desc={'Time management? No problem.  Track your activities and see where your time goes.  Users can create an account, create and track activities.  YOu can track your past activities as well as analyzing your history with GraphJS graphs.'}/>
            <OverviewTemplate nums={'T2'} title={'Technology'} desc={'Tackled this project with a great team. I was responsible for the front end UI/UX using React, Material-UI, Moment.js, and Graphjs, as well as the user authentication API and mongoDB models on the back end.'}/>
            <OverviewTemplate nums={'##'} title={'Challenges'} desc={'The biggest challenge for us was integrating user authentication on the front end.  We were able to resolve this issue by using axios authentication functions to authenticate and to store tokens in local storage.'}/>
            <NextTemplate info={'Next: Click here for your daily NBA News.'} link={'/nba-daily'} />
            <Footer />
        </Fragment>
    );
};

export default AuGhottiMain;