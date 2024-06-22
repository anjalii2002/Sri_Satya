import React from "react";
import Nav from "../../HomePage/Nav";
import Footerpage from "../../HomePage/Footerpage";
import logo from "../../images/sssutms.jpg"
import Naac from "../../images/NavIMG/Resarch/ncc.png"
import MOU from "../../images/NavIMG/Resarch/MoU.pdf"

const CollaborationMou = () => {
    return (
        <>
            <style>
                {`  .privacy-page-top {
      color: #023047;;
      font-family: 'Cabin', sans-serif;
      font-size: 1.5em;
      margin-top: 2%;
      font-weight: bold;
      margin-left: 4%;
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
      margin-bottom: 2%;
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
  


 
  
  @media (max-width: 481px) {
  
      .privacy-page-body, .privacy-page-top, .privacy-page-title, .privacy-content {
          width: 90%;
          margin-right: 0;
          text-align: left;
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
               MEMORANDUM OF UNDERSTANDING (MoU)
            </div>
            <hr style={{ color: '#f3722c', width: '1400px', }}></hr>
            <div className="privacy-page-body">
                <div className="privacy-content">
                   
                    {/* <div
                        className="privacy-paragraph-heading"
                        style={{ fontFamily: "inherit",color:'#780000'}}
                    >
                        Memorandum of Understanding (MoU)
                    </div> */}
                    <div className="privacy-paragraph-body privacy-paragraph-text">
                        <b style={{ color: "black", textDecoration: "underline" }}>
                            {" "}

                        </b>{" "}
                        <br />
                        <img src={logo} /> <br />
                        <img src={Naac} /> <br />

                        <a href={MOU}
                            target="_blank"
                        >
                            <b style={{ color: "black" }}> *  SSSUTMS MOU  with NCC</b>
                        </a>



                    </div>
                </div>


            </div>
            <Footerpage />
        </>
    );
};

export default CollaborationMou;
