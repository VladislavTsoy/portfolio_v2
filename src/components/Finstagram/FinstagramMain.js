import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import OverviewTemplate from '../Projects/OverviewTemplate';
import NextTemplate from '../Projects/NextTemplate';
import Footer from '../Home/Footer';
import Visit from '../Projects/Visit';

// resources
import './finstagram.scss';

const FinstagramMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Finstagram'} />
            </div>
            <OverviewTemplate nums={'P4'} title={'overview'} desc={'Developed an instagram like platform, where users can post and edit photos, as well as like and comment on.  This project re-enforced my understaning of React and having functional class components that can handle unique functions like edit, delete, comment, and like.'}/>
            <div id='finstagram-wallpaper'></div>
            <OverviewTemplate nums={'T4'} title={'technology'} desc={'This digital platform was developed using React and Material-UI.'} />
            <div className='finstagram-link'>
                <Visit name={'Click here to visit Finstagram'} link={'https://finstagramgram.herokuapp.com/'}/>
            </div>
            <div id='finstagram-wallpaper-2'></div>
            <OverviewTemplate nums={'##'} title={'challenges'} desc={'Some of the challenges I faced was designing the UI/UX and creating functional class components that handle individual processes for commenting, likes, editing, and deleting.'}/>            
            <NextTemplate info={'Next: Bounty hunter - Django Fett'} link={'/bounty-hunter'}/>
            <Footer />
        </Fragment>
    );
};

export default FinstagramMain;