import React from 'react';
import img from '../../../images/Commite_Cell/img2.jpg'
import edc2 from '../../../images/Commite_Cell/edc2.webp'
import anti from '../../../images/Commite_Cell/anti.jpg'
import Nav from '../../../HomePage/Nav'
import proctorial from '../../../images/Commite_Cell/proctorial.jpg'
import higher2 from '../../../images/Commite_Cell/higher2.jpg'
import complaint from '../../../images/Commite_Cell/complaint2.webp'
import redressal from '../../../images/Commite_Cell/redressal.jpg'
import scholarship from '../../../images/Commite_Cell/scholarship.jpg'
import incubation from '../../../images/Commite_Cell/incubation.jpg'
import { Link } from 'react-router-dom';
import Footerpage from '../../../HomePage/Footerpage';

function Comm_cell() {
  return (
    <>
      <style>
        {
          `
          @import url("https://fonts.googleapis.com/css?family=Montserrat");

          // body, html {
          //   margin: 0;
          //   padding: 0;
          //   font-size: 14px;
          //   font-family: 'Montserrat', monospace;
          //   background-color: #fafafa;
          // }


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
    color:rgb(53,56,88);
    font-style:normal;
   }

   .title h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 49px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #780000;
    font-style: normal;
}
          
          .section {
            padding: 2rem;
          }
          
          @media screen and (min-width: 768px) {
            .section {
              padding: 4rem;
            }
          }
          
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 35px;
            grid-row-gap: 25px;
            grid-auto-rows: 350px;
            grid-auto-flow: row dense;
          }
          
          .card {
            border-radius: 10px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            box-sizing: border-box;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
            transition: box-shadow .3s ease-out, transform .3s ease-out;
            transition-delay: .1s;
            overflow: hidden; /* Ensure content doesn't overflow the card */
          }
          
          .card:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3); /* Initial overlay color */
            transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
            border-radius: 10px;
            top: 0;
            left: 0;
            z-index: 1; /* Ensure overlay is above the background image */
          }
          
          .card:hover:after {
            background-color: rgba(0, 0, 0, 0.7); /* Red background color with some transparency */
            opacity: 1;
          }
          
          .card__details {
            position: relative;
            z-index: 2; /* Ensure details are above the overlay */
            padding: 15px;
            background: #fff;
            color: #393939;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          
          .card__button {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 2; /* Ensure button is above the overlay */
          }
          
          .card:hover .card__button {
            display: block;
          }
          @keyframes fadeInUp {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0%);
              opacity: 1;
            }
          }
          
          .fadeInUp-animation {
            animation: 1.5s fadeInUp;
          }
          
          
          @-webkit-keyframes fadeInLeft {
            from {
                opacity:0;
                -webkit-transform: translatex(-10px);
                -moz-transform: translatex(-10px);
                -o-transform: translatex(-10px);
                transform: translatex(-10px);
            }
            to {
                opacity:1;
                -webkit-transform: translatex(0);
                -moz-transform: translatex(0);
                -o-transform: translatex(0);
                transform: translatex(0);
            }
          }
          @-moz-keyframes fadeInLeft {
            from {
                opacity:0;
                -webkit-transform: translatex(-10px);
                -moz-transform: translatex(-10px);
                -o-transform: translatex(-10px);
                transform: translatex(-10px);
            }
            to {
                opacity:1;
                -webkit-transform: translatex(0);
                -moz-transform: translatex(0);
                -o-transform: translatex(0);
                transform: translatex(0);
            }
          }
          @keyframes fadeInLeft {
            from {
                opacity:0;
                -webkit-transform: translatex(-100px);
                -moz-transform: translatex(-100px);
                -o-transform: translatex(-100px);
                transform: translatex(-100px);
            }
            to {
                opacity:1;
                -webkit-transform: translatex(0);
                -moz-transform: translatex(0);
                -o-transform: translatex(0);
                transform: translatex(0);
            }
          }
          .in-left {
            -webkit-animation-name: fadeInLeft;
            -moz-animation-name: fadeInLeft;
            -o-animation-name: fadeInLeft;
            animation-name: fadeInLeft;
            -webkit-animation-fill-mode: both;
            -moz-animation-fill-mode: both;
            -o-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            -o-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            -o-animation-duration:1s;
            animation-delay: 1s;
          }
          
`
        }
      </style>

      <Nav />
      <div style={{ position: 'relative', width: '100%', }}>
        <img src={img} style={{ height: '350px', width: '100%', filter: 'brightness(50%)' }} alt="Background" />
        <div style={{ position: 'absolute', top: 0, right: 0, textAlign: 'right', color: 'white', padding: '20px' }}>
          <h1>OUR ACADEMIC</h1>
          <h1>SUPPORT CELL</h1>
        </div>
      </div>
      <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '120px' }}>
        <h4>Our Pillars of Academic Support</h4>
      </div>
      <div className='texxt' style={{ width: '90%' }}>
        <p style={{ marginLeft: '70px', fontSize: '15px', textAlign: 'justify', fontFamily: "'Open Sans', sans-serif" }}>As a way to compliment your academic journey, our cells are strategically designed to act as platforms, which edify and enhance your knowledge base, and your practical exposure. The cells offer you a learning experience which focuses on the development of the intrinsic and personal values of every student, shaping  you towards your participation in the future industrial avenues. From creating endless avenues of international exposure to preparing  you for a lifetime experience abroad, our academic cells are designed to act as the support pillars, which give you the necessary guidance all throughout your academic journey.</p>
      </div>


      <div className="fadeInUp-animation">
        <section className="section">

          <div className="grid">
            <div className="card" style={{ backgroundImage: `url(${anti})` }}>
              <div className="card__details">Anti Ragging</div>
              <Link to='/antiragging'>
                <button className="card__button"> More</button></Link>
            </div>
            <div className="card" style={{ backgroundImage: `url(${complaint})` }}>
              <div className="card__details">Internal Complaint</div>
              <Link to='/committe&cell/internal/complaint'>
                <button className="card__button"> More</button></Link>
            </div>
            <div className="card" style={{ backgroundImage: `url(${redressal})` }}>
              <div className="card__details">Grievance Redressal</div>
              <Link to='/grievanceredressal'>
                <button className="card__button"> More</button></Link>
            </div>
            <div className="card" style={{ backgroundImage: `url(${scholarship})` }}>

              <div className="card__details">
                For SC-ST
              </div>
              <button className="card__button" >  <a href="/committe&cell/sc-st">More</a></button>
            </div>   <div className="card" style={{ backgroundImage: `url(${proctorial})` }}>
              <div className="card__details">Proctorial Board</div>
              <button className="card__button"> <a href='/committe&cell/proctorial/board'>More</a></button>

            </div>
            <div className="card" style={{ backgroundImage: `url(${edc2})` }}>

              <div className="card__details">Entrepreneurship Development Cell</div> <Link to='/committe&cell/entrepreneurship/cell'>
                <button className="card__button"> More</button>   </Link>
            </div>

            <div className="card" style={{ backgroundImage: `url(${higher2})` }}>

              <div className="card__details">International Higher Education Cell</div>
              <button className="card__button"> <a href="/committe&cell/International/higher/education">More</a></button>

            </div>
            <div className="card" style={{ backgroundImage: `url(${incubation})` }}>
              <div className="card__details">Incubation Cell</div>
              <button className="card__button"> More</button>
            </div>
          </div>
        </section>
      </div>
      <Footerpage/>
    </>
  )
}


export default Comm_cell;