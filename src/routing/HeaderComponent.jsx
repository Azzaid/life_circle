import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/mainHeader.css';

 class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.history = props.history
  }

   goHabbitTrackerScene = () => {
     this.history.push('/life_circle/habbit_tracker')
   };

  goToLifeCircleScene = () => {
    this.history.push('/life_circle/life_goals')
  };

  render() {
    return(
      <React.Fragment>
      <h1 className='main-header'>Менятель жизни от Johanas Azzaid</h1>
        <div className='navigation-buttons-wrapper'>
          <button className='header-button' onClick={this.goToLifeCircleScene}>Круг жизни</button>
          <button className='header-button' onClick={this.goHabbitTrackerScene}>Треккер привычек</button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(HeaderComponent);