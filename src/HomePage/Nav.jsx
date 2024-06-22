

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/sssutms.jpg"
import excell from "../images/NavIMG/Resarch/centerofexcell.pdf"
import COA from "../images/COA_Approvals.pdf";
import NIRF_Eng from "../images/NRIF_Eng.pdf";
import NIRF_Agri from "../images/NRIF_Agri.pdf";
import NIRF_Phar from "../images/NIRF_Phar..pdf";
import PDF from "../PDF/PHD/PHD.pdf"


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };









  const handleMouseEnter1 = () => {
    setIsOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsOpen1(false);
  };
  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsOpen5(false);
  };

  const handleMouseEnter6 = () => {
    setIsOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setIsOpen6(false);
  };

  const handleMouseEnter8 = () => {
    setIsOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsOpen9(false);
  };
  const handleMouseEnter10 = () => {
    setIsOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsOpen10(false);
  };

  const handleMouseEnter12 = () => {
    setIsOpen12(true);
  };

  const handleMouseLeave12 = () => {
    setIsOpen12(false);
  };

  const handleMouseEnter13 = () => {
    setIsOpen13(true);
  };

  const handleMouseLeave13 = () => {
    setIsOpen13(false);
  };
  const handleMouseEnter14 = () => {
    setIsOpen14(true);
  };

  const handleMouseLeave14 = () => {
    setIsOpen14(false);
  };
  return (
    <>
      <style>{`
      .navbar {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        background-color:#D2E0FB;
        position:sticky;
      }



a.dropdown-item p.pstyle {
 
  font-size: 14px;
  color: black;
  font-family: "Teko", sans-serif;
 
  margin-bottom:-10px;
 
  padding: 0;
 
}

.down
{  
   font-size: 20px;
   font-family: 'Open Sans', sans-serif;
    margin-top:-8px;
      margin-bottom:-10px;
      padding:0 ;
     }


      
a.dropdown-item p.pstyle1 {
 
  font-size: 14px;
  color: #C80036;
  font-family: "Teko", sans-serif;
 
  margin-bottom:-8px;
 font-weight:700px;
  padding: 0;
 
}

      // .navbar-brand{
      //   pading-right: 80px;
      // }
      .navbar .navbar-brand img {
        max-width: 100px;
      }
      .navbar .navbar-nav .nav-link {
        color: #000;
      }
      @media screen and (min-width: 1024px) {
        .navbar {
          letter-spacing: 0.1em;
        }
        .navbar .navbar-nav .nav-link {
          padding: 0.5em 1em;
        }
        .search-and-icons {
          width: 30%;
        }
        .search-and-icons form {
          flex: 1;
        }
      }
      @media screen and (min-width: 768px) {
        .navbar .navbar-brand img {
          max-width: 4em;
        }


      .navbar-toggler{
          backgound-color:oragne;
      }

        .navbar .navbar-collapse {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }
        .search-and-icons {
          display: flex;
          align-items: center;
        }
      }
      .search-and-icons form input {
        border-radius: 0;
        height: 2em;
        background: black
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
          no-repeat 95%;
      }
      .search-and-icons form input:focus {
        background: black;
        box-shadow: none;
      }
      .search-and-icons .user-icons div {
        padding-right: 1em;
      }
      .contact-info p,
      .contact-info a {
        font-size: 0.7em;
        padding-right: 2em;
        // color: grey;
      }
      
      .contact-info a {
        padding-right: 0;
      }

      . {
        font-size: 0.8rem; /* Adjust the size as needed */
        font-weight:700er;

      }

  @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')

  
    `}</style>

      <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top" style={{ width: '100%', backgroundColor: '#D2E0FB' }}>
        <div className="container-xl" style={{ width: '100%' }}>
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img style={{ marginLeft: '-5px', height: '70px', width: '70px' }} src={logo} alt="Logo" />
            </Link>
          </a>
          <button   style={{backgroundColor:'#EEEEEE'}}
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span style={{color:'black'}} className="navbar-toggler-icon" /> */}
           <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="contact-info d-md-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter} // If you have defined these functions
                  onMouseLeave={handleMouseLeave} // and they are necessary
                >
                  <h1 style={{ fontSize: '12px', textTransform: 'uppercase', fontFamily: "'Anton', sans-serif ", fontWeight: 700 }}><a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ textTransform: 'upperCase', fontFamily: "'Roboto',", color: "#dd2d4a", fontWeight: 800, fontSize: "13px" }}
                  > Academic  </a></h1>

                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`} style={{ borderRadius: '10px' }}>
                    <a className="dropdown-item" href="/academic-calender" target="_blank" style={{ marginTop: '-10px', width: '250px' }}>
                      {" "}
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Academic Calendar</p>
                    </a>
                    <a className="dropdown-item"
                      href="/studymaterial">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Study Materials</p>
                    </a>
                    <a className="dropdown-item" href="/scholarship">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Scholarship</p>

                    </a>
                    <a className="dropdown-item " href={COA} target="_blank">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>COA Approvals</p>
                    </a>
                  </div>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter10}
                  onMouseLeave={handleMouseLeave10}
                >

                  <h1 style={{ fontSize: '12px', textTransform: 'uppercase', fontFamily: "'Anton', sans-serif ", fontWeight: 700 }}><a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ textTransform: 'upperCase', fontFamily: "'Roboto',", color: "#dd2d4a", fontWeight: 800, fontSize: "13px" }}
                  > RESEARCH </a></h1>

                  <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`} style={{ borderRadius: '10px' }}>
                    <a className="dropdown-item " href="/resarch-promotion-policy" style={{ marginTop: '-8px' }}>
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Research & Promotion Policy</p>
                    </a>
                    <a className="dropdown-item " href="/doctoral-phd">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Doctoral Programs PhD</p>
                    </a>
                    <a className="dropdown-item " href={excell} target="_blank">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}> Centre Of Excellence</p>
                    </a>
                    <a className="dropdown-item " href="/consultancy-services">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Consultancy Services{" "}</p>
                    </a>
                    <a className="dropdown-item " href="/mou-collaboration">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}> MOU & Collaboration</p>
                    </a>
                    <a className="dropdown-item " href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Centre For Development Of Entreprenurship</p>
                    </a>

                  </div>
                </li>


                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >

                  <h1 style={{ fontSize: '12px', textTransform: 'uppercase', fontFamily: "'Anton', sans-serif ", fontWeight: 700 }}><a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ textTransform: 'upperCase', fontFamily: "'Roboto',", color: "#dd2d4a", fontWeight: 800, fontSize: "13px" }}
                  > Admissions  </a></h1>

                  <div className={`dropdown-menu ${isOpen1 ? "show" : ""}`} style={{ borderRadius: '10px' }}>
                    <a className="dropdown-item" href="" target="_blank" style={{ marginTop: '-10px', width: '250px' }}>
                      {" "}
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Admission Registration</p>
                    </a>
                    <a className="dropdown-item"
                      href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Admission Notice</p>
                    </a>
                    <a className="dropdown-item"
                      href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Fee Structure</p>
                    </a>
                  </div>
                </li>



                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >

                  <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>   <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a", fontSize: "13px" }}
                  >Faculties & Department</a></h1>

                  <div
                    className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                    style={{ width: "120%", marginLeft: "-60px", borderRadius: '10px' }}
                  >

                    <a className="dropdown-item" href="/enggtechno">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        {" "}
                        Engineering & Technology{" "}
                      </p>
                    </a>


                    <a className="dropdown-item" href="/pharma">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Pharmacy  </p>
                    </a>

                    <a className="dropdown-item" href="/edu">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        Education
                      </p>
                    </a>


                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Management  </p>
                    </a>







                    <a className="dropdown-item" href="/design">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Design  </p>
                    </a>
                    <a className="dropdown-item" href="/humanities&language">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        {" "}
                        Humanities & Language
                      </p>{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        Computer Science & Application
                      </p>
                    </a>  <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Commerce  </p>
                    </a>


                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        {" "}
                        Science
                      </p>
                    </a>   <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        Ayurveda
                      </p>
                    </a>
                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Law </p>
                    </a>
                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Homeopathy </p>
                    </a>    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Paramedical  </p>
                    </a>














                    <a className="dropdown-item" href="#">
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>
                        Nursing
                      </p>
                    </a>





                  </div>
                </li>

                {/* <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >

                  <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif "
                  
                  
                  
                  
                  
                  
                  
                  , textTransform: 'uppercase', fontWeight:700}}>     <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a", fontSize: "13px" }}
                  >UG Department</a></h1>

                  <div
                    className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
                    style={{
                      width: "700%",
                      marginLeft: "-460px",
                      height: "87vh",
                      //  backgroundColor: "aliceblue",
                    }}
                  >
                    <div style={{ marginLeft: "25px" }}>

                      <a className="dropdown-item" href="#" >
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>

                          SCHOOL OF PARAMEDICAL
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li>Bachelor Of Physiotherapy (BPT)</li>
                            <li>
                              Bachelors In Medical Lab Technology (BMLT)
                            </li>
                            <li>Diploma In Medical Lab Technology (DMLT)</li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>

                          SCHOOL OF EDUCATION & PHYSICAL EDUCATION
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li>Bachelor Of Education(B.Ed.)</li>
                            <li>
                              Bachelor Of Arts & Bachelor Of Education (BA &
                              B.Ed.)
                            </li>
                            <li>Bachelor Of Physical Education(B.P.Ed.)</li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>

                          SCHOOL OF HOSPITALITY MANAGEMENT{" "}
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Hotel Management and Catering</li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF DESIGN AND ARCHITECTURE
                        </h1><p className="pstyle">
                          <ul >
                            <li>
                              Bachelor Of Design (B.Des in Industrial Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Communication
                              Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Textile Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Interior Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Product Design)
                            </li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF PLANNING & ARCHITECTURE
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Architecture (B.Arch)</li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          COMPUTER SCIENCE & APPLICATION{" "}
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li>
                              {" "}
                              Bachelor of Computer Application (B.C.A){" "}
                            </li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF LAW
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Law</li>
                          </ul>
                        </p>
                      </a>



                    </div>

                    <div style={{ marginLeft: "38%", marginTop: "-540px" }}>
                      <a className="dropdown-item" href="#" style={{ marginTop: '3px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          MATHEMATICS AND COMPUTING SCIENCES
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul>
                            <li>
                              {" "}
                              Bachelor Of Science (B.Sc.) In Mathematics
                            </li>
                            <li>
                              {" "}
                              Bachelor Of Science (B.Sc.) In Computer
                              Application
                            </li>
                          </ul>
                        </p>
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ marginTop: "20px" }}
                      >
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCIENCE AND LIFE SCIENCES
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Science (B.Sc.)in Biology </li>
                            <li>
                              Bachelor Of Science (B.Sc.)in Biochemistry
                            </li>
                            <li>
                              {" "}
                              Bachelor Of Science (B.Sc.) in Microbiology
                            </li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF COMMERCE
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Commerce (B.Com.)</li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF HUMANITIES
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Arts (B.A.)</li>
                            <li>
                              Bachelor Of Arts With Computer Application
                            </li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF PHARMACY
                        </h1><p className="pstyle">
                          <ul >
                            <li> Bachelor Of Pharmacy</li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF MANAGEMENT
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Business Administration (BBA)</li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF NURSING
                        </h1><p className="pstyle">
                          <ul >
                            <li>Bachelor Of Science (B.Sc) in Nursing</li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF AYURVEDA
                        </h1><p className="pstyle">
                          <ul >
                            <li>B.A.M.S</li>
                          </ul>
                        </p>
                      </a>
                      <a className="dropdown-item" href="#" style={{ marginTop: '11px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF HOMEOPATHY
                        </h1><p className="pstyle">
                          <ul >
                            <li>B.H.M.S</li>
                          </ul>
                        </p>
                      </a>

                    </div>
                    <div style={{ marginLeft: "73%", marginTop: "-555px" }}>

                      <a className="dropdown-item" href="#" style={{ marginTop: '-15px' }}>
                               <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>  </p>
                      </a>
                      <a className="dropdown-item" href="#">
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          ENGINEERING & TECHNOLOGY
                        </h1>
                        <p className="pstyle" >
                          <ul >
                            <li>Aeronautical Engineering</li>
                            <li>Chemical Engineering</li>
                            <li> Civil Engineering</li>
                            <li> Computer Science Engineering</li>
                            <li>Electrical And Electronics Engineering</li>
                            <li> Eletrical Engineering</li>
                            <li>
                              {" "}
                              Electronics And Communication Engineering
                            </li>
                            <li> Information Technology</li>
                            <li> Mechanical Engineering</li>
                            <li> Mining Engineering</li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          POLYTECHNIC
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li> Computer Science Engineering </li>
                            <li>Electrical Engineering</li>
                            <li> Civil Engineering</li>
                            <li>Mechanical Engineering </li>
                            <li>Chemical Engineering</li>
                          </ul>
                        </p>
                      </a>





                    </div>
                  </div>
                </li> */}
                {/* 
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >

                  <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif "
                  
                  
                  
                  
                  
                  
                  
                  , textTransform: 'uppercase', fontWeight:700}}> <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a", fontSize: "13px" }}
                  >PG Department</a></h1>

                  <div
                    className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
                    style={{
                      width: "520%",
                      marginLeft: "-400px",
                      height: "80vh",
                      // backgroundColor: "aliceblue",
                    }}
                  >
                    <div style={{ marginLeft: "25px" }}>

                      <a className="dropdown-item" href="#">
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          ENGINEERING & TECHNOLOGY
                        </h1><p className="pstyle">
                          <ul >
                            <li>Computer Science and Engineering</li>
                            <li>Computer Technology & Applications</li>
                            <li>Digital Communication</li>
                            <li>Electrical Power System</li>
                            <li>Industrial Design</li>
                            <li>Information Technology</li>
                            <li>Power Electronics</li>
                            <li>Software Engineering</li>
                            <li>Structural Design</li>
                            <li>Thermal Engineering</li>
                            <li>VLSI</li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          COMPUTER SCIENCE & APPLICATION{" "}
                        </h1><p className="pstyle">
                          <ul >
                            <li>Master of Computer Application (M.C.A) </li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          MATHEMATICS AND COMPUTING SCIENCES
                        </h1><p className="pstyle">
                          <ul >
                            <li> Master Of Science (M.Sc.) In Mathematics</li>
                            <li>
                              {" "}
                              Master Of Science (M.Sc.) In Computer
                              Application
                            </li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          School Of Management
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li>Master Of Commerce (M.Com.)</li>
                          </ul>
                        </p>
                      </a>

                    </div>
                    <div style={{ marginLeft: "55%", marginTop: "-475px" }}>
                      <a className="dropdown-item" href="#">

                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF COMMERCE
                        </h1>
                       <p className="pstyle" style={{color:'#C80036',fontWeight:700}}>
                          <ul >
                            <li>Master Of Commerce (M.Com.)</li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF HUMANITIES
                        </h1><p className="pstyle">
                          <ul >
                            <li>Master Of Arts (M.A.) in Hindi</li>
                            <li>Master Of Arts (M.A.) in English</li>
                            <li>Master Of Arts (M.A.) in History</li>
                            <li>
                              Master Of Arts (M.A.) in Political Science{" "}
                            </li>
                            <li>Master Of Arts (M.A.) in Sociology</li>
                            <li>Master Of Arts (M.A.) in Psychology</li>
                          </ul>
                        </p>
                      </a>


                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCHOOL OF PHARMACY
                        </h1><p className="pstyle">
                          <ul >
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharm.) in Pharmaceutics
                            </li>
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharm.) in Pharmacology
                            </li>
                          </ul>
                        </p>
                      </a>

                      <a className="dropdown-item" href="#" style={{ marginTop: '15px' }}>
                        <h1 style={{ fontSize: '13px', color: '#d00000', fontFamily: "'Anton', sans-serif " , textTransform: 'uppercase', fontWeight:700}}>
                          SCIENCE AND LIFE SCIENCES
                        </h1><p className="pstyle">
                          <ul >
                            <li>Master Of Science (M.Sc.)in Biology </li>
                            <li>Master Of Science (M.Sc.)in Biochemistry</li>
                            <li>
                              {" "}
                              Master Of Science (M.Sc.) in Microbiology
                            </li>
                          </ul>
                        </p>
                      </a>




                    </div>
                  </div>
                </li> */}


                <li className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}>

                  {/* <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif " , color: "#dd2d4a", textTransform: 'uppercase',fontWeight: 800 }}><a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">DOWNLOAD   </a> </h1>
           */}
                  <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}> <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a", fontSize: "13px" }}
                  >DOWNLOAD
                  </a></h1>

                  <ul className={`dropdown-menu ${isOpen5 ? "show" : ""}`} style={{ borderRadius: '10px' }}>


                    <li className="nav-item dropend"
                      onMouseEnter={handleMouseEnter13}
                      onMouseLeave={handleMouseLeave13}>

                      <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '20px', marginTop: '-15px', color: '#C80036' }}>  <a
                        className="nav-link dropdown-toggle"
                        href="#"

                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >Scheme </a></p>

                      <ul className={`dropdown-menu ${isOpen13 ? "show" : ""}`} style={{ marginLeft: "-1%", marginTop: "5px" }}>
                        <li>
                          <Link to="/B.E-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">BE</p>
                            </a>
                          </Link>

                        </li>   <li>
                          <Link to="/MBA-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">MBA</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/MCA-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">MCA</p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link to="/M.Tech-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">MTech</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BHMCT-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">BHMCT</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BHMS-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">BHMS</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/UTD-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">UTD</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Education-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">Education</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Pharmacy-scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }} >
                              <p className="pstyle1">Pharmacy</p>
                            </a>
                          </Link>
                        </li>    <li>
                          <Link to="/Paramedical-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">Paramedical</p>
                            </a>
                          </Link>
                        </li>
                        <li>

                          <Link to="/BLIBISC-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">B.Lib.I.Sc.</p>
                            </a>
                          </Link>
                        </li>    <li>
                          <Link to="/BSCHMCS-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">B.Sc. [HMCS]</p>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/BscHonsAg-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">B.Sc.(Hons.) (Ag)</p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link to="/PhysicalEducation-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">Physical Education</p>
                            </a>
                          </Link>
                        </li>  <li>
                          <Link to="/BachelorofLaws-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">Bachelor of Laws (LL.B.).</p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link to="/POLYTECHNIC(ENGINEERING)-Scheme">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">POLYTECHNIC (ENGINEERING)</p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>


                    <li
                      className="nav-item dropdown"
                      onMouseEnter={handleMouseEnter14}
                      onMouseLeave={handleMouseLeave14}
                    >
                      <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: '20px', color: '#C80036', marginTop: '-40px', marginLeft: '5px' }}> <a
                        className="nav-link dropdown-toggle"
                        href="#"

                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >Syllabus </a></p>
                      <div className={`dropdown-menu ${isOpen14 ? "show" : ""}`} style={{ marginLeft: "100%", marginTop: "-30px" }} >
                        <Link to="/BESyllabuspage">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            {" "}
                            <p className="pstyle1">B.E.</p>
                          </a>
                        </Link>
                        <Link to="/MBASyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">MBA</p>
                          </a>
                        </Link>
                        <Link to="/MCASyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">MCA</p>
                          </a>
                        </Link>
                        <Link to="/UTDSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">UTD</p>
                          </a>
                        </Link>
                        <Link to="/BHMSSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">BHMS</p>
                          </a>
                        </Link>
                        <Link to="/M.TechSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">M.Tech</p>
                          </a>
                        </Link>

                        <Link to="/EducationSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">Education</p>
                          </a>
                        </Link>
                        <Link to="/PharmacySyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">Pharmacy</p>
                          </a>
                        </Link>
                        <Link to="/BHMCTSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">B.H.M.C.T.</p>
                          </a>
                        </Link>

                        <Link to="/BLibIScSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">B.Lib.I.Sc.</p>
                          </a>
                        </Link>




                        <Link to="/BScHMCSSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">B.Sc.[HMCS]</p>
                          </a>
                          <Link to="/BScHonsAGSyllabus">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">B.Sc (Hons.)(AG)</p>
                            </a>
                          </Link>
                          <Link to="/ParamedicalSyllabus">
                            <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                              <p className="pstyle1">Paramedical</p>
                            </a>
                          </Link>
                        </Link>
                        <Link to="/PhysicalEducationSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">Physical Education</p>
                          </a>
                        </Link>
                        <Link to="/BacheloroflawsSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">Bachelor Of Laws (LL.B.)</p>
                          </a>
                        </Link>

                        <Link to="/PolytechnicEngineeringSyllabus">
                          <a className="dropdown-item" href="#" style={{ fontSize: "inherit" }}>
                            <p className="pstyle1">Polytechnic (Engineering)</p>
                          </a>
                        </Link>

                      </div>
                    </li>

                    <a
                      className="dropdown-item"
                      href={PDF} target="_blank"
                      style={{ fontSize: "inherit", marginTop: '-30px', marginLeft: '-10px' }}
                    >
                      {" "}
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Notification of Ph.D Award </p>
                    </a>

                  </ul>
                </li>









                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter12}
                  onMouseLeave={handleMouseLeave12}
                >

                  <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}> <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a", fontSize: "13px" }}
                  >NIRF
                  </a></h1>

                  <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`} style={{ borderRadius: '10px' }}>

                    <a
                      className="dropdown-item"
                      href={NIRF_Eng}
                      target="_blank"
                      style={{ fontSize: "inherit", marginTop: '-8px' }}
                    >
                      {" "}
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Engineering  </p>
                    </a>


                    <a
                      className="dropdown-item"
                      href={NIRF_Agri}
                      target="_blank"
                      style={{ fontSize: "inherit" }}
                    >
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Agriculture  </p>
                    </a>


                    <a
                      className="dropdown-item"
                      href={NIRF_Phar}
                      target="_blank"
                      style={{ fontSize: "inherit" }}
                    >
                      <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Pharmacy  </p>
                    </a>

                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter6}
                  onMouseLeave={handleMouseLeave6}
                >
                  <Link to="/eventss">
                    <h1 style={{ fontSize: '12px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}><a
                      className="nav-link dropdown-toggle"
                      href="#"
                      style={{ color: "#dd2d4a", fontSize: "13px" }}
                    >event</a></h1>
                  </Link>

                </li>



                <Link to="/entrance/form">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{
                        color: "#4B0082",
                        animation: "blink 1s infinite",
                        fontSize: "inherit",
                        fontSize: "15px",
                      }}
                    >
                      <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ",color:'purple', textTransform: 'uppercase', fontWeight: '700er' }}>Entrance Exam</h1>
                    </a>
                    <style>
                      {`
                              @keyframes blink {
                              0% { opacity: 1; }
                             50% { opacity: 0; }
                             100% { opacity: 1; }
                               }
                             `}
                    </style>
                  </li>
                </Link>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>Home</h1>
                  </a>
                </li>
              </Link>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >

                <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>
                  <a className="nav-link dropdown-toggle" href="#">About</a></h1>


                <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`} style={{ borderRadius: '10px' }}>

                  <a className="dropdown-item  " href="/History_Milestones" style={{ marginTop: '-8px' }}>
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>History & Milestones</p>
                  </a>
                  <a className="dropdown-item  " href="/vision-mission">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>  Vision & Mission</p>
                  </a>

                  <a className="dropdown-item " href="/leadership">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Leadership</p>
                  </a>
                  <a className="dropdown-item " href="/committe&cell">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Committee & Cell</p>
                  </a>

                  <a className="dropdown-item " href="/core-approvalsvalues">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Core-Values</p>
                  </a>
                  <a className="dropdown-item " href="/best-practices">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}> Best Practices</p>
                  </a>
                  <a className="dropdown-item " href="/press-media">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Press Media</p>
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >

                <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>  <a className="nav-link dropdown-toggle" href="#">Examination</a></h1>

                <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`} style={{ borderRadius: '10px' }}>
                  <a className="dropdown-item " href="#" style={{ marginTop: '-8px' }}>
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Results </p>
                  </a>
                  <a className="dropdown-item " href="#">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Apply for Exam</p>
                  </a>
                  <a className="dropdown-item " href="/exam-schedule">
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Exam Schedule</p>
                  </a>
                  <a className="dropdown-item " href="/exam-notifications">
                    {" "}
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Exam Notification</p>
                  </a>

                  <a className="dropdown-item " href="#">
                    {" "}
                    <p className="pstyle" style={{ color: '#C80036', fontWeight: 700 }}>Apply for Certificates</p>
                  </a>
                </div>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="/placement">
                  <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>Placement</h1>
                </a>
              </li>



              <li className="nav-item">
                <a className="nav-link">
                  <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>IQAC </h1>
                </a>
              </li>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link">
                    <h1 style={{ fontSize: '13px', fontFamily: "'Anton', sans-serif ", textTransform: 'uppercase', fontWeight: 800 }}>Contact </h1>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link"
                  href="/campus">
                  <h1 style={{
                    fontSize: '13px', fontFamily: "'Anton', sans-serif "







                    , textTransform: 'uppercase', fontWeight: 800
                  }}> Campus</h1>
                </a>
              </li>
              <Link to="/Epravesh/Student/Register">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "#4B0082",
                      fontSize: "15px",
                    }}
                  >
                    <h1 style={{
                      fontSize: '13px', fontFamily: "'Anton', sans-serif "







                      , textTransform: 'uppercase', fontWeight: 800
                    }}> E-Pravesh </h1>
                  </a>
                </li>
              </Link>


              <Link to="/erp">
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                      height: "35px",
                      width: "60px",
                    }}
                  >
                    <b style={{ margin: "0" }}>ERP</b>
                  </button>
                </li>
              </Link>

              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "8px",
                    height: "35px",
                    width: "120px",
                  }}
                >
                  <b style={{ margin: "0" }}>ADMISSION</b>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;