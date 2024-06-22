// import React, { useEffect, useRef } from 'react';
// import library from '../../images/libr.webp';
// import Nav from '../../HomePage/Nav';
// import Footerpage from '../../HomePage/Footerpage';

// const VisionMission = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = sectionRef.current;
//       if (element && window.scrollY > element.offsetTop - window.innerHeight / 2) {
//         element.classList.add('fadeInRight-animation'); // Adding animation class when scrolled to the section
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <style>
//         {`
//       .image-2-icon {
//         position: absolute;
//         top: 86px;
//         left: 748px;
//         width: 3017px;
//         height: 1583px;
//         object-fit: cover;
//       }
//       .log-in {
//         width: 100%;
//         height: 2095px;
//         position: relative;
//         background-color: #fff;
//         overflow: hidden;
//         letter-spacing: normal;
//       }
      

//       @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
//     html {
//         scroll-behavior: smooth;
//         }
    
//     // body{
//     // margin:0;
//     // font-family: 'Source Sans Pro', sans-serif;
//     // }
    
//     .title{
//     font-size:2em;
//     color:#dd2d4a;
//     display:block;
//     }
    
//     .sub-title{
//     font-size:0.8em;
//     color:gray;
//     display:block;
//     }
    
//     .btn1{
//     padding:10px 20px;
//     background:transparent;
//     border:1px solid #8c0c3c;
//     color:#8c0c3c;
//     border-radius:3px;
//     outline:none;
//     transition:0.5s;
//     }
    
//     .btn1:hover{
//     background:#8c0c3c;
//     color:#fff;
//     }
    
//     .btn2{
//     padding:10px 20px;
//     border-radius:3px;
//     background:#1e1e1e;
//     border:1px solid #1e1e1e;
//     color:#fff;
//     outline:none;
//     transition:0.5s;
//     }
    
//     .btn2:hover{
//     background:transparent;
//     color:#1e1e1e;
//     }
    
//     .title:before{
//     content:" ";
//     font-family:"FontAwesome";
//     font-size:30px;
//     }
    
//     a{
//     text-decoration:none;
//     }
    
//     .section2,.section3{
//     width:90%;
//     margin:5% 0%;
//     margin-left:auto;
//     margin-right:auto;
//     }
    
//     .section2 table,.section3 table{
//     width:100%;
//     }
    
//     .section2 table td,.section3 table td{
//     width:50%;
//     }
    
//     .section2 table td img,.section3 table td img{
//     width:80%;
//     height:70%;
//     margin-left:auto;
//     margin-right:auto;
//     box-shadow:0px 6px 16px -6px rgba(1,1,1,0.5);
//     }
    
//     .section3 table td img{
//     float:right;
//     }
    
    
//     @media (max-width:720px){
//     .section2 table td, .section3 table td{
//     width:100%;
//     display:block;
//     }
//     .section3 table td img{
//     float:none;
//     margin-top:4%;
//     }
//     .section2 table td img,.section3 table td img{
//     width:100%;
//     height:60%;
//     }
//     }

// @media (max-width:300px){
//   .section2,.section3{
//     font-size:12px;
//   }
//   .section3 table td img{
//     float:none;
//     margin-top:8%;
//     }
//   .btn1,.btn2{
//     padding:5px 10px;
//   }
// }
// .footer{
//   position:fixed;
//   box-shadow:0px 6px 16px -6px rgba(1,1,1,0.5);
//   background:#1e1e1e;
//   padding:10px 20px;
//   color:gray;
//   font-size:13px;
//   position:fixed;
//   bottom:10px;
//   right:0;
// }




// /* Define fadeInUp animation */
// @keyframes fadeInUp {
//   0% {
//     opacity: 0;
//     transform: translateY(100%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0%);
//   }
// }

// .fadeInUp-animation {
//   animation: fadeInUp 1.5s ease forwards; /* Apply fadeInUp animation */
// }



// * Define fadeInLeft animation */
// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     transform: translateX(-100px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

// /* Define fadeInRight animation */
// @keyframes fadeInRight {
//   from {
//     opacity: 0;
//     transform: translateX(100px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

// .fadeInLeft-animation {
//   animation: fadeInLeft 1s ease forwards;
// }


// .fadeInRight-animation {
//   animation: fadeInRight 1s ease forwards;
// }
  
//       `}
//       </style>


//       <Nav />
//       <div style={{ position: 'relative', height: '300px', width: '100%' }}>
//         <img src={library} style={{ width: '100%', height: '300px', filter: 'brightness(50%)' }} alt="Library" />
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
//           pointerEvents: 'none', // This allows clicks to go through the overlay to the button
//         }}>
//           <div
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               padding: '10px 20px',
//               fontSize: '20px',
//               backgroundColor: '#780000',
//               color: 'white',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontWeight: 'bold'
//             }}
//           >
//             Vision & Mission
//           </div>
//         </div>
//       </div>

//       <section ref={sectionRef} className="section2" id="AboutUs">


//         <table>
//           <tbody>
//             <tr>
//               <td>
//                 <div className="fadeInLeft-animation">
//                   <img
//                     src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
//                     alt="AboutUs"
//                   /></div>
//               </td>
//               <td>
//                 <div className="fadeInRight-animation">
//                   <span className="title">Our Vission</span>
//                   {/* <span className="sub-title">
//                     Lorem ipsum dolor sit amet, consectetur adi
//                   </span> */}
//                   <p>
//                     To emerge as World’s one of the finest Universities in the field of Higher, Technical  and Medical Education to develop Professionals who are Technically competent, ethically sensitive and  environment friendly, for the betterment of society.
//                   </p>
//                   {/* <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   </p> */}
//                   {/* <a href="#OurMission" className="btn1">
//                     Our Misssion
//                   </a>{" "} */}
//                   {/* <a href="" className="btn2">
//                     Know More
//                   </a> */}
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//       <section ref={sectionRef} className="section3" id="OurMission">
//         <table>
//           <tbody>
//             <tr>
//               <td>
//                 <div className="fadeInRight-animation">
//                   <span className="title">Our Mission</span>
//                   {/* <span className="sub-title">
//                     Lorem ipsum dolor sit amet, consectetur adi
//                   </span> */}
//                   <p>
//                     Accomplish stimulating learning environment for students through quality teaching, research and outreach activity by providing state of the art facilities, industry exposure and guidance of dedicated faculty.
//                   </p>
//                   {/* <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   </p> */}
//                   {/* <a href="" className="btn2">
//                     Know More
//                   </a> */}
//                 </div>
//               </td>
//               <td>
//                 <img
//                   src="https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
//                   alt="AboutUs"
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
// <Footerpage/>

//     </>
//   );
// };

// export default VisionMission;

import React from 'react'


const VisionMission = () => {
  return (
    <>
    <div className="wrapper">
    <canvas id="stars" />








    
    <canvas id="yahia" />
    <div className="container">
      <div className="template color-yellow" data-template="home">
        <main>
          <h1>
            <span>
              A<mark>21 years</mark> old
            </span>
            <span> interaction designer</span>
          </h1>
          <div className="p">
            <span>hello@yahiarefaiea.com</span>
            <span>(+963) 96 2295 406</span>
          </div>
          <div className="links">
            <a
              className="link color-yellow"
              href="https://beta.yahiarefaiea.com/#bucket"
              title="View my bucket list"
              target="_blank"
            >
              View my bucket list
            </a>
            <a
              className="link color-green"
              href="https://beta.yahiarefaiea.com/#secret"
              title="Tell me a secret"
              target="_blank"
            >
              Tell me a secret
            </a>
            <a
              className="link color-red"
              href="https://beta.yahiarefaiea.com/Yahia_Refaiea_Resume.pdf"
              title="Download my résumé"
              target="_blank"
            >
              Download my résumé
            </a>
          </div>
        </main>
        <footer>
          <div className="links">
            <a
              className="link small alt"
              href="http://facebook.com/YahiaRefaiea"
              title="Facebook (@YahiaRefaiea)"
              target="_blank"
            >
              Facebook
            </a>
            <a
              className="link small alt"
              href="http://twitter.com/YahiaRefaiea"
              title="Twitter (@YahiaRefaiea)"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="link small alt"
              href="http://codepen.io/YahiaRefaiea"
              title="Codepen (@YahiaRefaiea)"
              target="_blank"
            >
              Codepen
            </a>
            <a
              className="link small alt"
              href="http://github.com/YahiaRefaiea"
              title="GitHub (@YahiaRefaiea)"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
      <div className="loading" id="identity" title="Yahia Refaiea identity">
        <div />
        <div />
        <div />
        <div />
      </div>
      <a
        className="loading"
        id="signature"
        href="https://beta.yahiarefaiea.com/"
        title="Go to home"
        target="_blank"
      />
    </div>
  </div>
</>  
  )
}

export default VisionMission