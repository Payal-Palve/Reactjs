import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="">
                <table class="table table-hover rounded-2 border-2">

                    <thead>
                        <tr class="dark-head table-success">
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.arr.map((prd, index) => <tr>
                            <td>{prd.prdId}</td>
                            <td>{prd.prdName}</td>
                            <td>{prd.prdprice}</td>

                        </tr>)}
                    </tbody>


                </table>


            </div>
        );
    }
}

export default ProductList;