import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';

import LifeCircleScene from '../scenes/LifeCircleScene';
import HabitTrackerScene from '../scenes/HabitTrackerScene';
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
            <Route path={'/life_circle/habbit_tracker'} render={this.renderScene(HabitTrackerScene)}/>
            <Route path={'/life_circle/life_goals'} render={this.renderScene(LifeCircleScene)}/>
          </Switch>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}