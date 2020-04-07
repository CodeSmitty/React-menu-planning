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
  props.onAdd(lunch);
  setLunch({
    entre: "",
    side: ""
  });
  e.preventDefault();
}

return(<div>
  <h2>{props.dayName} <br/>{props.currMonth}  {props.getCurrDate}</h2>
  <h4>Lunch</h4>
  <form>
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
  <button onClick={submitLunch}>x</button>
</form>
  <p>{props.entres}</p>
  
</div>
)

};

export default Lunch;
