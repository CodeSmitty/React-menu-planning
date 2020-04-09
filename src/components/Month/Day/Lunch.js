import React, {useState} from 'react';

const Lunch = (props) => {

const [lunch, setLunch] = useState({
  entre: "",
  side: ""
})

const handleChange = (e)=>{
  const {name, value} = e.target;
  setLunch(preLunchState =>{
    return {
      ...preLunchState,
      [name]: value
    }
  });
};

const submitLunch = (e) => {
  e.preventDefault();
  props.onAdd(lunch);
  setLunch({
    entre: "",
    side: ""
  });


}



return(<div onChange={handleChange}>
  <h2>{props.dayName} <br/>{props.currMonth}  {props.getCurrDate}</h2>
  <h4>Lunch</h4>
<form onSubmit={submitLunch}>
  <input placeholder='Entre'
    name='entre'
    onChange={handleChange}
    value={lunch.entre}
    type='text'></input>
  <textarea
    name="side"
    onChange={handleChange}
    value={lunch.side}
    placeholder='Side' type='text'/>
  <button type='submit' onClick={submitLunch}>x</button>
</form>
  <div>{props.entre}</div>

</div>
)

};

export default Lunch;
