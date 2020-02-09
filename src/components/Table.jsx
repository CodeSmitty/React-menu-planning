import React from 'react';


function Table(){

return(
  <div>
    <table>
      <thead>
	<tr>
    <th>sunday</th>

		<th>monday </th>
		<th>tuesday</th>
		<th>wednesday</th>
    <th>thursday </th>
		<th>friday</th>
		<th>saturday</th>

	</tr>
	</thead>
  <tbody>
<tr>
  <td><input name='side' placeholder='1'></input></td>
  <td><input name='entre' placeholder='2'></input></td>
  <td><input name='side' placeholder='3'></input></td>
  <td><input name='side2' placeholder='4'></input></td>
  <td><input name='entre' placeholder='5' ></input></td>
  <td><input name='side' placeholder='6'></input></td>
  <td><input name='side2' placeholder='7'></input></td>
</tr>
<tr>
  <td><input name='side' placeholder='1'></input></td>
  <td><input name='entre' placeholder='2'></input></td>
  <td><input name='side' placeholder='3'></input></td>
  <td><input name='side2' placeholder='4'></input></td>
  <td><input name='entre' placeholder='5' ></input></td>
  <td><input name='side' placeholder='6'></input></td>
  <td><input name='side2' placeholder='7'></input></td>
</tr>
</tbody>

    </table>


  </div>

)


}

export default Table;
