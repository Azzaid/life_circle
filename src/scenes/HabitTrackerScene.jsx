import React, { Component } from 'react';

import '../styles/HabitTrackerScene.css';

import elephantImage1 from '../images/el_1.jpg'
import elephantImage2 from '../images/el_2.jpg'
import elephantImage3 from '../images/el_3.png'
import elephantImage4 from '../images/el_4.png'
import elephantImage5 from '../images/el_5.jpg'

export default class HabitTrackerScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constants: {
        maxElephantHeight: 150,
        maxElephantWidth: 170,
      },
      habits: [
        {name:'Kill all others', goal: 100},
        {name:'Drink', goal: 10},
        {name:'Do magic', goal: 10},
        {name:'Burn the world', goal: 100},
      ],
      days: [
        {date: '02/03/2020', habits: {
          'Kill all others':{moodIndex: 1, amount: 80},
            'Drink':{moodIndex: 1, amount: 5},
            'Do magic':{moodIndex: 1, amount: 6},
            'Burn the world':{moodIndex: 1, amount: 40},
          }},
        {date: '03/03/2020', habits: {
            'Kill all others':{moodIndex: 1, amount: 100},
            'Drink':{moodIndex: 1, amount: 4},
            'Do magic':{moodIndex: 1, amount: 8},
            'Burn the world':{moodIndex: 1, amount: 70},
          }},
        {date: '04/03/2020', habits: {
            'Kill all others':{moodIndex: 1, amount: 50},
            'Drink':{moodIndex: 1, amount: 6},
            'Do magic':{moodIndex: 1, amount: 6},
            'Burn the world':{moodIndex: 1, amount: 50},
          }},
        {date: '05/03/2020', habits: {
            'Kill all others':{moodIndex: 1, amount: 100},
            'Drink':{moodIndex: 1, amount: 10},
            'Do magic':{moodIndex: 1, amount: 10},
            'Burn the world':{moodIndex: 1, amount: 100},
          }},
      ],
      moods: [
        {Name: 'Боль будет завтра', colorShift: 23}
      ]
    };

    this.elephantImagesList = [elephantImage3];
  }


  render() {
    const {constants, habits, days, moods} = this.state;
    return(
      <section className='habit-tracker'>
        <div className='elephant-tower'>
          <div className='tower-column-wrapper'>
            {days.map(day => {
              return <div className='table-cell'>{day.date}</div>
            })};
          </div>
          {habits.map(habit => {
            return (
              <div className='tower-column-wrapper'>
                {days.map(day => {
                  let accomplishPercent = day.habits[habit.name].amount / habit.goal;
                  let randomImageNumber = Math.floor(Math.random()*this.elephantImagesList.length);
                  return (
                    <div className='table-cell'>
                    <div className='elephant' style={{
                      width:`${constants.maxElephantWidth*accomplishPercent}px`,
                      height:`${constants.maxElephantHeight*accomplishPercent}px`,
                      opacity:accomplishPercent,
                      backgroundImage:`url('${this.elephantImagesList[randomImageNumber]}')`
                    }}/>
                    </div>
                  )
                })}
              </div>
            );
            
            
          })}
          
        </div>
      </section>
    )
  }
}