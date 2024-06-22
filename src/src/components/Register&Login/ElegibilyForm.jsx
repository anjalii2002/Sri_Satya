import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Box } from "@chakra-ui/react";
import firebase from "./firebase";
import { Input } from "@chakra-ui/react";
import swal from "sweetalert";
import RegistrationDetailed from "./StudentRegistrationDetailed";

const EligibilityForm = ({
  eligible,
  eligibilityGradPer,
  courseType,
  courseName,
  courseBranch,
}) => {
 
  console.log(eligible,"eligibkle")

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    showRegistrationForm: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
     
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + formData.mobile;

    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // console.log("OTP has been sent");
        setShowOtpInput(true);

        swal({
          title: "OTP Sent Successfully",
          text: `OTP sent your Mobile No.  ${formData.mobile} please enter otp!!!! `,
          icon: "success",
          showConfirmButton: false,
          timer: 10000,
        });
      })
      .catch((error) => {

      });
  };
  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = formData.otp;

    if (window.confirmationResult && code) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
  
          if (result.success) {
            swal({
              title: "Congratulations",
              text: "Registration done successfullly!",
              icon: "success",
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                alert("confirmed");
              }
            });
          } else {
        
          }
        })
        .catch((error) => {
       
          console.error("Error confirming OTP:", error);
          swal({
            title: "ERROR",
            text: "Error confirming OTP. Please try again.",
            icon: "ERROR",
            showConfirmButton: true,
          });
        });
    } else {
      console.error("Confirmation result or OTP code is missing.");
    }
  };
  const openRegistrationForm = () => {
    
    setFormData({
      ...formData,
      showRegistrationForm: true,
    });
  };

  return (
    <>
      <Container
        fluid
        className="container-overflow shadow p-3  mb-9 bg-body rounded"
        style={{ maxWidth: "90%", overflowY: "auto", height: "40vh" }}
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
        <Table responsive>
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
        <Row className="form-input">
          {showOtpInput && (
            <Col xs={12} md={6}>
              <form onSubmit={onSubmitOTP}>
                <Input
                  style={{ marginTop: "8px" }}
                  type="number"
                  name="otp"
                  placeholder="OTP No."
                  required
                  value={formData.otp}
                  onChange={handleChange}
                />
                <Button style={{ marginTop: "8px" }} type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          )}
        </Row>
      </Container>
      {formData.showRegistrationForm ? (
        <RegistrationDetailed
          courseType={courseType}
          courseName={courseName}
          courseBranch={courseBranch}
          eligibility={eligible}
          eligibilityGradPer={eligibilityGradPer}
        />
      ) : (
        <Button
        style={{margin: "20px auto",
          display: "block",
          backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
          color: "white",
          width: "w-20 w-md-auto",
          border: "none",
          borderRadius: "5px",
          fontSize: "15px", 
          padding: "10px 20px",

        }}
          onClick={openRegistrationForm}
        >
          Continue
        </Button>
      )}
    </>
  );
};

export default EligibilityForm;