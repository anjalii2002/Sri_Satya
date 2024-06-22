// import React from 'react'
// import Class from '../images/classroom.png'
// import Boys from '../images/DSC_0092.png';
// import Lib from '../images/library.png';
// import Spo from '../images/Event4.png';
// import Yog from '../images/Event7.png';
// import Com from '../images/computerLab.png';
// function Facilities() {
//   return (
//    <>
//    <>
//    <style>
//     {`
//     /* Font */
//     @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
//       .custom-facilities .main {
//       max-width: 1200px;
//       margin: 0 auto;
//     }

//     .custom-facilities img {
//       height: auto;
//       max-width: 100%;
//       vertical-align: middle;
//     }

//     .custom-facilities .btn:hover {
//       background-color: rgba(255, 255, 255, 0.12);
//     }

//     .custom-facilities .cards {
//       display: flex;
//       flex-wrap: wrap;
//       list-style: none;
//       margin: 0;
//       padding: 0;
//     }

//     .custom-facilities .cards_item {
//       display: flex;
//       padding: 1rem;
//     }

//     @media (min-width: 40rem) {
//       .custom-facilities .cards_item {
//         width: 50%;
//       }
//     }

//     @media (min-width: 56rem) {
//       .custom-facilities .cards_item {
//         width: 33.3333%;
//       }
//     }

//     .custom-facilities .card {
//       background-color: white;
//       border-radius: 0.25rem;
//       box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
//       display: flex;
//       flex-direction: column;
//       overflow: hidden;
//     }

//     .custom-facilities .card_content {
//       padding: 1rem;
//       background: linear-gradient(to bottom right, #3d5a80 40%, #0077b6 100%);
//     }

//     .custom-facilities .card_title {
//       color: #ffffff;
//       font-size: 1.1rem;
//       font-weight: 700;
//       letter-spacing: 1px;
//       text-transform: capitalize;
//       margin: 0px;
//     }
//     .custom-facilities main {
//       text-align: center; 
//     }

//     .custom-facilities h1 {
//       margin-bottom: 50px;
//       font-size: 30px;
//       margin-Left:600px;
//     }

//     /* Media query for responsive design */
//     @media screen and (max-width: 600px) {
//       .custom-facilities h1 {
//         font-size: 24px;
//         margin-Left:123px /* Adjust the font size for smaller screens */
//       }
//     }
//     .custom-facilities .card_text {
//       color: #ffffff;
//       font-size: 0.875rem;
//       line-height: 1.5;
//       margin-bottom: 1.25rem;    
//       font-weight: 400;
//     }
//     .custom-facilities .made_by {
//       font-weight: 400;
//       font-size: 13px;
//       margin-top: 35px;
//       text-align: center;
//     }
//     `}
//    </style>

//    <div className="custom-facilities main">
//     <h1 style={{marginBottom:"50px",fontSize:'30px'}}><b>Faci<em>lities</em></b></h1>
//     <ul className="cards">
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Class}/>
//           </div>
//           <div className="card_content">
//             <h2 className="card_title">Class Rooms</h2>
//             <p className="card_text">
//             The general classroom objective is for the class to learn something new. 
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Boys} />
//           </div>
//           <div className="card_content">
//             <h2 className="card_title"> Hostel</h2>
//             <p className="card_text">
//             A hostel is a place where students of a school or college can experience economic, healthy, and safe accommodation. Many students around the world live in hostels.
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Lib} />
//           </div>
//           <div className="card_content">
//             <h2 className="card_title">Library</h2>
//             <p className="card_text">
//             Libraries help in the overall development of a person. They provide us with educational material and help enhance our knowledge.
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Spo} />
//           </div>
//           <div className="card_content">
//             <h2 className="card_title">Sports</h2>
//             <p className="card_text">
//             Sports and Games are essential components of human resource development, helping to promote good health.
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Yog} />
//           </div>
//           <div className="card_content">
//             <h2 className="card_title">Yoga</h2>
//             <p className="card_text">
//             The department provides yoga therapy services to University staff and enthusiastic students.
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//       <li className="cards_item">
//         <div className="card">
//           <div className="card_image">
//             <img src={Com} />
//           </div>
//           <div className="card_content">
//             <h2 className="card_title">Computer Lab</h2>
//             <p className="card_text">
//             Our university provides computer lab rooms for the students. We will soon build some new ones, and possibly re-build some of the old ones, and we are looking for new solutions.
//             </p>
//             <button className="btn card_btn">Read More</button>
//           </div>
//         </div>
//       </li>
//     </ul>
//   </div>

// </>

//    </>
//   )
// }

// export default Facilities


import React, { useState, useEffect } from 'react';

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const facilitiesSection = document.getElementById('facilities');
      if (facilitiesSection) {
        const top = facilitiesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .facilities {
          width: 80%;
          margin: auto;
          padding-top: -100px;
          opacity: 0;
          transform: translateX(10%);
          transition: opacity 1s ease, transform 1s ease;
        }

        .facilities.visible {
          opacity: 1;
          transform: translateX(0%);
        }

        .facilities h1 {
          text-align: center;
        }

        .facilities-col {
          flex-basis: 100%;
          margin-bottom: 30px;
          text-align: center;
        }

        .facilities-col img {
          width: 100%;
          border-radius: 10px;
          display: block;
          margin: 0 auto;
        }

        .facilities-col h3 {
          margin-top: 16px;
          margin-bottom: 15px;
          text-align: center;
        }

        .testimonial {
          width: 80%;
          margin: auto;
          padding-top: 100px;
          text-align: center;
        }

        .testimonial-col {
          flex-basis: 100%;
          margin-bottom: 5%;
          background-color: #fff3f3;
          padding: 25px;
          cursor: pointer;
        }

        .testimonial-col img {
          height: 40px;
          border-radius: 50%;
        }

        .testimonial-col h3 {
          margin-top: 15px;
        }

        .cta {
          margin: 100px auto;
          width: 80%;
          background-image: url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
          background-position: center;
          background-size: cover;
          border-radius: 10px;
          text-align: center;
          padding: 100px 0;
        }

        .cta:hover {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
        }

        .cta h1 {
          color: #fff;
          margin-bottom: 40px;
          padding: 0;
        }

        @media (min-width: 768px) {
          .row {
            display: flex;
            justify-content: space-between;
          }

          .facilities-col {
            flex-basis: 30%;
          }

          .testimonial-col {
            flex-basis: 48%;
          }
        }

        @media (max-width: 767px) {
          .facilities-col h3 {
            text-align: center;
          }
        }
      `}</style>

      <section id="facilities" className={`facilities ${isVisible ? 'visible' : ''}`}>
        <h1>Our Facilities</h1><br/><br/>
        <div className="row">
          <div className="facilities-col">
            <img style={{height:"80%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmRwCsDVE3WcswKKeB2mcjmU7ihw15HXI2sDHT18daQ&s" alt="Library" />
            <h3>Class Library</h3>
          </div>
          <div className="facilities-col" >
            <img style={{height:"80%"}} src="https://cdn.pixabay.com/photo/2017/06/14/12/26/campus-2402041_960_720.jpg" alt="Playground" />
            <h3>Playground</h3>
          </div>
          <div className="facilities-col">
            <img style={{height:"80%"}} src="https://i.postimg.cc/FHmYLXwX/cafeteria.png" alt="Cafeteria" />
            <h3>Tasty and Healthy Food</h3>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h1>What Our Students Say</h1>
        
        <div className="row">
          <div className="testimonial-col">
         <div>
              <p>
              I think everything is organised in a way that motivates and supports students to become the best version of themselves. The course content is engaging, the teaching standards are outstanding and every module has allowed me to develop useful skills.
              </p>
              <h3>Akash Sharma</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
          </div>
          <div className="testimonial-col">
            
            <div>
              <p>
              I would say that I’m using my course to find the career that would best suit my skills. As I already enjoy my course my hope is that it will lead me to a career that can allow me to apply everything that I have learnt from my course and hopefully enjoy it just as much.
              </p>
              <h3>Sumit kumar singh</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;