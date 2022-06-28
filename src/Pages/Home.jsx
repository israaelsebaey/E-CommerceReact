import React, { Fragment } from 'react';
import CatSlider from '../component/CatSlider';
import PrdSlider from '../component/PrdSlider';


function Home(props){
    return(
        <Fragment>
            <CatSlider catItems={props.categories} />
            <PrdSlider prdItems={props.products} handleAddProduct={props.handleAddProduct}/>
        </Fragment>
    )        
}

export default Home;