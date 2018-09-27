import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';

import LifeCircleScene from './LifeCircleScene';
import HabbitTrackerScene from './HabbitTrackerScene';
import HeaderComponent from './HeaderComponent';

export default class RootRouter extends React.Component {

  renderScene = (Scene) => {
    return () => {return <Scene/>}
  };

  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
          <HeaderComponent/>
          <Switch>
            <Route exact path={'/life_circle'} render={this.renderScene(LifeCircleScene)}/>
            <Route exact path={'/habbit_tracker'} render={this.renderScene(HabbitTrackerScene)}/>
            <Redirect to={'/habbit_tracker'}/>
          </Switch>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}