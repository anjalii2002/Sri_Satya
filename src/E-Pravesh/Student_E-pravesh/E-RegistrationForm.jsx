import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios"
import { useForm } from "react-hook-form"
import { Box, Stack, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";
import OnlyHeader from "../../AdminComponent/OnlyHeader";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";

const E_RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()


  const location = useLocation()

  const { courseType, courseName, courseBranch, email } = location.state;
  console.log(courseName, courseBranch, courseType, email, "data from Parent")

  const navigate = useNavigate()

  const onSubmit = async () => {

    const currentDate = new Date();
    const userEnteredDOB = new Date(watch("dob"));

    if (userEnteredDOB > currentDate) {

      swal("Error", "Please enter a valid date of birth", "error");
      return;
    }
    const formData = {
      name: watch("name"),
      fathersname: watch("fathersname"),
      mothersname: watch("mothersname"),
      gender: watch("gender"),
      email: watch("email"),
      mobile: watch("mobile"),
      AbcId: watch("AbcId"),
      category: watch("category"),
      dob: watch("dob"),
      lastExamType: watch("lastExamType"),
      qualification: selectedQualification,
      passingYear: watch("passingYear"),
      nationality: watch("nationality"),
      domicile: watch("domicile"),
      lastPassedSubject: watch("lastPassedSubject"),
      ObtainedMarks: obtainMarks,
      LastPercentage: percentage,
      courseType: courseType,
      courseBranch: courseBranch,
      courseName: courseName

    };
    // formData(reset())

    try {
      const percentage = ((parseFloat(obtainMarks) / parseFloat(totalMarks)) * 100).toFixed(2);
      formData.LastPercentage = percentage;

      const response = await axios.post(process.env.REACT_APP_E_PRAVESH, formData);
      console.log(response.data, "dataaaaaaaaaaa");

      console.log(formData, "formdataaaa")
      const id = response.data.User._id;
      const name = response.data.User.name;

      if (response.data.status === 200) {
        swal({
          title: "Congratulations",
          text: "Registration done successfully! PAY FEE!",
          icon: "success",
          buttons: "OK",

        })
        navigate("/Epravesh/Student/payment", { state: { courseType, courseName, courseBranch, id, name } })
      }
    } catch (error) {
      swal("Error", "Try Again!!!", "error");
    }
  };



  console.log(watch("name"))
  console.log(watch("fathersname"))
  console.log(watch("qualification"))
  console.log(watch("email"))



  // //////////////////////////////////////////////////////PERCENTAGE LOGIC////////////////////////
  const [obtainMarks, setObtainMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [percentage, setPercentage] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');

  console.log(percentage, 'perrr')
  console.log(obtainMarks, "obtainmarks")
  console.log(totalMarks, "totalmarks")
  console.log(selectedQualification, "qualification")

  const handleObtainMarksChange = (event) => {
    const obtainMarksValue = event.target.value;
    setObtainMarks(obtainMarksValue);
    calculatePercentage(obtainMarksValue, totalMarks);
  };

  const handleTotalMarksChange = (event) => {
    const totalMarksValue = event.target.value;

    setTotalMarks(totalMarksValue);
    calculatePercentage(obtainMarks, totalMarksValue);


  };

  const calculatePercentage = (obtainMarks, totalMarks) => {
    if (!isNaN(obtainMarks) && !isNaN(totalMarks) && totalMarks !== '0') {
      const percentageValue = ((parseFloat(obtainMarks) / parseFloat(totalMarks)) * 100).toFixed(2);
      setPercentage(percentageValue);
    } else {
      setPercentage('');
    }
  };
  const handleSelect = (e) => {
    console.log("working")
    setSelectedQualification(e.target.value);
  };
  /////////////////////////////////////////
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const Options = [currentYear, previousYear];
  console.log(Options, "options ")
  return (
    <>
      <OnlyHeader />
      <Container
        className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "80px auto" }}ms
      >
        <Box
          marginBottom={"20px"}
          backgroundColor={"#264653"}
          p={4}
          h={50}
          color="white"
          mt={1}
          borderRadius="md"
          shadow="md"
          textAlign="center"
        >
          {courseName} {`(${courseBranch})`}
        </Box>


        <Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={["column", "row"]} spacing={4} mt={10}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Candidate Name
                </FormLabel>

                <Input type='text' size='md' minWidth='280px'   {...register("name", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z ]+$/i
              
                })}
                autoComplete="off"
                />
                {errors?.name?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
                {errors?.name?.type === "maxLength" && (
                  <p style={{ color: 'red' }}>name cannot exceed 30 characters</p>
                )}
                {errors?.name?.type === "pattern" && (
                  <p style={{ color: 'red' }}>Alphabetical characters only</p>
                )}

              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Father's Name

                </FormLabel>
                <Input size='md' minWidth='280px'  {...register("fathersname", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z ]+$/i
                })}
                autoComplete="off"
                />
                {errors?.fathersname?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
                {errors?.fathersname?.type === "maxLength" && (
                  <p style={{ color: 'red' }}>name cannot exceed 30 characters</p>
                )}
                {errors?.fathersname?.type === "pattern" && (
                  <p style={{ color: 'red' }}>Alphabetical characters only</p>
                )}


              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Mother's Name

                </FormLabel>
                <Input size='md' minWidth='280px'  {...register("mothersname", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z ]+$/i
                })}
                autoComplete="off"
                />
                {errors?.mothersname?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
                {errors?.mothersname?.type === "maxLength" && (
                  <p style={{ color: 'red' }}>name cannot exceed 30 characters</p>
                )}
                {errors?.mothersname?.type === "pattern" && (
                  <p style={{ color: 'red' }}>Alphabetical characters only</p>
                )}



              </FormControl>
            </Stack>



            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Gender

                </FormLabel>

                <Select {...register("gender", { required: true })}>
                  <option value="">Select Category</option>

                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Select>

                {errors.gender && <p style={{ color: 'red' }}>Please select your gender</p>}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Email

                </FormLabel>

                <Input
                  size='md'
                  minWidth='280px'
                  defaultValue={email}
                  // disabled
                  readOnly
                  {...register("email", {

                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />

                {errors.email && <p style={{ color: 'red' }} role="alert">{errors.email.message}</p>}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Mobile

                </FormLabel>

                <Input
                  size='md'
                  minWidth='280px'
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Mobile number should contain only digits"
                    },
                    minLength: {
                      value: 10,
                      message: "Mobile number should be at least 10 digits long"
                    },
                    maxLength: {
                      value: 10,
                      message: "Mobile number should not exceed 10 digits"
                    }
                  })}
                  autoComplete="off"
                />
                {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
              </FormControl>
            </Stack>

            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Abc ID <a href="https://www.digilocker.gov.in/" target="_blank" style={{fontWeight:"bold",backgroundColor:"yellow"}}>Make your ABC id  (click here)</a>

                </FormLabel>
                <Input size='md' minWidth="200px"  {...register('AbcId', {
                  required: 'ABC ID is required',
                  minLength: { value: 12, message: 'ABC ID must be at least 12 characters' },
                  maxLength: { value: 12, message: 'ABC ID must not exceed 12 characters' }
                })} 
                autoComplete="off" 
              
                />
                {errors.AbcId && <p style={{ color: 'red' }}>{errors.AbcId.message}</p>}
              </FormControl>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Category

                </FormLabel>

                <Select
                  size='md'
                  minWidth='280px'
                  {...register("category", { required: "Category is required" })}
                  aria-invalid={errors.category ? "true" : "false"}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </Select>

                {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
              </FormControl>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  DOB

                </FormLabel>
                <Input type='date' size='md' minWidth='280px' {...register('dob', { required: 'DOB is required' })} />
                {errors.dob && <p style={{ color: 'red' }}>{errors.dob.message}</p>}
              </FormControl>
            </Stack>


            <Stack direction={["column", "row"]} spacing={4} mt={4}>
              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Last Exam Pass/Appear Time
                  <span style={{ color: "black" }}> * </span>
                </FormLabel>
                <Select
                  size='md'
                  minWidth='280px'
                  {...register('lastExamType', { required: 'Last Exam Pass/Appear Time is required' })}
                >
                  <option value="">Select </option>
                  <option value="private">Private</option>
                  <option value="regular">Regular</option>

                </Select>
                {errors.lastExamType && <p style={{ color: 'red' }}>{errors.lastExamType.message}</p>}
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>Qualification</FormLabel>
                <Select
                  value={selectedQualification}
                  onChange={handleSelect}
                >
                  <option value="">Select</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                </Select>
              </FormControl>

              <FormControl flex="1">
                <FormLabel style={{ fontFamily: 'sans-serif' }}>
                  Passing Year

                </FormLabel>
                <Select {...register('passingYear', { required: 'Passing Year is required' })}>
                  <option value="1">Select </option>
                  {Options.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                  {/* {Options.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option> */}


                </Select>
                {errors.passingYear && <p style={{ color: 'red' }}>{errors.passingYear.message}</p>}
              </FormControl>
            </Stack>
            {/*dhdwbdwj*/}
            {selectedQualification === '10th' && (
              <>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif', fontSize: '13px' }} >

                      Qualifying Exam Percentage

                    </FormLabel>
                    <Stack direction={["column", "row"]} spacing={1} mt={1}>
                      <FormControl flex="1">
                        <FormLabel style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>
                          Obtain Marks

                        </FormLabel>
                        <Input size='md' minWidth='80px'
                          type='number'
                          value={obtainMarks}
                          onChange={handleObtainMarksChange} />

                        {errors.obtainMarks && <p style={{ color: 'red' }}>{errors.obtainMarks.message}</p>} </FormControl>

                      <FormControl flex="1">
                        <FormLabel style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>
                          Total Marks

                        </FormLabel>
                        <Input size='md' minWidth='80px'
                          type='number'
                          value={totalMarks}
                          onChange={handleTotalMarksChange} />

                        {errors.totalMarks && <p style={{ color: 'red' }}>{errors.totalMarks.message}</p>}  </FormControl>

                      <FormControl flex="1">
                        <FormLabel style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>
                          Percentage

                        </FormLabel>
                        <Input size='md' minWidth='80px'
                          value={percentage}
                          readOnly />
                      </FormControl>
                    </Stack>


                    {errors.ObtainedMarks && <p style={{ color: 'red' }}>{errors.ObtainedMarks.message}</p>}
                  </FormControl>


                </Stack>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Nationality

                    </FormLabel>
                    <Select {...register('nationality', { required: 'Nationality is required' })}>
                      <option value="">Select Nationality</option>
                      <option value="indian">Indian</option>


                    </Select>
                    {errors.nationality && <p style={{ color: 'red' }}>{errors.nationality.message}</p>}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Domicile

                    </FormLabel>
                    <Select {...register('domicile', { required: 'Domicile is required' })}>
                      <option value="">Select Domicile</option>
                      <option value="AllIndia">All India</option>


                    </Select>
                    {errors.domicile && <p style={{ color: 'red' }}>{errors.domicile.message}</p>}
                  </FormControl>

                </Stack>


              </>
            )}

            {selectedQualification === '12th' && (
              <>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Last Passed Exam Subject

                    </FormLabel>
                    <Select {...register('lastPassedSubject', { required: 'Last Passed Exam Subject is required' })}>
                      <option value="">Select Subject</option>
                      <option value="PCM">PCM</option>
                      <option value="PCB">PCB</option>

                    </Select>
                    {errors.lastPassedSubject && <p style={{ color: 'red' }}>{errors.lastPassedSubject.message}</p>}
                  </FormControl>


                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Obtain Marks

                    </FormLabel>
                    <Input size='md' minWidth='200px' type='number' value={obtainMarks} onChange={handleObtainMarksChange} />

                    {errors.obtainMarks && <p style={{ color: 'red' }}>{errors.obtainMarks.message}</p>} </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Total Marks

                    </FormLabel>
                    <Input size='md' minWidth='200px' type='number' value={totalMarks} onChange={handleTotalMarksChange} />

                    {errors.totalMarks && <p style={{ color: 'red' }}>{errors.totalMarks.message}</p>}  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Percentage

                    </FormLabel>
                    <Input size='md' minWidth='200px' value={percentage} readOnly />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4} mt={4}>
                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Nationality

                    </FormLabel>
                    <Select {...register('nationality', { required: 'Nationality is required' })}>
                      <option value="">Select Nationality</option>
                      <option value="indian">Indian</option>


                    </Select>
                    {errors.nationality && <p style={{ color: 'red' }}>{errors.nationality.message}</p>}
                  </FormControl>

                  <FormControl flex="1">
                    <FormLabel style={{ fontFamily: 'sans-serif' }}>
                      Domicile

                    </FormLabel>
                    <Select {...register('domicile', { required: 'Domicile is required' })}>
                      <option value="">Select Domicile</option>
                      <option value="AllIndia">All India</option>


                    </Select>
                    {errors.domicile && <p style={{ color: 'red' }}>{errors.domicile.message}</p>}
                  </FormControl>
                  {""}
                </Stack>
                {" "}
              </>
            )}
            {" "}
            <Button type='submit' style={{ backgroundColor: "#598392",marginTop:"10px" }}>
              Register Now
            </Button>
            {" "}

            <Button type='button' style={{ backgroundColor: "#dad7cd", color: 'black',marginTop:"10px" }}
            onClick={()=>reset()}>
              Cancel 
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  )
}
export default E_RegistrationForm





