
    
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import login1 from '../images/loginpage.jpg';
import login2 from '../images/loginpage2.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (registeredUser && registeredUser.email === data.email && registeredUser.password === data.password) {
            toast.success("Login successful!");
        } else {
            toast.error("Invalid email or password");
        }
    };

    const handleRegisterClick = () => {
        navigate('/regis');
    };


return (
            <>
              <div className="">
                <div className="card-mb-3">
                  <div className="row g-0">
                    <div className="col-md-8"><br />
        
                      <Carousel style={{ marginTop: "00px", textAlign: "center" }}>
                        <Carousel.Item>
                          <img style={{ width: "100%", height: "700px" }} src={login1} alt="images" />
                          <Carousel.Caption>
                            <div style={{ textAlign: "left", marginLeft: '-50px', marginBottom: "50px", marginTop: "200px" }}><br /><br />
                              <h1 style={{ fontSize: "150px", opacity: '0.1' }}><b>P</b></h1></div>
                            <div style={{}}>
                              <h1 style={{ fontSize: "50px", textAlign: "left", marginLeft: '-20px', marginBottom: "400px", marginTop: "-150px" }}><b>PROFESSIONAL <br />APPROACH</b></h1>
        
                              <h4 style={{ marginTop: " -350px", marginBottom: '300px', marginLeft: "80px", textAlign: "left" }}>
                                Every project we work on<br />
                                is built on professionalism and dedication.</h4>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
        
                        <Carousel.Item>
                          <img style={{ width: "100%", height: "700px" }} src={login2} alt="images" />
                          <Carousel.Caption>
                            <div style={{ textAlign: "left", marginLeft: '-50px', marginBottom: "50px", marginTop: "200px" }}><br /><br />
                              <h1 style={{ fontSize: "150px", opacity: '0.1' }}><b>Q</b></h1></div>
                            <div style={{}}>
                              <h1 style={{ fontSize: "50px", textAlign: "left", marginLeft: '-20px', marginBottom: "400px", marginTop: "-150px" }}><b>QUALITY<br />CONSTRUCTION</b></h1>
        
                              <h4 style={{ marginTop: " -350px", marginBottom: '300px', marginLeft: "80px", textAlign: "left" }}>
                                It is the industry-leading provider of<br />
                                quality construction services in the USA.</h4>
                            </div>
                          </Carousel.Caption>
                        </Carousel.Item>
        
                      </Carousel>
                    </div>
                    <div className="col-md-4" style={{ backgroundColor: "#353a43", marginLeft: "-50px", border: "1px solid lightgrey" }}><br />
                      <div>
                        <h2 style={{ color: "White", textAlign: "center", marginTop: "100px" }}><b>ORDER <br />A SKETCH<br />
                          OF YOUR <br />HOME</b></h2>
                      </div><br /><br />
                      <form onSubmit={handleSubmit} className="form-group">
                        <input type="email" style={{ width: "60%", backgroundColor: "#353a43", border: "none", borderBottom: "2px solid gray", height: "40px", marginLeft: "60px", color: "gray" }} className="form__input" id="email" placeholder="Email" name="email" onChange={handleInputChange} value={data.email}  />
                        
                        <br /><br />
        
                        <input type="password" style={{ width: "60%", backgroundColor: "#353a43", border: "none", borderBottom: "2px solid gray", height: "40px", marginLeft: "60px" }} className="form__input" id="password" placeholder="Password" name="password"onChange={handleInputChange} value={data.password}/>
                        
                        <br /><br />
        
                        <Button style={{ textAlign: "center", color: "white", fontSize: "x-larger", backgroundColor: "#ff7f63", width: "40%", marginLeft: "60px", height: "60px" }} type="submit" id="register"><b>Login</b></Button><br /><br />
        
                        <p onClick={handleRegisterClick} style={{ textAlign: "center", fontSize: "20px", color: "white" }} > New User ? <Link to="/register">signup</Link></p>
                      </form>
                    </div>
                    <div className="col-md" style={{ backgroundColor: "#353a43", marginLeft: "-50px", borderLeft: "1px solid lightgrey" }}></div>
                  </div>
                </div>
              </div>
            </>
          );
        }

export default Login;

