import moment from 'moment'


export const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  };
}; 



export const getCurrentWeek = (start) => {
   
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    let week = [];
    let day = startOfWeek || start;

    while (day <= endOfWeek) {
      week.push(day.toDate());
      day = day.clone().add(1, "d");
    }

    
    return week;
  }; 