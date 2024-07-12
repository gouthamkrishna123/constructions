import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import images2 from "../images/Logo.png";
import image3 from "../images/home.png";
import image4 from "../images/face.png";
import image5 from "../images/insta.png";
import image6 from "../images/mail.png";
import image7 from "../images/phone.png";
import image8 from "../images/twi.png";
import image9 from "../images/location.png";
import image1 from "../images/gmail.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";






function Footer() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebook/>
            {/* <img style={{}} src={image4} alt='img'/> */}
          </a>
          <a href='' className='me-4 text-reset'>
          <FaTwitter />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaGoogle />
            {/* <img style={{}} src={image6} alt='img'/> */}
          </a>
          <a href='' className='me-4 text-reset'>
          <FaInstagram />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6> */}
                    <img style={{width:"250px",height:"200px",marginLeft:"-60px"}} src={images2} alt='img'/>

              <p>
              We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and enhances a community’s built environment.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Company
</h6>
              <p>
                <a href='#!' className='text-reset'>
                Who We Are
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                About Company
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Services We Provide
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                What We Have Done
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <a href='#' className='text-reset'>
                Designing
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Construction
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Renovation
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                Site Planning
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Details</h6>
              <p>
                <FaHome icon="home" className="me-2" />
               
                   New York, NY 10012, US
              </p>
              <p>
                <IoMdMail  className="me-3" />
                

                 info@example.com
              </p>
              <p>
                <FaPhoneAlt icon="phone" className="me-3" />
                
                 + 01 234 567 88
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
              GK Building & Developer
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer