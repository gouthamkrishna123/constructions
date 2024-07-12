import React from "react";
import './Home.css'
import Carousel from "react-bootstrap/Carousel";
import { MDBCard } from "mdb-react-ui-kit";
import img1 from "../src/images/homeimag.jpg";
import img2 from "../src/images/img2.jpg"
import img3 from "../src/images/new.jpg"
import build1 from "../src/images/building1.jpg"
import { Card,Button } from "react-bootstrap";
import inter from"../src/images/inter.jpg";
import inter1 from"../src/images/inter1.jpg";
import inter2 from"../src/images/inter2.jpg";
import inter3 from"../src/images/inter3.jpg";
import client from "../src/images/client.jpg";
import client1 from "../src/images/client1.jpg";
import client2 from "../src/images/client2.jpg";
import project from "../src/images/project.jpg";
import project1 from "../src/images/project1.jpg";
import project2 from "../src/images/project2.jpg";
import project3 from "../src/images/project3.jpg";
import project4 from "../src/images/project4.jpg";
import project5 from "../src/images/project5.jpg";
import project10 from "../src/images/project10.png";
import project20 from "../src/images/project20.png";
import image4 from "../src/images/face.png";
import image5 from "../src/images/insta.png";
import image6 from "../src/images/mail.png";
import team from "../src/images/team.jpg";
import team1 from "../src/images/team1.jpg";
import team2 from "../src/images/team2.jpg";
import video from "../src/video/video1.mp4";
import design from "../src/images/designing.PNG"
import reno from "../src/images/renovationimg.PNG"
import steel from "../src/images/steel.PNG";
import site from "../src/images/site.PNG";
import architecture from "../src/images/architecture.PNG";
import structural from "../src/images/structural.PNG";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { FaRegHourglass } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegObjectGroup } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";







function Home(){
    return(
      <div>
        <div style={{backgroundColor:"gray"}}>
        
        <Carousel>
      <Carousel.Item>
	  <img style={{width:"100%",height:"800px",opacity:"0.5"}} src={img1} alt="images"/>
        
        <Carousel.Caption>
          <div style={{textAlign:"left",fontSize:"80px",marginBottom:"50px",marginTop:"50px"}}>
          <h1 style={{fontSize:"70px",marginLeft:"-60px",color:"white",animation:"forwards",animationDelay:"1.12s"}}><b>Start Your Project Now</b></h1>
          <h1 style={{marginLeft:"-60px",fontSize:"70px",backgroundColor:"red",marginRight:"200px",color:"black"}}><b>YOU DREAM WE BUILD</b></h1>
          <a style={{color:"white"}} href="#"><Button style={{color:"white",backgroundColor:"red",fontSize:"20px",width:"200px",height:"50px"}}><b> Get In Touch </b></Button></a>
          </div>
          </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
      <div className="card-mb-2"><br/><br/><br/>
        
                <div style={{backgroundColor:"white"}} className="row g-0">
                  <div className="col-md-6">
                    <h1 style={{textAlign:"left", fontSize: '50px',color:"black",marginLeft:"30px"}}><b>Welcome to <br/>
                      GK Building & Developer                   
                      </b></h1>
                      <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red",left: "30px"}}></div><br/>
                      <h4 style={{textAlign:"left",marginLeft:"30px"}}>Where We Construct Your Dreams</h4><br/>
                  <p style={{textAlign:"left",marginLeft:"30px",fontSize:"18px"}}><b>GK Building & Developer</b> have completed apartment complexes, commercial buildings, and villa projects in Thrissur, Aluva, Kochi, Nedumbassery, Guruvayur, Palghat, and Thiruvananthapuram.</p>
                   
                    
                    </div>
                    {/* <div className="col-md-1"></div> */}
                  <div className="col-md"><br/>
                  <div className="container" style={{marginLeft:"0px"}}>
                  <img style={{width:"90%",height:"500px"}} src={build1} alt="images"/>
                  <div style={{width:"85%",height:"500px",marginTop:"-450px",marginLeft:"50px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}></div>
                  </div>
                  </div>
                    </div>
        </div><br/>
        
        <div>
          <div></div>
        <img style={{width:"100%",height:"200px",marginBottom:"00px"}} src={img3} alt="images"/>
        <div style={{textAlign:"center"}} >
            {/* <div style={{position:"absolute",marginTop:"-150px",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>  */}
            <h2 style={{textAlign:"center",marginTop:"-150px"}}>REQUEST A CONSULTATION FOR FREE</h2>
            <a style={{color:"white"}} href="servies"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"300px",height:"50px",textAlign:"center"}}>BOOK AN APPOINTMENT <FaArrowCircleRight /></Button></a>

        </div>
        </div><br/><br/><br/><br/>


        <div><br/><br/><br/>
          <div className="card-mb-3">
            <div className="row g-0">
              <div className="col-md-6"><br/><br/>
              <div style={{textAlign:"center",marginLeft:"50px",width:"80%",height:"800px",borderStyle:"solid",borderWidth:"4px,4px,4px,4px",color:"red"}}>
              
              <Carousel style={{marginTop:"40px",textAlign:"center"}}>
                
                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={inter} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={inter1} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={inter2} alt="images"/>
                </Carousel.Item>
                <Carousel.Item>
	                <img style={{width:"100%",height:"700px"}} src={inter3} alt="images"/>
                </Carousel.Item>
              </Carousel>
              </div>
              </div>
              {/* <div style={{marginLeft:""}} className="col-sm"></div> */}
              <div style={{marginLeft:""}} className="col-md-5">
                <div  className="container">
                  <h4 style={{fontSize:"35px"}}>Our Area of Specialization</h4>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>
                  <p style={{marginRight:"50px"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
              
              <div className="card-mb-3" style={{marginLeft:"0px"}}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <div style={{marginRight:"50px"}} >
                    {/* <img style={{width:"50px",height:"50px"}} src={structural} alt="img"/> */}
                    <div id="icon">
                    <FaRegBuilding />
                    </div>

                      <h4 >Structural Consultation</h4>
                      <p >Analyze, assess, and advise on structural design and integrity for buildings, bridges, or infrastructure projects.</p>
                    </div>
                  </div>
                  <div className="col-md-5">
                  <div style={{marginRight:"50px"}}>
                  {/* <img style={{width:"50px",height:"50px"}} src={steel} alt="img"/> */}
                  <div id="icon">
                  <PiNotePencil />
                  </div>

                    <h4>Steel Structure</h4>
                    <p >Steel structures use steel components for construction, providing strength, durability, and versatility in various architectural and engineering applications.</p>
                  </div>
                  </div>
                </div>
              </div><br/>

              <div className="card-mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <FaRegHourglass />
                  </div>
                    <h4>Renovation</h4>
                    <p >Renovation involves updating, repairing, or remodeling a space to improve its functionality, aesthetics, or overall condition.</p>
                  </div>
                  </div>

                  <div className="col-md-5">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <MdOutlinePhotoLibrary />
                  </div>
                    <h4>Site Planning</h4>
                    <p >Detailed 2d drawings that exact illustrate every nook and corner of the building is made. This gives the team precise idea about how the whole scenario will look like.</p>
                  </div>
                  </div>
                </div>
              </div><br/>

              <div className="card-mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <FaRegObjectGroup />
                    </div>
                    <h4>3D Designing</h4>
                    <p>3D designing for structures creates detailed digital models, aiding in architecture, engineering, and construction planning and visualization.</p>
                  </div>
                  </div>
                  <div className="col-md-5">
                  <div style={{marginRight:"50px"}}>
                  <div id="icon">
                  <FaRegObjectUngroup />
                    </div>
                    <h4>Architecture</h4>
                    <p>Architecture is the art and science of designing and constructing buildings and spaces with aesthetic and functional considerations.</p>
                  </div>
                  </div>
                </div>
              </div><br/>
              </div>
          </div>
        </div>  
            </div>
          </div><br/><br/><br/><br/>

          <>
          <div style={{}} className="card-mb-3">
            <div className="row g-0">
              <div className="col-md-5">
                <div  style={{textAlign:"left",marginLeft:"50px"}}>
                  <h1 ><b>What Our Clients Say</b></h1>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>
                  <p style={{marginRight:"90px"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5" style={{}}>
                <div className="container" style={{}}>
                  <div className="card mb-0" style={{maxWidth:"490px",boxShadow:"20px 20px 20px 10px lightgray"}}>
                    <div className="row g-0">
                      <div className="col-md-1">
                        <img style={{width:"200px",height:"300px"}} src={client}></img>

                      </div>
                      
                      <div className="col-mb-5">
                        <div className="card-body">
                        <p style={{textAlign:"left",marginLeft:"200px",marginRight:"20px",marginTop:"-250px"}}><b>Excellent time management and top quality work. Good place for building a dream home.</b></p>
                        <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}>Margaret Curtis​Real Estate Developer </p>
                        {/* <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}></p>   */}
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>


            </div>
          </div>
          </><br/>

          <>
          <div className="" >
            <div className="row g-0">
            <div className="col-md-5" style={{}}>
                <div className="container" style={{}}>
                  <div className="card mb-0" style={{maxWidth:"490px",boxShadow:"20px 20px 30px 20px lightgray"}}>
                    <div className="row g-0">
                      <div className="col-md-1">
                        <img style={{width:"200px",height:"300px"}} src={client2}></img>

                      </div>
                      
                      <div className="col-mb-5">
                        <div className="card-body">
                        <p style={{textAlign:"left",marginLeft:"200px",marginRight:"20px",marginTop:"-250px"}}><b>GK Building & Developer gives 100% strong and safe management.... We can give the project more comfortably and confidentiality.... DR.CEMENTO build our property and build our confidence level high...</b></p>
                        <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}>Margaret Curtis​<br/>Real Estate Developer </p>
                        {/* <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}></p>   */}
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            
              <div className="col-md-1"></div><br/>
            <div className="col-md-5" style={{}}>
                <div className="container" style={{}}>
                  <div className="card mb-0" style={{maxWidth:"490px",boxShadow:"20px 20px 30px 20px lightgray"}}>
                    <div className="row g-0">
                      <div className="col-md-1">
                        <img style={{width:"200px",height:"300px"}} src={client1}></img>

                      </div>
                     
                      <div className="col-mb-5">
                        <div className="card-body">
                        <p style={{textAlign:"left",marginLeft:"200px",marginRight:"20px",marginTop:"-280px"}}><b>If u r planning to build your dream home the safe hands are here. Good customer service, premium quality products at your budget and great customer service. Also a huge varieties of super looking design's will definitely make u satisfied.</b></p>
                        <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}>John Doe <br/>Architect</p>
                        {/* <p style={{textAlign:"left",marginLeft:"250px",marginRight:"-20px"}}></p>   */}
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
                </div>
              </div>
          </div>
          </><br/><br/><br/><br/>
          
          <>
          <div className="card-md-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="container">
                  <h1 style={{marginLeft:"30px"}}>Our Recent Projects</h1>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red",marginLeft:"30px  "}}></div>
                </div>

              </div>
              <div className="col-md-1"></div>
              <div className="col-md">
              <div className="container">
              <a style={{color:"white"}} href="project"><Button style={{color:"white",backgroundColor:"red",fontSize:"15px",width:"250px",height:"50px",textAlign:"center",marginTop:"20px"}}>VIEW ALL PROJECTS <FaArrowCircleRight /></Button></a>
              </div></div>
            </div>
            

          </div>
          </><br/>
          <>
          <div className="card-md-3">
            <div className="row g-0">
              <div className="col-md-4">
              <div className=""> 
                <a href="#"><img style={{width:"100%",height:"500px"}} src={project2}></img></a>

              </div>
              </div>
              <div className="col-md-4">
              <div className="">
              <a href="#"><img style={{width:"100%",height:"500px",marginLeft:"-50px"}} src={project1}></img></a>
              </div>
              </div>
              <div className="col-md-4">
              <div className="">
              <a href="#"><img style={{width:"100%",height:"500px",marginLeft:"-100px"}} src={project10}></img></a>
              </div>
              </div>
            </div>
          </div>
          </>
          <>
          <div className="card-md-3">
            <div className="row g-0">
            
              
              <div className="col-md-4">
              <div className=""> 
                <a href="#"><img style={{width:"100%",height:"500px"}} src={project20}></img></a>

              </div>
              </div>
              <div className="col-md-4">
              <div className=""> 
                <a href="#"><img style={{width:"100%",height:"500px",marginLeft:"-50px"}} src={inter3}></img></a>

              </div>
              </div>
              <div className="col-md-4">
              <div className=""> 
                <a href="#"><img style={{width:"100%",height:"500px",marginLeft:"-100px"}} src={img1}></img></a>

              </div>
              </div>
            <div className="container">
            <video controls style={{width:"100%",height:"500px"}} ><source src={video} type="video/mp4" />  
            </video>  
            </div>
            
            </div>
          </div>
          </><br/><br/><br/>

          <>
          
          <div style={{}} className="card-mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div  style={{textAlign:"left",marginLeft:"50px"}}>
                  <h1 ><b>Our Expert Team</b></h1>
                  <div style={{position:"absolute",content: "",width: "5%",height: "3px",background: "red"}}></div><br/>
                  <p style={{marginRight:"30px"}}>You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
                </div>
              </div>
            </div>
          </div>
          </><br/>

          <>
          <div>
          <div style={{}} className="card-mb-3">
            <div className="row g-0">
            <div className="col-md-1"></div>
              <div className="col-md-3">
            <div className="Card">
              <div className="container">
              <img src={team} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"center"}}>
                <p className="Card-text" style={{textAlign:"",fontSize:"30px"}}><b>Juan George​</b></p>
                <p className="Card-text" style={{textAlign:""}}>Vice President​</p>
                
                <a href='' className='me-4 text-reset'>
                <FaFacebook/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FaInstagram />

          </a>
          <a href='' className='me-4 text-reset'>
          <FaGoogle />

          </a>

                </div>
              </div>

              </div>
              </div>

              <div className="col-md-3">
            <div className="Card">
              <div className="container">
              <img src={team1} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"center"}}>
                <div>
                <p className="Card-text" style={{textAlign:"",fontSize:"30px"}}><b>Sean Hart​</b></p>
                <p className="Card-text" style={{textAlign:""}}>Project Leader</p>
                
                <a href='' className='me-4 text-reset'>
                <FaFacebook/>

          </a>
          <a href='' className='me-4 text-reset'>
           <FaInstagram/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FaGoogle />

          </a>
          </div>

                </div>
              </div>

              </div>
              </div>

              <div className="col-md-3">
            <div className="Card">
              <div className="container">
              <img src={team2} style={{width:"300px"}} className="card-img-top"/>
              <div className="card-body" style={{textAlign:"center"}}>
                <p className="Card-text" style={{textAlign:"",fontSize:"30px"}}><b>Emma Kelly​</b></p>
                <p className="Card-text" style={{textAlign:""}}>Creative Director</p>
                
                <a href='' className='me-4 text-reset'>
            <FaFacebook/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FaInstagram />

          </a>
          <a href='' className='me-4 text-reset'>
          <FaGoogle />

          </a>

                </div>
              </div>

              </div>
              </div>

              </div>

            </div>
          </div>
          </><br/><br/>

            </div>
    )
}
export default Home