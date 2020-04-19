import React, {useState} from "react";
import classes from './Day.module.css'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import mealsReducer from '../../MealsHook/MealsHook'

const Lunch = (props) => {
  const [lunch, setLunch] = useState({day: props.dayName, entre: "", side: ""});


  const [practice, setPractice] = useState({
    service_type:{
      lunch:{
        date:'',
        day:props.dayName,
        service_type_id: 1,
        meal_items:[
          {
            type:{
              entre:{
                meal_items_id:1,
                title:"",
                menu_items:[]
              },
                side:{
                  entre:{
                    meal_items_id:1,
                    title:'I love you',
                    menu_items:[]
                  }
                }
              }
            }
        ]
      }
    }
  }
  );




//console.log(practice.service_type.lunch.meal_items[0].type.entre.title);




  const [hideForm, setHideForm] = useState({hidden: false})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLunch((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value
      };
    });

    console.log(lunch)
  };

  const submitLunch = (e) => {
    e.preventDefault();
    props.onAdd(lunch);
    hideForm.hidden = true;
    setLunch({day: props.dayName, entre: "", side: ""});
  };




  return (<div>
    <h4 >Lunch</h4>
    <div className={hideForm.hidden
        ? classes.Back
        : null}>
      <form onSubmit={submitLunch}>
        <input
          placeholder="Entre"
          name="entre" onChange={handleChange}
          value={lunch.entre}
          type="text"></input>
        <textarea
          name="side"
          onChange={handleChange}
          value={lunch.side}
          placeholder="Side" type="text"/>
        <button
          className={classes.SubButton}
          type="submit"
          onClick={submitLunch}>
          <AddCircleRoundedIcon />
        </button>

        <input type="text" name='name' value={practice.name}  placeholder='practice' />

      </form>
    </div>
    <p className={classes.SubmittedEntre}>{props.entres}</p>
    <p className={classes.SubmittedSide}>{props.sides}</p>
  </div>);
};

export default Lunch;
