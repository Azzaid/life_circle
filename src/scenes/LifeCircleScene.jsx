import React, { Component } from 'react';
import '../styles/LifeCircleScene.css';

export default class LifeCircleScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habbits:[
        {name:'Финансы', color:'#00ff7f', level:7,
          solves:[
            {name:'Уменьшить траты',
              steps:[
                {name:'Заранее просчитать траты', done:false},
                {name:'Установить лимиты на день', done:false},
                {name:'Организовать НЗ', done:true},
              ]
            },
            {name:'Прохождение ИС мужем',
              steps:[
                {name:'Вкусно и полезно кормить', done:false},
                {name:'Купить много иван-чая', done:false},
                {name:'Временно уменьшить мужу обязанности по дому', done:true},
              ]
            },
            {name:'Научиться откладывать деньги',
              steps:[
                {name:'Стараться тратить меньше запланированного', done:false},
                {name: 'Не залазить в НЗ ', done:false},
                {name:'Соотносить желания с потребностями', done:true},
              ]
            }
          ],
        },
        {name:'Бизнес', color:'#f56924', level:5,
          solves:[
            {name:'Выучить английский',
              steps:[
                {name:'Пройти тест на занние языка в Streamline', done:false},
                {name:'Установить dualingvo', done:false},
                {name:'Учить 30 новых английских слов в день', done:true},
              ]
            },
            {name:'Выучить хотя бы 1 язык программирования (JS|PHYTON)',
              steps:[
                {name:'Изучить html и css для попадания в Rolling Scopes ', done:false},
                {name:'Попасть и окончить Rolling Scopes', done:false},
                {name:'Попытаться прослушать и выполнить задания курса EDX', done:true},
              ]
            },
            {name:'Определиться с дальнейшим местом работы',
              steps:[
                {name:'Уточнить, что происходит на новом месте работы', done:false},
                {name:'Обновить резюме, походить по собеседованиям ', done:false},
                {name:'Принять окончательное решение', done:true},
              ]
            }
          ],
        },
        {name:'Здоровье', color:'#20b2aa', level:8,
          solves:[
            {name:'Продолжить сбрасывать вес',
              steps:[
                {name:'Записаться в Adrenalin GYM', done:false},
                {name:'Записаться в ZamesStudio', done:false},
                {name:'Записаться в BodyOn', done:true},
              ]
            },
            {name:'Укрепить иммунитет',
              steps:[
                {name:'Спать минимум 8 часов', done:false},
                {name:'Больше гулять на свежем воздухе', done:false},
                {name:'Есть больше свежих овощей', done:true},
              ]
            },
            {name:'Организовать режим дня',
              steps:[
                {name:'Создать график сна', done:false},
                {name:'Еда по расписанию', done:false},
                {name:'Заранее планировать дела на день', done:true},
              ]
            }
          ],
        },
        {name:'Эмоции. Яркость жизни', color:'#d277a6', level:7,
          solves:[
            {name:'Съездить на ПИ',
              steps:[
                {name:'Найти финансы', done:false},
                {name:'Найти время', done:false},
                {name:'Найти с кем оставить сына', done:true},
              ]
            },
            {name:'Активный отдых на выходных',
              steps:[
                {name:'Съездить на корпоратив с мужем', done:false},
                {name:'Сходить всей семьей в Диназаврию', done:false},
                {name:'Сходить семьей в аквапарк', done:true},
              ]
            },
            {name:'Найти гармонию',
              steps:[
                {name:'Чаще улыбаться', done:false},
                {name:'Чаще говорить спасибо', done:false},
                {name:'Не психовать по пустякам', done:true},
              ]
            }
          ],
        },
        {name:'Творчество', color:'#bf1ac9', level:5,
          solves:[
            {name:'Довязать свитер',
              steps:[
                {name:'Докупить нитки', done:false},
                {name:'Найти схему', done:false},
                {name:'Вязать в обеденный сон ребенка', done:true},
              ]
            },
            {name:'Сделать ремонт на кухне',
              steps:[
                {name:'Выбрать и поклеить обои', done:false},
                {name:'Выбрать и купить мягкий уголок в кухню', done:false},
                {name:'Сделать подсветку рабочей поверхности', done:true},
              ]
            },
            {name:'Рисовать по номерам',
              steps:[
                {name:'Выбрать картину на кухню', done:false},
                {name:'Рисовать картину по вечерам', done:false},
                {name:'Повесить картину', done:true},
              ]
            }
          ],
        },
        {name:'Личностный рост', color:'#30c6a6', level:6,
          solves:[
            {name:'Прочитать трилогию о войне роз',
              steps:[
                {name:'Прочитать "Белую королеву"', done:false},
                {name:'Прочитать "Алую королеву"', done:false},
                {name:'Прочитать "Дочь делателей королей"', done:true},
              ]
            },
            {name:'Сократить время в соц.сетях',
              steps:[
                {name:'Минимум день в неделю отдыха от всех соц.сетей', done:false},
                {name:'Проводить в соц.сетях не более 2 часов в день', done:false},
                {name:'Звонить, а не писать в мессенджерах', done:true},
              ]
            },
            {name:'Вспомнить и улучшить навыки работы в Excel',
              steps:[
                {name:'Создать с нуля аналитику продаж', done:false},
                {name:'Повторить  VBA', done:false},
                {name:'Автоматизировать аналитику при помощи макросов и  VBA', done:true},
              ]
            }
          ],
        },
        {name:'Семья', color:'#ccff00', level:9,
          solves:[
            {name:'Чаще общаться с родственниками',
              steps:[
                {name:'Звонить бабушке минимум 2 раза в неделю', done:false},
                {name:'Чаще встречаться с сестрой  и племянником', done:false},
                {name:'Чаще навещать родителей', done:true},
              ]
            },
            {name:'Разнообразить семейный досуг',
              steps:[
                {name:'Купить цветной умный песок', done:false},
                {name:'Придумать совместные игры', done:false},
                {name:'Чаще выбираться семьей в город', done:true},
              ]
            },
            {name:'Подготовить сына в садик',
              steps:[
                {name:'Разобраться с горшком', done:false},
                {name:'Записаться в детский бассейн', done:false},
                {name:'Попробывать сходить в Маугли', done:true},
              ]
            }
          ],
        },
        {name:'Окружение', color:'#00ced1', level:6,
          solves:[
            {name:'Встретиться с "маркетологами" ',
              steps:[
                {name:'Собрать людей', done:false},
                {name:'Назначить дату, время и место', done:false},
                {name:'Проконтролировать, что все придут', done:true},
              ]
            },
            {name:'Убрать негативных людей из жизни',
              steps:[
                {name:'Свести общение с негативными людьми на минимум', done:false},
                {name:'Заблокировать их в соц.сетях', done:false},
                {name:'Перестать обращать внимание на обсуждения за спиной', done:true},
              ]
            },
            {name:'Пересмотреть пространство вокруг себя',
              steps:[
                {name:'Разобрать шкафы с одеждой, ненужное отдать', done:false},
                {name:'Разобрать секцию - оставить пустые полки', done:false},
                {name:'Переговорить с соседями о велосипеде и картошке в коридорре', done:true},
              ]
            }
          ],
        },
      ],
      amountOfSteps:10,
      circleWidth:75,
      circleCenter:0,
      habbitSectorAngle:0,
      solveSectorAngle:0,
      amountOfSolveSteps:3,
      amountOfSolvesPerArea:3,
      unfoldedAreas:0,
      choosenHabbitIndex:0,
    }
  };

  componentDidMount() {
    const {amountOfSteps, circleWidth, habbits, amountOfSolvesPerArea} = this.state;
    const circleCenter = (amountOfSteps+5+amountOfSolvesPerArea) * circleWidth;
    const habbitSectorAngle = 360/(habbits.length);
    const solveSectorAngle = habbitSectorAngle/amountOfSolvesPerArea;
    this.setState({circleCenter:circleCenter, habbitSectorAngle:habbitSectorAngle, solveSectorAngle:solveSectorAngle})
  }

  rotateCircle = step => () => {
    this.setState({choosenHabbitIndex:step})
  };

  getSteps = (circleShift, habbit) => {
    const {amountOfSteps, circleWidth, circleCenter, habbitSectorAngle, choosenHabbitIndex} = this.state;
    let i = amountOfSteps;
    let stepList = [];
    while (i !== 0) {
      const stepWidth = 2*circleWidth*(i+1)*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
      const xTranslateFactor = Math.sin(habbitSectorAngle*(circleShift-choosenHabbitIndex) / (180 / Math.PI));
      const yTranslateFactor = Math.cos(habbitSectorAngle*(circleShift-choosenHabbitIndex) / (180 / Math.PI));
      const skewLenghtGap = circleWidth*0.8*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
      stepList.push(
        <div className={`step ${circleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
             key={`area${circleShift}${i}`}
             style={
               {width:stepWidth,
                 height:circleWidth*0.8,
                 transform:`translateX(${circleCenter + (i+1)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
                            translateY(${circleCenter + (i+1)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
                            rotate(${-1*habbitSectorAngle*(circleShift-choosenHabbitIndex)}deg)`}
             }>
          <div className='rightBorder'
            style={{
              width:stepWidth-skewLenghtGap,
            'background-color':`${habbit.level>=i ? habbit.color : '#fff'}`,
            top:0,
            left:(skewLenghtGap*2),
            transform:`skew(${habbitSectorAngle/2}deg)`
          }}/>
          <div className='step-text'
               style={{
                 width:stepWidth,
                 top:0,
                 left:0,
               }}
          >{i}</div>
          <div className='leftBorder'
               style={{
                 width:stepWidth-skewLenghtGap,
                 'background-color':`${habbit.level>=i ? habbit.color : '#fff'}`,
                 top:0,
                 right:(skewLenghtGap*2),
                 transform:`skew(${-habbitSectorAngle/2}deg)`
               }}/>
        </div>
      );
      i--;
    }
    const stepWidth = 2*circleWidth*(amountOfSteps+2)*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
    const xTranslateFactor = Math.sin(habbitSectorAngle*(circleShift-choosenHabbitIndex) / (180 / Math.PI));
    const yTranslateFactor = Math.cos(habbitSectorAngle*(circleShift-choosenHabbitIndex) / (180 / Math.PI));
    const xPos = (amountOfSteps+2)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2;
    const yPos = (amountOfSteps+2)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2;
    const rotAngl = -1*habbitSectorAngle*(circleShift-choosenHabbitIndex);
    stepList.push(
      <div className={`habbit-header blur ${circleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
           key={`header${circleShift}`}
           style={
             {width:stepWidth,
               height:circleWidth*1.2,
               transform:`
               translateX(${circleCenter + xPos}px)
               translateY(${circleCenter + yPos}px)
               rotate(${rotAngl}deg)`,
               'background-color':`${habbit.color || '#FFFCCC'}`,
               'border-bottom-left-radius': circleWidth*0.8,
               'border-bottom-right-radius': circleWidth*0.8,
             }
           }
      onClick={this.rotateCircle(circleShift)}>
        {habbit.name}
      </div>
    );
    return stepList;
  };

  getHabbitSteps = (habbitCircleShift, habbit, solveCircleShift, solve) => {
    const {amountOfSteps, circleWidth, circleCenter, habbitSectorAngle, solveSectorAngle, amountOfSolvesPerArea, choosenHabbitIndex} = this.state;
    let i = amountOfSolvesPerArea;
    let stepList = [];
    while (i !== 0) {
      const innerCirclesAmount = amountOfSteps+3;
      const stepWidth = 2*circleWidth*(i+innerCirclesAmount)*Math.sin(solveSectorAngle / (180 / Math.PI) / 2);
      const xTranslateFactor = Math.sin((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex)) / (180 / Math.PI));
      const yTranslateFactor = Math.cos((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex)) / (180 / Math.PI));
      const skewLenghtGap = circleWidth*0.8*Math.sin(solveSectorAngle / (180 / Math.PI) / 2);
      stepList.push(
        <React.Fragment>
          <div className={`step ${habbitCircleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
               style={
                 {width:stepWidth,
                   height:circleWidth*0.8,
                   transform:`
                   translateX(${circleCenter + (i+innerCirclesAmount)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
                   translateY(${circleCenter + (i+innerCirclesAmount)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
                   rotate(${-1*(solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex))}deg)`}
               }>
            <div className='rightBorder'
                 style={{
                   width:stepWidth-skewLenghtGap,
                   'background-color':`${habbit.color || '#FFFCCC'}`,
                   top:0,
                   left:(skewLenghtGap*2),
                   transform:`skew(${solveSectorAngle/2}deg)`
                 }}/>
            <div className='step-text blur'
                 style={{
                   width:stepWidth,
                   top:0,
                   left:0,
                 }}
            >{solve.steps[i-1].name || 'Not provided'}</div>
            <div className='leftBorder'
                 style={{
                   width:stepWidth-skewLenghtGap,
                   'background-color':`${habbit.color || '#FFFCCC'}`,
                   top:0,
                   right:(skewLenghtGap*2),
                   transform:`skew(${-solveSectorAngle/2}deg)`
                 }}/>
          </div>
        </React.Fragment>
      );
      i--;
    }
    const innerCirclesAmount = amountOfSteps+4+amountOfSolvesPerArea;
    const stepWidth = 2*circleWidth*(innerCirclesAmount)*Math.sin(solveSectorAngle / (180 / Math.PI) / 2);
    const xTranslateFactor = Math.sin((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex)) / (180 / Math.PI));
    const yTranslateFactor = Math.cos((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex)) / (180 / Math.PI));
    stepList.push(
      <div className={`habbit-header blur ${habbitCircleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
           style={
             {width:stepWidth,
               height:circleWidth*1.2,
               transform:`
               translateX(${circleCenter + (innerCirclesAmount)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
               translateY(${circleCenter + (innerCirclesAmount)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
               rotate(${-1*(solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift-choosenHabbitIndex))}deg)`,
               'background-color':`${habbit.color || '#FFFCCC'}`,
               'border-bottom-left-radius': circleWidth*0.8,
               'border-bottom-right-radius': circleWidth*0.8,
             }
           }>
        {solve.name}
      </div>
    );
    return stepList;
  };



  render() {
    const {amountOfSteps, circleWidth, circleCenter, habbitSectorAngle, habbits, amountOfSolvesPerArea} = this.state;
    return (
      <div className="App">
        <header className='App-header'
                style={{
                  width:circleWidth*(amountOfSteps+5+amountOfSolvesPerArea)*2,
                }}>
          Колесо жизненного баланса
        </header>
        <div className='circle-wrapper'>
          <div className='circle-body'
             style={{
               width:circleWidth*(amountOfSteps+5+amountOfSolvesPerArea)*2,
               height:circleWidth*(amountOfSteps+5+amountOfSolvesPerArea)*2,
             }}
        >
            <div className='center'
                 style={
                   {width:circleWidth*3,
                     height:circleWidth*3,
                     borderRadius:circleWidth*3,
                     top:circleCenter-circleWidth*1.5,
                     left:circleCenter-circleWidth*1.5}
                 }
            />
            {habbits.map((habbit, index) => {
              return (
                <React.Fragment>
                  {this.getSteps(index, habbit)}
                  {habbit.solves.map((solve,index2) => {
                    return(this.getHabbitSteps(index, habbit, index2, solve))
                  })}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
