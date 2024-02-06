
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrDemo from './Day3/ArrDemo';
import DynamicArray from './Day3/DynamicArray';

import EmployeeData from './Day3/EmployeeData';
import Header from './Day3/Header';





function App() {

  var emplist=[
    {empid:101,name:"xyz",city:"pune",post:"kjg"},
    {empid:102,name:"Vishal",city:"nagpur",post:"be"},
    {empid:203,name:"lkgjoik",city:"baner",post:"jkfdgh"}
  ]

  var list=[
    {name:"xyz"},
    {name:"djfhk"}
  ]
  return (
    <div className="App">
      <div>
    
<h1 class="bg-dark">hello bootstrap</h1>
     <EmployeeData employees={emplist}></EmployeeData>
     <hr></hr>
     <Header></Header>
     <hr></hr>
     <ArrDemo></ArrDemo>

      </div>
    </div>
  );
}

export default App;
