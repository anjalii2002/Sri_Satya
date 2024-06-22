import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";
import axios from 'axios';
import OnlyHeader from "../../AdminComponent/OnlyHeader";
import * as Yup from "yup";
import useFetch from "../../CUSTOM_HOOK/Usefetch";
import E_eligibility_Form from "./E-Eligibility";

const E_Pravesh_Course = () => {
  const [courseData, setCourseData] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [eligible, setEligible] = useState("");
  const [eligibilityGradPer, setEligibilityGradPer] = useState(null);

  const session = new Date().getFullYear();

  const { data, loading, error } = useFetch((process.env.REACT_APP_STD_COURSE + `${session}`));



  useEffect(() => {
    if (data) {
      const formattedData = {};

      data.forEach(course => {
        if (!formattedData[course.courseType]) {
          formattedData[course.courseType] = {
            courses: [],
            branches: {}
          };
        }

        course.courseNames.forEach(courseName => {
          formattedData[course.courseType].courses.push(courseName.courseName);
          formattedData[course.courseType].branches[courseName.courseName] = courseName.branches.map(branch => branch.branchName);
        });
      });

      setCourseData(formattedData);
    }
  }, [data]);

  // const fetchCourses = () => {
  //   const session = new Date().getFullYear();
  //   axios.get()
  //     .then(response => {
  //       const responseData = response.data;
  //       const formattedData = {};
  //       // console.log(formattedData, "formattedDAta")

  //       responseData.forEach(course => {
  //         if (!formattedData[course.courseType]) {
  //           formattedData[course.courseType] = {
  //             courses: [],
  //             branches: {}
  //           };
  //         }

  //         course.courseNames.forEach(courseName => {
  //           formattedData[course.courseType].courses.push(courseName.courseName);
  //           formattedData[course.courseType].branches[courseName.courseName] = courseName.branches.map(branch => branch.branchName);
  //         });
  //       });

  //       setCourseData(formattedData);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching courses:", error);
  //     });
  // };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse("");
    setSelectedBranch("");
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const eligibilityResponse = await fetch(process.env.REACT_APP_STD_ELIGIBILITY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseType: selectedType,
          courseName: selectedCourse,
          courseBranch: selectedBranch,
        }),
      });

     
      const data = await eligibilityResponse.json();
      setEligible(data);
      setEligibilityGradPer(data.eligibilityGradPer);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isValid = selectedBranch !== "" && selectedCourse !== "";

  if(loading) return <p>Loading.....</p>;
  if(error) return <p>Error fetching courses: {error.message}</p>

  return (
    <>
      <OnlyHeader />
      <Container className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "70px auto" }}>
        <Box>
          <Box
            backgroundColor={"#264653"}
            p={4}
            color="white"
            mt={4}
            borderRadius="md"
            shadow="md"
          >
            Select Course
          </Box>
          <Stack direction={["column", "row"]} spacing={4}>
            <FormControl flex="1">
              <FormLabel>
                <b>Course Type</b>
              </FormLabel>
              <Select value={selectedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                {Object.keys(courseData).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Course</b>
              </FormLabel>
              {/* <Select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {selectedType &&
                  // courseData[selectedType].courses.map((course) => (
                  //   <option key={course} value={course}>{course}</option>
                  courseData[selectedType].courses.map((coursesArray) =>
                    coursesArray.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))
                  )}
              </Select> */}

              <Select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {selectedType && courseData[selectedType].courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </Select>

            </FormControl>






            <FormControl flex="1">
              <FormLabel>
                <b>Branch</b>
              </FormLabel>
              <Select value={selectedBranch} onChange={handleBranchChange}>
                <option value="">Select Branch</option>
                {selectedCourse && courseData[selectedType].branches[selectedCourse].map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </Select>
            </FormControl>
          </Stack>
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
            onClick={handleSearch}
            disabled={!isValid}
          >
            Search
          </Button>
        </Box>
      </Container>
      {eligible && (
        <E_eligibility_Form
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

export default E_Pravesh_Course;


////////////////////////////////////////////////////////////////////////




