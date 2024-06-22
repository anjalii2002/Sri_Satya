
// import React from "react";
// import C1 from "./Photo/C1.jpg";
// import C2 from "./Photo/C2.jpg";
// import C3 from "./Photo/C3.png";
// import C4 from "./Photo/C4.png";
// import C5 from "./Photo/C5.jpg";
// import C6 from "./Photo/C6.jpg";
// import C7 from "./Photo/C7.png";
// import C8 from "./Photo/C8.jpg";
// import C9 from "./Photo/C9.jpg";
// import C10 from "./Photo/C10.png";
// import C11 from "./Photo/C11.jpg";
// import C12 from "./Photo/C12.png";
// import C13 from "./Photo/C13.jpg";
// import C14 from "./Photo/C14.png";
// import C15 from "./Photo/C15.jpg";
// import C16 from "./Photo/C16.jpg";
// import C17 from "./Photo/C17.png";
// import C18 from "./Photo/C18.png";

// import C20 from "./Photo/C20.png";
// import C21 from "./Photo/C21.png";
// import C22 from "./Photo/C22.png";
// import C23 from "./Photo/C23.png";
// import C24 from "./Photo/C24.png";
// import C25 from "./Photo/C25.png";
// import C26 from "./Photo/C26.png";

// import C28 from "./Photo/C28.png";
// import C29 from "./Photo/C29.png";
// import C30 from "./Photo/E30.png";
// import C31 from "./Photo/C31.png";
// import C32 from "./Photo/C32.png";
// import C33 from "./Photo/C33.png";
// import C34 from "./Photo/C34.png";
// import C35 from "./Photo/C35.png";
// import C36 from "./Photo/C36.png";
// import C37 from "./Photo/C37.png";
// import C38 from "./Photo/C38.png";
// import C39 from "./Photo/C39.png";
// import C40 from "./Photo/C40.png";

import React from "react";
import C1 from "./Photo/C1.jpg";
import C2 from "./Photo/C2.jpg";
import C3 from "./Photo/C3.png";
import C4 from "./Photo/C4.png";
import C5 from "./Photo/C5.jpg";
import C6 from "./Photo/C6.jpg";
import C7 from "./Photo/C7.png";
import C8 from "./Photo/C8.jpg";
import C9 from "./Photo/C9.jpg";
import C10 from "./Photo/C10.png";
import C11 from "./Photo/C11.jpg";
import C12 from "./Photo/C12.png";
import C13 from "./Photo/C13.jpg";
import C14 from "./Photo/C14.png";
import C15 from "./Photo/C15.jpg";
import C16 from "./Photo/C16.jpg";
import C17 from "./Photo/C17.png";
import C18 from "./Photo/C18.png";

import C20 from "./Photo/C20.png";
import C21 from "./Photo/C21.png";
import C22 from "./Photo/C22.png";
import C23 from "./Photo/C23.png";
import C24 from "./Photo/C24.png";
import C25 from "./Photo/C25.png";
import C26 from "./Photo/C26.png";

import C28 from "./Photo/C28.png";
import C29 from "./Photo/C29.png";
import C30 from "./Photo/E30.png";
import C31 from "./Photo/C31.png";
import C32 from "./Photo/C32.png";
import C33 from "./Photo/C33.png";
import C34 from "./Photo/C34.png";
import C35 from "./Photo/C35.png";
import C36 from "./Photo/C36.png";
import C37 from "./Photo/C37.png";
import C38 from "./Photo/C38.png";
import C39 from "./Photo/C39.png";
import C40 from "./Photo/C40.png";

function SliderRequiter() {
  return (
    <>
      <style>
        {`
      
      .logos-slider {
        
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        position: relative;
        -webkit-mask-image: linear-gradient(90deg,rgba(0,0,0,0) 0,#000 15%,#000 85%,rgba(0,0,0,0) 100%);
        mask-image: linear-gradient(90deg,rgba(0,0,0,0) 0,#000 15%,#000 85%,rgba(0,0,0,0) 100%);
    }
    
    .logos-slider-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
       animation: slide 120s linear infinite;
    }
    
    .logos-slider-container img {
      width:100px;
     max-width: 150px;
     border: 2px solid #DCDCDC;
      border-radius: 5px;
    }
    
    @keyframes slide {
      0% {
        transform: translate3d(0,0,0)
      }
      100% {
        transform: translate3d(-100%,0,0)
      }
    }
    
    // h1 {
    //   text-align: center;
    //   font-family: 'Lato';
    //   color: #3D4A54;
    // }
    
    .card {
      background: #f6f5f5;
      padding: 1rem;
      border-radius: 1rem;
      max-width: 1350px;
      margin: 0 auto;
      box-shadow: 0px 3px 8px rgb(61 74 84 / 10%), 0px 3px 12px rgb(61 74 84 / 6%)
    }
    
    // body {
    //   padding-top: 4rem;
    //   background: #eef2f5;
    //   display:flex;
    //   align-items: center;
    //   flex-direction: column;
    //   justfiy-content: center;
    // }
      `}
      </style>

      <div className="card">
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>OUR RECRUITERS</b>
        </h3>{" "}
        <br /> <br />
        <div className="logos-slider">
          <div className="logos-slider-container">
            <img src={C21} />
            <img src={C22} />
            <img src={C23} />

            <img src={C30} />

            <img src={C31} />

            <img src={C37} />
            <img src={C38} />
            <img src={C39} />
            <img src={C40} />
            <img src={C12} />
            <img src={C13} />

            <img src={C1} />
            <img src={C2} />
            <img src={C3} />
            <img src={C4} />
            <img src={C5} />
            <img src={C6} />
            {/* <img src= {C7} /> */}
            <img src={C8} />
            <img src={C9} />
            <img src={C10} />

            <img src={C11} />
            <img src={C15} />
            <img src={C16} />
          </div>
        </div>{" "}
        <br />
        <div className="logos-slider">
          <div className="logos-slider-container">
            <img src={C1} />
            <img src={C2} />
            <img src={C3} />
            <img src={C4} />
            <img src={C5} />
            <img src={C6} />
            {/* <img src= {C7} /> */}
            <img src={C8} />
            <img src={C9} />
            <img src={C10} />

            <img src={C11} />
            <img src={C15} />
            <img src={C16} />

            <img src={C21} />
            <img src={C22} />
            <img src={C23} />

            <img src={C30} />

            <img src={C31} />

            <img src={C37} />
            <img src={C38} />
            <img src={C39} />
            <img src={C40} />
            <img src={C12} />
            <img src={C13} />

            <img src={C20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderRequiter;


