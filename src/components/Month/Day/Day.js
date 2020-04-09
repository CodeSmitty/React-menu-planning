import React from 'react';
import Moment from 'react-moment';
import Lunch from './Lunch';
import Card from '../../Card/Card';
import Dinner from './Dinner';

const Day = (props) => (<div className='sun'>

  <Card>
    <Lunch
      dayName={props.dayNames}
      onAdd={props.onAdded}
      currMonth={props.currMonths}
      entre={props.entres}
      getCurrDate={props.getCurrDates}/>
    <Dinner/>
  </Card>
</div>);

export default Day;
