import React, { Fragment } from 'react';

// components
import PageHeader from '../Home/PageHeader';
import ProjectItem from './ProjectItem';
import Footer from '../Home/Footer';

// resources
import './styles/projects.scss'

const ProjectsMain = () => {
    return (
        <Fragment>
            <div className='home-header'>
                <PageHeader info={'Selected projects.'}/>
            </div>
            <div className='projects-wrapper'>
                <ProjectItem />
            </div>
            <div className='design-footer' id='projects-footer'>
                <PageHeader info={"Have a project? Get in touch."} />
            </div>
            <Footer />
        </Fragment>
    );
};

export default ProjectsMain;