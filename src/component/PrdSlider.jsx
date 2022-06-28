import React, { Fragment } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/App.css'

function PrdSlider(props){
   
    const setting={    
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
            }
    }
   
    return(
        <Fragment>
            <div className="divider"></div>
            <h2 className='header mt-2 mb-5 text-center'>Products</h2>
            {props.prdItems.length===0 && <div className="spinner-border text-info mt-5" role="status"></div>}
            <div className="container mb-5">
                <OwlCarousel className='owl-theme ' loop margin={10} nav {...setting}>
                {
                    props.prdItems.map(item=>{
                        return(
                            <div className="card item"  key={item.id}>
                                <img src={item.image} className="card-img-top" />
                                <div className="img-overlay"></div>
                                <div className="card-body mt-2 text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p>price: {item.price}$</p>
                                    <button className="btn cart-btn" onClick={()=>props.handleAddProduct(item)}>Add to cart</button>   
                                </div>
                            </div>
                        )
                    })
                }
                </OwlCarousel>
             </div>   
        </Fragment>
    )
}

export default PrdSlider;