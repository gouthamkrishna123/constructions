import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 import Dropdown  from "react-bootstrap/Dropdown";
 import { DropdownMenu } from "react-bootstrap";
 import images1 from "../images/Login.png";
 import images2 from "../images/Logo.png";
import './Navbar.css';
import { CgProfile } from "react-icons/cg";


function Bar() {
  return (
    <Navbar className="n" expand="lg"  variant="underline" style={{backgroundColor:"#303745",color:"black"}}>
        <div style={{marginTop:"20px",marginLeft:"0px"}}>
      {/* <h1 style={{color:'rgb(154, 150, 245)',fontSize:'30px',fontStyle:"italic"}}>GK</h1><br/>
      <h6 style={{marginTop:"-20px",fontStyle:"italic"}}>CONSTRUCTIONS</h6> */}
      <img style={{width:"250px",height:"200px",marginLeft:"10px"}} src={images2} alt='img'/>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="underline" style={{color:"#303745",backgroundColor:"#303745"}} className="" />
      <Navbar.Collapse id="basic-navbar-nav"style={{color:"white"}}>
      
        <Nav className="ml-auto" style={{paddingLeft:"100px"}}>
            
          <Nav.Link href="/" style={{color:"white"  ,marginLeft:"30px",fontSize:"large"}}>Home</Nav.Link>
          <Nav.Link href="/About" style={{color:"white",marginLeft:"30px",fontSize:"large"}}>About</Nav.Link>
          <Nav.Link href="/Servies" style={{color:"white",marginLeft:"30px",fontSize:"large"}}>Servies</Nav.Link>

          
          <Dropdown >
                           <Dropdown.Toggle variant="underline" id="dropdown-basic" style={{color:"white",marginLeft:"10px",fontSize:"large"}}>
                             Engineering<br/> List
                             </Dropdown.Toggle >
                             <Dropdown.Menu variant="underline" style={{backgroundColor:"#303745",fontSize:"large",marginLeft:"-10px",color:"black",width:"80px"}}>
                             <div style={{position:"absolute",content: "",width: "155px",height: "5px",background: "orange"}}></div><br></br>

                                 <Dropdown.Item style={{fontSize:"large",marginLeft:"0px",color:"black"}} href="plan">Site Plan</Dropdown.Item>
                                 <Dropdown.Item style={{fontSize:"large",marginLeft:"0px",color:"black"}} href="design">Interiors Design</Dropdown.Item>
                                 <Dropdown.Item style={{fontSize:"large",marginLeft:"0px",color:"black"}} href="renovation">Renovation</Dropdown.Item>                                
                             </Dropdown.Menu>
                         </Dropdown>
                     
                    <li className="Nav-item">
                    <Nav.Link href="project" style={{color:"white",marginLeft:"20px",fontSize:"large"}}>Project</Nav.Link>
                    </li>
                    <li className="Nav-item">
                    <Nav.Link href="contact" style={{color:"white",marginLeft:"20px",fontSize:"large"}}>Contact</Nav.Link>
                    </li>
          
        </Nav>
        
      </Navbar.Collapse>
      <Dropdown style={{textAlign:"left",marginRight:"80px"}}>
                        <Dropdown.Toggle variant="none" id="dropdown-basic" style={{marginLeft:"40px",fontSize:"x-large",color:"lightcyan"}}>
                            
                        {/* <img style={{width:"20px",height:"20px",marginLeft:"-20px"}} src={images1} alt='img'/> */}
                        
                        <CgProfile />
                        
        </Dropdown.Toggle>
            <DropdownMenu style={{marginLeft:"-60px",backgroundColor:"#303745"}}>
            <div style={{position:"absolute",content: "",width: "155px",height: "5px",background: "orange"}}></div><br></br>
            <Dropdown.Item style={{fontSize:"large",marginLeft:"10px",color:"black"}} href="log"><b>Login</b></Dropdown.Item>
            <Dropdown.Item style={{fontSize:"large",marginLeft:"10px",color:"black"}} href="regis"><b>Register</b></Dropdown.Item>
            </DropdownMenu>
            </Dropdown>
    </Navbar>
  );
}

export default Bar;

