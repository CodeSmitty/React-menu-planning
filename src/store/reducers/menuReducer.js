import moment from 'moment';
import  actionTypes from '../actions/actionTypes';
import uuid from 'uuid';


const date = moment().format("MMM Do YY");

const initialState = { 
        date:null,   
        service_type: null,
        service_id: null,
        meal:null,
        meal_items: []
}



const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_MENU:
           
            return{
                ...state,
                meal:action.meal,
                date: action.date,
                service_type: action.service_type,
                service_id: action.service_id,
                meal:action.meal,
                meal_items: action.meal_items
            }
           
            
        default:
            return state;
    }
    
};





  export default menuReducer;