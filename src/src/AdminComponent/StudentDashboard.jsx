import React from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import posImage from "./12.png";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { BellRing, MessagesSquare } from "lucide-react"


const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const StudentDashboard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (userData && userData.isEnrolled === false) {
      navigate("/studentDetail");
    } else {
      swal({
        icon: "error",
        title: "Oops!!",
        text: "You have already filled Enrollment form so You are Already Enrolled !!!",
      });
    }
  };
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));

  const isEnrolled = userData && userData.isEnrolled;
  const buttonClassName = isEnrolled ? "disabled" : "enabled";

  return (
    <>
      <style>
        {`
        /* Google Font Link */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
        
        /* General styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        
        /* Sidebar styles */
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100%;
          width: 76px;
          // background: #11101D;
          // background:linear-gradient(to right  , #b15b86,#440f50);
          background: #003049;
          padding: 6px 14px;
          z-index: 99;
          transition: all 0.5s ease;
        }
        
        .sidebar.open {
          width: 250px;
        }
        
        .sidebar .logo-details {
          height: 60px;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .sidebar .logo-details .icon,
        .sidebar .logo-details .logo_name {
          opacity: 0;
          transition: all 0.5s ease;
        }
        
        .sidebar.open .logo-details .icon,
        .sidebar.open .logo-details .logo_name {
          opacity: 1;
        }
        
        .sidebar .logo-details #btn {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          font-size: 23px;
          text-align: center;
          cursor: pointer;
          transition: all 0.5s ease;
        }
        
        .sidebar.open .logo-details #btn {
          text-align: right;
        }
        
        .sidebar i {
          color: #fff;
          height: 60px;
          min-width: 50px;
          font-size: 28px;
          text-align: center;
          line-height: 60px;
        }
        
        .sidebar .nav-list {
          margin-top: 20px;
        }
        
        .sidebar li {
          position: relative;
          margin: 8px 0;
          list-style: none;
        }
        
        .sidebar li .tooltip {
          position: absolute;
          top: -20px;
          left: calc(100% + 15px);
          z-index: 3;
          background: #fff;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 400;
          opacity: 0;
          white-space: nowrap;
          pointer-events: none;
          transition: 0s;
        }
        
        .sidebar li:hover .tooltip {
          opacity: 1;
          pointer-events: auto;
          transition: all 0.4s ease;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .sidebar.open li .tooltip {
          display: none;
        }
        
        .sidebar input {
          font-size: 15px;
          color: #fff;
          font-weight: 400;
          outline: none;
          height: 50px;
          width: 50px;
          border: none;
          border-radius: 12px;
          transition: all 0.5s ease;
          background: #1d1b31;
        }
        
        .sidebar.open input {
          padding: 0 20px 0 50px;
          width: 100%;
        }
        
        // .sidebar .bx-search {
        //   position: absolute;
        //   top: 50%;
        //   left: 0;
        //   transform: translateY(-50%);
        //   font-size: 22px;
        //   background: #1d1b31;
        //   color: #fff;
        // }
        
        // .sidebar.open .bx-search:hover {
        //   background: #1d1b31;
        //   color: #fff;
        // }
        
        // .sidebar .bx-search:hover {
        //   background: #fff;
        //   color: #11101d;
        // }
        
        .sidebar li a {
          display: flex;
          height: 100%;
          width: 100%;
          border-radius: 12px;
          align-items: center;
          text-decoration: none;
          transition: all 0.4s ease;
          background: #11101D;
        }
        
        .sidebar li a:hover {
          background: #FFF;
        }
        
        .sidebar li a .links_name {
          color: #fff;
          font-size: 15px;
          font-weight: 400;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: 0.4s;
        }
        
        .sidebar.open li a .links_name {
          opacity: 1;
          pointer-events: auto;
        }
        
        .sidebar li a:hover .links_name,
        .sidebar li a:hover i {
          transition: all 0.5s ease;
          color: #11101D;
        }
        
        .sidebar li i {
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          border-radius: 12px;
        }
        
        .sidebar li.profile {
          position: fixed;
          height: 60px;
          width: 78px;
          left: 0;
          bottom: -8px;
          padding: 10px 14px;
          background: #1d1b31;
          transition: all 0.5s ease;
          overflow: hidden;
        }
        
        .sidebar.open li.profile {
          width: 250px;
        }
        
        .sidebar li .profile-details {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
        }
        
        .sidebar li img {
          height: 45px;
          width: 45px;
          object-fit: cover;
          border-radius: 6px;
          margin-right: 10px;
        }
        
        .sidebar li.profile .name,
        .sidebar li.profile .job {
          font-size: 15px;
          font-weight: 400;
          color: #fff;
          white-space: nowrap;
        }
        
        .sidebar li.profile .job {
          font-size: 12px;
        }
        
        .sidebar .profile #log_out {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          background: #1d1b31;
          width: 100%;
          height: 60px;
          line-height: 60px;
          border-radius: 0px;
          transition: all 0.5s ease;
        }
        
        .sidebar.open .profile #log_out {
          width: 50px;
          background: none;
        }
        
        /* Home section */
        .home-section {
          position: relative;
          background: #E4E9F7;
          min-height: 100vh;
          top: 0;
          left: 78px;
          width: calc(100% - 78px);
          transition: all 0.5s ease;
          z-index: 2;
        }
        
        .sidebar.open ~ .home-section {
          left: 250px;
          width: calc(100% - 250px);
        }
        
        .home-section .text {
          display: inline-block;
          color: #11101d;
          font-size: 25px;
          font-weight: 500;
          margin: 18px;
        }
        
        /* Media query for smaller screens */
        @media (max-width: 420px) {
          .sidebar li .tooltip {
            display: none;
          }
        }
        `}
      </style>

      <meta charSet="UTF-8" />

      <link rel="stylesheet" href="style.css" />

      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            sx={{
              width: "100%",
              top: 0,
              zIndex: (theme) => theme.zIndex.drawer + 1,
              background: "#003049",
            }}
          >
            <Toolbar>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "50px", width: "50px", marginRight: "20px" }}
                  src={posImage}
                  alt=""
                />
                <Typography
                  className="heading"
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textShadow: "2px 2px 5px red",
                    marginLeft: "50px",
                  }}
                >
                  Sri Satya Sai University Of Technology And Medical Sciences
                  (SSSUTMS)
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '320px', }}>
                
                      {/* <MessagesSquare style={{ fontSize: "18px", color: "#4CAF50" }} />
                      <BellRing style={{ fontSize: "18px", color: "#4CAF50", marginLeft: "20px" }} /> */}
                      <img
                      class="profile_img"
                      src={userData?.Documents?.applicantPhoto}
                      alt="img"
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    ></img>
                  
               
                <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 id="navbarDropdown"
                 role="button"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
                 style={{ marginRight: '20px', padding: '3px' }}
                  
                  >
                  Welcome  {userData?.name}
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        My account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/student/reset/password">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Help
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/erp/hodlogin">
                        Log out
                      </a>
                    </li>
                  </ul>
              
                </div>
                {/* <div className="searchbar">Search</div> */}

              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon" />

            <i className="bx bx-menu" id="btn" />
          </div>
          <ul className="nav-list">
            <Link to="/studentalldetail">
              <li>
                <a href="#">
                  <i className="bx bx-grid-alt" />
                  <span className="links_name"></span>
                </a>
                <span className="tooltip">Home</span>
              </li>
            </Link>

            <li>
              <a
                href="#"
                className={buttonClassName}
                onClick={handleClick}
                disabled={!isEnrolled}
              >
                <i className="bx bx-user" />
                <span className="links_name"></span>
              </a>
              <span className="tooltip">Enrollment</span>
            </li>

            <li>
              <a href="#">
                <i className="bx bx-chat" />
                <span className="links_name"></span>
              </a>
              <span className="tooltip">Examination Form</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name"></span>
              </a>
              <span className="tooltip">Admit Card</span>
            </li>

            <li>
              <a href="#">
                <i className="bx bx-cog" />
                <span className="links_name"></span>
              </a>
              <span className="tooltip">Online Payments</span>
            </li>

            <li>
              <Link to="/erp/studentlogin">
                <a href="#">
                  <i className="bx bx-cog" />
                  <span className="links_name"></span>
                </a>
                <span className="tooltip">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </ThemeProvider>
    </>
  );
};

export default StudentDashboard;