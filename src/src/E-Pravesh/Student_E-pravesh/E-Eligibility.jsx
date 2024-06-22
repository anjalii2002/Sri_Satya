
/////////////////////////////////////////abhi ka code///////////////////////////////
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom"


const E_eligibility_Form = ({ 
 courseName , courseType , courseBranch,
  eligible, eligibilityGradPer
 }) => {

  const navigate = useNavigate()
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [timer, setTimer] = useState(60);
  const [disableSendOTP, setDisableSendOTP] = useState(false);
  const [otpVerified,setOtpVerified] = useState(false)
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setDisableSendOTP(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  console.log(disableSendOTP, "Disabe ")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const sendOTP = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return alert("Please enter a valid email address.");
    }
    axios
      .post(process.env.REACT_APP_STD_OTP, { email: formData.email })
      .then((response) => {
        if (response.data && response.data.error === "OTP expired") {
          return sendOTP();
        }
        swal("Success", "OTP sent successfully", "success");
        setShowOtpInput(true);
        setDisableSendOTP(true);
        setTimer(60);
      })
      .catch((error) => {
        swal("Error", "Failed to send OTP! This Email is already  registered", "error");
      });
  };

  const verifyOTP = () => {
    const otp = formData.otp.trim();
    setFormData({ ...formData, otp: "" })
    axios
      .post(process.env.REACT_APP_VERIFY_OTP, {
        email: formData.email,
        otp,
      })
      .then((response) => {
        swal("Success", "OTP verified successfully", "success");
        setShowOtpInput(false)
        setOtpVerified(true)
        setDisableSendOTP(false);
      }

      )
      .catch((error) => {
        swal("Error", "Incorrect OTP", "error");
      });

  };

  function FormSubmit() {
    // if (!formData.email || !otpVerified){
    //   alert("fill the email & otp first!!")
    //   return;
    // }
  
   const email = formData.email;
    // if (!checked) {
    //   alert("check the check box first!!")
    //   return;
    // }
    navigate("/Epravesh/Student/RegisterForm", { state: { courseType, courseName, courseBranch , email } })
  }

  const handleCheckBox = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <Container
      fluid
      className="shadow p-3  mb-9 bg-body rounded"
      style={{ maxWidth: "90%", height: "50vh", overflowX: "hidden" }}
    >
      <Box
        marginBottom={"20px"}
        backgroundColor={"#264653"}
        p={4}
        h={50}
        color="white"
        mt={8}
        borderRadius="md"
        shadow="md"
      >
        Check Eligibility
      </Box>
      <Table>
        <tbody>
          <tr>
            <td>Eligibility</td>
            <td>:</td>
            <td
              style={{
                color: "#e63946",
                fontFamily: "inherit",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {eligible.eligibility}
            </td>
          </tr>
          <tr>
            <td>Eligibility %</td>
            <td>:</td>
            <td>
              <Row className="equal-width-boxes">
                <Col xs={6} md={2}>
                  General: {eligibilityGradPer.gen}
                </Col>
                <Col xs={6} md={2}>
                  SC: {eligibilityGradPer.sc}
                </Col>
                <Col xs={6} md={2}>
                  ST: {eligibilityGradPer.st}
                </Col>
                <Col xs={6} md={2}>
                  OBC: {eligibilityGradPer.obc}
                </Col>
                <Col xs={6} md={2}>
                  PH: {eligibilityGradPer.ph}
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>

      <Row style={{ display: "flex" }}>
        <Row className="form-input">
          <Col>
            <Input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </Col>

          <Col>
            <Button
              style={{
                display: "block",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                padding: "10px 20px",
              }}
              onClick={sendOTP}
              disabled={!formData.email || disableSendOTP}
            >
              {disableSendOTP ? `Resend OTP(${timer}s)` : `Send OTP `}
            </Button>
          </Col>

          {showOtpInput && (
            <>
              <Col>
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Button
                  style={{
                    display: "block",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "15px",
                    padding: "10px 20px",
                  }}
                  onClick={verifyOTP}
                >
                  Verify OTP
                </Button>
              </Col>
            </>
          )}
        </Row>

      </Row>
      <Box>
        <input type="checkbox" checked={checked} onChange={handleCheckBox} /> I have read all the info!!

      </Box>
      <Button
        style={{
          margin: "20px auto",
          display: "block",
          backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
          color: "white",
          width: "w-20 w-md-auto",
          border: "none",
          borderRadius: "5px",
          fontSize: "15px",
          padding: "10px 20px",
        }}
        onClick={FormSubmit}
      // disabled={!checked}
      >
        Continue
      </Button>
  
    </Container>
    
  );
};

export default E_eligibility_Form;


