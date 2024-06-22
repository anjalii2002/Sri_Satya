import React from 'react';
import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';


function HistoryMilestone() {
  return (
    <>
      <Nav />
      <style>
        {
        `
    //   h1, h2, h3, h4, h5, h6 {
    //     color: #2c3145;
    // }
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        outline: none;
    }
    // ul {
    //     margin: 0;
    //     padding: 0;
    //     list-style: none;
    // }
    
    .section_all {
        position: relative;
        padding-top: 20px;
        padding-bottom: 80px;
        min-height: 100vh;
    }
    .section-title {
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: 1px;
    }
    
    .section-subtitle {
        letter-spacing: 0.4px;
        line-height: 28px;
        max-width: 550px;
    }
    
    .section-title-border {
        background-color: #000;
        height: 1 3px;
        width: 44px;
    }
    
    .section-title-border-white {
        background-color: #fff;
        height: 2px;
        width: 100px;
    }
    .text_custom {
        color: #00bd2a;
    }
    
    .about_icon i {
        font-size: 22px;
        height: 65px;
        width: 65px;
        line-height: 65px;
        display: inline-block;
        background: #fff;
        border-radius: 35px;
        color: #00bd2a;
        box-shadow: 0 8px 20px -2px rgba(158, 152, 153, 0.5);
    }
    
    .about_header_main .about_heading {
        max-width: 450px;
        font-size: 24px;
    }
    
    .about_icon span {
        position: relative;
        top: -10px;
    }
    
    .about_content_box_all {
        padding: 28px;
    }
    `}</style>
      <section className="section_all " id="about" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title_all text-center">
                <h3 className="font-weight-bold" style={{ color: '#780000' }}>
                  ABOUT <span className="text-custom">SSSUTMS</span>
                </h3>
                <p className="section_subtitle mx-auto text-muted" style={{ fontWeight: "700" }}>
                Sri Satya Sai Campus in Sehore was established in 1999 with the Sri Satya Sai Institute of Science & Technology (SSSIST)                  <br />
                Initially, SSSIST offered three branches of engineering education with a total intake capacity of 180 students.
                </p>
                <div>
                  <i />
                </div>
              </div>
            </div>
          </div>
          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box">
                  <p className="text_custom font-weight-bold " style={{ fontWeight: '700' }}>
                    SRI SATYA SAI UNIVERSITY OF TECHNOLOGIES AND MEDICAL SCIENCES
                  </p>
                </div>
                {/* <h4 className="about_heading text-capitalize font-weight-bold mt-4">
              Lorem Ipsum is simply dummy text of the printing industry.
            </h4> */}
                <p className="text-muted mt-3" style={{ textAlign: 'justify' ,color:'black'}}>
                  In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, with total intake of 3054  students. Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States, due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
                  Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. Growth rate recorded recently is 21.5%.
                </p>
                {/* <p >
              {" "}
              Literacy rate of Sehore district is 71.11% which was 63.07% in 2001. Gender wise, male and female literacy were 82.37 and 58.86 respectively in year 2011, which in 2001 census, were 77.28% and 47.36%. 9 % of mothers between 17-55 years of age can read and this percentage is bound to increase in future. Sri Satya Sai Group of Institutions can humbly claim some role in these statistics.
            </p> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about " style={{ marginTop: '60px' }}>
                <img
                  src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i class="fa-solid fa-medal"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Sporting Excellence
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted">
                    An unmatched pursuit for sporting passion, within your academic journey
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fab fa-angellist" />
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Start Ups
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    An Incubation environment for innovative student entrepreneurship projects
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                    Cutting Edge Research
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted">
                    Leading the search for knowledge with our highly equipped research facilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerpage /></>
  )
}

export default HistoryMilestone