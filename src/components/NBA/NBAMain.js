import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import Footer from '../Home/Footer';
import OverviewTemplate from '../Projects/OverviewTemplate';
import NextTemplate from '../Projects/NextTemplate';

// resources
import './nba.scss';

const NBAMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Crafted a digital platform for NBA fans.'} />
            </div>
            <OverviewTemplate nums={'P3'} title={'overview'} desc={'NBA Daily delivers trending news in the the basketball realm using news API, as well as player statistics, bios, and highlights.  You can also view teams and team rosters.'}/>
            <OverviewTemplate nums={'T3'} title={'technology'} desc={`This digital platform is a front end applicationg created using React, Redux, and Material-UI.  I consumed API's from newsapi.org and several NBA player API's.`} />
            <OverviewTemplate nums={'##'} title={'challenges'} desc={`The toughest challenge I faced creating this platform was chaining API requests.  One of the NBA API's only contained player bio's while another container player statistics.  To resolve the issues I created a chained API get request, storing results in a promise array before making a follow up call to the secondary API.`}/>            
            <NextTemplate info={'Next: See my instagram clone'} link={'/finstagram'}/>
            <Footer />
        </Fragment>
    );
};

export default NBAMain;