import React from "react";
import "./Project.css"
import cta from "../images/CTA.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import projectimg from "../images/projects.jpg";
import { IoCaretForward } from "react-icons/io5";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import reno4 from "../images/reno4.jpg";
import new5 from "../images/new5.jpg";
import inter from "../images/interiordesign.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";




function Project(){
    return(
        <>
         <div>
          <div style={{backgroundColor:"black"}}>
            <img style={{width:"100%",height:"350px",opacity:".3"}} src={projectimg} alt="img" />
            </div>
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>Projects</h1>
            </div>
        </div>

        <div className="container">
          <h3 style={{fontSize:"40px"}}>OUR PROJECTS</h3>
        </div>


<>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"400px",height:"500px"}} src={new1} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                  
                  <div className="col-md-6" id="one" style={{}}>
                    
                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Residential Home 1</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                      
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 3 BHK</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward>  Built Area : 1500 sqft</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : Amadam</p><br/>
                      <a style={{color:"white"}} href="resid"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"200px",height:"50px",textAlign:"center"}}>Visit Project  <IoArrowForwardSharp /></Button></a>
                   
                  </div>
                    </div>
                    </div>
        </div><br/><br/><br/><br/><br/>
</>
<>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  
                  
                  <div className="col-md-6" id="one">                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Residential Home 2</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                      
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 4 BHK</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Built Area : 3000 sqft</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : Thrissur</p><br/>
                      <a style={{color:"white"}} href="resid1"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"200px",height:"50px",textAlign:"center"}}>Visit Project  <IoArrowForwardSharp /></Button></a>
                  
                   
                  </div>
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"400px",height:"500px"}} src={new2} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
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
                  <img style={{width:"400px",height:"500px"}} src={inter} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                  
                  <div className="col-md-6" id="one">                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Interior Design 1</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                      
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 4 BHK</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Built Area : 3000 sqft</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : Chalakkudy</p><br/>
                      <a style={{color:"white"}} href="inter"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"200px",height:"50px",textAlign:"center"}}>Visit Project  <IoArrowForwardSharp /></Button></a>
                  
                   
                  </div>
                    </div>
                    </div>
        </div><br/><br/><br/><br/><br/><br/><br/><br/>
</>





<>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  
                  
                  <div className="col-md-6" id="one">                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Renovation 1</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                      
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 3 BHK</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Built Area : 2500 sqft</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : Kallur</p><br/>
                      <a style={{color:"white"}} href="renov"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"200px",height:"50px",textAlign:"center"}}>Visit Project  <IoArrowForwardSharp /></Button></a>
                  
                   
                  </div>
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"400px",height:"500px"}} src={reno4} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                    </div>
                    </div>
        </div><br/><br/><br/><br/><br/>
</>

<div className="container">
          <h3 style={{fontSize:"40px"}}>OUR ONGOING PROJECTS</h3>
        </div><br/><br/>

<>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"400px",height:"500px"}} src={new5} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                  
                  <div className="col-md-6" id="one">                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Residential Home 3</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                  <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                      
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> 2 BHK</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Built Area : 1500 sqft</p>
                      <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px",color:"black"}}><IoCaretForward style={{color:"red"}}></IoCaretForward> Location : Ollur</p><br/>
                      <a style={{color:"white"}} href="resid2"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"200px",height:"50px",textAlign:"center"}}>Visit Project  <IoArrowForwardSharp /></Button></a>
                  
                   
                  </div>
                    </div>
                    </div>
        </div><br/><br/><br/><br/>
</>



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

export default Project