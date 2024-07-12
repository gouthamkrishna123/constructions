// import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Button } from "react-bootstrap";
// import login1 from '../src/images/loginpage.jpg';
// import login2 from '../src/images/loginpage2.jpg';
// import { Link,useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { MessageBox } from "react-chat-elements";



// function Register(){
//     const[values,setValues]=useState({
//       username:'',
//       email:'',
//       password:''
//     });

//     const [errors,setErrors]= useState({});
//     const navigate=useNavigate();

//     const handleChange =(e) =>{
//       const {name,value} = e.target;
//       setValues({
//         ...values,
//         [name]: value
//       });
//     };

//     const validate =() =>{
//       let errors={};
//       if (!values.username) errors.username='Username is  required';
//       if (!values.email) {
//         errors.email= 'Email is required';
//       }else if (!/\S+@\S+\.\S+/.test(values.email)){
//         errors.email ='Email is invalid';
//       }
//       if (!values.password){
//         errors.password = 'Password is required';
//       }
//       else if (values.password.length < 6){
//         errors.password = 'Password must be at least 6 characters long';
//       }
//       else if (!/[A-Z]/.test(values.password)){
//         errors.password = 'Password must contain at least one uppercase letter';
//       }
//       else if (!/[0-9]/.test(values.password)){
//         errors.password = 'Password must contain at least one number';
//       }
//       return errors;

//     };

//     const handleSubmit=(event)=>{
//       event.preventDefault();
//       const validationErrors = validate();
//       if (Object.keys(validationErrors).length === 0){
//       axios.post('http://localhost:8000/register',values)
//       .then(response=> {
//         console.log(response);
//         alert('Registration is successful!');

//         navigate('/login')
//       })
//       .catch(err=>console.log(err))
//     }
//     else {
//       setErrors(validationErrors);
//       alert("Please fill in all the fields correctly");
//     }
//   };  

    


//     return(
//         <>
        
//         <div className="">
//           <div className="card-mb-3">
//             <div className="row g-0">
//               <div className="col-md-8"><br/>
              
              
//               <Carousel style={{marginTop:"00px",textAlign:"center"}}>
                
//                 <Carousel.Item>
// 	                <img style={{width:"100%",height:"700px"}} src={login1} alt="images"/>
//                     <Carousel.Caption>
//           <div style={{textAlign:"left",marginLeft:'-50px',marginBottom:"50px",marginTop:"200px"}}><br/><br/> 
//           <h1 style={{fontSize:"150px",opacity:'0.1'}}><b>P</b></h1></div>
//           <div style={{}}>
//           <h1 style={{fontSize:"50px",textAlign:"left",marginLeft:'-20px',marginBottom:"400px",marginTop:"-150px"}}><b>PROFESSIONAL <br/>APPROACH</b></h1>
          
//           <h4 style={{marginTop:" -350px",marginBottom:'300px',marginLeft:"80px",textAlign:"left"}}>
// Every project we work on<br/>
// is built on professionalism and dedication.</h4>
//           </div>
//           </Carousel.Caption>
//                 </Carousel.Item>

//                 <Carousel.Item>
// 	                <img style={{width:"100%",height:"700px"}} src={login2} alt="images"/>
//                     <Carousel.Caption>
//           <div style={{textAlign:"left",marginLeft:'-50px',marginBottom:"50px",marginTop:"200px"}}><br/><br/> 
//           <h1 style={{fontSize:"150px",opacity:'0.1'}}><b>Q</b></h1></div>
//           <div style={{}}>
//           <h1 style={{fontSize:"50px",textAlign:"left",marginLeft:'-20px',marginBottom:"400px",marginTop:"-150px"}}><b>QUALITY<br/>CONSTRUCTION</b></h1>
          
//           <h4 style={{marginTop:" -350px",marginBottom:'300px',marginLeft:"80px",textAlign:"left"}}>
//           It is the industry-leading provider of<br/>
// quality construction services in the USA.</h4>
//           </div>
//           </Carousel.Caption>
//                 </Carousel.Item>
                
//               </Carousel>
//               </div>
//               <div className="col-md-4" style={{backgroundColor:"#353a43",marginLeft:"-30px",border:"1px solid lightgrey"}}><br/>
//               <div>
//                 <h2  style={{color:"White",textAlign:"center",marginTop:"100px"}}><b>ORDER <br/>A SKETCH<br/>
// OF YOUR <br/>HOME</b></h2>
//               </div><br/><br/>
//               <form onSubmit={handleSubmit}>
//               {/* <label style={{color:"gray",marginLeft:"60px"}} className="form-label">Name *</label> */}
//                     <input type="text" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px",color:"gray"}} className="form-control" id="username" placeholder="User Name" name="username" value={values.username} onChange={handleChange} required/>
//                     {errors.username && <div classname="invalid-feedback">{errors.username}</div>}
//                     <br/><br/>

//                         <input type="email" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px",color:"gray"}} className="form-control" id="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required/>
//                         {errors.email && <div classname="invalid-feedback">{errors.email}</div>}
//                         <br/><br/>
                        
//                     <input type="password" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px"}} className="form-control" id="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} required/>
//                     {errors.password && <div classname="invalid-feedback">{errors.password}</div>}
//                     <br/><br/><br/>

//                         <Button  style={{textAlign:"center",color:"white",fontSize:"larger",backgroundColor:"#ff7f63",width:"40%",marginLeft:"60px",height:"60px"}} type="submit"><b>Signup</b></Button><br/><br/>

//                         <p style={{textAlign:"center",fontSize:"16px",color:"white",marginLeft:"-60px"}}>Did you have <br/> an account ? <a href="login">login</a></p>

//                         </form>
              
              
              
//               </div>
//               <div className="col-md" style={{backgroundColor:"#353a43",marginLeft:"-50px",borderLeft:"1px solid lightgrey"}}></div>
//               </div>
//         </div>
//         </div>
        

//         </>
//     )
// }
// export default Register


import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import login1 from '../src/images/loginpage.jpg';
import login2 from '../src/images/loginpage2.jpg';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import { MessageBox } from "react-chat-elements";



function Register(){

    
  const navigate= useNavigate();
 
  const lclick=(()=>{
    navigate('/Login')
  })
 

  const url = 'http://localhost:8000/register';
  const [data,setData]=useState({
    username:'',
      email:'',
      password:'',

  });
   
  const handle =(a) =>{
      const newData={...data};
      newData[a.target.id] =a.target.value;
      setData(newData);
  };

  const handlesubmit =(e) =>{
      console.log(JSON.stringify(data))
      e.preventDefault();
      if(!data.username|| !data.email || !data.password)
      {
          alert("please fill in all the fields");
          return;
      }

      navigate ('/Login');
     
      var form = new FormData();
      form.append('username',data.username);
      form.append('email',data.email);
      form.append('password',data.password);
      // form.append('phone',data.phone);

      axios
      .post(url,form,{
          headers:{'Content-Type':"multipart/form-data"},
      })
      .then((response) => {
          console.log(response.data);
          setData({...data,id: e.target.value})
  });

  };


    return(
        <>
        
        <div className="">
          <div className="card-mb-3">
            <div className="row g-0">
              <div className="col-md-8"><br/>
              
              
              <Carousel style={{marginTop:"00px",textAlign:"center"}}>
                
                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={login1} alt="images"/>
                    <Carousel.Caption>
          <div style={{textAlign:"left",marginLeft:'-50px',marginBottom:"50px",marginTop:"200px"}}><br/><br/> 
          <h1 style={{fontSize:"150px",opacity:'0.1'}}><b>P</b></h1></div>
          <div style={{}}>
          <h1 style={{fontSize:"50px",textAlign:"left",marginLeft:'-20px',marginBottom:"400px",marginTop:"-150px"}}><b>PROFESSIONAL <br/>APPROACH</b></h1>
          
          <h4 style={{marginTop:" -350px",marginBottom:'300px',marginLeft:"80px",textAlign:"left"}}>
Every project we work on<br/>
is built on professionalism and dedication.</h4>
          </div>
          </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={login2} alt="images"/>
                    <Carousel.Caption>
          <div style={{textAlign:"left",marginLeft:'-50px',marginBottom:"50px",marginTop:"200px"}}><br/><br/> 
          <h1 style={{fontSize:"150px",opacity:'0.1'}}><b>Q</b></h1></div>
          <div style={{}}>
          <h1 style={{fontSize:"50px",textAlign:"left",marginLeft:'-20px',marginBottom:"400px",marginTop:"-150px"}}><b>QUALITY<br/>CONSTRUCTION</b></h1>
          
          <h4 style={{marginTop:" -350px",marginBottom:'300px',marginLeft:"80px",textAlign:"left"}}>
          It is the industry-leading provider of<br/>
quality construction services in the USA.</h4>
          </div>
          </Carousel.Caption>
                </Carousel.Item>
                
              </Carousel>
              </div>
              <div className="col-md-4" style={{backgroundColor:"#353a43",marginLeft:"-30px",border:"1px solid lightgrey"}}><br/>
              <div>
                <h2  style={{color:"White",textAlign:"center",marginTop:"100px"}}><b>ORDER <br/>A SKETCH<br/>
OF YOUR <br/>HOME</b></h2>
              </div><br/><br/>
              <form onSubmit= {(e)=>handlesubmit(e)} control="" className="form-group"> 
              {/* <label style={{color:"gray",marginLeft:"60px"}} className="form-label">Name *</label> */}
                    <input type="text" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px",color:"gray"}} className="form-control" id="username" placeholder="User Name" name="username" value={data.username} onChange={(e,username)=>handle(e,username)} />
                    
                    {/* {errors.username && <div classname="invalid-feedback">{errors.username}</div>} */}
                    <br/><br/>

                        <input type="email" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px",color:"gray"}} className="form-control" pattern=".+@example\.com" id="email" placeholder="Email" name="email" value={data.email}  onChange={(e,email)=>handle(e,email)}/>
                        
                        {/* {errors.email && <div classname="invalid-feedback">{errors.email}</div>} */}
                        <br/><br/>
                        
                    <input type="password" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px"}} className="form-control" id="password" placeholder="Password" name="password" value={data.password} required onChange= {(e,password)=>handle(e,password)}/>
                    
                    {/* {errors.password && <div classname="invalid-feedback">{errors.password}</div>} */}
                    <br/><br/><br/>

                        <Button onClick={handlesubmit} style={{textAlign:"center",color:"white",fontSize:"larger",backgroundColor:"#ff7f63",width:"40%",marginLeft:"60px",height:"60px"}} type="submit"><b>Signup</b></Button><br/><br/>

                        <p onClick={lclick} style={{textAlign:"center",fontSize:"16px",color:"white",marginLeft:"-60px"}}>Did you have <br/> an account ? <a href="login">login</a></p>

                        </form>
              
              
              
              </div>
              <div className="col-md" style={{backgroundColor:"#353a43",marginLeft:"-50px",borderLeft:"1px solid lightgrey"}}></div>
              </div>
        </div>
        </div>
        

        </>
    )
}
export default Register