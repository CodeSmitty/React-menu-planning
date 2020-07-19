import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utils/mealService.utility";

const initialState = {
  service: [],
  modalShow: null,
};

const submitFormSuccess = (state, action) => {
  // const newOrder = updateObject( action.orderData, { id: action.newOrder } );
  const updateService = updateObject(action.service);

  return updateObject(state, {
    modalShow: 0,
    service: state.service.concat(updateService),
  });
};

const editItems = (state, action) => {
  const updatedService = { ...state };
  const updatedServices = updateObject(state, updatedService);
  const serviceItem = updatedService.service.find((x) => {
    return x.id === action.service.id;
  });

  console.log(serviceItem);
  //service: state.service.filter(service => service.id !== action.service.id)

  const updatedState = {
    service: [updatedServices],
  };
  // const checkedState = updatedServices.service.filter((x) => {
  //   return x.id !== action.service.id;
  // });
  return updatedState;
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MENU:
      return submitFormSuccess(state, action);
    case actionTypes.REMOVE_MENU_ITEM:
      return editItems(state, action);
    default:
      return state;
  }
};

export default menuReducer;
