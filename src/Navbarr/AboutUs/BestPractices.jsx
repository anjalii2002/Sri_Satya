import React from "react";
import Nav from "../../HomePage/Nav";
import Footerpage from "../../HomePage/Footerpage";
import { Link } from "react-router-dom";
import library from '../../images/libr.webp';
import ERP from "../../images/NavIMG/AboutUs/ERP_MODULE.pdf"

const BestPractices = () => {
  return (
    <>
      <style>
        {`
        .title h4::before{
          background: orange;
          height:2px;
          width:45px;
          content:"";
          position:absolute;
          top:0px;
          left:0px;
          bottom:0px;
          margin:auto;
    
         }

         .title{
         font-family:inherit;
         font-weight:350;
         margin-left:80px;
}


 .title h4{
  text-transform:uppercase;
  font-weight:500;
  font-size:20px;
  position:relative;
  padding-left:60px;
  margin-top:0px;
  margin-bottom:15px;
  display:inline-block;
  // color:rgb(53,56,88);
  font-style:normal;
 }
.privacy-page-top {
      color: #888888;
      font-family: 'Cabin', sans-serif;
      font-size: 1.5em;
      margin-top: 5%;
      font-weight: bold;
      margin-left: 12%;
  }
  .privacy-page-body {
      display: inline-block;
      margin-left: 12%;
      margin-right: 5%;
  }
  
  .privacy-page-title {
      font-family: "Roboto", sans-serif;
      color: #2781bc;
      font-size:2.3em;
      margin-bottom: 2%;
      font-weight: lighter;
      display: inline-block;
      width: 150%;
  }
  
  .privacy-paragraph-heading {
      font-family: "Abhaya Libre", sans-serif;
      color: black;
      font-weight: bolder;
      font-size: 1em;
      margin-bottom: 3%;
  }
  
  .privacy-content {
   font-family: 'Open Sans', sans-serif; 
      margin-bottom: 8%;
      display: inline-block;
      width: 150%;
  }
  
  .privacy-paragraph-body{
      margin-right: 4%;
      margin-bottom: 4em;
  }
  
  .privacy-paragraph-text-followed{
      margin-bottom:1em;
      color: #717171;
  }
  
  .privacy-paragraph-text {
      color: #717171;
  }
  
  .privacy-paragraph-body {
      line-height: 2em;
      font-family: 'Cabin', sans-serif;
  }
  
  .privacy-policy-nav-menu {
      width:27%;
      display: inline-block;
      position: relative;
      vertical-align: top;
  }
  
  .privacy-nav-menu-wrapper{
      background-color: #f39c12;
      list-style-type: none;
      padding: 0;
      margin:0;
      display: block;
  }
  
  .privacy-nav-menu-wrapper a{
      display: block;
      height: inherit;
      width: inherit;
      padding-left: 1em;
      padding-bottom: 1em;
      padding-top: 1em;
  }
  
  .privacy-nav-menu2, .privacy-nav-menu1{
      display: block;
      background-color: #f39c12;
  }
  .site-map-link:hover, .privacy-policy-link, .privacy-policy-link:hover {
      color: white;
      text-decoration: none;
  
  }
  
  .privacy-nav-menu2 {
      background-color: white;
      border-bottom-width: 2px;
      border-bottom-style: groove;
      border-bottom-color: #f6f6f6;
  }
  
  .site-map-link{
      color: #f39c12;
      text-decoration: none;
  
  }
  
  .privacy-nav-menu2:hover{
      background-color: #f39c12;
  }
  
  @media (max-width: 481px) {
  
      .privacy-page-body, .privacy-page-top, .privacy-page-title, .privacy-content {
          width: 90%;
          margin-right: 0;
          text-align: left;
      }
  
      .privacy-policy-nav-menu {
          width: 80%;
          margin-bottom: 3.5em;
      }
  
      .privacy-page-top {
          padding-bottom: 15px;
      }
  
      .privacy-page-title {
          font-size: 3em;
          line-height: 1em;
      }
  `}
      </style>
      <Nav />



      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <img src={library} style={{ width: '100%', height: '300px', filter: 'brightness(50%)' }} alt="Library" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          pointerEvents: 'none', // This allows clicks to go through the overlay to the button
        }}>
          {/* <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '10px 20px',
              fontSize: '20px',
              backgroundColor: '#780000',
              color: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
      BEST PRACTICES
          </div> */}
        </div>
      </div>
      {/* <div className="privacy-page-top">
        SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL SCIENCES
      </div> */}
      <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '120px' }}>
        <h4 >BEST PRACTICES</h4>
      </div>
      <div className="privacy-page-body">
        <div className="privacy-content">
          {/* <div className="privacy-page-title">Best Practices</div> */}
          <br></br>
          
          <div className="privacy-paragraph-body privacy-paragraph-text">
            <b style={{ color: "black", textDecoration: "underline" }}>
              {" "}

            </b>{" "}
            <br />
            <a
               href={ERP}
               target="_blank"
             >
              <b style={{ color: "black" }}> 1.  Enterprise Resources Planning (ERP)</b> 
              </a>
               <br />
            

        
            <a
               href=""
              //  target="_blank"
             >
              <b style={{ color: "black" }}>  2.   Activity Based Continuous Assessment (ABCA) System</b> 
              </a>
          </div>
        </div>


      </div>
      <Footerpage />
    </>
  );
};

export default BestPractices;