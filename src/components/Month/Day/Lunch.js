import React from 'react';

const Lunch = (props) => {




return(<div>
  <h2>{props.dayName} <br/>{props.currMonth}  {props.getCurrDate}</h2>
  <h4>Lunch</h4>
  <input placeholder='Entre' name={props.titleName} onChange={props.onChanges} value={props.values} type='text'></input>
  <p>{props.values}</p>
  <p>{props.lunchValue}</p>
  <textarea placeholder='Side' type='text'/>
</div>
)

};

export default Lunch;
