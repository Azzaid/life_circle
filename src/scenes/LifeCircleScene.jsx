import React, { Component } from 'react';
import '../styles/LifeCircleScene.css';

export default class LifeCircleScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habbits:[
        {name:'Финансы', color:{r:63,g:214,b:40,}, level:6,
          solves:[
            {name:'Уменьшить траты',
              steps:[
                {name:'Есть меньше вкусностей', done:false},
                {name:'Соблюдать лимиты на день', done:false},
                {name:'Реже лазить в НЗ', done:true},
              ]
            },
            {name:'Подготовится к ПР',
              steps:[
                {name:'Каждый день читать "Совершенный код"', done:false},
                {name:'Изучить Node js', done:false},
                {name:'Меньше спрашивать ментора', done:true},
              ]
            },
            {name:'Понять куда трачу деньги',
              steps:[
                {name:'Подшивать чеки за месяц', done:false},
                {name: 'Сделать четче домашнюю бухгалтерию', done:false},
                {name:'Покупать себе что-то несъедобное с каждой зарплаты', done:true},
              ]
            }
          ],
        },
        {name:'Бизнес', color:{r:140,g:26,b:168,}, level:5,
          solves:[
            {name:'Сделать свой проект',
              steps:[
                {name:'Дособирать механику', done:false},
                {name:'Найти художника-энтузиаста', done:false},
                {name:'Сделать не так как нравится мне', done:true},
              ]
            },
            {name:'Выпустить проект в свет',
              steps:[
                {name:'Изучить правила хостинга Kongregate', done:false},
                {name:'Создать и выложить главный сервер', done:false},
                {name:'Попросить знакомых о рекламе на своих страничках', done:true},
              ]
            },
            {name:'Монетизировать проект',
              steps:[
                {name:'Смириться с тем что это нужно', done:false},
                {name:'Уточнить способы монетизации на Kongregate', done:false},
                {name:'Вытряхивать деньги из пользователей как последняя тварь', done:true},
              ]
            }
          ],
        },
        {name:'Здоровье', color:{r:249,g:39,b:120,}, level:6,
          solves:[
            {name:'Активно двигатся',
              steps:[
                {name:'Ходить на айкидо', done:false},
                {name:'Подниматься на работу по лестнице', done:false},
                {name:'Успевать за сыном', done:true},
              ]
            },
            {name:'Следить за питанием',
              steps:[
                {name:'Больше белковой пищи', done:false},
                {name:'Никакого кофе до обеда', done:false},
                {name:'Фрукты и овощи каждый день', done:true},
              ]
            },
            {name:'Блюсти режим дня',
              steps:[
                {name:'Спать 8 часов', done:false},
                {name:'Ужинать до 19', done:false},
                {name:'Не вставать раньше 7', done:true},
              ]
            }
          ],
        },
        {name:'Эмоции. Яркость жизни', color:{r:255,g:122,b:40,}, level:3,
          solves:[
            {name:'Съездить на ПИ',
              steps:[
                {name:'Найти финансы', done:false},
                {name:'Найти время', done:false},
                {name:'Найти с кем оставить сына', done:true},
              ]
            },
            {name:'Проводить время с друзьями',
              steps:[
                {name:'Выбираться хотя-бы раз в месяц', done:false},
                {name:'Найти альтернативу пивным', done:false},
                {name:'Следить за концертами в минске', done:true},
              ]
            },
            {name:'Расслабиться',
              steps:[
                {name:'Не контролировать мир вокруг', done:false},
                {name:'Не думать за близких', done:false},
                {name:'Не пытаться исправить людей', done:true},
              ]
            }
          ],
        },
        {name:'Творчество', color:{r:24,g:153,b:150,}, level:3,
          solves:[
            {name:'Изучить Photoshop',
              steps:[
                {name:'Запланировать время', done:false},
                {name:'Найти обучающие видео', done:false},
                {name:'Делать хоть что-то каждую неделю', done:true},
              ]
            },
            {name:'Сделать ремонт на балконе',
              steps:[
                {name:'Утеплить стены', done:false},
                {name:'Выбросить хлам', done:false},
                {name:'Закрепить свет', done:true},
              ]
            },
            {name:'Писать программы для себя',
              steps:[
                {name:'Не тратить все силы на работе', done:false},
                {name:'Один проект за раз', done:false},
                {name:'Планировать одну новость на неделю', done:true},
              ]
            }
          ],
        },
        {name:'Личностный рост', color:{r:40,g:58,b:255,}, level:6,
          solves:[
            {name:'Уверенность в себе',
              steps:[
                {name:'Не сравнивать зарплаты. Моя выше.', done:false},
                {name:'Не доказывать ничего быдлу.', done:false},
                {name:'Не бежать за стадом', done:true},
              ]
            },
            {name:'Спокойствие',
              steps:[
                {name:'Не злиться на глупых', done:false},
                {name:'Не ставить подножки соперникам', done:false},
                {name:'Не считать соперником каждого', done:true},
              ]
            },
            {name:'Радость',
              steps:[
                {name:'Понять чего я достиг', done:false},
                {name:'Простить свои ошибки', done:false},
                {name:'Не жить завтрашним днём', done:true},
              ]
            }
          ],
        },
        {name:'Семья', color:{r:255,g:247,b:40,}, level:5,
          solves:[
            {name:'Видеться с Братом',
              steps:[
                {name:'Подать документы на шенген', done:false},
                {name:'Скопить на поездку в польшу', done:false},
                {name:'Узнать о карте поляка', done:true},
              ]
            },
            {name:'Разнообразить семейный досуг',
              steps:[
                {name:'Собрать по квартире конструктор', done:false},
                {name:'Придумать совместные игры', done:false},
                {name:'Чаще выбираться семьей в город', done:true},
              ]
            },
            {name:'Подготовить сына к жизни',
              steps:[
                {name:'Учить говорить', done:false},
                {name:'Учить бить первым', done:false},
                {name:'Учить мудрости предков', done:true},
              ]
            }
          ],
        },
        {name:'Окружение', color:{r:124,g:19,b:19,}, level:3,
          solves:[
            {name:'Собрать старых друзей',
              steps:[
                {name:'Найти людей', done:false},
                {name:'Назначить дату, время и место', done:false},
                {name:'Дважды пнуть сомневающихся', done:true},
              ]
            },
            {name:'Не боятся сильных людей',
              steps:[
                {name:'Понять что они не такие как я', done:false},
                {name:'Понять чего они хотят', done:false},
                {name:'Найти точки соприкосновения', done:true},
              ]
            },
            {name:'Улучшить своё рабочее пространство',
              steps:[
                {name:'Собрать провода в пучки', done:false},
                {name:'Повесить мотивирующую картину', done:false},
                {name:'Купить красивую лампу', done:true},
              ]
            }
          ],
        },
      ],
      amountOfSteps:10,
      circleWidth:100,
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
    const gradientString = `linear-gradient(to bottom, rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0) 0%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0.8) 10%,rgba(${habbit.color.r*0.8},${habbit.color.g*0.8},${habbit.color.b*0.8},1) 20%,rgba(${habbit.color.r},${habbit.color.g},${habbit.color.b},1) 50%,rgba(${habbit.color.r*0.8},${habbit.color.g*0.8},${habbit.color.b*0.8},1) 80%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0.8) 90%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0) 100%)`;
  
    while (i !== 0) {
      const stepWidth = 2*circleWidth*(i+1)*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
      const xTranslateFactor = Math.sin(habbitSectorAngle*(circleShift) / (180 / Math.PI));
      const yTranslateFactor = Math.cos(habbitSectorAngle*(circleShift) / (180 / Math.PI));
      const skewLenghtGap = circleWidth*0.8*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
      console.log('step is filled', habbit.level, (amountOfSteps-i), habbit.level >= (amountOfSteps-i));
      stepList.push(
        <div className={`step ${circleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
             key={`area${circleShift}${i}`}
             style={
               {width:stepWidth,
                 height:circleWidth*0.8,
                 transform:`translateX(${circleCenter + (i+1)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
                            translateY(${circleCenter + (i+1)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
                            rotate(${-1*habbitSectorAngle*(circleShift)}deg)`}
             }>
          
          <div className='rightBorder'
            style={{
              width:stepWidth-skewLenghtGap,
            'background':`${habbit.level > (amountOfSteps-i) ? gradientString : 'transparent'}`,
              borderColor: habbit.level <= (amountOfSteps-i) ? 'white' : 'transparent',
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
          >{amountOfSteps-i + 1}</div>
          <div className='leftBorder'
               style={{
                 width:stepWidth-skewLenghtGap,
                 'background':`${habbit.level > (amountOfSteps-i) ? gradientString : 'transparent'}`,
                 borderColor: habbit.level <= (amountOfSteps-i) ? 'white' : 'transparent',
                 top:0,
                 right:(skewLenghtGap*2),
                 transform:`skew(${-habbitSectorAngle/2}deg)`
               }}/>
        </div>
      );
      i--;
    }
    const stepWidth = 2*circleWidth*(amountOfSteps+2)*Math.sin(habbitSectorAngle / (180 / Math.PI) / 2);
    const xTranslateFactor = Math.sin(habbitSectorAngle*(circleShift) / (180 / Math.PI));
    const yTranslateFactor = Math.cos(habbitSectorAngle*(circleShift) / (180 / Math.PI));
    const xPos = (amountOfSteps+2)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2;
    const yPos = (amountOfSteps+2)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2;
    const rotAngl = -1*habbitSectorAngle*(circleShift);
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
               'background':gradientString,
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
    const gradientString = `linear-gradient(to bottom, rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0) 0%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0.8) 10%,rgba(${habbit.color.r*0.8},${habbit.color.g*0.8},${habbit.color.b*0.8},1) 20%,rgba(${habbit.color.r},${habbit.color.g},${habbit.color.b},1) 50%,rgba(${habbit.color.r*0.8},${habbit.color.g*0.8},${habbit.color.b*0.8},1) 80%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0.8) 90%,rgba(${habbit.color.r*0.5},${habbit.color.g*0.5},${habbit.color.b*0.5},0) 100%)`;
    while (i !== 0) {
      const innerCirclesAmount = amountOfSteps+3;
      const stepWidth = 2*circleWidth*(i+innerCirclesAmount)*Math.sin(solveSectorAngle / (180 / Math.PI) / 2);
      const xTranslateFactor = Math.sin((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift)) / (180 / Math.PI));
      const yTranslateFactor = Math.cos((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift)) / (180 / Math.PI));
      const skewLenghtGap = circleWidth*0.8*Math.sin(solveSectorAngle / (180 / Math.PI) / 2);
      stepList.push(
        <React.Fragment>
          <div className={`decision ${habbitCircleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
               style={
                 {width:stepWidth,
                   height:circleWidth*0.8,
                   transform:`
                   translateX(${circleCenter + (i+innerCirclesAmount)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
                   translateY(${circleCenter + (i+innerCirclesAmount)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
                   rotate(${-1*(solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift))}deg)`}
               }>
            <div className='rightBorder'
                 style={{
                   width:stepWidth-skewLenghtGap,
                   'background':gradientString,
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
                   'background':gradientString,
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
    const xTranslateFactor = Math.sin((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift)) / (180 / Math.PI));
    const yTranslateFactor = Math.cos((solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift)) / (180 / Math.PI));
    stepList.push(
      <div className={`decision-header blur ${habbitCircleShift === choosenHabbitIndex ? "chosen" : "not-chosen"}`}
           style={
             {width:stepWidth,
               height:circleWidth*1.2,
               transform:`
               translateX(${circleCenter + (innerCirclesAmount)*circleWidth*xTranslateFactor - stepWidth*yTranslateFactor/2}px)
               translateY(${circleCenter + (innerCirclesAmount)*circleWidth*yTranslateFactor + stepWidth*xTranslateFactor/2}px)
               rotate(${-1*(solveSectorAngle*(solveCircleShift-1) + habbitSectorAngle*(habbitCircleShift))}deg)`,
               'background':gradientString,
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
    const {amountOfSteps, circleWidth, circleCenter, habbitSectorAngle, habbits, amountOfSolvesPerArea, choosenHabbitIndex} = this.state;
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
               transform:`rotate(${habbitSectorAngle*(choosenHabbitIndex)}deg)`
             }}
        >
            <div className='center'
                 style={
                   {width:circleWidth*4,
                     height:circleWidth*4,
                     top:circleCenter-circleWidth*2,
                     left:circleCenter-circleWidth*2,
                     transform:`rotate(${habbitSectorAngle*(-choosenHabbitIndex)}deg)`
                   }
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
