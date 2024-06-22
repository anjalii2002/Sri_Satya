import React from 'react'
import Nav from '../../../HomePage/Nav'
import Footerpage from '../../../HomePage/Footerpage'
import grievance from '../../../images/grievance.jpg'

const Grievance = () => {
  return (
    <>
      <style>
        {
          `
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
       .title p{
 margin-left:-60px;
color:black;
font-size:15px;
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
    .manual p{
        color:black;
        font-size:15px;
        margin-left:80px;
        font-family:'Open Sans', sans-serif;

    }
    .manual h4{
        margin-left:80px;
        font-size:16px;
        font-family:'Open Sans', sans-serif;
        font-weight:bolder;
        margin-top:0px
    }

    .manual hr{
        margin-left:80px;
        width:60%

    }
    .manu h4{
        margin-left:90px;
        font-size:17px;
        font-family:'Open Sans', sans-serif;;
        // font-weight:bolder;
        margin-top:none;
        margin-bottom: 4px;
    }
    .under{
        margin-left: 78px; 
    }
    .under li {
        // list-item-style:disc;
        // padding-left:25px;
        
        font-size: 16px;
        font-weight: normal;
    }
    .contact-detail{
        margin-left:70px;
    }
  
    //   ///////////////////////////////////////////////////////////////////////////////////
    .table {
        border-collapse: collapse;
        width: 100%;
      }
      
      .table,
      .table th,
      .table td {
        border: 1px solid #ccc;
      }
      
      .table th,
      .table td {
        padding: 0.5rem;
      }
      
      .table th {
        position: relative;
         cursor: grab;
            user-select: none;
      }   
         .table th:active {
            cursor: grabbing;
          }
      
   
  `
        }
      </style>
      <Nav />

      <img src={grievance} style={{ height: '300px', width: '100%', filter: 'brightness(50%)' }}></img>
      <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '80px' }}>
        <h4>Grievance Redressal Committee</h4>
        {/* <h3>A tOP-rANKED uNIVERSITY</h3> */}
      </div>


      <div className='manual'>
        <p>The Grievance Redressal Committee was constituted for the Academic Year 2024-2025.</p>
        <h4>Objective:</h4>
        <p>To provide an avenue for the aggrieved students to redress their individual grievances in order to have a healthy atmosphere among students, staff<br></br> and management in the University.</p>
        <h4>
          Responsibilities:
        </h4>
        <p>(a) Committee members meet once a month to discuss and resolve the grievances, if any received in writing from the concerned students.</p>
        <p style={{ marginTop: '-10px' }}>(b) To maintain the minutes of the meetings and submit the copy of the same to the Vice Chancellor.</p>
        <h4>Members:</h4>
      </div>
      {/* <div className='manu'>
                <h4>1 Dr. Hemant Sharma: Professor & Chairman</h4>
                <h4>2 Dr. Santosh Jagwani: Astt Prof & Member</h4>
                <h4>3 Dr. Vijay Prakash: Professor & Member</h4>
                <h4>4 Dr. Minakshi Pathak: Professor & Member Secretary</h4>
                <h4>2 Mr. C S Verma:  Astt Registrar -Non Teaching Member</h4>
            </div> */}



      <div className="container mt-3" style={{ width: '50%', marginRight: '550px' }}>
        <table id="resizeMe" className="resizable-table table table-hover">
          <thead>
            <tr id="header-row">
              <th className="draggable-table" data-column={0}>
                No.
              </th>
              <th className="draggable-table" data-column={1}>
                Name
              </th>
              <th className="draggable-table" data-column={2}>
                Designation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. Hemant Kumar Sharma</td>
              <td>Registrar & Chairman</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mrs. Sujata Kushwaha</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>3</td>
              <td>    Dr. R. S. Kushwaha</td>
              <td>      Member</td>
            </tr>
            <tr>
              <td>4</td>
              <td> Mrs. Priyanka Jhawar</td>
              <td> Member </td>
            </tr>
            <tr>
              <td>5</td>
              <td> Dr. C. K. Tyagi</td>
              <td>  Member Secretary</td>
            </tr>




            <tr>
              <td>6</td>
              <td> Prof. (Dr.) Varsha Namdeo</td>
              <td>  OMBUDSMAN
                
                
                
</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '60px' }}>
        <h4> Student Grievance Redressal Committee</h4>
        {/* <h3>A tOP-rANKED uNIVERSITY</h3> */}
        <p style={{ marginLeft: '10px', fontFamily: "'Open Sans', Sans-serif", fontSize: '16px', width: '85%', textAlign: 'justify' }}>A Student Grievance Redressal System at SSSUTMS University,  a platform that provides students with a means of expressing their concerns and complaints regarding their educational experience. The primary objective of this system is to ensure that all student complaints are heard, addressed, and resolved in a timely and effective manner.The Grievance Redressal Cell (GRC) aims to look into the complaints lodged by any student and redress it as per requirement.The students can state their grievance regarding any academic and non- academic matter within the campus.The Grievance Redressal Cell is constituted to probe into the student grievances. The Grievance Redressal Cell attempts to address genuine problems and complaints of students whatever be the nature of the problem.</p>


      </div>
      <br></br>
      <h4 style={{ marginLeft: '60px', fontSize: '18px', fontWeight: 'bolder' }}>MECHANISM FOR REDRESSAL OF GRIEVANCES OF STUDENTS
      </h4><br></br>
      <p style={{ color: 'black', marginLeft: '60px', fontSize: '16px', width: '85%', textAlign: 'justify' }}>The students are the main stakeholders in any institution imparting education, and it’s our endeavor to make all efforts to ensure transparency in all the activities at different stages. Taking this spirit in consideration the institute has decided to provide mechanism to students for redressal of their grievances as under:</p><br></br>
      <p style={{ color: 'black', marginLeft: '60px', fontSize: '16px' }}>The Grievances may broadly include the following complaints of the aggrieved students:</p>

      <div className='manu'>
        <h4>1. Academic</h4>
        <h4>2. Non-academic</h4><br></br>
        <p style={{ color: 'black', marginLeft: '60px', fontSize: '16px', width: '85%', textAlign: 'justify' }}>It is good to air a grievance rather than to keep it bottled up. Protection of human rights is essential for the all round development of an individual’s personality to realize the primary needs of the students and staff and secure civil liberties for everybody. The cell is indented to find solutions for problems like sexual harassment –any kind of physical or mental harassment, complaints regarding class room teaching-class room management, completion of syllabus, teaching methods etc, if and when they arise. The Grievance Redressal Cell convenes meetings periodically, record the minutes and takes steps to redress the grievance.</p>
      </div>

      <br></br>

      {/* <h4 style={{ marginLeft: '60px', fontSize: '18px', fontWeight: 'bolder' }}>PROCEDURE FOR LODGING COMPLAINT
            </h4><br></br>
            <ul className='under'>
                <li>The students may feel free to put up a grievance in the website link Google form provided.</li>
                <li>The Grievance Cell will act upon those cases which have been forwarded along with the necessary documents.</li>
                <li>The Grievance Cell will assure that the grievance has been properly solved in stipulated time limit provided by the cell</li>
            </ul> */}
      {/* <hr style={{width:'95%',marginLeft:'50px'}}/> */}
      <h4 style={{ marginTop: '10px', marginLeft: '60px', fontSize: '18px', fontWeight: 'bolder' }}>Click on the link to lodge your complaint:   <a href='https://docs.google.com/forms/d/e/1FAIpQLSehjryL2kuWdvukwo2aMVItPtNHmT_DlcGU_8JmqcS759gDNA/viewform?usp=sf_link' target='_blank' style={{ color: "#1982c4" }}> forms/d/e/1FAIpQLSehjryL2kuWdvukwo2aMVItPtNHmT_DlcGU_8JmqcS759gDNA/</a>
      </h4>
      <hr style={{ width: '95%', marginLeft: '50px' }} /><br></br>
      {/* <div className="contact-detail">
                <h4 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bolder' }}>NAME AND CONTACT DETAILS OF THE OMBUDSMAN PERSON :</h4>
                <h5 style={{ color: "black", }}>Prof. (Dr.) Varsha Namdev</h5>
                <h6 style={{ color: "black", }}>
                    9926706746

                </h6>

                <h5 style={{ color: "black", fontWeight: 'bolder' }}>
                    info@sssutms.ac.in
                </h5>

            </div> */}
      <Footerpage />
    </>


  )
}

export default Grievance

