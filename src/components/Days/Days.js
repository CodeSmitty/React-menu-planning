import React from 'react';

const Days = (props) => (<div className='sun'>
  <h2>{props.dayNames}<br/> {props.currentDates}
    {props.getDates}</h2>
  <hr/>
  <h4>Lunch</h4>
  <input placeholder='Entre' onChange={props.lunchInput} type='text'></input>
  <p>{props.lunchValue}</p>
  <textarea placeholder='Side' type='text'/>
  <h4>Dinner</h4>
  <input placeholder='Entre' type='text'/>
  <textarea placeholder='Side' type='text'/>
</div>);

export default Days;
