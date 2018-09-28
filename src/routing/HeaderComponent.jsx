import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import './HabitTrackerScene.css';

 class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.history = props.history
  }

   goHabbitTrackerScene = () => {
     this.history.push('/habbit_tracker')
   };

  goToLifeCircleScene = () => {
    this.history.push('/life_circle')
  };

  render() {
    return(
      <React.Fragment>
      <h1 className='main-header'>Менятель жизни от Johanas Azzaid</h1>
        <div>
          <button onClick={this.goToLifeCircleScene}>Круг жизни</button>
          <button onClick={this.goHabbitTrackerScene}>Треккер привычек</button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(HeaderComponent);