import React from "react";
import img from "../images/login.jpg";
import renovation from "../images/renovation.jpeg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import house from '../video/House.mp4';
import plan from '../images/plan1.jpg';
import work from '../video/work.mp4';
import reno from "../images/reno.jpg";
import reno1 from "../images/reno1.jpg";
import reno2 from "../images/reno2.jpg";
import reno3 from "../images/reno3.jpg";
import reno4 from "../images/reno4.jpg";



function Reno(){
    return(
        <>
         <div>
          <div style={{backgroundColor:"black"}}>
            <img style={{width:"100%",height:"350px",opacity:".3"}} src={renovation} />
            </div>
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>Renovation 1</h1>
            </div>

            <>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-8"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"100%",height:"500px"}} src={reno4} alt="images"/>
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
                                <p>Designer : RamSankar</p>
                                    <p>Client : Minsad</p>
                                    <p>Location : Kallur</p>
                                    <p> Surface area : 150 m2</p>
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
            <p style={{textAlign:'center'}}>See the Designer's Architectural Magic in Renovating an Old Home to a Stunning New Generation Dream Home</p>
            <div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6">
                  <img style={{width:"500px"}} src={reno1} alt="img1"></img>
                  <p>Old house</p>
                  </div>
                  <div className="col-md-6">
                  <img style={{width:"500px"}} src={reno2} alt="img1"></img>
                  <p>Renovation in First Stage</p>
                  </div>
                  <div className="col-md-6">
                  <img style={{width:"500px"}} src={reno3} alt="img1"></img>
                  <p>Renovation in Second Stage</p>
                  </div>
                  <div className="col-md-6">
                  <img style={{width:"500px"}} src={reno4} alt="img1"></img>
                  <p>Renovation in Final Output</p>
                  </div>
                  </div>
                  </div>
                  </div><br/>

                    <div className="container">
                  <h4 style={{textAlign:"left"}}>Old Generation -> New Generation</h4>
                  <div >
                  <img style={{width:"800px"}} src={reno} alt="img1"></img>
                  </div>
                  </div>

                             
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

export default Reno