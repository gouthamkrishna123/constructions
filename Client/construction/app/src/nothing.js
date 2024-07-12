import { Link, useNavigate } from 'react-router-dom';
import './loginnew.css';
import React, {  useState } from 'react';
import axios from 'axios';

function Loginnew() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let tempErrors = {};
        let isValid = true;

        if (!data.email) {
            tempErrors["email"] = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            tempErrors["email"] = "Email is not valid";
            isValid = false;
        }

        if (!data.password) {
            tempErrors["password"] = "Password is required";
            isValid = false;
        }

        if (isValid) {
            axios.get('http://localhost:8000/register', {
                params: {
                    email: data.email,
                    password: data.password
                }
            })
            .then(response => {
                const user = response.data.find(user => user.email === data.email && user.password === data.password);
                if (user) {
                    console.log("Login successful");
                    
                    navigate(`/success/${user.id}`); // Change to the route you want to navigate to on success
                } else {
                    setErrors({ login: 'Invalid email or password' });
                }
            })
            .catch(err => {
                console.error(err);
                setErrors({ login: 'Invalid email or password' });
            });
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <div><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img className='logimg' src='https://b2b.easemytrip.ae/Content/CSS/login/img/login.svg' alt='img' />
                    </div>
                    <div className='col'>
                        <h3 className='welcome'>Welcome to <br />FlightRadar Family!</h3>
                        <p id='log'>Plan and manage your trips smoothly with elegance.</p><br />
                        <p id='logpara'>Welcome back, please login to your account</p>
                        <form onSubmit={handleSubmit}>
                            <input 
                                id='getemail' 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                placeholder="Enter your Email"
                                onChange={e => setData({ ...data, email: e.target.value })} 
                            /><br />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            <input 
                                type="password" 
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                placeholder="Enter Password"
                                onChange={e => setData({ ...data, password: e.target.value })} 
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            {errors.login && <div className="text-danger">{errors.login}</div>}
                            <br />
                            <button type='submit' className='btn btn-primary' id='register'>LOGIN</button>
                            <Link to='/register' id='register' className='btn btn-primary'>SIGN UP</Link>
                            <Link to='/forgot-password'>Forgot password?</Link><br /><br />
                        </form>
                       
                    </div>
                    
                </div>
            </div><br /><br />
        </div>
    );
}

export default Loginnew;



