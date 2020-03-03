import React from 'react';

function Table() {
  const date = new Date().getMonth();

  console.log(date);

  return (<div>
    <div className="container">

      <div className='sun'>
        <h2>Sunday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Monday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Tuesday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Wednesday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Thursday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Friday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
      <div className='sun'>
        <h2>Saturday</h2>
        <h4>Lunch</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>

        <h4>Dinner</h4>
        <input placeholder='Entre' type='text'/>
        <hr/>
        <textarea placeholder='Side' type='text'/>
      </div>
    </div>
  </div>)

}
export default Table;
