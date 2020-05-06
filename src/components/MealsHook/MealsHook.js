
import moment from 'moment';
import uuid from 'uuid';


const date = moment().format("MMM Do YY");

const mealService = {
  service_type: {
    lunch: {
      date: '',
      day: '',
      service_type_id: 1,
      meal_items: [
        {
          type: {
            entre: {
              meal_items_id: 1,
              title: "",
              menu_items: []
            },
            side: {
              entre: {
                meal_items_id: 1,
                title: 'I love you',
                menu_items: []
              }
            }
          }
        }
      ]
    }
  }
};

const initialState = {
  service_type: null,
  id: null,
  lunch: null,
  meal_items_id: null,
  date: null,
  entre: null,
  side: null,
  meal_items: [],
  meal_items_id:null,
  identifier:null

}

const mealsReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_LUNCH':
      return{
        ...state,
        service_type: 'lunch',
        entre: action.entre,
        side: action.side,
        id: uuid.v4(),
        date: date,
        identifier:action.identifier,
        meal_items:[
          {
          meal_items_id:uuid.v4(),
          entre:action.entre
          },
          {
            meal_items_id:uuid.v4(),
            side:[action.side]
          }
        ]
      }
    default:
    return new Error ('Should not have made it here')
  }
}

const useLunchReducer = () => {

  return {
    mealsReducer:mealsReducer,
    initialState:initialState,
    mealService:mealService
        }



}


export default useLunchReducer;
