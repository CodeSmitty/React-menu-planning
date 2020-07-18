import React, { useState } from 'react';
import Input from '../../UI/Input/Input'
import './signup.styles.scss';
import Button from '../../UI/Button/Button';

const Signup = (props) =>{
const [signUpForm, setState] = useState({
   
       displayName:{
           elementType:'input',
           elementConfig:{
               type: 'text',
               placeholder: 'Display Name'
           },
            value:''
        },
        email:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'email'
            },
        
            value:''},
         password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
            
            value:''},
        confirmPassword:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Confirm Password'
            },
            value:''
        }
        })


const handleChange =()=>{
    console.log('change')
};

const handleSubmit = () => {
    console.log('change')
}

const formElememntsArray = [];
for(let key in signUpForm){
    formElememntsArray.push({
        id:key,
        config:signUpForm[key]
    })
}

console.log(formElememntsArray)
let forms = formElememntsArray.map(formElement =>(
    
    <Input 
        inputType='signup-input'
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={(e)=>handleChange(e)}
    />
   
))

const {displayName, email, password, confirmPassword} = signUpForm;
 
    return (
      <div className="signup-box">
        <h2 className="login-h2">Resgister</h2>
        <span className="login-span">
        </span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          {forms}
          <div className='register-button'>
          <Button btnType="google-signin" clicked={props.handleClick}>
            Register
          </Button>
          </div>
        </form>
      </div>
    );
}

export default Signup;