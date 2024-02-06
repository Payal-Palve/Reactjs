import React from 'react';

function DynamicArray(props) {
    console.log(props.names);
    return (
        <div>
             <div>
  <table bgcolor="cyan" border="1">
      <tr>
          <th>Student Names</th>
      </tr>
     { props.names.map((no)=><tr><td>{no}</td></tr>)}
 </table>
<hr></hr>
<center>
<table bgcolor="yellow" border="1">
      <tr>
      <th>No</th>    <th>Student Names</th>
      </tr>
     { props.names.map((no,index)=><tr><td>{index+1}</td><td>{no}</td></tr>)}
 </table></center>
    </div>
        </div>
    );
}

export default DynamicArray;