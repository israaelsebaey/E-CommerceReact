import React, {Fragment, useState ,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import USERCURD from '../model/user';
import '../styles/App.css';

function EditUser() {
    let param=useParams().id;
    let [object,setObject]=useState({id:"",name:"",email:""});
    useEffect(()=>{
        USERCURD.getById(param)
       .then(res=>{
           console.log(res)
           setObject(res.data)
       })
       .catch(err=>console.log(err))
    },{})
    let handleChange=(e)=>{
        let newObj={...object};
        newObj[e.target.id]=e.target.value;
        setObject(newObj);
        console.log(newObj)

    }

    let handleSubmit=()=>{
        USERCURD.editObj(param,{
            name:object.name,
            email:object.email,
        })
        .then(res=>{
            setObject(res.data)
            console.log(res);
            alert("Updated Successfully");
            setObject({id:"",name:"",email:""})
        })
        .catch(err=>console.log(err))
    }

    return(
        <Fragment>
           <div className='container shadow-lg mt-5 form-add' >
               <h3 >Edit User</h3>
             <input type="text" class="form-control" placeholder="Name"
             id='name' value={object.name} onChange={e=>handleChange(e)}
            
             />
             <input type="text" class="form-control" placeholder="Email"
             id='email' value={object.email} onChange={e=>handleChange(e)}
            
             />
            <div className='footer mt-3 d-flex  justify-content-around'>
               <button className='btn btn-primary ' onClick={(e)=>handleSubmit(e)}>Edit</button>  
               <Link className='btn btn-primary' to={'/user/list'}>Back To List!</Link>
            </div>                
           </div>          
        </Fragment>
    )
}
export default EditUser;