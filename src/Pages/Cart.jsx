import React, { Fragment} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from "react-qr-code";
import '../styles/App.css'

function Cart(props){
   let {cartItems,handleAddProduct,handleRemoveProduct,subTotal,tax,shipping,totalPrice}=props;
    const notify = () => toast.success("order succeed");
  
    return(
        <Fragment>
            {cartItems.length===0 ? <h4 className="mt-5">Empty Cart No Items Added.</h4>:
            <div className="parent container">
                <div className="row">
                    <div className="child1 col-lg-8 col-12 ">
                        <table className="table table-striped table-hover mt-5">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item=>{
                                    return(
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.image} className="cart-img"/>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button className="btn btn-dec" onClick={()=>{handleRemoveProduct(item)}}>-</button>
                                                <span>{item.qty}</span>
                                                <button className="btn btn-inc" onClick={()=>{handleAddProduct(item)}}>+</button>
                                            </td>
                                            <td>{item.price}</td>
                                        
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="child2 mt-5  col-lg-4 col-12">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>subTotal:${subTotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>tax:${tax.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>shipping:${shipping.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>totalPrice:${totalPrice.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>
                                    <button type="button" className="btn  btn-confirm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        checkout
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Products Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>product</th>
                                        <th>qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item=>{
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td>tax:${tax}</td>
                                        <td>total:${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="qr-cart">
                                <QRCode
                                id="100"
                                value="qr for cart"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={notify}>Confirm</button>
                            <ToastContainer position="bottom-left"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </Fragment>
    )
}
export default Cart;