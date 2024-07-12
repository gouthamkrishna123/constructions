import React, { useState } from "react";
import contact from "../src/images/contactusimg.jpg";
import { Button } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (!values.subject) errors.subject = 'Subject is required';
    if (!values.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8000/reg', values)
        .then(response => {
          console.log(response);
          alert('Thank you for your response oru team will contact you  ');
          navigate('/');
        })
        .catch(err => console.log(err));
    } else {
      setErrors(validationErrors);
      alert("Please fill in all the fields correctly");
    }
  };

  return (
    <>
      <div>
        <div style={{ backgroundColor: "black" }}>
          <img style={{ width: "100%", height: "350px", opacity: ".3" }} src={contact} alt="Contact Us" />
        </div>
        <div className="container">
          <h1 style={{ textAlign: "left", marginTop: "-200px", marginBottom: "200px", fontSize: "70px", color: "white" }}>Contact Us</h1>
        </div>
      </div>

      <div style={{ borderCollapse: "separate" }} className="container">
        <h2>Get in Touch</h2>
        <div style={{ position: "absolute", content: "", width: "100px", height: "5px", background: "red" }}></div>
        <br /><br /><br />
        <div className="card-mb-3">
          <div className="row g-0" style={{ boxShadow: "1px 5px 30px 30px lightgray" }}>
            <div className="col-md-5">
              <div style={{ position: "relative" }}>
                <br />
                <h2>Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="was-validated">
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      style={{ width: "80%", border: "1px solid grey", height: "40px", boxSizing: "content-box" }}
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    <br />
                    <input
                      type="email"
                      style={{ width: "80%", border: "1px solid grey", height: "40px", boxSizing: "content-box" }}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    <br />
                    <input
                      type="text"
                      style={{ width: "80%", border: "1px solid grey", height: "40px", boxSizing: "content-box" }}
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    <br />
                    <textarea
                      style={{ width: "80%", border: "1px solid grey", height: "200px", boxSizing: "content-box" }}
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    <br /><br /><br />
                    <div className="container">
                      <Button
                        style={{ width: "150px", height: "50px", backgroundColor: "red" }}
                        type="submit"
                      >
                        <b>Contact Us</b>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div style={{ boxShadow: "5px 10px 30px 30px lightgray" }} className="col-md-6">
              <div className="card-mb-3" style={{ marginTop: "80px" }}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <h4><IoIosCall style={{ color: "red", opacity: 0.5 }} id="icon" /> <b>Call Us</b></h4>
                    <p style={{ marginLeft: "50px", fontSize: '20px' }}>9496416376 | 828 983 8552</p>
                  </div>
                  <div className="col-md-6">
                    <h4><FaLocationDot style={{ color: "red", opacity: 0.5 }} id="icon" /> <b>Our Location</b></h4>
                    <p style={{ marginLeft: "20px", fontSize: '17px' }}>GK Construction PVT.LTD., 2st Floor, Ten Square Building, Inforpark Phase 2, Kakkanad, Kerala, India</p>
                  </div>
                </div>
                <div className="row g-0" style={{ marginTop: "50px" }}>
                  <div className="col-md-6">
                    <h4><IoMail style={{ color: "red", opacity: 0.5 }} id="icon" /> <b>Our Email</b></h4>
                    <p style={{ marginLeft: "10px", fontSize: '17px' }}>gkconstructions2010@gmail.com</p>
                  </div>
                  <div className="col-md-6">
                    <h4><MdWatchLater style={{ color: "red", opacity: 0.5 }} id="icon" /> <b>Working Hours</b></h4>
                    <p style={{ marginLeft: "30px", fontSize: '18px' }}>Mon-Fri: 10AM-5PM</p>
                  </div>
                </div>
                <div style={{ marginLeft: "20px", marginTop: "50px" }}>
                  <h2><b>Follow Us</b></h2>
                  <br /><br />
                  <a href="#" className='me-2'><FaFacebook id="icon" style={{ opacity: 0.5 }} /></a>
                  <a href="#" className='me-2'><AiFillTwitterCircle id="icon" style={{ opacity: 0.5 }} /></a>
                  <a href="#" className='me-2'><FaGooglePlus id="icon" style={{ opacity: 0.5 }} /></a>
                  <a href="#" className='me-2'><FaInstagramSquare id="icon" style={{ opacity: 0.5 }} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.381479846676!2d76.36553742804466!3d10.008980822828912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b6ff2838e15%3A0x4a62a83f2a896bd6!2sInfopark%20Phase%202%2C%20Kakkanad%2C%20Kerala%20682030!5e0!3m2!1sen!2sin!4v1714017587747!5m2!1sen!2sin" 
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default Contact