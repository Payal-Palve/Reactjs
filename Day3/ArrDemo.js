import React from 'react';

function ArrDemo(props) {

    let list=["java","c++","php","c#","html","oops"]
    return (
        <div>
            
            <ul>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
                <li>{list[4]}</li>
                <li>{list[5]}</li>

            </ul>
            <h2>display array using map</h2>
            <ul>
              {list.map((data)=><li>{data}</li>)}
            </ul>


            <hr></hr>
               <h2>dynameic array</h2>
              
  
        </div>
    );


}

export default ArrDemo;