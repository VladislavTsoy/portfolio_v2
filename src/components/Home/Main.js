import React, {PureComponent} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

// components
import Home from './Home';
import ProjectsMain from '../Projects/ProjectsMain';
import AboutMain from '../About/AboutMain';
import ContactMain from '../Contact/ContactMain';
import DesignsMain from '../Designs/DesignsMain';
import NBAMain from '../NBA/NBAMain';
import MusicMain from '../Music/MusicMain';
import AuGhottiMain from '../AuGhotti/AuGhottiMain';
import BountyMain from '../Bounty/BountyMain';
import FinstagramMain from '../Finstagram/FinstagramMain';

class Main extends PureComponent {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/projects' component={ ProjectsMain }/>
                    <Route path='/about' component={ AboutMain } />
                    <Route path='/contact' component={ ContactMain } />
                    <Route path='/designs' component={ DesignsMain } />
                    <Route path='/nba-daily' component={ NBAMain } />
                    <Route path='/music-stream' component={ MusicMain } />
                    <Route path='/aughotti' component={ AuGhottiMain } />
                    <Route path='/bounty-hunter' component={ BountyMain } />
                    <Route path='/finstagram' component={ FinstagramMain } />
                </Switch>
            </main>
        );
    }
};

export default withRouter(Main);