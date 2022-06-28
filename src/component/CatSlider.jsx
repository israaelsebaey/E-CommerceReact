import React from 'react';
import '../styles/App.css';

function CatSlider(props){
    return(
        <div className='container mt-5 slider-Container'>
            <h2 className='header mb-4 text-center'>Categories</h2>
             {props.catItems.length===0 && <div className="spinner-border text-info mt-5" role="status"></div>}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
                <div className="carousel-inner" >
                    {
                      props.catItems.map((item,index)=>{
                        return(
                            <div  className={index===0 ?"carousel-item active":"carousel-item"} key={item.id}>
                                <img src={item.image} className="d-block w-100 sliderImgs" />
                                <div className='overlay'></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.name}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                            )
                        })
                      } 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CatSlider;