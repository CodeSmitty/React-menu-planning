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

  let renderWeek = null;
 
const handleClick = (value) =>{
 setIsloading(true)
 setCount(prev =>{
   return{
     ...prev,
     count:count + 1
   }
 })
 console.log(count)
}

if(isLoading){
  renderWeek = (<Weekly week={nextWeek} />)
}


  return (
    <div>
      <Weekly week={week}/>
      {renderWeek}
      <button className="prevWeek">prev week</button>
      <button className="nextWeek" onClick={()=>handleClick(count++)}  >
        next week
      </button>
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
