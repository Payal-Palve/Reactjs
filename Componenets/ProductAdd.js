import React, { Component } from 'react';
import "./Style.css";

class ProductAdd extends Component {

    constructor(props) {
        super(props);

        this.state = { prdId: " ", prdName: " ", prdprice: " " };
    }

    save=(e) => {
        alert("add list product");
        this.props.addPrdHandler(this.state);
        e.preventDefault();
    }




    render() {
        return (
            <div>
                <form>

                    <div class="container-fluid ">
                        <div class="row justify-content-center bg-light rounded-3 my-4 p-3">
                            <div class="col-10 my-4">
                                       <span class=" dark-head fw-3 fs-4">Product details</span>
                                <div class="form-floating m-1">
                                    <input type="text" class="form-control bgfg1 dark-head1"  onChange={(e)=>this.setState({prdId:e.target.value})} id="floatingInput" placeholder=''/>
                                    <label for="floatingInput">product id</label>
                                </div>
                                <div class="form-floating m-1">
                                    <input type="text" class="form-control bgfg1 dark-head1" onChange={(e)=>this.setState({prdName:e.target.value})} id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">product name</label>
                                </div>

                                <div class="form-floating m-1">
                                    <input type="text" class="form-control bgfg1 dark-head1" onChange={(e)=>this.setState({prdprice:e.target.value})} id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">price</label>
                                </div>
                                <div class="m-3 text-center">
                                    <button type="submit" onClick={this.save} class="btn p-2 fw-4 bgfg2 dark-head">Add product</button>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center bg-light rounded-3 my-4 p-3">
                            <div class="col-10 my-4">
                                       <span class=" dark-head fw-3 fs-4">Product details show</span>
                                
                                <div class="fw-3 fs-4 dark-head m-3">
                                <ul>
                                    <li>Product Id : {this.state.prdId}</li>
                                    <li>Product Name : {this.state.prdName}</li>
                                    <li>Product Price : {this.state.prdprice}</li>
                                </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

export default ProductAdd;