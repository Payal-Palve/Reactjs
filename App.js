
import { useState } from 'react';
import NavHead from './Componenets/NavHead';
import ProductAdd from './Componenets/ProductAdd';
import ProductList from './Componenets/ProductList';

function App() {
//modify array use UseState()is used in function component

const[productList,setProductList]=useState([{ prdId: " 1", prdName: "Mobile ", prdprice: " 9000" },
{ prdId: "2 ", prdName: " Led Tv", prdprice: " 78001" }]);

const insertProduct=(obj)=>
{
  console.log(obj);
  const newarr=[...productList,{...obj}];
  setProductList(newarr);
}

  return (
    <div>
<NavHead/>
<div class="container-fluid">
<div class="row justify-content-center">
  <div class="col-7 ">
    <div class="my-4 p-3 ">
      <ProductList arr={productList}></ProductList>
    </div>
  </div>
  <div class="col-5">
    <ProductAdd addPrdHandler={insertProduct}/>
  </div>
</div>

</div>



    </div>
  );
}

export default App;
