import React, {useState} from 'react';
import {connect } from 'react-redux';
import Card from '../Card/Card';
import classes from './ServiceForm.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input'
import { addMenu, editItem} from '../../store/actions/menuActions';
import { createStructuredSelector } from "reselect";
import {selectService} from '../../store/selectors/createWeeks.selectors'
const ServiceForm = ({addMenu, weekData, editItem,  ...props}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [state, setState] = useState({
   
    orderForm: {
      entre: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Entre'
        },
        value: ''
      },
      sideOne: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Side One'
        },
        value: ''
      },
      sideTwo: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Side Two'
        },
        value: ''
      },
      other: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Other'
        },
        value: ''
      }
    }
  })

  
  const {service} = weekData;

  

  

  const inputChangedHander = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    setState({orderForm: updatedOrderForm})
    
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formDatas = {};
    for (let formElementIdentifier in state.orderForm) { 
      formDatas[formElementIdentifier] = state.orderForm[formElementIdentifier].value
    }
    
    const formData ={
      id:props.id,
      week_Id:props.weekId,
      orderData:formDatas
    }

    // setFormData(prev =>{
    //   return{
        
    //   id:props.id,
    //   week_Id:props.weekId,
    //   orderData:formDatas
    // }})
    props.onAdd(props.modalShow);
    
    addMenu({...formData, formData})
  setIsEditing(true)
  
 
  }

  const handleEditing = (e)=>{
    e.preventDefault()
    const formDatas = {};
    for (let formElementIdentifier in state.orderForm) { 
      formDatas[formElementIdentifier] = state.orderForm[formElementIdentifier].value
    }
    
    const formData ={
      id:props.id,
      week_Id:props.weekId,
      orderData:formDatas
    }

    
    
   console.log(editItem(weekData))
    
    props.onAdd(props.modalShow);
   
  }

  
  let formElementsArray = [];
  for (let key in state.orderForm) {
    formElementsArray.push({id: key, config: state.orderForm[key]})
  }

  let input = formElementsArray.map(formElement => (<Input key={formElement.id} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={(event) => inputChangedHander(event, formElement.id)}/>))

  return (<Card   >
    <div id={props.id}className={classes.Container}>
      <div className={classes.Day}>
        <p>{props.dates}</p>
      </div>
      <p className={classes.Title}>What's for Lunch Today Chef</p>
      <div className={classes.Form}>
        <form onSubmit={isEditing ? handleEditing : submitHandler}>
          {input}
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  </Card>)
}

const mapStateToProps = createStructuredSelector({
  weekData: selectService
});

const mapDispatchToProps = dispatch =>({
  addMenu: (order) => dispatch(addMenu(order)),
  editItem: (item) =>dispatch(editItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);
