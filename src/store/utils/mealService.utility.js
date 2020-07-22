import moment from "moment";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const getCurrentWeek = (start) => {
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  let week = [];
  let day = startOfWeek || start;

  while (day <= endOfWeek) {
    week.push(day.toDate());
    day = day.clone().add(1, "d");
  }

  return week;
};

export const removeItemAndReplace = (existingMeals, mealToReplace) => {};


export const checkValidity = (value, rules ) => {
  let isValid = true;

  if(!rules){
    return true;
  }

  if(rules.required){
    isValid = value.trim() !== "" && isValid;
  }

  if(rules.minLength){
    isValid = value.length >= rules.minLength && isValid;
  }

  if(rules.isEmail){
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};