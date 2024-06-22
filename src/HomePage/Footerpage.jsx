

import React from "react";
import SSSLOGOALL from "./Photo/bottom-logo-2023.png";
import { color } from "@amcharts/amcharts5";
import { Link } from "react-router-dom";
import AICTE from '../images/AICTE.png'
import ugc from '../images/ugc.png'
import nptel from '../images/NPTEL.png'
import mpcst from '../images/MPCST.png'
import sssutms from "../images/sssutms.jpg"
function Footerpage() {
  return (
    <>
      <style>
        {`


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//   }
body{
  overflow-x: hidden;
  margin: 0;
  padding: 0;
 box-sizing: border-box;
}

.h4class{
 color: #C80036 ;
 margin-top:30px;
 text-transform:uppercase;
 font-size:15px;
 font-family: "Roboto Flex", sans-serif;
        }


.footermain{
display:flex;
width:400px
}


.logoimage{
height:80px;
width:80px;

}

  .footer-text{
  margin-left:-60px;
  width:420px;
}

.footerlogo{
display:flex;
margin-left:-70px;
justify-content:space-between

}
.footerimage{
height:68px;
width:68px;
}


.footerimage1{
height:85px;
width:85px;
margin-top:-6px

}

.footerimage2{
height:100px;
width:130px;
margin-top:-16px;
margin-left:-30px
}

.footerp{
color:white;
}
    .footer-section {
      background: #151414;
      position: relative;
    }
   
.footer-widget li{
list-style:none;
}
    .footer-widget-cook li{
    margin-bottom:10px;
     list-style:none;
    }
 .footer-widget-tee li{
    margin-bottom:10px;
     list-style:none;
    }

     .footer-widget-you li{
    margin-bottom:10px;
     list-style:none;
    }
      
    .footer-content {
      position: relative;
      z-index: 2;
    }
   
    .footer-logo {
      margin-bottom: 30px;
    }
    .footer-logo img {
        max-width: 380px;
    }
    .footer-text p {
      margin-bottom: 14px;
   
          color: #7e7e7e;
      line-height: 28px;
    }

    .footer-menu {
    margin-left:250px;
       
    }
 
    .footer-widget-heading h3 {
      color: #fff;
      font-size: 20px;
      margin-left:-10px;
      font-weight: 600;
      margin-bottom: 40px;
      position: relative;
      margin-top:30px;
       list-style:none;
   
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
  list-style:none
      width: 50%;
       margin-bottom: 8px;

    }
  
    .footer-widget ul li a {
      color: #878787;
      list-style:none
      text-transform: capitalize;
      margin-left:-10px
    }
   
   
  
    .footer-menu li {
      display: inline-block;
      
     
      
    }
 
    





      .container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 20px;
      }
     
      .copyright-text {
         text-align: center;
        margin-top: 15px;
      
      }
    
      
   


      .footer-section {
        background: #151414;
        position: relative;
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
    
        font-family: helvetica;
      }


     

    
      .footer-div{
        margin-left:200px;
      }

    

      .ankita{
        display : flex ;
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
//       .footer-widget ul li {
// list-style:none
//         width: 100%;

//       }
    
      .copyright-area{
        background: #202020;
        padding: 25px 0;
   
      }
      .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
        margin-left:170px;
        margin-top:-20px
      }
      

      .footer-menu li {
        display: inline-block;
        margin-left: 20px;
      }
     
  
    //   .logos{
    //     display: flex;
    //     justify-content:center;
    //     gap: 20px;
    //     margin-left:400px;
    //     align-items:center;
    //     height: 70px;

    //   }
    //  .logoheight{
    //     height:100%;
    //  }
    

      @media screen and (max-width: 768px) {
       

       
        .footer-menu li{
           display:inline;
        
        }
        .footer-menu{
          margin-right:300px;

        }



      }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@media screen and (max-width: 768px) {
.col-xl-4.col-md-4 {
margin-right: 400px; 
}

 
.footer-menu li{
display:inline-block;
   font-size:15px
}






}
@media screen and (max-width: 480px)

{

.dividivi
 {
margin-top:30px;
}
 

  


.containerr{
  margin-left:-290px;

}





.footer-widget-heading1  h3{
  margin-right:0;
  color: #ff9f1c;
  footer-widget-heading
  }



// .footer-menu{
  
//   margin-left:-250px;
//   justify-content:space-between;
// width:200px;
// padding: 0;
// display: flex;
// gap:10px;
// }





  
  
  .footer-menu ul li {
    margin-right: 10px;
    white-space: nowrap;
  }




.footer-section{
height:1320px;

}





.footer-menu {
  margin-left: -125px; 
  width: auto;
  justify-content:space-around;
}



.footer-menu ul {
justify-content:space-between;
width:300px;

 list-style:none;
display: flex;

margin-left:90px

}

.footer-widget-you ul{
  margin-top:-15px
  
}


// .footer-widget ul li {
//   width: 100%;
//   margin-top:-15px
//   }

.footer-widget-heading  {
margin-left:-50px;

}

.footy {
display: flex;
flex-wrap: wrap;
font-size:20px;
justify-content: space-between;
}

.footer-widget {
width: auto;
}


.footer-widget ul {
justify-content:space-between;
width:200px;
padding: 0;
display: flex;



width:300px;
margin-left:-80px;
}

.h4class{
font-size:18px
}

.footermain{
display:flex;

width:330px
}


.logoimage{
height:50px;
width:50px;
margin-left:10px

}

  .footer-text{
  margin-left:8px;
  width:400px;
  margin-top:-40px
}

.footerlogo{
display:flex;
margin-left:10px

}
.footerimage{
height:60px;
width:60px;
margin-left:3px
}

.footerp{
color:white;

}



.footer-widget-cook ul {
justify-content:space-between;
width:300px;
  list-style:none;
padding: 0;
display: flex;
// margin-left:20px;
margin-left:-90px;
margin-top:-15px
}



.footer-widget-tee ul {
justify-content:space-between;
width:325px;
padding: 0;
 list-style:none;
display: flex;
gap:10px;
margin-left:-90px;
margin-top:-15px
}

.footer-widget-you ul{

width:343px;
padding: 0;
display: flex;
gap:10px;
 list-style:none;
margin-left:-90px;
}

.footer-widget ul li {
//  margin-left:15px;
white-space: nowrap;
margin-right:30px;
width:100px;
list-style:none;

}


.copyright-text p{
margin-left:-891px
}


} 











// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  .copyright text{
  margin-left:-200px}
  
  }





  
  @media only screen and (max-width: 768px) {
    .footer-menu {
      text-align: center;
    }
 
    .copyright-text {
      margin-top: 20px;
      margin-left:600px
    }
  }

 
  
  @media (max-width: 768px) {
   
  }
  .ddd{
    color: white;
  }
  
    `}
      </style>
      
      <footer className="footer-section">
        <div className="container">
         
          <div className="footer-content pt-4 pb-4">
            <div className="row">
              <div className="dividivi col-xl-3 col-lg-3 mb-50">
                <div className="footer-widget">
                 
                  <div className="footer-text">
                    <div className="footermain">
                   {/* <img  className='logoimage'src={sssutms}></img> */}
                      <h4 className="h4class" >
                       
                          {" "}
                          Sri Satya Sai University of Technology & Medical
                          Sciences
                     
                      </h4></div>
                      <h6 style={{ color: "white" ,marginTop:'10px'}}>
                        Opp.Oilfed Plant, Bhopal-Indore Road, <br></br>Sehore (M.P), Pin
                        - 466001   </h6>
                      <p style={{marginTop:'3px'}}> (+91) 07562-292740 | 7562292720</p> 
                      <p style={{marginTop:'-10px'}}>  (+91) 7748900027 | 7748900028</p> 
                      <p style={{marginTop:'-10px'}}>    (From 10:00 AM to 5:00 PM only)</p> 
                   
                  
                  </div>

                  <div className="footerlogo">
                  <img className="footerimage" src={mpcst}></img>
<img className="footerimage" src={AICTE}></img>
<img className="footerimage1" src={nptel}></img>
<img className="footerimage2" src={ugc}></img>

                  </div>
                </div>
              </div>

         
                 <div className="col-xl-8 col-lg-8 col-md-8 mb-30 footy" style={{ marginLeft: '80px', display: 'flex', justifyContent: 'space-between' }}>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 style={{ textTransform:'uppercase',
 fontSize:'15px',
 fontFamily: "'Roboto Flex', sans-serif", color:"#C80036"}}>INFORMATION</h3>
                </div>
                <ul className='uni'>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">About </a>
                  </li>
                 
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Blog</a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Amenities</a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Infrastructure</a>
                  </li>
                </ul>
                <ul>
              
                
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Mandatory Disclosures</a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget-cook">
                <div className="footer-widget-heading">
                <h3 style={{ textTransform:'uppercase',
 fontSize:'15px',
 fontFamily: "'Roboto Flex', sans-serif", color:"#C80036"}}>QUICK LINKS</h3>
                </div>
                <ul>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">AICTE feedback </a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Pay Fees</a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#"></a>
                  </li>

                </ul>
                <ul>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Approvals</a>
                  </li>
               

                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Announcements</a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget-tee">
                <div className="footer-widget-heading">
                <h3 style={{ textTransform:'uppercase',
 fontSize:'15px',
 fontFamily: "'Roboto Flex', sans-serif", color:"#C80036"}}>USEFUL LINKS</h3>
                </div>
                <ul>
                
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Digi Locker</a>
                  </li>
                    <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">NAAC</a>
                  </li>
                 
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">NPTEL</a>
                  </li>

                </ul><ul>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">NCC</a>
                  </li>


                </ul>
              </div>
              {/* <div className="footer-widget-you">
                <div className="footer-widget-heading">
                <h3 style={{ textTransform:'uppercase',
 fontSize:'15px',
 fontFamily: "'Roboto Flex', sans-serif", color:"#C80036"}}>RESOURCES</h3>
                </div>
                <ul>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Monthly Magazine</a>
                  </li>

                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#"> E-Content</a>
                  </li> <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Brochure</a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#"> MOUs</a>
                  </li>

                </ul>
              </div> */}
  <div className="footer-widget-you">
                <div className="footer-widget-heading">
                <h3 style={{ textTransform:'uppercase',
 fontSize:'15px',
 fontFamily: "'Roboto Flex', sans-serif", color:"#C80036"}}>LOGINS</h3>
                </div>
                <ul>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="/erp/studentlogin">Student Login</a>
                  </li>

                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="/adminlogin"> Admin Login</a>
                  </li> <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">Verify Marksheet</a>
                  </li>
                  <li>
                    <a style={{ fontFamily: "Montserrate, Verdana", color: '#edede9' }} href="#">  Student  Grievance</a>
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
            
                <div className="footer-menu">
                  <ul>
                   
                      <li>
                        <a  href='/'style={{ color: "white",}}>Home</a>
                      </li>
                   
                  
        
                      <li>
                        <a href='/terms & conditions' style={{ color: "white" }}>Terms & Conditions</a>
                      </li>
                 
                
                      <li>
                        <a  href='/privacy-policy'style={{ color: "white" }}>Privacy-Policy</a>
                      </li>
                  
                    <li>
                      <a style={{ color: "white" }}>Site Map</a>
                    </li>
                  
                  
                
                      <li>
                        <a  href='/Refund & Cancellation'style={{ color: "white" }}>Refund & Cancellation</a>
                      </li>
              
                


                  </ul>
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




