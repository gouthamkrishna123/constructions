import React from "react";
import img from "../images/login.jpg";
import new1 from "../images/new1.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
// import home from '../video/Home.mp4';
import house from '../video/House.mp4';
import plan from '../images/plan1.jpg';
import siteplan from '../images/siteplan.jpg';
import { SiYeti } from "react-icons/si";
import work from '../video/work.mp4';


function Resid1(){
    return(
        <>
         <div>
          <div style={{backgroundColor:"black"}}>
            <img style={{width:"100%",height:"350px",opacity:".3"}} src={siteplan} />
            </div>
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>Residential Home 2</h1>
            </div>

            <>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-8"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"100%",height:"500px"}} src={new1} alt="images"/>
                  <div style={{width:"100%",height:"500px",marginTop:"-490px",marginLeft:"10px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red",backgroundColor:"red"}}></div>
                  </div>
                    </div>
                    <div className="col-md-1" ></div>
                    <div className="col-md-3" id="one" style={{}}>
                        
                        
                        
                        <h6 style={{textAlign:"left",fontSize:"18px",marginRight:"70px",color:"black"}}><b>Project Info</b></h6>
                        
                        {/* <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 3 BHK</p>
                        <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward>  Built Area : 1500 sqft</p>
                        <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : </p><br/> */}

<div><br/>
                            <div className="row g-0">
                                <div className="col-md-">
                                <p>Designer : Arya </p>
                                    <p>Client : Vivek</p>
                                    <p>Location : Thrissur</p>
                                    <p> Surface area : 100 m2</p>
                                    <p>Value : Private</p>


                                </div>
                                         
                            </div>
                        </div><br/><br/><br/>
                        
                        <h6>Share this project</h6><br/>
                        <div>
                        <a href="#" className='me-2'><FaFacebook id="icon" style={{opacity:0.5}}></FaFacebook></a>
                    <a href="#" className='me-2 '><AiFillTwitterCircle  id="icon" style={{opacity:0.5}}></AiFillTwitterCircle ></a>
                    <a href="#" className='me-2 '><FaGooglePlus  id="icon" style={{opacity:0.5}}></FaGooglePlus ></a>
                    <a href="#" className='me-2 '><FaInstagramSquare  id="icon" style={{opacity:0.5}}></FaInstagramSquare></a>
                        </div>

                    
                    </div>
                        </div>
                        </div>
            </div><br/><br/><br/><br/><br/>
            </>
            

            <>
            <div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <h1 style={{textAlign:"center"}}><b>3D View</b></h1>
                <video controls style={{width:"100%",height:"300px"}} ><source src={house} type="video/mp4" />  
                </video>
                  </div>
                    </div>
                    <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <h1 style={{textAlign:"center"}}><b>Site Plan</b></h1>
                  <img style={{width:"100%",height:"300px"}} src={plan} alt="images"/>
                  
                  </div>
                    </div>





                    </div>
                    </div>
                    </div>
            </><br/><br/>
            <div className="container">
                <h1></h1>
                <video controls style={{width:"100%",height:"500px"}} ><source src={work} type="video/mp4" />  
                </video>  
            </div><br/><br/>







            
    





            
            </div>
        </>


    )

}

export default Resid1