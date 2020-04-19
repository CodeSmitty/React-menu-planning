


const initialState = [
  {date:"",
    service_type: 'lunch',
    service_type_id: '',
    menu_items:[
      {
        menu_items_id:'',
        name:"steak",
        type:'entre',
        meal_diets:[
          {
            diet_id:'',
            diets: ['vegetarian', 'gluten_free', 'dairy_free', 'vegan']
          }
        ]
      },
      {
        menu_items_id:1,
        name:"Mash",
        type:'side',
        meal_diets:[
          {
            diet_id:1,
            diets:['vegetarian', 'gluten_free', 'dairy_free', 'vegan']
          }
        ]
      }
    ]
  },
  {date:"",
    service_type: 'dinner',
    menu_items:[
      {
        menu_items_id:1,
        name:"",
        type:'entre',
        meal_diets:[
          {
            diet_id:1,
            diets:['vegetarian', 'gluten_free', 'dairy_free', 'vegan']
          }
        ]
      },
      {
        menu_items_id:1,
        name:"",
        type:'side',
        meal_diets:[
          {
            diet_id:1,
            diets:['vegetarian', 'gluten_free', 'dairy_free', 'vegan']
          }
        ]
      }
    ]
  }
]

const mealsReducer = (curMealState, action) =>{




}

export default mealsReducer;
