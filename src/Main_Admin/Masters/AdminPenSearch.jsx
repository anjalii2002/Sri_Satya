
import React, { useState } from "react";
import { FormControl, Select } from "@mui/material";
import { Button, Row, Col, Container } from "react-bootstrap";
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import SearchPen from "./SearchPen";

function AdminPenSearch() {
  const [admissionSession, setAdmissionSession] = useState('');
  const [courseType, setCourseType] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseBranch, setCourseBranch] = useState('');
  const [assignedCollege, setAssignedCollege] = useState('');
  const [showTable, setShowTable] = useState(false);


  const handleSearch = () => {
    if(!admissionSession || !courseType || !courseName || !courseBranch || !assignedCollege){
      alert("please fill all fields first")
      return;
    }
    setShowTable(true)
  }

  return (
    <>
      <AdminDashboard />

      <style>
        {`
         .shadow-box {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          padding: 10px;
          margin-top: 20px;
          width: 100%; /* Adjusted width */
          margin-left:75px;
          height:92%;
        }

          .header {
            height: 50px;
            background: linear-gradient(#004e92, #990033);
            border-radius: 10px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-family: italic;
          }

          .scroll-container {
            overflow-y: auto;
            margin-top: 10px;
          }

          .login-input {
            width: 100%;
            border: none;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            background: transparent;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            transition: border-bottom 0.2s;
          }

          .login-input:focus {
            outline: none;
            border-bottom: 2px solid #344e41;
          }

          @media (max-width: 768px) {
            .shadow-box {
              padding: 10px;
              margin-top: 10px;
            }

            .header {
              font-size: 16px;
              height: 40px;
            }

            .login-input {
              font-size: 0.9rem;
            }
          }
          
          @media (max-width: 576px) {
            .shadow-box {
              margin: 10px;
              margin-Left:76px;
            }

            .container-fluid {
              width: 100%;
              padding-right: 0;
              padding-left: 0;
            }
          }
          @media (min-width: 992px) { 
    .custom-laptop-style {
       margin-left:5%;
    }
}

        `}
      </style>

      <div style={{display:"flex"}}>
      <div style={{width:'25%'}}>
      <Container fluid style={{ paddingTop: '60px' }}>
        <Row>
          <Col>
            <div className="shadow-box">
              <div className="header">Student Pending List</div>
              <div className="scroll-container" style={{ height: "460px" }}>
                <form style={{ padding: "30px" }}>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Session *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setAdmissionSession(e.target.value)}
                        autoFocus={true}

                      >

                        <option value="option1"> Select</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </FormControl>
                  </Row>

                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Course Type *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCourseType(e.target.value)}
                        autoFocus={true}
                      >

                        <option value="option1"> Select</option>
                        <option value="UG">UG</option>

                      </select>
                    </FormControl>
                  </Row>

                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Course *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCourseName(e.target.value)}
                        autoFocus={true}
                      >
                        {/* Add your dropdown options here */}
                        <option value="option1"> Select</option>
                        <option value="BACHELOR OF AYURVEDIC MEDICINE AND SURGERY">BAMS</option>
                        <option value="BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY">BHMS</option>
                        {/* <option value="BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)">B.A.B.ED</option> */}
                      </select>
                    </FormControl>
                  </Row>
                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Branch *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCourseBranch(e.target.value)}
                        autoFocus={true}
                      >
                        {/* Add your dropdown options here */}
                        <option value="option1"> Select</option>
                        {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="AYURVEDIC MEDICINE AND SURGERY">AYURVEDIC MEDICINE AND SURGERY</option>}
                        {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="HOMEOPATHY">HOMEOPATHY</option>}
                        {/* {courseName === "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)" && <option value="BACHELOR OF ARTS BACHELOR OF EDUCATION">BABED</option>} */}
                      </select>
                    </FormControl>
                  </Row>



                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          College *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setAssignedCollege(e.target.value)}
                        autoFocus={true}
                      >
                        <option value="option1"> Select</option>
                        {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="School of Ayurveda and Siddha Studies">School of Ayurveda and Siddha Studies</option>}
                        {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="School of Homoeopathy">School of Homoeopathy</option>}
                      </select>
                    </FormControl>
                  </Row>
                  <br></br>



                  <br></br>
                  {/* <Link to={`/search/${admissionSession}/${courseType}/${courseName}/${courseBranch}`} > */}

                  <Row>
                    <Button
                      style={{
                        marginLeft: "50px",
                        backgroundColor: "#004e92",
                        width: "110px",
                        height: "40px",
                        padding: "5px",
                      }}
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </Row>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div style={{ width: '90%' }}>

        {showTable && (
          <div>
            <SearchPen
             admissionSession={admissionSession}
              courseType={courseType}
              courseName={courseName}
              courseBranch={courseBranch}
              assignedCollege={assignedCollege}
            />
          </div>
        )}
      </div>
      </div>
    </>
  );
}
export default AdminPenSearch;

