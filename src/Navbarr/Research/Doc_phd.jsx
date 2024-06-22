import React from "react";
import Nav from "../../HomePage/Nav";
import Footerpage from "../../HomePage/Footerpage";
import { Link } from "react-router-dom";
const DoctoralProgramsPhD = () => {
    return (
        <>
            <style>
                {`.privacy-page-top {
      color: #023047;;
      font-family: 'Cabin', sans-serif;
      font-size: 1.5em;
      margin-top: 2%;
      font-weight: bold;
      margin-left: 4%;
  }
  .privacy-page-body {
      display: inline-block;
      margin-left: 4%;
      margin-right: 5%;
  }
  
  .privacy-page-title {
      font-family: "Roboto", sans-serif;
      color:#023047;
      text-transform:uppercase;
      font-size:1.5em;
      margin-bottom: 2%;
      font-weight: bold;
      display: inline-block;
      width: 70%;
      margin-top:20px
      
  }
  
  .privacy-paragraph-heading {
      font-family: "Abhaya Libre", sans-serif;
      color: black;
      font-weight: bolder;
      font-size: 1em;
      margin-bottom: 3%;
  }
  
  .privacy-content {
      font-family: 'Abhaya Libre', sans-serif;
      margin-bottom: 2%;
      display: inline-block;
      width: 90%;
  }
  
  .privacy-paragraph-body{
      margin-right: 4%;
      margin-bottom: 4em;
  }
  
  .privacy-paragraph-text-followed{
      margin-bottom:1em;
      color: #717171;
  }
  
  .privacy-paragraph-text {
      color: black;
      text-align: justify
  }
  
  .privacy-paragraph-body {
      line-height: 2em;
      font-family: 'Cabin', sans-serif;
  }
  
  .privacy-policy-nav-menu {
      width:27%;
      display: inline-block;
      position: relative;
      vertical-align: top;
  }
  
  .privacy-nav-menu-wrapper{
      background-color: #f39c12;
      list-style-type: none;
      padding: 0;
      margin:0;
      display: block;
  }
  
  .privacy-nav-menu-wrapper a{
      display: block;
      height: inherit;
      width: inherit;
      padding-left: 1em;
      padding-bottom: 1em;
      padding-top: 1em;
  }
  
  .privacy-nav-menu2, .privacy-nav-menu1{
      display: block;
      background-color: #f39c12;
  }
  .site-map-link:hover, .privacy-policy-link, .privacy-policy-link:hover {
      color: white;
      text-decoration: none;
  
  }
  
  .privacy-nav-menu2 {
      background-color: white;
      border-bottom-width: 2px;
      border-bottom-style: groove;
      border-bottom-color: #f6f6f6;
  }
  
  .site-map-link{
      color: #f39c12;
      text-decoration: none;
  
  }
  
  .privacy-nav-menu2:hover{
      background-color: #f39c12;
  }
  
  @media (max-width: 481px) {
  
      .privacy-page-body, .privacy-page-top, .privacy-page-title, .privacy-content {
          width: 90%;
          margin-right: 0;
          text-align: left;
      }
  
      .privacy-policy-nav-menu {
          width: 80%;
          margin-bottom: 3.5em;
      }
  
      .privacy-page-top {
          padding-bottom: 15px;
      }
  
      .privacy-page-title {
          font-size: 3em;
          line-height: 1em;
      }
  `}
            </style>
            <Nav />
          
            <div className="privacy-page-body">
                <div className="privacy-content">
                    <div className="privacy-page-title" >Doctoral Programs PhD</div>
                    <hr style={{ color: '#f3722c', width: '1400px',marginTop:'-10px' }}></hr>
                    <div className="privacy-paragraph-body privacy-paragraph-text" >
                        Sri Satya Sai University Of Technology And Medical Sciences Sehore
                        offers Doctoral Programs (PHD) in various research areas. At present
                        Ph. D programme is being offered in the Faculty of Engineering &
                        Technology, Pharmacy, Management, Education, Basic & applied
                        Sciences, Commerce, Social Sciences, Humanities and English etc...{" "}
                        <br />
                        <br />
                        <b style={{ color: "BlueViolet" }}>
                            Information about Ph. D degree Awarded by The University during
                            the Year 2018
                        </b>{" "}
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/phd/phd248/RESEARCH%20POLICY.pdf">
                            <b style={{ color: "CornflowerBlue" }}>Ø Reserach Policy</b></Link>  <br />

                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/phd/phd248/RAC%20%281%29.pdf">  <b style={{ color: "CornflowerBlue" }}>
                            Ø Constitution of Research Advisory Committee(RAC)
                        </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Ordinance/Ordinance.pdf">
                            <b style={{ color: "CornflowerBlue" }}>Ø Admission Policy</b></Link> <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/phd/phd248/fellowhip%20%281%29.pdf">
                            <b style={{ color: "CornflowerBlue" }}>
                                Ø Fellowship/Scholarship Policy
                            </b>
                        </Link>{" "}

                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/phd/phd248/RAC%20%281%29.pdf">
                            <b style={{ color: "CornflowerBlue" }}>Ø Ethics Committee </b>
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/phd/phd248/Grievances%20%281%29%20%281%29.pdf">
                            <b style={{ color: "CornflowerBlue" }}>
                                Ø Grievance Cell
                            </b> </Link> <br /> <br />

                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/PHD_FEE2021.pdf">
                            <b style={{ color: "BlueViolet" }}>
                                · Fees Structure of Ph.D (w.e.f. 03-08-2021)
                            </b>
                        </Link>{" "}
                        <br />
                        <Link to="">
                            <b style={{ color: "CornflowerBlue" }}>
                                · Download Syllabus for Ph.D.(Course Work)
                            </b>
                        </Link>{" "}
                        <br /> <br />
                        <b style={{ color: "BlueViolet" }}>FIRST SEMESTER</b>{" "}
                        <b style={{ color: "red" }}>(w.e.f. 2021-22)</b>
                        <br />
                        <Link to="https://sssutms.co.in/cms/Areas/Website/Files/Link/Phd/RM_2021.pdf">
                            <span style={{ color: "BlueViolet" }}>
                                Research Methodology{" "}
                            </span>
                        </Link>{" "}
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/AA_R_SS_I.pdf">
                            <span style={{ color: "BlueViolet" }}>
                                Subject Specialization- I
                            </span>
                        </Link>{" "}
                        <br /> <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/RDCSYP_2.pdf">
                             <b style={{ color: "CornflowerBlue", }}>
                                Format for RDC Synopsis{" "}
                            </b>
                        </Link>{" "}
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/PHDCONFR.pdf">

                             <b style={{ color: "CornflowerBlue", }}>
                                Format of Confidential Progress Report
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/PHDNOT16.pdf">
                             <b style={{ color: "CornflowerBlue", }}>
                                {" "}
                                Circular: Prior to submission of Ph.D. Thesis
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/PHDTHGUIDE_RRev.pdf">
                            <b style={{ color: "CornflowerBlue", }}>
                                Guideline for Ph.D. Pre Submission Viva Voce
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/Phd_Pre_submission_Form_2.pdf">
                            <b style={{ color: "CornflowerBlue", }}>
                                Proforma for Pre-submission of the Thesis
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/PHDTHFORMAT_RR.pdf">
                              <b style={{ color: "CornflowerBlue", }}>
                                Guideline/Format for preparing Thesis /Dissertation/Summary
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/PHDTHFORMAT_RR_(1)_02062022_1255.pdf">
                             <b style={{ color: "CornflowerBlue", }}>
                                Guideline/Format for preparing Thesis /Dissertation/Summary
                                (Hindi)
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/Phd_Final_submission_Form_2.pdf">
                             <b style={{ color: "CornflowerBlue", }}>
                                Proforma for Final-submission of the Thesis
                            </b>{" "}
                        </Link>
                        <br />
                        <Link to="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Phd/Co_supervisior.pdf">
                              <b style={{ color: "CornflowerBlue", }}>
                                Proforma for Approval of Co-Supervisor
                            </b>
                        </Link>
                    </div>
                </div>
               
            </div>
            <Footerpage />
        </>
    );
};

export default DoctoralProgramsPhD;