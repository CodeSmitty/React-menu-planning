import React from 'react';
import Moment from 'react-moment';
import Lunch from './Lunch';
import Card from '../../Card/Card';
import Dinner from './Dinner';


const Day = (props) => (<div className='sun'>

  <Card>
    <Lunch dayName={props.dayNames}
      values={props.val}
      onChanges={props.changed}
      currMonth={props.currMonths}
      lunchTime={props.lunchTimes}
      getCurrDate={props.getCurrDates}
      titleName={props.titles}
    />
    <Dinner />
  </Card>
</div>);

export default Day;
