import React, { Component } from 'react';

import '../styles/HabitTrackerScene.css';

import elephantImage1 from '../images/el_1.png'
import elephantImage2 from '../images/el_2.png'
import elephantImage3 from '../images/el_3.png'
import elephantImage4 from '../images/el_4.png'
import earth from '../images/earth_slow.gif'

export default class HabitTrackerScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constants: {
        maxElephantHeight: 150,
        maxElephantWidth: 170,
      },
      habits: [
        {name:'Пить 2 литра воды в день', goal: 2000, downshift:30, image:elephantImage1},
        {name:'Выполнять "Приветствие солнцу" 30 минут', goal: 30, downshift:80, image:elephantImage2},
        {name:'Не злиться хотя-бы до обеда', goal: 16, downshift:80, image:elephantImage3},
        {name:'Просыпаться без кофе', goal: 16, downshift:30, image:elephantImage4},
      ],
      days: [
        {date: '26/09/2019', habits: {
          'Пить 2 литра воды в день':{amount: 2000},
            'Выполнять "Приветствие солнцу" 30 минут':{amount: 30},
            'Не злиться хотя-бы до обеда':{amount: 16},
            'Просыпаться без кофе':{amount: 16},
          }},
        {date: '27/09/2019', habits: {
            'Пить 2 литра воды в день':{amount: 1500},
            'Выполнять "Приветствие солнцу" 30 минут':{amount: 20},
            'Не злиться хотя-бы до обеда':{amount: 13},
            'Просыпаться без кофе':{amount: 10},
          }},
        {date: '28/09/2019', habits: {
            'Пить 2 литра воды в день':{amount: 2000},
            'Выполнять "Приветствие солнцу" 30 минут':{amount: 40},
            'Не злиться хотя-бы до обеда':{amount: 16},
            'Просыпаться без кофе':{amount: 20},
          }},
        {date: '29/09/2019', habits: {
            'Пить 2 литра воды в день':{amount: 1000},
            'Выполнять "Приветствие солнцу" 30 минут':{amount: 15},
            'Не злиться хотя-бы до обеда':{amount: 16},
            'Просыпаться без кофе':{amount: 20},
          }},
        {date: '30/09/2019', habits: {
            'Пить 2 литра воды в день':{amount: 2000},
            'Выполнять "Приветствие солнцу" 30 минут':{amount: 30},
            'Не злиться хотя-бы до обеда':{amount: 16},
            'Просыпаться без кофе':{amount: 5},
          }},
      ],
      earthLeftShift:0,
      earthTopShift:0,
      elephantTowerSkew:0,
    };

    this.elephantImagesList = [elephantImage3];
  }

  getEarthRotation = () => {
    const {constants, habits, days} = this.state;

    let habbitsTowersHeight=[];

    {habits.forEach((habit, index) => {
      habbitsTowersHeight[habit.name] = 0;
          {days.forEach(day => {
            let accomplishPercent = day.habits[habit.name].amount / habit.goal;
            habbitsTowersHeight[index] = habbitsTowersHeight[index]+constants.maxElephantHeight*accomplishPercent;
          })}
    })}
  };

  skewTower = () => {
    let shift = this.state.elephantTowerSkew > 0 ? -30 : 30;
    this.setState({earthLeftShift:shift * (this.state.days.length-1), elephantTowerSkew:shift})
  };


  render() {
    const {constants, habits, days, earthLeftShift, elephantTowerSkew} = this.state;
    this.getEarthRotation();
    setTimeout(() => {this.skewTower()}, 1500);
    return(
      <section className='habit-tracker'>
        <img className='earth' src={earth} style={{transform:`translateX(${earthLeftShift}px)`}}/>
        <div className='elephant-tower'>
          <div className='tower-column-wrapper'>
            {days.map(day => {
              return (
                <div className='table-cell'>
                  <div className='date-field'>
                    {day.date}
                  </div>
                </div>
              )
            })}
          </div>
          {habits.map(habit => {
            return (
              <div className='tower-column-wrapper' style={{top:`${habit.downshift}px`}}>
                {days.map((day, index) => {
                  let accomplishPercent = day.habits[habit.name].amount / habit.goal;
                  return (
                    <div className='table-cell'>
                    <div className='elephant' style={{
                      width:`${constants.maxElephantWidth*accomplishPercent}px`,
                      height:`${constants.maxElephantHeight*accomplishPercent}px`,
                      marginBottom:`-${20*accomplishPercent}px`,
                      marginTop:`-${20*accomplishPercent}px`,
                      backgroundImage:`url('${habit.image}')`,
                      transform:`translateX(${elephantTowerSkew*index/2}px)`
                    }}/>
                    </div>
                  )
                })}
              </div>
            );
          })}
        </div>
        <div className='great-turtle'/>
        <div className='habits-names-plank'>
          {habits.map(habit => {
            return (
              <div className='habit-name' style={{width:`${constants.maxElephantWidth}px`,}}>
                {habit.name}
              </div>
            );
          })}
        </div>
      </section>
    )
  }
}