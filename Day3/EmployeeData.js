
import RenderEmp from './RenderEmp';

import React from 'react';

function EmployeeData(props) {
    console.log(props.employees);


    const showEmployee=()=>
    {
        return(props.employees.map(
            (data)=>{
                return <RenderEmp emp={data}></RenderEmp>
            }
        ));
    }
    return (
        <div>
            
            <strong>Employee Data </strong>
            <table>
                <thead>
                    <tr>
                      <th>  EmId</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Post</th>
                        </tr>
                </thead>

                <tbody>
                    {showEmployee()}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeData;