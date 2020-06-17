import React,{ Component} from 'react';
import moment from 'moment';
import Weekly from '../../components/Month/Weekly/Weekly';
import './newWeek.styles.scss';

function getCurrentWeek() {
    const startOfWeek = moment().startOf("week");
    const endOfWeek = moment().endOf("week");
  
    let week = [];
    let day = startOfWeek;
    console.log(week + 7);
    while (day <= endOfWeek) {
      week.push(day.toDate());
      day = day.clone().add(1, "d");
    }
    return week;
  }
class NewWeek extends Component{
    constructor(props){
        super(props)

        this.state={
            startOfCurrentWeek: moment().startOf("week"),
            endOfCurrentWeek:moment().endOf("week")
        }
    }


    
    render(){
        let week; 
        const nextWeek = () => {
            let nextWeekly = this.state.endOfCurrentWeek.add(7, 'days').format('MM DD YY');
            console.log(nextWeekly)
            return nextWeekly

        };

          
        
        return(<div>
            {week}
            <button className="prevWeek">prev week</button>
            <button className="nextWeek" onClick={nextWeek}>next week</button>
        </div>
        )
    }
  
}


export default NewWeek; 
