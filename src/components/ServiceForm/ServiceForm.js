import React, {useState} from 'react';
import Card from '../Card/Card';
import classes from './ServiceForm.module.css';
import Button from '../UI/Button/Button';

const ServiceForm = (props) =>{
  const [lunch, setLunch] = useState({ day:props.dates, entre:""})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLunch((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value
      };
    });
    console.log(lunch.entre)
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    props.onAdd(lunch)
    setLunch({day:props.dates, entre:""})
  }

    return(
      <Card>
      <div className={classes.Day}><p>{props.dates}</p></div>
      <p className={classes.Title}>What's for Lunch Today Chef</p>
      <div className={classes.Form}>
        <form>
        <input type='text' name="entre" value={lunch.entre} onChange={handleChange} placeholder='entre' />
        <input placeholder='vegetarian option' />
        <input placeholder='side 1' />
        <input placeholder='side 2' />
        <input placeholder='desert' />
        <Button clicked={submitHandler} type='submit' >Submit</Button>
      </form>
      </div>
      </Card>
    )
}

export default ServiceForm;
