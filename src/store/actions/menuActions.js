import * as actionTypes from "./actionTypes";

// export const addMenu = (item) =>({
//     type: actionTypes.ADD_MENU,
//     payload:item
// })

// export const addWeek = ( formData, id) =>({
//     type:actionTypes.ADD_WEEK,
//     payload: {item, id}
// })

export const addMenu = (service) => {
  return {
    type: actionTypes.ADD_MENU,
    service: service,
  };
};

export const editItem = (service) => {
  return {
    type: actionTypes.REMOVE_MENU_ITEM,
    service: service,
  };
};
