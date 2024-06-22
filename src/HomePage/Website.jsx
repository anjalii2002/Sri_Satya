import React, { useEffect,useState } from "react";
import "./Website.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderRequiter from "./SliderRequiter";
import About from '../HomePage/About';
import Facilities from '../HomePage/Facilities';
import sacn from '../images/scan.jpeg';
// import Our from '../HomePage/Our';
import PosI from '../images/Event1.png';
import PosI1 from '../images/Event5.png';

import Socialmedia from "./Socialmedia";


import PosI2 from "../images/Event14.png";
import PosI3 from "../images/Event3.png";
import PosI4 from "../images/Event8.png";
import PosI5 from "../images/Event8.png";
import PosI6 from "../images/Hai.png";
import PosI7 from "../images/Event11.png";
import PosI8 from "../images/Event3.png";
import PosI9 from "../images/Event2.png";
import PosI10 from "../images/Event7.png";

import PosI11 from "../images/Event14.png";
import PosI12 from "../images/lAB.png";
import PosI13 from "../images/library.png";
import PosI14 from "../images/123.png";
import PosI15 from "../images/DSC_0031.png";
// import logoo from "../images/logoo.png"
import Counter from "./Counter";
import Imp from '../images/IMG_00011_page-0001.jpg'
// import Whatsapplogo from '../images/whatsapp.png'
import Off from '../images/office_Order_page-0001.jpg'
import Not from '../images/IMG_page-0001.jpg'
import ex from '../images/Notice_Copy_page-0001.jpg'
import Nav from "./Nav";
import Footerpage from "./Footerpage";
import New from "./New";
import Gallery from "./Gallery";
import Campus from "../Navbarr/Campus";
import Why from "./Why";




const Website = () => {
  // Global variables
  let element;

  // Detect onclick event
  useEffect(() => {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    } else {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    }
  }, []);

  // Scroller Nav
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("nav").addClass("fixed_nav");
    } else {
      $("nav").removeClass("fixed_nav");
    }
  };

  // Detect ESC Key Pressed
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      if ($(".overlay").css("opacity") === "1") {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      }
    }
  };

  // Dropdown
  $(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
      $(this).children("aside").show("slow");
      $(this).children("a").css("color", "var(--white)");
    } else {
      $(this).children("aside").hide("slow");
      $(this).children("a").css("color", "var(--lite)");
    }
  });

  // Global variables
  let slidestoshow, arrowmark;
  if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
  } else {
    slidestoshow = 1;
    arrowmark = false;
  }

  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
<style>
  {
    `
    /* === HEADING STYLE #1 === */
.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}
.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: "";
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;

  }
.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: "";
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}


h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

`
  }
</style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/*PLUGIN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />
      <Nav />
      {/*HEADER*/}
      <header className="custom-header">
        <article >
          <h1 className="title big" style={{color:'white',fontSize:'40px',marginLeft:'25px'


          }}>
            Welcome to <br />
            <em>Sri Satya Sai</em> University of Technology & Medical Science
          </h1>
          <p style={{marginLeft:'25px'}}>
            SSSUTMS: Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
            due to the quality of education at an affordable cost, without any hidden fees policy.
            In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions
            were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to
            worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
          </p>
         
        </article>

      </header>
      {/*MAIN*/}
      <main>
        {/*division_2*/}
        <div className="divisions division_2 flex">
          <section className="flex_content padding_2x">
            <div className="title_header">
              <h2 className="title medium">Notifications</h2>
              <p>
                Coming soon new website www.sssutms.ac.in. Examination Form
                Notification B.H.M.S. & Paramedical Courses December - 2023 ·
                APPOINTMENT (School of Homoeopathy).
              </p>
              <span className="bar_blue" />
            </div>
            <marquee
              direction="up"
              id="notification"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              {/*notification begining*/}
              <Link to="/notification">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img src={sacn} alt="" loading="lazy" />
                  </figure>
                  <article>
                    <h3 className="title">BHMS and BAMS Notificaton </h3>
                    <br />
                    <p>
                      BAMS vs BHMS - Full form. BAMS is commonly abbreviated as
                      a Bachelor of Ayurvedic Medicine and Surgery (BAMS)...
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        01-01-2024
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              <Link to="/imp">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img src={Imp} alt="" loading="lazy" />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai &amp; University Medical & Science{" "}
                    </h3>
                    <br />
                    <p>Important information related to examination</p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/off">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img src={Off} alt="" loading="lazy" />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai &amp; University Medical & Science{" "}
                    </h3>
                    <br />
                    <p>Office Order</p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/not">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img src={Not} alt="" loading="lazy" />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai &amp; University Medical & Science{" "}
                    </h3>
                    <br />
                    <p>Notification Ph.D. Course Work Examination 2023-24</p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        12-01-2024
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/exam">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img src={ex} alt="" loading="lazy" />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai &amp; University Medical & Science{" "}
                    </h3>
                    <br />
                    <p>Important information related to examination</p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        05-01-2024
                      </span>
                    </aside>
                  </article>
                </a>
              </Link>
              {/*notification ends*/}
            </marquee>
          </section>
          <section className="flex_content padding_2x" id="event">
            <img
              style={{ height: "50%" }}
              src="https://content.jdmagicbox.com/comp/bhopal/e5/0755px755.x755.200519160003.c2e5/catalogue/sri-satya-sai-university-of-technology-and-medical-sciences-bhopal-1ylvd7osji.jpg"
              alt=""
            />
            <img
              style={{ height: "50%" }}
              src="https://www.shutterstock.com/image-photo/graduation-college-school-degree-successful-600nw-521875054.jpg"
              alt=""
            />
          </section>
        </div>

        <div>
          <Socialmedia/>
        </div>
        <div>
          <About />
        </div><br /><br /><br /><br />
        {/* <div>
          <Our />
        </div><br /> */}

<div>
         <div className="one">
  <h1>Salient Features</h1>
  <br></br>
</div>
          <New />
        </div><br />
        <div>
        <div className="one">
  <h1>CAMPUS sNAPSHOT</h1>
  <br></br>
</div>
          <Facilities />
        </div><br /><br />
        {/* <div>
          <Counter />
        </div> */} <div>
          <Why/>
         </div><br/>
  <div> 
        <Gallery/>
        </div>
       
       
   
        <>
      <style>{`
      img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hexagon-gallery {
  margin: auto;
  margin-top: 50px;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 14px;
  padding-bottom: 50px;
}

.hex {
  display: flex;
  position: relative;
  width: 240px;
  height: 265px;
  background-color: #424242;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex:first-child {
  grid-row-start: 1;
  grid-column: 2 / span 2;
}

.hex:nth-child(2) {
  grid-row-start: 1;
  grid-column: 4 / span 2;
}

.hex:nth-child(3) {
  grid-row-start: 1;
  grid-column: 6 / span 2;
}

.hex:nth-child(4) {
  grid-row-start: 2;
  grid-column: 1 / span 2;
}

.hex:nth-child(5) {
  grid-row-start: 2;
  grid-column: 3 / span 2;
}

.hex:nth-child(6) {
  grid-row-start: 2;
  grid-column: 5 / span 2;
}

.hex:nth-child(7) {
  grid-row-start: 2;
  grid-column: 7 / span 2;
}

.hex:nth-child(8) {
  grid-row-start: 3;
  grid-column: 2 / span 2;
}

.hex:nth-child(9) {
  grid-row-start: 3;
  grid-column: 4 / span 2;
}

.hex:nth-child(10) {
  grid-row-start: 3;
  grid-column: 6 / span 2;
}
      `}</style>
 
   
     
<div className="one">
  <h1>Gallery</h1>
       </div>

<section >
  <div className="hexagon-gallery">
  <div className="hex">
    <img
      src={PosI1}
      alt="some"
    />
  </div>
  
  <div className="hex"> <img
      src={PosI9}
      alt="some"
    /></div>
  <div className="hex"> <img
      src={PosI10}
      alt="some"
    /></div>
  <div className="hex" > <img
      src={PosI12}
      alt="some"
    /></div>
  <div className="hex"> <img
      src={PosI13}
      alt="some"
    /></div>
  <div className="hex"> <img
      src={PosI14}
      alt="some"
    /></div>
  <div className="hex" > <img
      src={PosI15}
      alt="some"
    /></div>
  <div className="hex" > <img
      src={PosI2}
      alt="some"
    /></div>
  <div className="hex" > <img
      src={PosI4}
      alt="some"
    /></div>
  <div className="hex" > <img
      src={PosI8}
      alt="some"
    /></div>
    </div>
</section>


      <div id="myModal" className="modal" onClick={closeModal}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-body">
            {modalImage && <img src={modalImage} alt="Enlarged Image" />}
          </div>
        </div>
      </div>
    </>

      </main><br /><br />
      <div className="one">
  <h1>Our Recruiters</h1>
       </div>
      <div style={{ marginTop: "50px" }}>
        <SliderRequiter />
      </div>
      {/*FOOTER*/}


      <Footerpage />

      {/*ADDITIONAL*/}
      <div className="overlay" />
      <div className="cursor" />

    </>
  );
};

export default Website;