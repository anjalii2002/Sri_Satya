import React from 'react';

const Why = () => {
  return (
    <>
      <style>{`
        // * {
        //     box-sizing: border-box;
        //     margin: 0;
        //     // font-family: 'Poppins';
        //   }




    
// // ///////////////////////////title//////////////////////////

// .custom-row::after {
//   content: "";
//   display: table;
//   clear: both;
 
// }

// .wrapper {
//   max-width: 1140px;
//   margin: 0 auto;
//   position: relative;

// }

// .header {
//   background-color: #485666;
//   padding: 8px 0;
//   position: static;
//   z-index: 2000;
 
// }

// .header h1 {
//   color: #fff;
//   font-family: Poppins;
//   font-weight: 400;
//   font-size: 2.2rem;
//   padding-left: 40px
// }
          
        //   .one, .three {
        //     margin: 30px auto !important;
        //   }
   
          .scroll {
            overflow-y: auto;
            // background: #ccd5ae;
       margin-top:-15px
          }
          /* ---------------------------- */
          
          /* ---------- True Code ---------- */
          
          .container {
            max-width: 1400px;
            margin: auto;
            
            &.two .card::after {
              content: '';
              width: 80px;
              height: 80px;
              backgroundColor: #f5ebe0;
              position: absolute;
              top: -30px;
              border-radius: 35%;
              left: -20px;
            }
             
            .grid-cards {
              display: flex;
              justify-content: center;
              flex: 1;
              max-width: 1024px;
              margin: 1rem auto;
              
              @media (max-width: 922px) and (min-width: 601px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
              }
              @media (max-width: 600px) {
                flex-direction: column;
              }
              
              .card {
                position: relative;
                flex: 1;
                background: #fff;
                padding: 1rem 1rem 1.5rem;
                box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                border-radius: 1rem;
                min-height: 170px;
                margin: 15px;
                transition: all ease 0.3s;
                overflow: hidden;
                animation: fadeInLeft 1.5s backwards;
                
                &:nth-child(2){
                  animation-delay: 0.15s;
                }
                &:nth-child(3){
                  animation-delay: 0.2s;
                }
                &:nth-child(4){
                  animation-delay: 0.3s;
                }
                
                &:hover {
                 transform: translateY(-6px);
                 -webkit-transform: translateY(-6px);
                }
                
                img {
                  //Google SEO - CLS optimize
                  aspect-ratio: 500 / 320;
                  
                  width: 100%;
                  border-radius: 12px;
                  margin-bottom: 15px;
                  position: relative;
                  max-height: 320px;
                  object-fit: cover;
                  box-shadow: 0 6px 16px -7px #aaa;
                }
                
                .card-body {
                  color: #676767;
                  width: 100%;
                  margin-bottom: 40px;
                  padding: 0 0.8rem;
                  position: relative;
                  
                  .icon {
                    display: flex;
                    width: 100%;
                    text-align: left;
                    padding: 15px 0;
                    
                    i {
                      position: relative;
                      font-size: 25px;
                      transition: 0.5s;
                      line-height: 0;
                      top: -7px;
                      left: -12px;
                      z-index: 2;
                      
                      &::before {
                        background: #FFD854;
                        background-clip: border-box;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                      }
                    }
                    
                    h3 {
                      margin: -9px 0 0 20px;
                      font-weight:bold;
                      color:#003049;
                      font-family:montserrat;
                    }
                  }
                  
                  .title-card {
                    text-align: center;
                    padding-bottom: 10px;
                  }
                  
                  p {
                    font-size: 14px;
                    line-height: 22px;
                    font-weight: 300;
                  }
                }
                
                .card-footerr {
                  display: flex;
                  justify-content: flex-end;
                  position: absolute;
                  bottom: 20px;
                  width: calc(100% - 1rem);

                  
                  a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #283618;
                    color: #fff;
                    text-shadow: 0px 1px 5px rgba(0,0,0,0.08);
                    font-size: 1rem;
                    font-weight: 700;
                    text-decoration: none;
                    width: 40%;
                    height: 40px;
                    border-top-left-radius: 1rem;
                    border-bottom-right-radius: 1rem;
                    
                    &:hover {
                      filter: brightness(0.98);
                    }
                  }
                }
              }
            }
          }
          
          @keyframes fadeInLeft {
            0% {
              transform: translate(-100%,0);
            }
          
            100% {
                opacity: 1;
                transform: none;
            }
          }
          
      `}</style>
  
<div className="wrapper tab-container effectTab-header"
  
  >
     <div className="wrapper" align="center">
   
        <h1 className="ti title">why choose us</h1>
           </div> 
            </div>
          
      <section>
      <div className="scroll">

  <div className="container two">
    <h3 style={{ padding: "25px 0 0 25px" }}></h3>
    <div className="grid-cards">
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fas fa-bell" />
            <h3 className="title-card">Innovative Learning</h3>
          </div>
          <p>
          Revolutionizing education with cutting-edge technology and interactive experiences.
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fas fa-bullhorn" />
            <h3 className="title-card">Engaging Courses</h3>
          </div>
          <p>
          Exciting classes that will blow your mind and expand horizons
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fab fa-codepen" />
            <h3 className="title-card">Interactive Labs</h3>
          </div>
          <p>
          Hands-on experiments that make learning fun and unforgettable.
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
    </div>
  </div>



  <div className="container two">
    <h3 style={{ padding: "25px 0 0 25px" }}></h3>
    <div className="grid-cards">
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fas fa-bell" />
            <h3 className="title-card">Expert Faculty</h3>
          </div>
          <p>
          Taught by top-notch professors who are passionate about knowledge
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fas fa-bullhorn" />
            <h3 className="title-card">Virtual Reality</h3>
          </div>
          <p>
          Step into a new dimension of learning with immersive VR
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="icon">
            <i className="fab fa-codepen" />
            <h3 className="title-card">Global Community</h3>
          </div>
          <p>
          Connect with students worldwide and broaden your perspectives.
          </p>
        </div>
        <div className="card-footerr">
          <a href="#">More</a>
        </div>
      </div>
    </div>
  </div>

</div>

      </section>
    </>
  );
};

export default Why;