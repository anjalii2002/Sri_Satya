import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import EntranceEligibilityForm from './EntranceEligibilityForm';
import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";
import * as Yup from "yup";
import OnlyHeader from '../../AdminComponent/OnlyHeader';

const CourseSchema = Yup.object().shape({
  selectedType: Yup.string().min(2).max(10).required("Course Type is required"),
  selectedCourse: Yup.string().required("Course is required"),
  selectedBranch: Yup.string().required("Branch is required"),
});

const initialValues = {
  selectedType: "",
  selectedCourse: "",
  selectedBranch: "",
};

const     EntranceForm = () => {
  const { errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: CourseSchema,
    onSubmit: (values) => {
      handleSearch();
    },
  });

  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [eligible, setEligible] = useState("");
  const [eligibilityGradPer, setEligibilityGradPer] = useState("");
  
  const [errors2, setErrors2] = useState({
    selectedType: "",
    selectedCourse: "",
    selectedBranch: "",
  });

  const courseData = {
    UG: {
      courses: [
        "BACHELOR OF ENGINEERING",
        "BACHELOR OF DESIGN",
        "BACHELOR OF PHARMACY",
        "BACHELOR OF EDUCATION",
        "BACHELOR OF HOTEL MANAGEMENT AND CATERING",
        "BSC(Nursing) SEMESTER",
        "BACHELOR OF PHYSICAL EDUCATION(B. P. Ed.)",
        "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)",
      ],
      branches: {
        "BACHELOR OF ENGINEERING": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BSC(Nursing) SEMESTER": ["Nursing"],
        "BACHELOR OF PHARMACY": ["PHARMACY"],
        "BACHELOR OF PHYSICAL EDUCATION(B. P. Ed.)": ["BACHELOR OF PHYSICAL EDUCATION"],
        "BACHELOR OF ARTS BACHELOR OF EDUCATION (B. A. B. Ed.)": ["BACHELOR OF ARTS BACHELOR OF EDUCATION"],
        "BACHELOR OF HOTEL MANAGEMENT AND CATERING": ["HOTEL MANAGEMENT AND CATERING"],

        "BACHELOR OF EDUCATION": ["BACHELOR OF EDUCATION"],
        "BACHELOR OF DESIGN": [
          "INDUSTRIAL DESIGN",
          "COMMUNICATION DESIGN",
          "TEXTILE DESIGN",
          "INTERIOR DESIGN",
          "PRODUCT DESIGN",
        ],

      },
    },
    PG: {
      courses: [
        "MASTER OF TECHNOLOGY",
        "MASTER OF PHARMACY",
        "MASTER OF BUSINESS ADMINISTRATION(MBA)",
        "MASTER OF COMPUTER APPLICATION(MCA)",
        
      ],
      branches: {
        "MASTER OF TECHNOLOGY": [
          "COMPUTER SCIENCE AND ENGINEERING",
          "COMPUTER TECHNOLOGY AND APPLICATION",
          "INFORMATION TECHNOLOGY",
          "SOFTWARE ENGINEERING",
          "DIGITAL COMMUNICATION",
          "ELECTRICAL POWER SYSTEM",
          "INDUSTRIAL DESIGN",
          "POWER ELECTRONICS",
          "STRUCTURAL DESIGN",
          "THERMAL ENGINEERING",
          "VLSI",
        ],
        "MASTER OF BUSINESS ADMINISTRATION(MBA)": ["MANAGEMENT"],
        "MASTER OF PHARMACY": ["PHARMACEUTICS" , "PHARMACOLOGY"],
        "MASTER OF COMPUTER APPLICATION(MCA)": ["COMPUTER APPLICATION"],
      },
    },
    Diploma: {
      courses: [
        "DIPLOMA ENGINEERING",
        "DIPLOMA PHARMACY"
      ],
      branches: {
        "DIPLOMA ENGINEERING": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
        "DIPLOMA PHARMACY":["PHARMACY"]
      },
    },
    PG_DIPLOMA: {
      courses: ["POST GRADUATION DIPLOMA IN COMPUTER APPLICATION"],
      branches: {
        "POST GRADUATION DIPLOMA IN COMPUTER APPLICATION": [
          "COMPUTER APPLICATION",
        ],
      },
    },
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse("");
    setSelectedBranch("");
  };

  const handleCourseChange = (e) => {
    const courseValue = e.target.value;
    setSelectedCourse(courseValue);
    setErrors2((prevErrors) => ({
      ...prevErrors,
      selectedCourse: courseValue ? "" : "Course is required",
    }));
    setSelectedBranch("");
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSearch = () => {
    if (!selectedCourse) {
      setErrors2((prevErrors) => ({
        ...prevErrors,
        selectedCourse: "Course is required",
      }));
      return;
    }

    fetch(process.env.REACT_APP_STD_ELIGIBILITY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseType: selectedType,
        courseName: selectedCourse,
        courseBranch: selectedBranch,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEligible(data);
        setEligibilityGradPer(data.eligibilityGradPer);


      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  };

  const isValid =
    !errors2.selectedType && !errors2.selectedCourse && selectedBranch !== "";

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Profile</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  body{margin-top:20px;\n       color:#69707a;\n    }\n    .img-account-profile {\n        height: 10rem;\n    }\n    .rounded-circle {\n        border-radius: 50% !important;\n    }\n    .card {\n        box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);\n    }\n    .card .card-header {\n        font-weight: 500;\n    }\n    .card-header:first-child {\n        border-radius: 0.35rem 0.35rem 0 0;\n    }\n    .card-header {\n        padding: 1rem 1.35rem;\n        margin-bottom: 0;\n        background-color: rgba(33, 40, 50, 0.03);\n        border-bottom: 1px solid rgba(33, 40, 50, 0.125);\n    }\n    .form-control, .dataTable-input {\n        display: block;\n        width: 100%;\n        padding: 0.875rem 1.125rem;\n        font-size: 0.875rem;\n        font-weight: 400;\n        line-height: 1;\n        color: #69707a;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid #c5ccd6;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        border-radius: 0.35rem;\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    }\n    \n    .nav-borders .nav-link.active {\n        color: #0061f2;\n        border-bottom-color: #0061f2;\n    }\n    .nav-borders .nav-link {\n        color: #69707a;\n        border-bottom-width: 0.125rem;\n        border-bottom-style: solid;\n        border-bottom-color: transparent;\n        padding-top: 0.5rem;\n        padding-bottom: 0.5rem;\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 1rem;\n        margin-right: 1rem;\n    }\n",
        }}
      />
      <OnlyHeader />
      <Container
        className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "70px auto" }}
      >
        <Box>
          <Box
            backgroundColor={"#264653"}
            p={4}
            color="white"
            mt={5}
            borderRadius="md"
            shadow="md"
          >
            Select Course
          </Box>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>
            <FormControl flex="1">
              <FormLabel>
                <b>
                  Course Type
                  <span style={{ color: "red" }}> * </span>
                </b>
              </FormLabel>
              <Select value={selectedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                {Object.keys(courseData).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
              {errors.selectedType && touched.selectedType ? (
                <p className="error">{errors.selectedType}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Course</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select value={selectedCourse} onChange={handleCourseChange}>
                <option value=""> Select Course </option>
                {selectedType &&
                  courseData[selectedType].courses.map((course) => (
                    <option
                      key={course}
                      value={course}
                    >
                      {course}
                    </option>
                  ))}
              </Select>
              {errors.selectedCourse && touched.selectedCourse ? (
                <p className="error">{errors.selectedCourse}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Branch</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select value={selectedBranch} onChange={handleBranchChange}>
                <option value="">Select Branch</option>
                {selectedCourse &&
                  courseData[selectedType].branches[selectedCourse].map(
                    (branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    )
                  )}
              </Select>
              {errors.selectedBranch && touched.selectedBranch ? (
                <p className="error">{errors.selectedBranch}</p>
              ) : null}
            </FormControl>
          </Stack>
          <Button
            style={{
              margin: "20px auto",
              display: "block",

              backgroundColor: '#264653',
              color: "white",
              width: "w-20 w-md-auto",
              border: "none",
              borderRadius: "5px",
              fontSize: "15px",
              padding: "10px 20px",

            }}
            onClick={handleSearch}
            disabled={!selectedCourse || !isValid}
          >
            Search
          </Button>
        </Box>
      </Container>
      {eligible && (
        <EntranceEligibilityForm
          eligible={eligible}
          eligibilityGradPer={eligibilityGradPer}
          courseType={selectedType}
          courseName={selectedCourse}
          courseBranch={selectedBranch}
        />
      )}
    </>
  );
};

export default EntranceForm;

