import React from "react";
import inter from '../images/interdesign1.jpg';
import saw2 from '../images/saw2.webp';
import saw from '../images/saw.webp';
import saw3 from '../images/saw3.webp';
import since from "../images/since.webp";
import material from "../images/material.webp";
import warranty from "../images/warranty.webp";
import cale from "../images/cale.webp";
import furnsing from "../images/furnsiing.webp";
import house from "../images/house.webp";
import worker from "../images/worker.webp";
import Carousel from "react-bootstrap/Carousel"; 
import person from "../images/person.webp";
import { Card,Button } from "react-bootstrap";

function Design(){

    return(
        <>
        <div>
            <div>
          <div style={{backgroundColor:"black"}}>
            <img style={{width:"100%",height:"700px"}} src={inter} />
            </div>
            <div className="container">
            <h1 style={{textAlign:"left",marginTop:"-250px",marginBottom:"10px",fontSize:"70px",color:"white"}}>Interior Design</h1>
            <a style={{color:"white"}} href="des"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"300px",height:"50px",textAlign:"center",marginBottom:"200px"}}>BOOK A CONSULTATION </Button></a>
            
            
            </div>
             
        </div>

        </div>
        <>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"100%",height:"400px"}} src={saw2} alt="images"/>
                  
                  </div>
                  </div>
                  
                  <div className="col-md-6"  style={{}}><br/><br/><br/>
                    
                    
                    <h5 style={{textAlign:"left", fontSize: '38px',color:"#293753"}}><b>Home Designers In Kerala </b></h5><br/>
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>We established in 2011 by Interior Designer Denny Abraham and subsequently modernized incorporating new machines and systems in 2015. AGAC Interiors is an interior design firm offering world-class interior design solutions to residential environments.</p>
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>The company provides interior design and execution consultancy services and turnkey installations for varied types of projects including commercial and residential sectors. Our professional experiences have helped us appreciate the importance of customer satisfaction, style, value consciousness, and global influence in everything we design.</p>
                                  </div>
            </div>
            </div>

            </div><br/><br/>
            </>
            <>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  
                  
                  <div className="col-md-6" ><br/><br/>
                  <h5 style={{textAlign:"left", fontSize: '38px',color:"#293753"}}><b>Interior Design That Suits You </b></h5><br/>
                      
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>is a team of Interior artists under the guidance of Interior Designer and Founder Denny Abraham. We are a full-service interior design company and specialize in creating all types of customized furniture Tyler in made-to-fit concepts for residential space. </p>
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>These include all types of Modular kitchen, Living and Dining interiors,Cabinet furniture, storage solutions, Modular furniture, Wardrobes, Cots and Sofas, and other special requirements of our valued customers.</p>
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>Our Interior designer are extremely flexible and nimble so that every step of the interior design process is properly supervised. We build a solid and long-lasting working relationship with every client and supplier.</p>
                      
                  
                   
                  </div>
                  <div className="col-md-6"><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"100%",height:"500px"}} src={saw} alt="images"/>
                 
                  </div>
                  </div>
                    </div>
                    </div>
        </div><br/><br/><br/>
</>
<>
<div className="card-mb-2">
        <div className="container">
        <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6"><br/><br/><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"100%",height:"300px"}} src={saw3} alt="images"/>
                 
                  </div>
                  </div>
                  
                  <div className="col-md-6"  style={{}}><br/><br/><br/>
                    
                    
                    <h5 style={{textAlign:"left", fontSize: '38px',color:"#293753"}}><b>We Promise Fully Customized Home Interiors </b></h5><br/><br/>
                      <p style={{textAlign:"left",fontSize:"15px",marginRight:"70px",color:"grey"}}>Everyone has a dream about having a good home, but why stop there and start dreaming about creating perfect Customized home interiors that perfectly match your personality and style. </p>
                      
                                  </div>
            </div>
            </div>

            </div><br/><br/>
            </>

            <>
            <div style={{backgroundColor:"lightgrey"}}><br/><br/><br/>
            <div className="container">
                
                <h1 style={{textAlign:"center", fontSize: '38px',color:"#293753"}}><b>Why choose Us</b></h1><br/><br/>
                <div>
                <div>
                    <div className="card-mb-1">
                        <div className="row g-0">
                            <div className="col-md-2" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={since} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>Since 2011</b></p>
                    
                            </div><br/>
                            <div className="col-md-2" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={material} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>High Quality Materials</b></p>

                            </div><br/>
                            <div className="col-md-3" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={warranty} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>5 Year Warranty</b></p>

                            </div><br/>
                            <div className="col-md-3" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={cale} alt="img"/><br/>
                                <p style={{fontSize:"18px"}}><b>45 Day Project Completion</b></p>

                            </div>

                        </div>

                    </div>
                </div>

                </div><br/><br/>
                <div>
                    <div className="card-mb-1">
                        <div className="row g-0">
                            <div className="col-md-2" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={furnsing} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>Furnishing</b></p>
                    
                            </div><br/>
                            <div className="col-md-2" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={house} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>23 Home/Month</b></p>

                            </div><br/>
                            <div className="col-md-3" style={{backgroundColor:"white",textAlign:"center",marginLeft:"15px",width:"250px"}}><br/><br/>
                                <img style={{}} src={worker} alt="img"/><br/>
                                <p style={{fontSize:"18px "}}><b>Lifelong Service Support</b></p>

                            </div><br/>
                            <div className="col-md-3" style={{backgroundColor:"white",marginLeft:"15px",width:"250px"}}>
                            <a style={{color:"white"}} href="des"><Button style={{color:"white",backgroundColor:"red",fontSize:"16px",width:"250px",height:"100%"}}><b> BOOK A CONSULTATION </b></Button></a>

                            </div>

                        </div>

                    </div>
                </div><br/><br/>
            </div>

            </div>
            </>
            {/* <>
            <div>
            <Carousel style={{marginTop:"40px",textAlign:"center"}}>
                
                <Carousel.Item>
                    
                            <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images">
                               </img> 
                               <Carousel.Caption>
        
        <Card style={{marginTop:"400px",marginBottom:"10px",width:"300px",height:"30px",marginLeft:"-140px"}}>
            <Card.Body><Card.Text>
              
          <h4>Manu</h4>
          <p>HR</p>
              </Card.Text></Card.Body>
              </Card>
              </Carousel.Caption>
                              
                            <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
                            <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
                            <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
	                
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"></img>                 
                    <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
                    <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
                    <img style={{width:"300px",height:"300px",marginLeft:"15px"}} src={person} alt="images"/>
            
        </Carousel.Item>
              </Carousel>
            

            </div><br/><br/><br/><br/>
            </>
             */}


        
        
        </>
    )
}

export default Design