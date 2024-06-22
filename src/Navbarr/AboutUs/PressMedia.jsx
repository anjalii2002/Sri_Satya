import React from "react";
import Nav from "../../HomePage/Nav";
import Footerpage from "../../HomePage/Footerpage";
import p from "../../images/NavIMG/AboutUs/p.jpg"
import p1 from "../../images/NavIMG/AboutUs/p1.jpg"
import p2 from "../../images/NavIMG/AboutUs/p2.jpg"
import p3 from "../../images/NavIMG/AboutUs/p3.jpg"
import p4 from "../../images/NavIMG/AboutUs/p4.jpg"
import p5 from "../../images/NavIMG/AboutUs/p5.jpg"
import p7 from "../../images/NavIMG/AboutUs/p7.jpg"

const PressMedia = () => {
    return (
        <>
            <style>
                {`.privacy-page-top {
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
      font-family: 'Abhaya Libre', sans-serif;
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
            <div className="privacy-page-top">
                SRI SATYA SAI UNIVERSITY OF TECHNOLOGY & MEDICAL SCIENCES
            </div>
            <div className="privacy-page-body">
                <div className="privacy-content">
                    <div className="privacy-page-title">Press & Media </div>

                    <div className="privacy-paragraph-body privacy-paragraph-text">
                        <br />
                        <div style={{ display: "flex" }}>
                            <img src={p} style={{ width: "20%" }} />
                            <img src={p1} style={{ width: "20%", marginLeft: "50px" }} />
                            <img src={p2} style={{ width: "20%", marginLeft: "50px" }} />
                        </div> <br />
                        <div style={{ display: "flex" }}>
                            <img src={p3} style={{ width: "20%" }} />
                            <img src={p4} style={{ width: "20%", marginLeft: "50px" }} />
                            <img src={p5} style={{ width: "20%", marginLeft: "50px" }} />
                        </div> <br /> <br />

                        <img src={p7} style={{ width: "20%" }} />



                    </div>
                </div>


            </div>
            <Footerpage />
        </>
    );
};

export default PressMedia;
