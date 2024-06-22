
import React from "react";
import Nav from "../Nav";
import Footerpage from "../Footerpage";


const PrivacyPolicy = () => {
  return (


    <>
      <style>
        {
          `.privacy-page-top {
      color: orange;
      font-family: 'Cabin', sans-serif;
      font-size: 1.5em;
      margin-top: 5%;
      font-weight: bold;
      margin-left: 5%;
  }
  .privacy-page-body {
      display: inline-block;
      margin-left: 4%;
      margin-right: 5%;
  }
  
  .privacy-page-title {
      font-family: "Roboto", sans-serif;
      color: #2781bc;
      font-size:4.5em;
      margin-bottom: 2%;
      font-weight: lighter;
      display: inline-block;
      width: 70%;
  }
  
  .privacy-paragraph-heading {
      font-family: "Abhaya Libre", sans-serif;
      color:#32012F;
      font-weight: bolder;
      font-size: 1.5em;
      margin-bottom: 3%;
  }
  
  .privacy-content {
        font-family:poppins,sans-serif;
      margin-bottom: 8%;
      display: inline-block;
      width: 95%;
      text-align:justify;
 font-size:18px;
            line-height:22.5px;
            text-decoration:none solid rgb(68,68,68);
       word-spacing:zero;
         
  }
  
  .privacy-paragraph-body{
      margin-right: 4%;
      margin-bottom: 4em;
  }
  
  .privacy-paragraph-text-followed{
      margin-bottom:1em;
      color: black;
  }
  
  .privacy-paragraph-text {
      color: black;
  }
  
  .privacy-paragraph-body {
      line-height: 2em;
       font-family:poppins,sans-serif;
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
  `
        }
      </style>
      <Nav /><h3 style={{ fontFamily: 'cursive',marginLeft:'50px', fontWeight:700,color: '#1d3557',marginTop:'40px' }}> Privacy Policy </h3>
      <hr style={{ color: '#f3722c', width: '1400px' }}></hr>
      {/* <div className="privacy-page-top">SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL SCIENCES</div> */}
      <div className="privacy-page-body">
        <div className="privacy-content">
         
          <div className="privacy-paragraph-heading" style={{ fontFamily: 'inherit' }}>PRIVACY STATEMENT</div>
          <div className="privacy-paragraph-body privacy-paragraph-text">
            The UNIVERSITY protects the personal information collected from and about students, graduates, staff and other business partners. This includes the training of employees and the establishment of control systems for the responsible use of personal information that is accessible to UNIVERSITY employees while performing work-related duties. The UNIVERSITY directs its employees to exercise caution when making personal information available to others and not to give others access to "UNIVERSITY" information or passwords. All full-time and part-time employees of the UNIVERSITY, as well as student interns, are required to sign the "Employee Non-Disclosure and Confidentiality Agreement.
          </div>
          <div className="privacy-paragraph-heading" style={{ fontFamily: 'inherit' }}>
            COLLECTION OF YOUR PERSONAL INFORMATION
          </div>
          <div className="privacy-paragraph-body privacy-paragraph-text-followed">
            The "UNIVERSITY" does not sell, rent or otherwise make available a student's personal information to any third parties for marketing purposes except where noted above. Notwithstanding the previously described exceptions, The "UNIVERSITY" will only release personal information regarding any student or alumnus under the following guidelines:
            <br></br>
            The UNIVERSITY may confirm inquiries as to whether an individual holds a designation or degree in good standing from The "UNIVERSITY", and this information can be made available to the public through the UNIVERSITY's website. The UNIVERSITY releases name and address information to a limited number of professional industry organizations or associations regarding students expressly for the purpose of informing them of their eligibility for membership or other benefits or promoting local classes.
          </div>

        </div>
       
      </div>
      <Footerpage />
    </>


  );
};

export default PrivacyPolicy;

