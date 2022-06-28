import React, {Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import USERCRUD from '../model/user';
import '../styles/App.css';

function AddUser() {
    let [object,setObject]=useState({id:"",name:"",email:""});
    let handleChange=(e)=>{
        let newObj={...object};
        newObj[e.target.id]=e.target.value;
        setObject(newObj);
        console.log(newObj)
    }
    let handleSubmit=(e)=>{
        if(object.id==""&&object.name==""&&object.email==""){
            alert("Empty Fields");
         }
         else if(object.id!=""&&object.name!=""&&object.email!=""){
            e.preventDefault();
            USERCRUD.addObj({
                id:object.id,
                name:object.name,
                email:object.email,
            })
            .then(res=>{
                setObject(res.data)
                console.log(res);
                alert("Successfully Added");
                setObject({id:"",name:"",email:""})
                
            })
            .catch(err=>console.log(err));
         }    
    }
 
    return(
        <Fragment>
           <div className='container shadow-lg mt-5 form-add' >
               <h3 >Add User</h3>
             <input type="text" class="form-control" placeholder="Id" 
             id='id' value={object.id} onChange={e=>handleChange(e)}
             
             />
             <input type="text" class="form-control" placeholder="Name"
             id='name' value={object.name} onChange={e=>handleChange(e)}
            
             />
             <input type="text" class="form-control" placeholder="Email"
             id='email' value={object.email} onChange={e=>handleChange(e)}
            
             />
            <div className='footer mt-3 d-flex  justify-content-around'>
               <button className='btn btn-primary ' onClick={(e)=>handleSubmit(e)}>Add</button>  
               <Link className='btn btn-primary' to={'/user/list'}>Back To List!</Link>
            </div>                
           </div>          
        </Fragment>
    )
}
export default AddUser;