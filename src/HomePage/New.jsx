// // // import React, { useState, useEffect } from 'react';
// // // import Newly from './Newly';

import { ArrowUpLeftFromCircle } from "lucide-react";

// // // const New = ({ direction = 'left' }) => {
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const newSection = document.getElementById('new');
// // //       if (newSection) {
// // //         const top = newSection.getBoundingClientRect().top;
// // //         const windowHeight = window.innerHeight;
// // //         if (top < windowHeight * 0.75) {
// // //           setIsVisible(true);
// // //           window.removeEventListener('scroll', handleScroll);
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   const getSlideInAnimation = (direction) => {
// // //     switch (direction) {
// // //       case 'left':
// // //         return `
// // //           @keyframes slideInLeft {
// // //             0% {
// // //               transform: translateX(-100%);
// // //               opacity: 0;
// // //             }
// // //             100% {
// // //               transform: translateX(0);
// // //               opacity: 1;
// // //             }
// // //           }
// // //         `;
// // //       case 'right':
// // //         return `
// // //           @keyframes slideInRight {
// // //             0% {
// // //               transform: translateX(100%);
// // //               opacity: 0;
// // //             }
// // //             100% {
// // //               transform: translateX(0);
// // //               opacity: 1;
// // //             }
// // //           }
// // //         `;
// // //       default:
// // //         return '';
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         p {
// // //           line-height: 178%;
// // //           letter-spacing: 0.0028em;
// // //           font-size: 18px; /* default font size */
// // //         }
        
// // //         strong {
// // //           font-weight: bold;
// // //         }
        
// // //         .flex-container {
// // //           max-width: 1240px;
// // //           margin: 100px auto; /* adjust margin for desktop */
// // //           display: flex;
// // //           flex-direction: row;
// // //           justify-content: center;
// // //           align-items: center;
// // //         }
        
// // //         .col {
// // //           flex: 1;
// // //           padding: 0 20px; /* add space between columns */
// // //         }
        
// // //         .col-image {
// // //           position: relative;
// // //           width: 100%; /* take full width */
// // //           display: flex;
// // //           justify-content: center;
// // //           margin-top: 50px; /* add some top margin */
// // //         }
        
// // //         .image {
// // //           background-image: url(https://murdoch-website-002.azurewebsites.net/sf-images/default-source/signpost-imagery/open-day-event-880x880.jpg);
// // //           width: 460px;
// // //           height: 460px;
// // //           border-radius: 50%;
// // //           background-size: cover;
// // //           background-position: center center;
// // //         }
        
// // //         @media screen and (max-width: 768px) {
// // //           .flex-container {
// // //             flex-direction: column; /* change to column layout for mobile */
// // //             align-items: center;
// // //           }
          
// // //           .col {
// // //             padding: 20px 0; /* space on top and bottom */
// // //             text-align: center;
// // //           }
          
// // //           .col-image {
// // //             margin-top: 0; /* remove top margin */
// // //           }
// // //         }

// // //         ${getSlideInAnimation(direction)}

// // //         .animate-on-scroll {
// // //           opacity: 0;
// // //           animation: ${isVisible ? (direction === 'left' ? 'slideInLeft 1s ease-out forwards' : 'slideInRight 1s ease-out forwards') : 'none'};
// // //         }
// // //       `}</style>
      
// // //       <section id="new" className="animate-on-scroll">
// // //         <div className="flex-container">
// // //           <div className="col">
// // //             <h2>Campus Life</h2>
// // //             <p>
// // //               Wondering what it’s like to be part of the SSSUTMS community and what
// // //               university is like? Let our students take you on a guided tour or
// // //               check out our facilities.
// // //             </p>
// // //           </div>
// // //           <div className="col col-image">
// // //             <div className="image" />
// // //           </div>
// // //         </div> 
// // //       </section>
// // //       <Newly/>
// // //     </>
// // //   );
// // // };

// // // export default New;


// import React from 'react';
// import maingate from '../images/maingate.jpg'

// const New = () => {
//   return (
//    <>
//    <style>
//     {

//       `
//       /*Start Style Global */


// .container { width: 1070px; margin: auto; position: relative ;}

// .clearFix {  clear: both}



// .main-color { color: #17bed2}






// /*Start Section Service*/
//  .service {
//               padding: 130px 0 0;
//               overflow: hidden;
//               margin-top: 20px;
//               background-color: #686D76;
//               position: relative; /* Add this */
//             background: linear-gradient(#131313e1, #181818e1),
//         url('${maingate}') no-repeat;
//         // background-color:#AAC8A7;
//               margin-bottom:70px;
//               background-attachment: fixed; /* Ensure the image stays fixed */
//               background-position: center; /* Center the image */
//               background-size: cover; /* Cover the entire section */
//           }

// .service h1 {
//     text-align: center;
//     font-size: 40px;
//     margin: 0
// }

// .service p.main-ser {
//     text-align: center;
//     line-height: 1.8;
//     font-size: 20px;
//     margin: 25px 0 40px;
// }

// .service .service-box {
//     float: left;
//     width: 32.33333%;
//     margin-right: 1%;
//     margin-top:7px;
//     margin-bottom:30px;
//     padding: 20px;
//     background-color: #dcdada;
//     border: 1px solid #dcdada;
//     border-radius: 10px;
// }

// .service .service-box .fa {
//     color: #17bed2;
//     margin-bottom: 15px;
// }

// .service .service-box h3 {
//     margin: 0;
//     font-size: 20px
// }

// .service .service-box p {
//     line-height: 1.5;
//     text-align: justify
// }
// /*End Section Service*/







// `
//     }
//    </style>
  
//    <section className="service">
//     <div className="container" style={{marginTop:'-70px'}}>
   
   
//       <div className="service-box">
//         <i className="fa fa-flask fa-3x" aria-hidden="true" />
//         <h3>Career and Life Skill Management</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-mobile fa-3x" aria-hidden="true" />
//         <h3>Highly Qualified Academic Faculty with Research Acumen</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-certificate fa-3x" aria-hidden="true" />
//         <h3>Sophesticated Instrumentation Faculty</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-book fa-3x" aria-hidden="true" />
//         <h3>Industry Ready Cutting Edge Curriculum</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-tachometer fa-3x" aria-hidden="true" />
//         <h3>Career Opportunities in Multiple Domains</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-free-code-camp fa-3x" aria-hidden="true" />
//         <h3>Experiential Learning</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-mobile fa-3x" aria-hidden="true" />
//         <h3>Product Based Learning Solution to Real-World Problems</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//       <div className="service-box">
//         <i className="fa fa-flask fa-3x" aria-hidden="true" />
//         <h3>Infrastructure </h3>
//         <p>
//           A pristine Green Campus
//         </p>
//       </div>
//       <div className="service-box">
//         <i className="fa fa-book fa-3x" aria-hidden="true" />
//         <h3>Hostel Motherly Care</h3>
//         {/* <p>
//           Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
//         </p> */}
//       </div>
//     </div>
//   </section></>
//   )
// }

// export default New



import React from 'react';
import college from '../images/college.png';
import opportunity from '../images/opportunity.png';
import faculty from '../images/faculty.png';
import cv from '../images/cv.png';
import leadership from '../images/leadership.png';
import study from '../images/study.png';
import graduate from '../images/graduate.png';
import research from '../images/research.png';

const New = () => {
  return (
    <>
      <style>
        {`
          .custom-image {
            height: 60px;
            width: 60px;
            margin-left: 100px;
            margin-bottom: 10px;
            border: 2px solid white; /* Add a white border */
            border-radius: 50%; /* Optional: to make the images circular */
            background-color: white; /* Add a white background */
            padding: 10px; /* Add some padding */
          }

          #photo {
            background-color: #023047;
            // background-color:#b80000;
            padding: 80px 0 80px;
            text-align: center;
            margin-bottom: 50px;
          }

          #photo h1 {
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            text-transform: uppercase;
          }

          #photo p {
            color: #F1F0E8;
          }

          #photo .fa {
            color: #16a085;
          }

          #photo .fa:hover {
            color: #000000;
          }
        `}
      </style>
      <section id="photo">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="custom-image" src={college} alt="Infrastructure"></img>
              <h1 style={{color:'#AAC8A7'}}>Infrastructure</h1>
              <p>A Pristine Green Campus.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={opportunity} alt="Opportunities"></img>
             <h1 style={{color:'#AAC8A7'}}>Opportunities</h1>
              <p>Career Opportunities In Multiple Domains.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={faculty} alt="Faculty"></img>
             <h1 style={{color:'#AAC8A7'}}>Faculty</h1>
              <p>Sophisticated Instrumentation Faculty.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={cv} alt="Curriculum"></img>
             <h1 style={{color:'#AAC8A7'}}>Curriculum</h1>
              <p>Industry Ready Cutting Edge Curriculum.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img className="custom-image" src={leadership} alt="Leadership"></img>
             <h1 style={{color:'#AAC8A7'}}>Leadership</h1>
              <p>Corporate Leadership Interaction Sessions & Industrial Visits.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={study} alt="Experiential Learning"></img>
             <h1 style={{color:'#AAC8A7'}}>Experiential Learning</h1>
              <p>Hands-on learning through real-world projects.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={graduate} alt="Alumni Network"></img>
             <h1 style={{color:'#AAC8A7'}}>Alumni Network</h1>
              <p>Strong connections with successful alumni.</p>
            </div>
            <div className="col-md-3">
              <img className="custom-image" src={research} alt="Research"></img>
             <h1 style={{color:'#AAC8A7'}}>Research</h1>
              <p>Innovative research opportunities for students.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default New;
