import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Box } from "@chakra-ui/react";
import swal from "sweetalert"

const EntranceEligibilityForm = ({ eligible, eligibilityGradPer, courseType, courseName, courseBranch }) => {
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
  const [IsEligible, setIsEligible] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUrls, setFileUrls] = useState({
    applicantPhoto: '',
    applicantSignature: '',
  });


  const navigate = useNavigate();

  const uploadFileToCloudinary = async (file, fieldName) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'upload');

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dszawxz7y/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload file to Cloudinary');
      }


      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
      throw new Error('Error uploading file to Cloudinary');
    }
  };

  const validateFile = async (file, fieldName) => {
    console.log(file.size, "file inside validate")

    try {
      if (!file || file.size > 1024 * 1024) {
        throw new Error("File size should be less than 1MB");
      }

      const fileUrl = await uploadFileToCloudinary(file, fieldName);

      setFileUrls((prevFileUrls) => ({
        ...prevFileUrls,
        [fieldName]: fileUrl,
      }));

      clearErrors(fieldName)

    } catch (error) {
      console.error('File validation/upload error:', error);
      throw error;
    }
  };


  const handleFileChange = async (file, fieldName) => {
    try {
      console.log(file, "file ")
      if (!file) {
        throw new Error("No file selected");
      }

      await validateFile(file, fieldName);

      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('File validation/upload error:', error);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const name = data.name;
    console.log(name, "namee")
    try {
      const enteredCategory = data.category;
      // console.log(enteredCategory, "category")
      const enteredPercentage = data.twelfthPercentage;
      //console.log(enteredPercentage, "entered percentage")
      const eligibilityPercentage = eligibilityGradPer[enteredCategory];
      //console.log(eligibilityPercentage, "El percentage")
      if (!isNaN(enteredPercentage) && enteredPercentage >= eligibilityPercentage) {
        setIsEligible(true);
      } else {
        alert('You Are Not Eligible ')
        setIsEligible(false);
      }

      if (IsEligible) {
        const response = await axios.post(process.env.REACT_APP_ENTRANCE_DETAILS, {
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          fathersname: data.fathersname,
          mothersname: data.mothersname,
          dob: data.dob,
          religion: data.religion,
          category: data.category,
          gender: data.gender,
          domicile: data.domicile,
          address: data.address,
          courseType: courseType,
          courseBranch: courseBranch,
          courseName: courseName,
          academicFormData: {
            tenthRollNo: data.tenthRollNo,
            tenthPassingYear: data.tenthPassingYear,
            tenthBoard: data.tenthBoard,
            tenthPercentage: data.tenthPercentage,
            twelfthPassingYear: data.twelfthPassingYear,
            twelfthRollNo: data.twelfthRollNo,
            twelfthBoard: data.twelfthBoard,
            twelfthPercentage: data.twelfthPercentage,
            graduationPassingYear: data.graduationPassingYear,
            graduationRollNo: data.graduationRollNo,
            graduationBoard: data.graduationBoard,
            graduationPercentage: data.graduationPercentage,
            postGraduationPassingYear: data.postGraduationPassingYear,
            postGraduationRollNo: data.postGraduationRollNo,
            postGraduationBoard: data.postGraduationBoard,
            postGraduationPercentage: data.postGraduationPercentage,
          },
          fileUrls
        });
        console.log(IsEligible)

        const id = response.data._id;
        // console.log(error.response.data)
        if (response.status === 500) {
          alert('Something went wrong');
        } else {
          swal({
            icon: "success",
            title: "Form Submitted",
            text: "Dear Student your Form has been submitted  Successfully, Now pay the fee!",

          }).then(() => {
            navigate('/entrance/payment', { state: { courseType, courseName, id, name } });
          });
        }
      }
    } catch (error) {
      console.log(error.response.data.status, "response")
      if (error.response.data.status == 402) {
        const registered = error.response.data.Registered;
        console.log(registered, "Registration Dat")
        const id = registered[0]._id;
        const name = registered[0].name;
        navigate('/entrance/payment', { state: { courseType, courseName, courseBranch, id, name } });
      }
      console.error('Error submitting form:', error);

    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };
  // Your file handling logic remains the same

  //////////////////eligibility////////////////
  const handleContinue = () => {
    setShowSecondForm(true);
  };


  console.log(fileUrls)

  return (
    <>
      <Container
        fluid
        className="container-overflow shadow p-3  mb-9 bg-body rounded"
        style={{ maxWidth: "90%", overflowY: "auto", height: "42vh" }}
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
                  <Col xs={1} md={2}>
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

      </Container>
      {!showSecondForm && (
        <Button
          style={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "#264653",
            color: "white",
            width: "w-20 w-md-auto",
            border: "none",
            borderRadius: "5px",
            fontSize: "15px",
            padding: "10px 20px",
          }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      )}
      {showSecondForm && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-xl px-1 mt-3">
              <hr className="mt-0 mb-4" />

              <div className="col-xl-12">
                <div className="card mb-4">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#264653", color: "white" }}
                  >
                    Basic Details
                  </div>
                  <div className="card-body">

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName" >
                          Name
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px", textTransform: "uppercase" }}
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          name="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Enter your Name"
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </div>


                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">
                          Applicant Photo
                        </label>
                        <input
                          style={{ height: "40px" }}
                          className="form-control"
                          id="inputFirstName"
                          type="file"
                          name="applicantPhoto"
                          {...register("applicantPhoto", {
                            required: true,
                          })}
                          onChange={(event) => handleFileChange(event.target.files[0], "applicantPhoto")}

                        />
                        {errors.applicantPhoto && errors.applicantPhoto.type === "required" && (
                          <span className="text-danger">This field is required</span>
                        )}
                        {errors.applicantPhoto && errors.applicantPhoto.message && (
                          <span className="text-danger">{errors.applicantPhoto.message}</span>
                        )}

                      </div>

                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        {/* <select id="countryCode">
                          <option value="1">+1 (USA)</option>
                          <option value="44">+44 (UK)</option>
                          <!-- Add more options for different countries as needed -->
                        </select> */}
                         <label className="small mb-1" htmlFor="inputFirstName">
                          mobile NO.
                          .
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          name="mobile"
                          id="inputOrgName"
                          {...register('mobile', {
                            required: true,
                            pattern: /^[0-9]{10}$/
                          })} type="NUMBER"
                        />

                        {errors.mobile && errors.mobile.type === "required" && (
                          <span className="text-danger">This field is required</span>
                        )}
                        {errors.mobile && errors.mobile.type === "pattern" && (
                          <span className="text-danger">Invalid phone number format</span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">
                          Signature
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          id="inputFirstName"
                          type="file"
                          name="applicantSignature"
                          {...register("applicantSignature", {
                            required: true,
                            // validate: validateFile
                          })}
                          onChange={(event) => handleFileChange(event.target.files[0], "applicantSignature")}
                        />
                        {errors.applicantSignature && errors.applicantSignature.type === "required" && (
                          <span className="text-danger">Applicant Signature is required</span>
                        )}
                        {errors.applicantSignature && errors.applicantSignature.message && (
                          <span>{errors.applicantSignature.message}</span>
                        )}

                      </div>

                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">
                          Father's Name
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px", textTransform: "uppercase" }}
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          name='fathersname'
                          {...register("fathersname", { required: "fathersname is required" })}
                          placeholder="Enter your father's name"
                        />
                        {errors.fathersname && <span className="text-danger">{errors.fathersname.message}</span>}
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">
                          Mother's Name
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px", textTransform: "uppercase" }}
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          name="mothersname"
                          {...register("mothersname", { required: "mothersname is required" })}
                          placeholder="Enter your mother's name"
                        />
                        {errors.mothersname && <span className="text-danger">{errors.mothersname.message}</span>}
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">
                          DOB
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          id="inputPhone"
                          type="date"
                          name="dob"
                          {...register("dob", { required: "Date of Birth  is required" })}
                          placeholder="Enter your date of birth"
                        />
                        {errors.dob && <span className="text-danger">{errors.dob.message}</span>}
                      </div>


                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">
                          Email
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                          placeholder="ENTER YOUR EMAIL"
                        />

                        {errors.email && errors.email.type === "required" && (
                          <span className="text-danger">This field is required</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <span className="text-danger">Invalid email format</span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="mb-1" htmlFor="inputGender">
                          Category
                        </label>
                        <select
                          className="form-control"
                          id="inputGender"
                          name="category"
                          style={{ height: "45px", borderRadius: "8px" }}
                          {...register("category", { required: "category is required" })}
                        >
                          <option value="">SELECT CATEGORY </option>
                          <option value="gen">Gen</option>
                          <option value="sc">SC</option>
                          <option value="st">ST</option>
                          <option value="obc">OBC</option>
                        </select>
                        {errors.category && <span className="text-danger">{errors.category.message}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputGender">
                          Gender
                        </label>
                        <select
                          className="form-control"
                          id="inputGender"
                          name="gender"
                          style={{ height: "45px", borderRadius: "8px" }}
                          {...register("gender", { required: "gender is required" })}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">
                          Domicile
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          name="domicile"
                          {...register("domicile", { required: "Domicile is required" })}
                          placeholder='ENTER YOUR DOMICILE'
                        />
                        {errors.domicile && <span className="text-danger">{errors.domicile.message}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">
                          Religion
                        </label>
                        <input
                          style={{ height: "40px", borderRadius: "8px" }}
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          name="religion"
                          {...register("religion", { required: "Religion is required" })}
                          placeholder='ENTER YOUR RELIGION'
                        />
                        {errors.religion && <span className="text-danger">{errors.religion.message}</span>}
                      </div>

                    </div>{" "}


                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Address
                      </label>
                      <textarea
                        style={{ height: "40px", borderRadius: "8px" }}
                        className="form-control"
                        id="inputAddress"
                        type="address"
                        name="address"
                        {...register("address", { required: "Address is required" })}
                        placeholder="ENTER YOUR ADDRESS "
                      />
                      {errors.address && <span className="text-danger">{errors.address.message}</span>}
                    </div>


                  </div>
                </div>
              </div>
              {/* ////////////////////////////Academic details//////////////////////////////////////// */}
              <div className="col-xl-12">
                <div className="card mb-4">
                  <div className="card-header" style={{ backgroundColor: "#264653", color: "white" }}>
                    Education Details
                  </div>
                  <div className="card-body">

                    {['UG', 'PG', 'Diploma', 'PG_DIPLOMA'].includes(courseType) && (
                      <>
                        <div className="row gx-3 mb-3">
                          <h6>10th DETAILS</h6>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="tenthRollNo">
                              Roll No
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="tenthRollNo"
                              {...register("tenthRollNo", { required: "TenthRollNumber is required" })}
                              type="text"
                            />
                            {errors.tenthRollNo && <span className="text-danger">{errors.tenthRollNo.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="tenthPassingYear">
                              Passing Year
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="tenthPassingYear"
                              type="number"
                              {...register("tenthPassingYear", { required: "TenthPassingYear is required" })}
                            />
                            {errors.tenthPassingYear && <span className="text-danger">{errors.tenthPassingYear.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="tenthBoard">
                              Board/University
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="tenthBoard"
                              type="text"
                              {...register("tenthBoard", { required: "TenthBoard is required" })}
                            />
                            {errors.tenthBoard && <span className="text-danger">{errors.tenthBoard.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="tenthPercentage">
                              Percentage
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="tenthPercentage"
                              type="number"
                              {...register("tenthPercentage", { required: "TenthPercentage is required" })}
                            />
                            {errors.tenthPercentage && <span className="text-danger">{errors.tenthPercentage.message}</span>}
                          </div>
                        </div>
                        <div className="row gx-3 mb-3">
                          <h6>12th DETAILS</h6>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="twelfthRollNo">
                              Roll No
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="twelfthRollNo"
                              {...register("twelfthRollNo", { required: "TwelfthRollNo is required" })}
                              type="text"
                            />
                            {errors.twelfthRollNo && <span className="text-danger">{errors.twelfthRollNo.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="twelfthPassingYear">
                              Passing Year
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="twelfthPassingYear"
                              type="number"
                              {...register("twelfthPassingYear", { required: "twelfthPassingYear is required" })}
                            />
                            {errors.twelfthPassingYear && <span className="text-danger">{errors.twelfthPassingYear.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="twelfthBoard">
                              Board/University
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="twelfthBoard"
                              type="text"
                              {...register("twelfthBoard", { required: "twelfthBoard is required" })}
                            />
                            {errors.twelfthBoard && <span className="text-danger">{errors.twelfthBoard.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="twelfthPercentage">
                              Percentage
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="twelfthPercentage"
                              type="number"
                              {...register("twelfthPercentage", { required: "twelfthPercentage is required" })}
                            />
                            {errors.twelfthPercentage && <span className="text-danger">{errors.twelfthPercentage.message}</span>}
                          </div>
                          {/* Repeat similar input fields for 12th details */}
                        </div>
                      </>
                    )}

                    {courseType === 'PG' && (
                      <>

                        {/* PG fields */}


                        <div className="row gx-3 mb-3">
                          <h6>UG DETAILS </h6>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="graduationRollNo">
                              Roll No
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="graduationRollNo"
                              type="text"

                            />
                            {errors.graduationRollNo && <span className="text-danger">{errors.graduationRollNo.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="graduationPassingYear">
                              Passing Year
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="graduationPassingYear"
                              type="number"

                            />
                            {errors.graduationPassingYear && <span className="text-danger">{errors.graduationPassingYear.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="graduationBoard">
                              Board/University
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="graduationBoard"
                              type="text"

                            />
                            {errors.graduationBoard && <span className="text-danger">{errors.graduationBoard.message}</span>}
                          </div>
                          <div className="col-md-3">
                            <label className="small mb-1" htmlFor="graduationPercentage">
                              CGPA
                            </label>
                            <input
                              style={{ height: "40px", borderRadius: "8px" }}
                              className="form-control"
                              id="graduationPercentage"
                              type="number"
                            />
                            {errors.graduationPercentage && <span className="text-danger">{errors.graduationPercentage.message}</span>}
                          </div>
                        </div>
                      </>
                    )}
                    {courseType === "PG_DIPLOMA" && (
                      <div className="row gx-3 mb-3">
                        <h6>PG DETAILS </h6>
                        <div className="col-md-3">
                          <label className="small mb-1" htmlFor="postGraduationRollNo">
                            Roll No
                          </label>
                          <input
                            style={{ height: "40px", borderRadius: "8px" }}
                            className="form-control"
                            id="postGraduationRollNo"
                            type="text"
                          />
                          {errors.postGraduationRollNo && <span className="text-danger">{errors.postGraduationRollNo.message}</span>}
                        </div>
                        <div className="col-md-3">
                          <label className="small mb-1" htmlFor="postGraduationPassingYear">
                            Passing Year
                          </label>
                          <input
                            style={{ height: "40px", borderRadius: "8px" }}
                            className="form-control"
                            id="postGraduationPassingYear"
                            type="number"
                          />
                          {errors.postGraduationPassingYear && <span className="text-danger">{errors.postGraduationPassingYear.message}</span>}
                        </div>
                        <div className="col-md-3">
                          <label className="small mb-1" htmlFor="postGraduationBoard">
                            Board/University
                          </label>
                          <input
                            style={{ height: "40px", borderRadius: "8px" }}
                            className="form-control"
                            id="postGraduationBoard"
                            type="text"

                          />
                          {errors.postGraduationBoard && <span className="text-danger">{errors.postGraduationBoard.message}</span>}
                        </div>
                        <div className="col-md-3">
                          <label className="small mb-1" htmlFor="postGraduationPercentage">
                            CGPA
                          </label>
                          <input
                            style={{ height: "40px", borderRadius: "8px" }}
                            className="form-control"
                            id="postGraduationPercentage"
                            type="number"
                          />
                          {errors.postGraduationPercentage && <span className="text-danger">{errors.postGraduationPercentage.message}</span>}
                        </div>
                      </div>
                    )}


                    <div className="row gx-3 mb-3">
                      <div className="col-md-3">
                        <button disabled={isSubmitting} className="btn btn" type="submit" style={{ backgroundColor: "#598392", color: "white", marginLeft: "15px" }}> Submit </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </>

      )}
    </>

  );
};

export default EntranceEligibilityForm;


