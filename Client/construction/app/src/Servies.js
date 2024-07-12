import React from "react";
import { Card,Button } from "react-bootstrap";
import Serviesimag from "../src/images/services img.jpg";
import renovation from "../src/images/renovation.jpeg";
import siteplan from "../src/images/siteplan.jpg";
import inter from "../src/images/interior.jpeg";
import design from "../src/images/designing.PNG"
import reno from "../src/images/renovationimg.PNG"
import steel from "../src/images/steel.PNG";
import site from "../src/images/site.PNG";
import architecture from "../src/images/architecture.PNG";
import structural from "../src/images/structural.PNG";
import cta from "../src/images/CTA.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { FaRegHourglass } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegObjectGroup } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";


  


function Servies(){
    return(
        <>
        <div>
        <img style={{width:"100%",height:"350px"}} src={Serviesimag} />
            <div className="container">
              <div style={{backgroundColor:"yellow",opacity:"0.2"}}></div>
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>Services</h1>
            
            </div>
        </div>
        <>
        <div  className="container">
                  <h4 style={{fontSize:"35px"}}>Our Area of Specialization</h4>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>
                  <div className="col-md-6">
                  <p style={{marginRight:"50px"}}>We excel in offering building, construction, and maintenance services, delivering quality, efficiency, and reliability to meet diverse project needs with expertise.</p>
                    </div><br/><br/>

                  <div className="card-mb-3" style={{marginLeft:"0px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div style={{marginRight:"50px"}}>
                    <div id="icon">
                    <FaRegBuilding />
                    </div>
                      <h4 >Structural Consultation</h4>
                      <p >Analyze, assess, and advise on structural design and integrity for buildings, bridges, or infrastructure projects.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <PiNotePencil />
                  </div>
                    <h4>Steel Structure</h4>
                    <p >Steel structures use steel components for construction, providing strength, durability, and versatility in various architectural and engineering applications.</p>
                  </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{marginRight:"50px"}}>
                    <div id="icon">
                  <FaRegHourglass />
                  </div>
                      <h4 >Renovation</h4>
                      <p >Renovation involves updating, repairing, or remodeling a space to improve its functionality, aesthetics, or overall condition.</p>
                    </div>
                  </div>
                </div>
              </div><br/><br/>

              <div className="card-mb-3" style={{marginLeft:"0px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div style={{marginRight:"50px"}}>
                    <div id="icon">
                  <MdOutlinePhotoLibrary />
                  </div>
                      <h4 >Site Planning</h4>
                      <p >Detailed 2d drawings that exact illustrate every nook and corner of the building is made. This gives the team precise idea about how the whole scenario will look like.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <FaRegObjectGroup />
                    </div>
                    <h4>3D Designing</h4>
                    <p >3D designing for structures creates detailed digital models, aiding in architecture, engineering, and construction planning and visualization.</p>
                  </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{marginRight:"50px"}}>
                    <div id="icon">
                  <FaRegObjectUngroup />
                    </div>
                      <h4 >Architecture</h4>
                      <p >Architecture is the art and science of designing and constructing buildings and spaces with aesthetic and functional considerations.</p>
                    </div>
                  </div>
                </div>
              </div><br/><br/><br/>
              </div>
        </>

        {/* <>
        <div>
            <div  className="container">
                  <h4 style={{fontSize:"35px"}}>Our Services</h4>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>
                  
                  
                 
        <div className="">
        <div style={{}} className="card-mb-2">
            <div className="row g-0">
            
              <div className="col-md-4">
            <div className="Card">
              <div className="container">
              <img src={siteplan} style={{width:"300px",height:"200px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left",position:"center"}}><br/>
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>SITE PLANNING</b></p>
                
                <a style={{color:"white"}} href="#"><Button style={{color:"white",backgroundColor:"red",fontSize:"20px",width:"200px",height:"50px"}}><b> Get In Touch </b></Button></a>
                </div>
                </div>
                </div>
                </div>

                <div className="col-md-4">
            <div className="Card">
              <div className="container">
              <img src={inter} style={{width:"300px",height:"200px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left"}}><br/>
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>INTERIOR DESIGN</b></p>
                <a style={{color:"white"}} href="#"><Button style={{color:"white",backgroundColor:"red",fontSize:"20px",width:"200px",height:"50px"}}><b> Get In Touch </b></Button></a>
                </div>
                </div>
                </div>
                </div>

              

                <div className="col-md-4">
            <div className="Card">
              <div className="container">
              <img src={renovation} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left"}}><br/>
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>RENOVATION</b></p>
                <a style={{color:"white"}} href="#"><Button style={{color:"white",backgroundColor:"red",fontSize:"20px",width:"200px",height:"50px"}}><b> Get In Touch </b></Button></a>
                </div>
                </div>
                </div>
                </div>




                </div>
                </div>

        </div>
        </div>
        </div><br/><br/>
        </> */}

        <>
        <div>
        <div style={{backgroundColor:"grey"}}> 
          <img style={{width:"100%",opacity:"0.1",height:"300px"}} src={cta} alt="img"/></div>
          <div style={{textAlign:"center",marginTop:"-200px",marginBottom:"-100px"}}>
          <h2 style={{marginTop:"-200px",marginBottom:"200px",textAlign:"center",color:"white",fontSize:"30px"}}>We Provide the Best Service in Industry</h2><br/>
          <p style={{marginTop:"-200px",marginBottom:"200px",textAlign:"center",color:"white",fontSize:"15px"}}>Add a line that tells users how easily they can get in touch with you</p>
          <a style={{color:"white"}} href="contact"><Button style={{color:"white",backgroundColor:"red",fontSize:"20px",width:"200px",height:"50px",marginTop:"-100px",marginBottom:"100px"}}><b> Get In Touch <FaArrowCircleRight /></b></Button></a> 
          </div>

        </div>
        </>
        
        
        
        
        </>

    )
}

export default Servies