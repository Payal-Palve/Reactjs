import React from 'react';

function RenderEmp(props) {
    return (
        
            
            <tr>
                <td>{props.emp.empid}</td>
                <td>{props.emp.name}</td>
                <td>{props.emp.city}</td>
                <td>{props.emp.post}</td>
            </tr>
        
    );
}

export default RenderEmp;