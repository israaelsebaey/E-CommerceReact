import React, { Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from "react-qr-code";

function Bill(props){
    let {cartItems,subTotal,tax,shipping,totalPrice}=props;
    const notify = () => toast.success("order succeed");
 
    return(
        <Fragment>
           <div className="container bill-container mb-5">
             <h3>Details</h3>
             <table className="bill-table table table-hover ">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       cartItems.map(item=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                       })
                    }
                   
                </tbody>
             </table>
             <div className="divdier"></div>
             <div>
                <span><strong>subTotal:</strong>${subTotal} | </span>
                <span><strong>tax:</strong>${tax} | </span>
                <span><strong>shipping:</strong>${shipping} | </span>
                <span><strong>total:</strong>${totalPrice}  </span>
             </div>
             <div className="divdier"></div>
             <div className="qr-bill mt-3 ">
                            <QRCode
                            id="100"
                            value="qr for bill"/>
                        </div>
            <div className="mt-3">
              <button type="button" className="btn btn-secondary w-75 mx-auto btn-confirm"
               onClick={notify}>Confirm</button>
              <ToastContainer position="bottom-left"/>
           </div>
           </div>    
        </Fragment>
    )
}
export default Bill;