import React ,{ useState } from "react";
import contact1 from "../images/contactusimg.jpg";
import { Card,Button } from "react-bootstrap";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import inter from"../images/inter.jpg";
import inter1 from"../images/inter1.jpg";
import inter2 from"../images/inter2.jpg";
import inter3 from"../images/inter3.jpg";
import Carousel from "react-bootstrap/Carousel";


function Reno(){
  const[values,setValues]=useState({
    name:'',
    email:'',
    phone_number:'',
    place:'',
    choose:'',
    squre:'',
    message:''
});

const [errors,setErrors]= useState({});
const navigate=useNavigate();

const handleChange =(e) =>{
  const {name,value}=e.target;
  setValues({
    ...values,
    [name]:value
  });
};

const validate=()=>{
  let errors ={};
  if (!values.name) errors.name='Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!/^\d{10}$/.test(values.phone_number)) errors.phone_number='Phone Number is required';
  if (!values.place) errors.place='place is required';
  if (!values.choose) errors.choose ='choose selection is required';
  if (!/^\d{1,10}$/.test(values.squre)) errors.squre='Number is required';
  if (!values.message) errors.message = 'Message is required';
    return errors;
};



const handleSubmit=(event)=>{
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
    axios.post('http://localhost:8000/appo',values)
    .then(response=>{
        console.log(response);
        alert('Thank you for your response oru team will contact you  ');
        navigate('/')
    })
    .catch(err=>console.log(err))
  }else {
    setErrors(validationErrors);
    alert("Please fill in all the fields correctly");
  }
  };

    return(
        <>
        <div>
            <div>
          <div style={{backgroundColor:"black"}}>
            <img style={{width:"100%",height:"350px",opacity:".3"}} src={contact1} />
            </div>
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>Contact Us</h1>
            </div>
        </div>

        </div>


        <div style={{borderCollapse:"separate"}} className="">
        <h2>Get in Touch</h2>
                    <div style={{position:"absolute",content: "",width: "100px",height: "5px",background: "red"}}></div><br></br>
                    <br/><br/><br/>
        <div style={{}} className="card-mb-3 ">

<div className="row g-0" style={{boxShadow:"1px 5px 30px 30px lightgray"}}>
        
        <div style={{boxShadow:"5px 10px 30px 30px lightgray"}}  className="col-md-6"><br/><h1 style={{textAlign:'center'}}>Our Projects</h1>
            
              <div style={{textAlign:"center",marginLeft:"50px",width:"80%",height:"700px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}>
              
            <a href="project"  ><Carousel style={{marginTop:"40px",textAlign:"center"}}>
                
                <Carousel.Item>
	                <img style={{width:"100%",height:"600px"}} src={inter} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"600px"}} src={inter1} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"600px"}} src={inter2} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"600px"}} src={inter3} alt="images"/>
                </Carousel.Item>
              </Carousel></a><br/>
              
             </div>
             </div><br/>
        
        <div  className="col-md-1"></div>

        <div className="col-md-5">    
        <div style={{position:"relative",textAlign:"center"}} ><br/>
        <h1>Get an appointment </h1>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
        <input type="text" style={{width:"80%",border:"1px solid grey",height:"40px",boxSizing:"content-box",marginLeft:'20px'}} className="form-control" id="name" placeholder="Name" name="name" value={values.name} onChange={handleChange} required/>
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        <br/>
               
        <input type="email" style={{width:"80%",border:"1px solid grey",height:"40px",boxSizing:"content-box",marginLeft:'20px'}} className="form-control" id="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required/>
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        <br/>

        <input type="tel" className="form-control" id="phone_number" size="30" maxlength="10"  placeholder="Enter Mobile no" style={{width:"80%",border:"1px solid grey",height:"40px",boxSizing:"content-box",marginLeft:'20px'}} name="phone_number" value={values.phone_number} onChange={handleChange} required/><br/>    
        {errors.phone_number && <div className="invaild-feedback">{errors.phone_number}</div>}
        {/* pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" */}
        
        <input type="text" style={{width:"80%",border:"1px solid grey",height:"40px",boxSizing:"content-box",marginLeft:'20px'}} className="form-control" id="place" placeholder="place" name="place"  value={values.place} onChange={handleChange} required/><br/>
        {errors.place && <div className="invaild-feedback">{errors.place}</div>}
        
            <div className="card-mb-3" style={{}}>
                    <div className="row g-0">
                      <div className="col-md-6">
 
                        <div style={{textAlign:"left",marginLeft:"40px"}}>
                        
                        <input type="radio" id="Site Plan" name="choose" value="Site Plan" checked={values.choose === 'Site Plan'} onChange={handleChange} required/>
  <label htmlFor="Site Plan" style={{}}>Site Plan</label><br/>   
  <input type="radio" id="Interiors Design" name="choose" value="Interiors Design" checked={values.choose === 'Interiors Design'} onChange={handleChange} required/>
  <label htmlFor="Interiors Design">Interiors Design</label><br/>
  <input type="radio" id="Renovation" name="choose" value="Renovation" checked={values.choose === 'Renovation'} onChange={handleChange} required/>
  <label htmlFor="Renovation">Renovation</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div style={{}}>
                      <input type="tel"style={{width:"60%",border:"1px solid grey",height:"40px",boxSizing:"content-box",marginLeft:'10px'}} className="form-control" id="squre" placeholder="sq.ft" name="squre" value={values.squre} onChange={handleChange} required /><br/>
                      {errors.squre && <div className="invaild-feedback">{errors.squre}</div>}
                    
                      </div>
                      </div>
                    </div>
                    </div><br/>
              
        <textarea style={{width:"80%",border:"1px solid grey",height:"200px",boxSizing:"content-box",marginLeft:'20px'}} className="form-control" id="message" placeholder="About your Construction" name="message" value={values.message} onChange={handleChange} required/><br/><br/><br/>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}   
        <div className="container">
        <Button style={{width:"200px",height:"50px",backgroundColor:"red"}} type="submit" onClick={handleSubmit}><b>Get Appointment</b></Button>
        </div>

        </div>        
        </form>
        </div>
        </div><br/>
        </div>
        </div><br/><br/><br/>
</div>

</>
    )
}

export default Reno



