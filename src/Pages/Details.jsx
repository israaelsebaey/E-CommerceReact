import React, { useEffect, useState,Fragment } from 'react';
import {useParams,Link} from 'react-router-dom';
import USERCRUD from '../model/user';
import '../styles/App.css';

let Details=()=>{
    let param=useParams().id;
    //console.log("props",param);
    let [object,setObject]=useState({});
    useEffect(()=>{
        USERCRUD.getById(param)
        .then(res=>{
            console.log(res);
            setObject(res.data)
        })
        .catch(err=>console.log(err));
    },{})
return(
    <Fragment>
        <div className='container mt-5 w-50 mx-auto' >
            <div className='alert alert-primary ' >
                <div className='mySpan'>
                    <div>id: {object.id} </div>
                    <div>Name: {object.name} </div>
                    <div>Email: {object.email}</div>
                </div>   
                <div className='mt-2'>
                    <Link to={'/user/list'} className='mylnk'>Back to list!</Link>
                </div>
            </div>
        </div>
   </Fragment>  
)

}
export default Details;