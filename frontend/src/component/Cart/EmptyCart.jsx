import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Empty.css";

const EmptyCart = () => {
    const Navigate=useNavigate();
    return (
        <div>
            <div className="container-fluid  mt-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            
                            <div className="card-body cart">
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='emptycart' />
                                    <h3><strong>Your Cart is Empty</strong></h3>
                                    <h4>Add something visiting here :)</h4>
                                    <button onClick={()=>Navigate('/products')} className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmptyCart
