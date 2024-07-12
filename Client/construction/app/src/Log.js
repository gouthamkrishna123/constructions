import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Loginnew() {
    const [data, setData] = useState({
        username: '', // Changed from email to username
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let tempErrors = {};
        let isValid = true;

        if (!data.username) {
            tempErrors["username"] = "Username is required"; // Updated error message
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.username)) {
            tempErrors["username"] = "Username is not valid"; // Updated error message
            isValid = false;
        }

        if (!data.password) {
            tempErrors["password"] = "Password is required";
            isValid = false;
        }

        if (isValid) {
            axios.post('http://localhost:8000/register', {
                username: data.username, // Updated to send username
                password: data.password
            })
            .then(response => {
                const user = response.data.find(user => user.username === data.username && user.password === data.password);
                if (user) {
                    console.log("Login successful");
                    navigate(`/success/${user.id}`); // Change to the route you want to navigate to on success
                } else {
                    setErrors({ login: 'Invalid username or password' }); // Updated error message
                }
            })
            .catch(err => {
                console.error(err);
                setErrors({ login: 'Invalid username or password' }); // Updated error message
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
                                id='getusername' // Updated ID
                                type="text" // Changed to text input
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
                                placeholder="Enter your Username" // Updated placeholder
                                onChange={e => setData({ ...data, username: e.target.value })} 
                            /><br />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>} // Updated error message
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
