import React from "react";
import building from "../src/images/building.jpg"
import about from "../src/images/about.jpg";
import worker from "../src/images/worker.jpg";
import requirement from "../src/images/requirements.jpg";
import aboutimage from "../src/images/aboutimage.png";
import cta from "../src/images/CTA.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Card,Button } from "react-bootstrap";



function About(){
    return(
        <>
        <div>
            <img style={{width:"100%",height:"350px"}} src={aboutimage} />
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-200px",marginBottom:"200px",fontSize:"70px",color:"white"}}>About Us</h1>
            </div>
        </div>
        <>
        <div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"400px",height:"500px"}} src={about} alt="images"/>
                  <div style={{width:"400px",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                  
                  <div className="col-md-6">
                    {/* <div className="container"> */}
                    
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black"}}><b>Our Story</b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"   }}></div><br/><br/>
                      {/* <h4 style={{textAlign:"left",marginLeft:"30px"}}>Where We Construct Your Dreams</h4><br/> */}
                  <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px"}}>We believe in more than just constructing buildings; we’re dedicated to building a better future.</p><br/>
                  <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px"}}>Our ideology of You Dream We Build; is that the visions of our clients of their dream to construct will be sprouted through us.</p><br/>
                  <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px"}}>Our journey has been marked by remarkable projects, dedicated teamwork, and the trust of our clients. We take pride in our ability to turn challenges into opportunities, always pushing the boundaries of what’s possible.</p><br/>
                  <p style={{textAlign:"left",fontSize:"16px",marginRight:"70px"}}>We have emerged as a trusted name in the construction industry, known for our unwavering commitment to quality, innovation, and sustainability.</p><br/>
                  
                   
                  </div>
                    </div>
                    </div>
        </div><br/><br/>
        </>

        <>
        
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <h4 style={{textAlign:"left", fontSize: '30px',color:"black"}}><b>What We Offer</b></h4>
                                                                                                                <div style={{position:"absolute",content: "",width: "5%",height: "3px",background:  "red"   }} ></div><br/>
            <p style={{textAlign:"left",fontSize:"15px",marginRight:"0px"}}>We provide comprehensive design, construction, and renovation services, combining creativity and craftsmanship to bring your vision to life, ensuring quality, functionality, and aesthetic excellence.</p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div><br/><br/>
        </>

        <>
        <div className="container">
        <div style={{}} className="card-mb-3">
            <div className="row g-0">
            {/* <div className="col-md"></div> */}
              <div className="col-md-4">
            <div className="Card">
              <div className="container">
              <img src={requirement} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left"}}><br/>
              
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>DESIGNING</b></p>
                <p className="Card-text" style={{marginRight:"50px",fontSize:"16px"}}>Our design services blend creativity and functionality to transform ideas into stunning visual realities. Whether it's architectural, interior, or landscape design, we meticulously craft unique and sustainable solutions that align with your vision and exceed your expectations.</p>
                <p ><a href="#">Learn more </a></p>
                </div>
                </div>
                </div>
                </div>

                <div className="col-md-4">
            <div className="Card">
              <div className="container">
              <img src={worker} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left"}}><br/>
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>CONSTRUCTION</b></p>
                <p className="Card-text" style={{marginRight:"50px",fontSize:"16px"}}>Our construction services combine expertise and innovation to bring your vision to life. With a focus on quality and client satisfaction, we build more than structures; we build trust.</p>
                <p ><a href="#">Learn more </a></p>
                </div>
                </div>
                </div>
                </div>

                <div className="col-md-3">
            <div className="Card">
              <div className="container">
              <img src={building} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"left"}}><br/>
                <p className="Card-text" style={{textAlign:"",fontSize:"25px"}}><b>RENOVATION</b></p>
                <p className="Card-text" style={{marginRight:"0px",fontSize:"16px"}}>Our renovation services breathe new life into existing spaces, enhancing functionality and aesthetics. With a team of skilled professionals, we transform outdated structures into modern, revitalized environments, delivering quality renovations that stand the test of time.</p>
                <p ><a href="#">Learn more </a></p>
                </div>
                </div>
                </div>
                </div>




                </div>
                </div>

        </div><br/><br/>
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

export default About