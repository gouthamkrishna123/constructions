import { Link, useNavigate } from 'react-router-dom';
import './loginnew.css'
import React, { useState } from 'react'
import axios from 'axios';

function Sign(){
    const [values,setValues]=useState({
        name:'',
        email:'',
        dob:'',
        nationality:'',
        password:''
    })
    const navigate=useNavigate();
    const handleSign=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/registernew',values)
        .then(response=>{console.log(response);navigate('/success')})
        .catch(err=>console.log(err))
    })
    return(
        <div><br></br><br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img className='logimg' src='https://b2b.easemytrip.ae/Content/CSS/login/img/login.svg' alt='img'/>

                    </div>
                    <div className='col' id='signrg' >
                        <h3 className='welcome'>Welcome to FlightRadar Family!</h3>
                        <p id='signpara'>FILL THE FORM FOR SIGNUP</p>
                        <form onSubmit={handleSign}>
                        <input type="text" class="form-control" placeholder="Enter your FULL NAME"
                        onChange={e=>setValues({...values,name:e.target.value})}/>

                        <input type="email" class="form-control" placeholder="Enter Your Email Address"
                        onChange={e=>setValues({...values,email:e.target.value})}/><br></br>

                        <label id='dobsig'>DATE OF BIRTH</label>
                        <input type="date" class="form-control"  placeholder="DOB"
                        onChange={e=>setValues({...values,dob:e.target.value})}/><br></br>
                        <input type="text" class="form-control" placeholder="NATIONALITY"
                        onChange={e=>setValues({...values,nationality:e.target.value})}/>
                        <input type="password" class="form-control" placeholder="ENTER A STRONG PASSWORD"/>
                        <input type="text" class="form-control" placeholder="RE-ENTER PASSWORD"
                        onChange={e=>setValues({...values,password:e.target.value})}/>
                        <button className='btn btn-success' id='signregi'>REGISTER</button>

                        <Link to='/' id='signregi' className='btn btn-primary'>BACK</Link>
                        
    
                        
                        </form>

                    </div>

                </div>
            </div><br></br><br></br>
        </div>
    )
}
export default Sign;
