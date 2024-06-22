import React from "react";
import SSSLOGOALL from "./Photo/bottom-logo-2023.png";
import { color } from "@amcharts/amcharts5";
import { Link } from "react-router-dom";
function Footerpage() {
  return (
    <>
      <style>
        {`
     ul {
        margin: 0px;
        padding: 0px;
    }
    .footer-section {
      background: #151414;
      position: relative;
    }
    .footer-cta {
      border-bottom: 1px solid #373636;
    }
    .single-cta i {
      color: #ff5e14;
      font-size: 30px;
      float: left;
      margin-top: 8px;
    }
    .cta-text {
      padding-left: 15px;
      display: inline-block;
    }
    .cta-text h4 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    .cta-text span {
      color: #757575;
      font-size: 15px;
    }
    .footer-content {
      position: relative;
      z-index: 2;
    }
    .footer-pattern img {
      position: absolute;
      top: 0;
      left: 0;
      height: 330px;
      background-size: cover;
      background-position: 100% 100%;
    }
    .footer-logo {
      margin-bottom: 30px;
    }
    .footer-logo img {
        max-width: 380px;
    }
    .footer-text p {
      margin-bottom: 14px;
    //   font-size: 14px;
          color: #7e7e7e;
      line-height: 28px;
    }
    .footer-social-icon span {
      color: #fff;
      display: block;
      font-size: 20px;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 20px;
    }
    .footer-social-icon a {
      color: #fff;
      font-size: 16px;
      margin-right: 15px;
    }
    .footer-social-icon i {
      height: 40px;
      width: 40px;
      text-align: center;
      line-height: 38px;
      border-radius: 50%;
    }
    .facebook-bg{
      background: #3B5998;
    }
    .twitter-bg{
      background: #55ACEE;
    }
    .google-bg{
      background: #DD4B39;
    }
    .footer-widget-heading h3 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
      position: relative;
    }
    .footer-widget-heading h3::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -15px;
      height: 2px;
      width: 50px;
      background: #ff5e14;
    }
    .footer-widget ul li {
    //   display: inline-block;
    //   float: left;
      width: 50%;
      margin-bottom: 12px;
    }
    .footer-widget ul li a:hover{
      color: #ff5e14;
    }
    .footer-widget ul li a {
      color: #878787;
      text-transform: capitalize;
    }
    .subscribe-form {
      position: relative;
      overflow: hidden;
    }
    .subscribe-form input {
      width: 100%;
      padding: 14px 28px;
      background: #2E2E2E;
      border: 1px solid #2E2E2E;
      color: #fff;
    }
    .subscribe-form button {
        position: absolute;
        right: 0;
        background: #ff5e14;
        padding: 13px 20px;
        border: 1px solid #ff5e14;
        top: 0;
    }
    .subscribe-form button i {
      color: #fff;
      font-size: 22px;
      transform: rotate(-6deg);
    }
    .copyright-area{
      background: #202020;
      padding: 25px 0;
    }
    .copyright-text p {
      margin: 0;
      font-size: 14px;
      color: #878787;
    }
    .copyright-text p a{
      color: #ff5e14;
    }
    .footer-menu li {
      display: inline-block;
      margin-left: 20px;
    }
    .footer-menu li:hover a{
      color: #ff5e14;
    }
    .footer-menu li a {
      font-size: 14px;
      color: #878787;
    }

    





    .copyright-area {
        background-color: #2E2E2E;
        padding: 20px 0;
      }
      .container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .footer-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .footer-menu ul li {
        display: inline-block;
        margin-right: 15px;
      }
      .footer-menu ul li:last-child {
        margin-right: 0;
      }
      .copyright-text {
        text-align: center;
        margin-top: 15px;
      }
    
      /* Responsive styles */
      @media only screen and (max-width: 991px) {
        .container {
          margin-left: 0;
        }
      }



      .footer-section {
        background: #151414;
        position: relative;
      }
      .footer-cta {
        border-bottom: 1px solid #373636;
      }

      .single-cta i {
        color: #ff5e14;
        font-size: 30px;
        float: left;
        margin-top: 8px;
      }
      .cta-text {
        padding-left: 15px;
        display: inline-block;
      }
      .cta-text h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .cta-text span {
        color: #757575;
        font-size: 15px;
      }
      .footer-content {
        position: relative;
        z-index: 2;
      }
      .footer-pattern img {
        position: absolute;
        top: 0;
        left: 0;
        height: 330px;
        background-size: cover;
        background-position: 100% 100%;
      }
      .footer-logo {
        margin-bottom: 30px;
      }
      .footer-logo img {
          max-width: 300px;
      }
      .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
            color: #7e7e7e;
        line-height: 28px;
        // font-family:sans-serif;
        font-family: helvetica;
      }


      .footer-social-icon {
        display: flex;
        align-items: center;
      }

      .footer-social-icon span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
      }

      .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
      }
      .footer-div{
        margin-left:200px;
      }

      .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
      }

      .facebook-bg{
        background: #3B5998;
      }
      .instagram-bg{
        background: #966b9d;
      }
      .email-bg{
        background: #DD4B39;
      }

      .whatsapp-bg{
        background: #4f772d;
      }

      .ankita{
        display : flex ;
    }


      .youtube-bg{
        background: #d90429;
      }
      .footer-widget-heading h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
      }
      .footer-widget-heading h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: #ff5e14;
      }
      .footer-widget ul li {

        width: 100%;

      }
      .footer-widget ul li a:hover{
        color: #ff5e14;
      }
      .footer-widget ul li a {
        color: #878787;
        text-transform: capitalize;
      }

      .copyright-area{
        background: #202020;
        padding: 25px 0;
      }
      .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
      }
      .copyright-text p a{
        color: #ff5e14;
      }
      .footer-menu li {
        display: inline-block;
        margin-left: 20px;
      }
      .footer-menu li:hover a{
        color: #ff5e14;
      }
      .footer-menu li a {
        font-size: 14px;
       
      }
      .logos{
        display: flex;
        justify-content:center;
        gap: 20px;
        margin-left:400px;
        align-items:center;
        height: 70px;

      }
     .logoheight{
        height:100%;
     }
      @media screen and (max-width: 1024px) {
        .footer-div{
          // margin-left:300px
        }
      }


      @media screen and (max-width: 768px) {
        .col-xl-4.col-md-4 {
          // margin-right: 400px;
        }


        .footer-social-icon{
          margin-right:800px;
        }

        .footer-menu li{
           display:inline;
        }
        .footer-menu{
          margin-right:300px;

        }



      }
      @media screen and (max-width: 480px){
       .footer-widget{
         display:inline;
       }
       .ankita ul li a{
       display:block;
      }
       .ankita{
        display:inline;
        // text-align:center;
        // justify-content:center;
       }
      //  .ankita ul li a{
      //   display:column;
      //  }

        .footer-menu ul{
            display:flex;
            width: 20%;
            // justify-content:center;
        }

        .footer-div  {
          margin-left: 0;
          text-align: center;
          // width: 100%;
        }

        .logos{
          display: flex;
          justify-content:center;
          gap: 20px;
          margin-left:0px;
          align-items:center;
        }
        .logoheight{
          height:50%;
       }
      .logo{
        display:block;
      }
      .logo img{
        margin-bottom:10px;
        margin-left:150px;
      }

      .title{
        margin-left:50px;
      }
}}
@media screen and (max-width: 768px) {
    .footer-widget {
      text-align: center;
    }
    .ankita {
      flex-wrap: wrap;
      justify-content: center;
    }
    .footer-widget ul li {
      width: 100%;
      margin-bottom: 10px;
    }
    .footer-div {
      margin-left: 0;
    }
    .footer-menu ul li {
      display: block;
      margin: 0;
    }
    .footer-menu {
      text-align: center;
      margin-top: 20px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .ankita {
      flex-direction: column;
      align-items: center;
    }
    .footer-menu ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  @media only screen and (max-width: 768px) {
    .footer-menu {
      text-align: center;
    }
    .footer-menu ul {
      padding-left: 0;
    }
    .footer-menu ul li {
      display: inline-block;
      margin-right: 10px;
    }
    .copyright-text {
      margin-top: 20px;
    }
  }
  .footer-menu {
    text-align: center;
  }
  
  .footer-menu ul {
    padding: 0;
    list-style: none;
  }
  
  .footer-menu ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  @media (max-width: 768px) {
    .footer-menu ul li {
      margin-right: 10px;
    }
  }
  .ddd{
    color: white;
  }
  
    `}
      </style>
      
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5"></div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={SSSLOGOALL} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      <h6 style={{ color: "#DC143C" }}>
                        <b>
                          {" "}
                          Sri Satya Sai University of Technology & Medical
                          Science
                        </b>
                      </h6>
                      <h6 style={{ color: "white" }}>
                        Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin
                        - 466001 <br />
                        (+91) 07562-292740 | 7562292720 <br />
                        (+91) 7748900027 | 7748900028 <br />
                        (From 10:00 AM to 5:00 PM only)
                      </h6>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-8 col-lg-8 col-md-8 mb-30 ankita"
                style={{ justifyContent: "space-between" }}
              >
                <div className="footer-widget" style={{ marginLeft: "70px" }}>
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Information</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>About University</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Vision & Mission</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Blog</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Infrastructure</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Academic Calendar</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Virtual Tour</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Press & Media</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Quick Links</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>AICTE </a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Pay Fees</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Notifications</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Approvals</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Home Page</a>
                    </li>

                    <li>
                      <a style={{ color: "white" }}>Announcements</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Others</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>NIRF</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Digi Locker</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Career</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Counselling</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>NPTEL</a>
                    </li>

                    <li>
                      <a style={{ color: "white" }}>NAAC</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Resources</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>Monthly Magazine</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Brochure</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}> Study Material</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-6 text-center text-lg-left">
                <div className="footer-menu">
                  <ul>
                    <Link to="/">
                      <li>
                        <a style={{ color: "white" }}>Home</a>
                      </li>
                    </Link>
                    <li>
                      <a style={{ color: "white" }}>Security</a>
                    </li>
                    <Link to="/contactUs">
                      <li>
                        <a style={{ color: "white" }}>Contact us</a>
                      </li>
                    </Link>
                    <Link to="/terms & conditions">
                      <li>
                        <a style={{ color: "white" }}>Terms & Conditions</a>
                      </li>
                    </Link>
                    <Link to="/privacy-policy">
                      <li>
                        <a style={{ color: "white" }}>Privacy-Policy</a>
                      </li>
                    </Link>
                    <Link to="/Refund & Cancellation">
                      <li>
                        <a style={{ color: "white" }}>Refund & Cancellation</a>
                      </li>
                    </Link>
                    <li>
                      <a style={{ color: "white" }}>Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-11 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p style={{ color: "white" }}>
                    ©2024, SSSUTMS. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footerpage;
