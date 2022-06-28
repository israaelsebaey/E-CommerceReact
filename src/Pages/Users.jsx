import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import USERCURD from '../model/user';
import '../styles/App.css';

function Users(){
    let [users,setUsers]=useState([]);
    
    let getAllUsers=()=>{
        USERCURD.getAll()
        .then(res=>{
          setUsers(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
    useEffect(()=>{
       getAllUsers();
    },[])

    let deleteUser= async(id)=>{
        try {
            alert("Are You Sure?");
            const res = await USERCURD.deleteObj(id);
            console.log('User successfully deleted.',res);
            getAllUsers();
          } catch (error) {
            alert(error)
          }
          
    }
    return(
        <Fragment>
            <div className='container mt-5 list'>
                <div className='row'>
                 {users.length===0 ? <div className="spinner-border text-info mt-5" role="status"></div>:
                 <div className="child ">
                        <table className="table table-striped table-hover mt-5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                              <Link className="btn btn-outline-success btns" to={`/user/details/${item.id}`}>Details</Link>
                                            </td>
                                            <td>
                                            <Link className="btn btn-outline-warning btns" to={`/user/edit/${item.id}`}>Edit</Link>
                                            </td>
                                            <td>
                                              <button className="btn btn-outline-danger" onClick={()=>deleteUser(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                 }   
                </div>
            </div>
        </Fragment>
    )
}

export default Users;