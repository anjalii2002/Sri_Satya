import React from 'react';
import library from '../images/libr.webp';
import Nav from '../HomePage/Nav';
import Footerpage from '../HomePage/Footerpage';

function CoreValues() {
  return (
    <>
      <style>
        {
          `
 .sectionTitle p {
         text-transform: uppercase;
         color: #ffa726;
         font-weight: 300;
         font-size: 12px;
         font-family: "Montserrat", sans-serif;
         margin-bottom: 25px;
         line-height: 1;
         position: relative;
       }
       
       .sectionTitle .title {
         color: #23344b;
         font-size: 2.2em;
         line-height: normal;
         margin-bottom: 50px;
         font-family: 'Montserrat', sans-serif;
         font-weight: 600;
       }
       
 .iconBox3 {
    padding-left: 40px;
    margin: 20px 0;
    position: relative;
  }
  
  .iconBox3 .icon {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 1.4em;
    color: #ffa726;
  }
  
  .iconBox3 h5 {
    text-transform: uppercase;
    font-size: 1em;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #23344b;
    line-height: 1.4;
  }
  
  .iconBox3 p {
    margin-bottom: 0;
  }
  
       .iconBox3 {
         padding-left: 40px;
         margin: 20px 0;
         position: relative;
       }
       
       .iconBox3 .icon {
         position: absolute;
         left: 0;
         top: 2px;
         font-size: 1.4em;
         color: #ffa726;
       }
       
       .iconBox3 h5 {
         text-transform: uppercase;
         font-size: 1em;
         margin-bottom: 20px;
         font-family: 'Montserrat', sans-serif;
         font-weight: 600;
         color: #23344b;
         line-height: 1.4;
       }
       
       .iconBox3 p {
         margin-bottom: 0;
       }
       
       #solution {
        //  background-color: #edf6f9;
         padding-top: 70px;
         padding-bottom: 70px;
       }
       

       
       @media only screen and (max-width:767px) and (min-width:103px) {
         .title h1 {
           font-weight: 600;
           margin-bottom: 80px;
           font-size: 30px;
           color: #fff;
         }
         .button.transparent {
           background: rgba(255, 255, 255, 0.2);
           outline: 1px solid rgba(255, 255, 255, 0.4);
           color: #fff;
           margin-left: 0px;
           margin-top: 20px;
         }
       }
       
       

       
       .iconTabs .nav1 a {
         position: relative;
         padding: 15px 20px 20px 60px;
         color: #51556a;
         background: #f3f8fa;
         display: block;
         margin-bottom: 10px;
         -moz-transition: all linear 0.3s;
         -webkit-transition: all linear 0.3s;
         transition: all linear 0.3s;
       }
       
       .iconTabs .nav1 a .icon {
         position: absolute;
         left: 20px;
         top: 25px;
         font-size: 1.5em;
         display: inline-block;
         font: normal normal normal 14px/1 FontAwesome;
         font-size: inherit;
         text-rendering: auto;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
       }
       
       .iconTabs .nav1 a h6 {
         margin-bottom: 0;
         text-transform: uppercase;
         font-size: .85em;
         -moz-transition: all linear 0.3s;
         -webkit-transition: all linear 0.3s;
         transition: all linear 0.3s;
         font-family: 'Montserrat', sans-serif;
         font-weight: 600;
         color: #23344b;
         line-height: 1.4;
       }
       
       .iconTabs .nav1 a p {
         margin-bottom: 0;
         font-size: .85em;
       }
       
       .iconTabs .nav1 a.active,
       .iconTabs .nav1 a:hover {
         background: #003049;
         color: #fff;
       }
       
       .iconTabs .nav1 a.active,
       .iconTabs .nav1 a:hover {
         background: #003049;
         color: #fff;
       }


       .title-hr {
        width: 40px;
        border-top: 3px solid red;
        margin-left: 0px;
        margin-top: -71px;
        margin-bottom:0rem
      }
       

       
       .sectionTitle p {
         text-transform: uppercase;
         color: #ffa726;
         font-weight: 300;
         font-size: 12px;
         font-family: "Montserrat", sans-serif;
         margin-bottom: 25px;
         line-height: 1;
         position: relative;
       }
       
       .sectionTitle .title {
         color: #23344b;
         font-size: 2.2em;
         line-height: normal;
         margin-bottom: 50px;
         margin-bottom: 20px;
         font-family: 'Montserrat', sans-serif;
         font-weight: 600;
         color: #23344b;
         line-height: 1.4;
       }
`



        }
      </style>
      <Nav />
      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <img src={library} style={{ width: '100%', height: '300px', filter: 'brightness(50%)' }} alt="Library" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          pointerEvents: 'none', // This allows clicks to go through the overlay to the button
        }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '10px 20px',
              fontSize: '20px',
              backgroundColor: '#780000',
              color: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Core Values
          </div>
        </div>
      </div>




      <section id="solution">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="sectionTitle">

                <h2 className="title">Explore our best solutions</h2>
                <hr className="title-hr"></hr>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="iconBox3">
                    <div className="icon">
                      {/* <i className="fa fa-check-square-o" /> */}
                      <i class="fa-solid fa-square-check"></i>
                    </div>
                    <h5>
                      DESCIPLINE</h5>
                    <p>
                      It is the practice of training people to obey rules or a code of behaviour, using punishment to correct disobedience.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="iconBox3">
                    <div className="icon">
                      <i class="fa-solid fa-square-check"></i>
                    </div>
                    <h5>PUNCTUALITY OR RESPECT FOR TIME</h5>
                    <p>
                      We promote punctuality and Time Management among Stake Holders.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="iconBox3">
                    <div className="icon">
                      <i class="fa-solid fa-square-check"></i>
                    </div>
                    <h5>FREEDOM OF THOUGHT AND EXPRESSION</h5>
                    <p>
                      We believe that Freedom of Thought and Expression is necessary, as without this overall development of individual cannot be completed.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="iconBox3">
                    <div className="icon">
                      <i class="fa-solid fa-square-check"></i>
                    </div>
                    <h5>HONESTY AND INTEGRITY</h5>
                    <p>
                      We are committed to practices that are fair, honest and objective in dealing with students, faculty members, staff and stake holders at all levels of Institution.
                    </p>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerpage/>
    </>
  );
}

export default CoreValues;
