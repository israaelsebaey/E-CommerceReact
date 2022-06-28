import React,{Fragment} from 'react';
import { Route,Routes,Link} from 'react-router-dom';
import Users from './Users';
import AddUser from './AddUser';
import Details from './Details';
import EditUser from './EditUser';
import '../styles/App.css';

  let ProductHome=()=> {
   
        return (
          <Fragment>
               <div className='container mt-5'>
                      <div className='row'>
                         <div className='user-container'>
                            <div className='user'>
                              <Link to="/user/list" className='myLink' >List Users</Link>   
                            </div> 
                            <div className='user'>
                              <Link to="/user/add" className='myLink' >Add User</Link>
                            </div> 
                         </div>   
                      </div>     
                      <div className='routes'>
                        <Routes>
                            <Route path='/list' element={<Users/>} />  
                            <Route path='/add' element={<AddUser/>} />  
                            <Route path='/details/:id' element={<Details />}/>
                            <Route path='/edit/:id' element={<EditUser/>}/>
                        </Routes>  
                      </div>
            </div>   
          </Fragment>
        )
      }    
export default ProductHome;