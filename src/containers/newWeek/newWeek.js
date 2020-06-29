import React, {useEffect, useState} from "react";
import moment from "moment";
import Weekly from "../../components/Month/Weekly/Weekly";
import "./newWeek.styles.scss";

import { connect } from "react-redux";
import { selectCurrentWeek } from "../../store/selectors/createWeeks.selectors";
import { createStructuredSelector } from "reselect";
import { addWeek, addMenu } from '../../store/actions/menuActions';

const NewWeek = ({ week, addWeek }) => {

  const [isLoading, setIsloading] = useState(false)
  let [count, setCount] = useState(0)
  let [renderWeeks, setRenderWeek] = useState({
    key:null
  });
   

   const getCurrentWeek = (start) => {
   
    const startOfWeek = moment().startOf('week').add(count ,'w');
    const endOfWeek = moment().endOf('week').add(count, 'w');
    let week = [];
    let day = startOfWeek || start;

    while (day <= endOfWeek) {
      week.push(day.toDate());
      day = day.clone().add(1, "d");
    }

    
    return week;
  };

  let nextWeek = getCurrentWeek()

  
 
const handleClick = (value) =>{
 setIsloading(true)
 setCount(count + 1)
 setRenderWeek(prev =>{
   return {
     ...prev,
     key:count
   }
 })
}

const handlePreviousWeekClick = (value) =>{
  setIsloading(true)
  setCount(count - 1)
  setRenderWeek(prev =>{
    return {
      ...prev,
      key:count
    }
  })
 }

let renderWeek = (<div className='container '><Weekly previous={handlePreviousWeekClick} next={handleClick} week={week} /></div>);

if(isLoading){
for(var key in renderWeeks){
  renderWeek =  (<div className='container'><Weekly previous={handlePreviousWeekClick} next={handleClick} key={key} week={nextWeek} /></div>)
  return renderWeek;
}
}




  return (
    <div className='outside-container'>
     
      
      {renderWeek}  
      
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  week: selectCurrentWeek
});

const mapDispatchToProps = dispatch =>({
  addWeek: (item ) => dispatch(addWeek(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewWeek);
