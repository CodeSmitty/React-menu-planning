import React, {useState} from 'react';
import {connect } from 'react-redux';
import Card from '../Card/Card';
import classes from './ServiceForm.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input'
import { addMenu } from '../../store/actions/menuActions';

const ServiceForm = ({addMenu, ...props}) => {
  const [state, setState] = useState({
    id:props.id,
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
      orderData:formDatas
    }
    props.onAdd(props.modalShow);
    
  addMenu(formData)
  
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
        <form onSubmit={submitHandler}>
          {input}
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  </Card>)
}

const mapDispatchToProps = dispatch =>({
  addMenu: (order) => dispatch(addMenu(order))
})

export default connect(null, mapDispatchToProps)(ServiceForm);
