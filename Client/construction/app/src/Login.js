// import React, { useState }  from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Button } from "react-bootstrap";
// import login1 from '../src/images/loginpage.jpg';
// import login2 from '../src/images/loginpage2.jpg';
// import axios from 'axios';
// import { Link,useNavigate } from "react-router-dom";

// function Login(){
//   const[values,setValues]=useState({
//     username:'',
//     password:''
//   })

//   const [errors,setErrors]=useState({});
//   const navigate=useNavigate();


//   // const handleChange=(e)=>{
//   //   const {name,value}=e.target;
//   //   setValues({
//   //     ...values,
//   //     [name]:value
//   //   });
//   // };
//   // const validate=()=>{
//   //   let errors={};
//   //   if (!values.username) errors.username='Uesrname is required';

//   //   if (!values.password){
//   //     errors.password='Password is required';
//   //   }
  
//   //   return errors;
//   // }

//   const handleSubmit=(event)=>{
//     event.preventDefault();
//     // const validationErrors=validate();
//     // if (Object.keys(validationErrors).length > 0){
//     //   setErrors(validationErrors);
//     // }
//     let tempErrors ={};
//     let isValid=true;
    
//     if (!values.username) tempErrors.username='Uesrname is required';
//     //   {
//     //   // tempErrors["username"]="Username is required";
//     //   // isValid =false;
//     // }

//     if (!values.password) {
//       tempErrors["password"]="password is required";
//       isValid=false;
//     }

//     if (isValid){
//       axios.get('http://127.0.0.1:8000/register',{
//         params:{
//           username:values.username,
//           password:values.password
//         }
//       })
//     .then(response=> {
//       const user = response.data.find(user => user.username === values.username && user.password === values.password);
//       if (user){
//         console.log("Login successful");
//         navigate(`/`); //${user.id}
//       }else{
//         setErrors({login:'Invalid username or password'});
//       } 
//     })
//     .catch(err => {
//       // alert('Invalid credentials');
//       console.error(err);
//       setErrors({login:'Invalid username or password'});
//             });
//       }
//       else  {
//         setErrors(tempErrors);
        
//       }
  

// };

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
//               <div className="col-md-4" style={{backgroundColor:"#353a43",marginLeft:"-50px",border:"1px solid lightgrey"}}><br/>
//               <div>
//                 <h2  style={{color:"White",textAlign:"center",marginTop:"100px"}}><b>ORDER <br/>A SKETCH<br/>
// OF YOUR <br/>HOME</b></h2>
//               </div><br/><br/>
//               <form onSubmit={handleSubmit}>


              
//                     <input type="text" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px",color:"gray"}} className={`form-control ${errors.username ? 'is-invalid' : ''}`}  id="username" placeholder="User Name" name="username"  onChange={e => setValues({ ...values, username: e.target.value })} required/>
//                     {/* value={values.username} */}
//                     {errors.username && <div classname="invalid-feedback">{errors.username}</div>}
//                         <br/><br/>

                        

//                         {/* <label style={{color:"gray",marginLeft:"60px"}} className="form-label">Name *</label> */}
//                     <input type="password" style={{width:"60%",backgroundColor:"#353a43",border:"none",borderBottom:"2px solid gray",height:"40px",marginLeft:"60px"}} className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password" name="password"  onChange={e => setValues({ ...values, password: e.target.value })}/>
//                     {/* value={values.password} */}
//                     {errors.password && <div classname="invalid-feedback">{errors.password}</div>}
//                     {errors.login && <div className="text-danger">{errors.login}</div>}
//                       <br/><br/>

//                         <Button style={{textAlign:"center",color:"white",fontSize:"x-larger",backgroundColor:"#ff7f63",width:"40%",marginLeft:"60px",height:"60px"}} type="submit" id="register"><b>Login</b></Button><br/><br/>

//                         <p style={{textAlign:"center",fontSize:"20px",color:"white"}}>New User ? <a href="/register">signup</a></p>

              
              
              
//               </form>
//               </div>
//               <div className="col-md" style={{backgroundColor:"#353a43",marginLeft:"-50px",borderLeft:"1px solid lightgrey"}}></div>
//               </div>
//         </div>
//         </div>
        

//         </>
//     )
// }

// export default Login


import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import login1 from '../src/images/loginpage.jpg';
import login2 from '../src/images/loginpage2.jpg';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempErrors = {};
    let isValid = true;

    if (!values.username) {
      tempErrors["username"] = 'Username is required';
      isValid = false;
    }

    if (!values.password) {
      tempErrors["password"] = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      axios.post('http://127.0.0.1:8000/login', {
        params: {
          username: values.username,
          password: values.password
        }
      })
        .then(response => {
          const user = response.data.find(user => user.username === values.username && user.password === values.password);
          if (user) {
            console.log(response);
            alert('Login  successful!');
            navigate('/');
          } else {
            setErrors({ login: 'Invalid username or password' });
          }
        })
        .catch(err => {
          console.error(err);
          setErrors({ login: 'Invalid username or password' });
        });
    } else {
      setErrors(tempErrors);
    }
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
              <form onSubmit={handleSubmit}>
                <input type="text" style={{ width: "60%", backgroundColor: "#353a43", border: "none", borderBottom: "2px solid gray", height: "40px", marginLeft: "60px", color: "gray" }} className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="username" placeholder="User Name" name="username" onChange={e => setValues({ ...values, username: e.target.value })}   />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                <br /><br />

                <input type="password" style={{ width: "60%", backgroundColor: "#353a43", border: "none", borderBottom: "2px solid gray", height: "40px", marginLeft: "60px" }} className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Password" name="password" onChange={e => setValues({ ...values, password: e.target.value })} />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                {errors.login && <div className="text-danger">{errors.login}</div>}
                <br /><br />

                <Button style={{ textAlign: "center", color: "white", fontSize: "x-larger", backgroundColor: "#ff7f63", width: "40%", marginLeft: "60px", height: "60px" }} type="submit" id="register"><b>Login</b></Button><br /><br />

                <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>New User ? <Link to="/register">signup</Link></p>
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
