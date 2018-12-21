import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// components
import Navbar from './components/Home/Navbar';
import Main from './components/Home/Main';

// stylesheets
import './styles/main.scss';
import './styles/navbar.scss';
import './styles/footer.scss';
import './styles/preview.scss';
import './styles/_utilities.scss';
import './styles/help.scss';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Main />
        </Fragment>
    );
};

export default withRouter(App);