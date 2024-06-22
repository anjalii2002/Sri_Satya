

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,
  Box,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import closebutton from "../../images/close-button.png"
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from 'react-router-dom';
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import { Link } from 'react-router-dom'
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
// import Sidebar from "./Sidebar";
import DatePicker from "react-datepicker";



const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const SearchVer = ({
  admissionSession,
  courseType,
  courseName,
  courseBranch,
  assignedCollege
}) => {

  console.log(admissionSession,
    courseType,
    courseName,
    courseBranch,
    assignedCollege,"dataaaaaaa")

  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata1, setStudentData] = useState({ students: [] });
  const [dataNotFound, setDataNotFound] = useState(false);
  const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  // const { admissionSession, courseType, courseName, courseBranch } = useParams();
  console.log(admissionSession, courseType, courseName, courseBranch, "data from query")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const url = process.env.REACT_APP_STD_APPROVE_LIST;

        const requestData = {
          admissionSession,
          courseType,
          courseName,
          courseBranch,
        };

        const response = await axios.post(url, requestData);

        const data = response.data;
        console.log(data, "data")
        if (!data.students || data.students.length === 0) {
          setDataNotFound(true);
        } else {
          setDataNotFound(false);
          setStudentData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setDataNotFound(true);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [admissionSession,
    courseType,
    courseName,
    courseBranch,]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const branchname = studentdata1[0]?.courseBranch
  const coursename = studentdata1[0]?.courseName
  const studentId = studentdata1[0]?._id

  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <>
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
          {loading ? (<CircularProgress color="inherit" style={{ marginLeft: "45%" }} />) : (
            <CardContent>
              {dataNotFound ? (
                <div>
                  <h2>Oops! No Student Available in this Course!!!!</h2>
                </div>
              ) : (

                <Paper sx={{ width: "100%" }}>
                  <TableContainer sx={{ maxHeight: "440px" }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>S.No.</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Session</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '200px' }}>

                            <h5>
                              <b>Registration No.</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '200px' }}>

                            <h5>
                              <b>Student Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Email</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ backgroundColor: "#004e92", color: 'white', }}
                          >
                            <h5>
                              <b>Date of Birth</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '150px' }}>

                            <h5>
                              <b>Father's Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '150px' }}>

                            <h5>
                              <b>Mother's Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Contact</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Nationality</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Qualification</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '150px' }}>

                            <h5>
                              <b>Qualification %</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white' }}
                          >
                            <h5>
                              <b>Course Type</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '200px' }}>

                            <h5>
                              <b>Course Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{ backgroundColor: "#004e92", color: 'white', minWidth: '200px' }}>

                            <h5>
                              <b>Course Branch</b>
                            </h5>
                          </TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {studentdata1 && studentdata1.students && studentdata1.students.map((student, index) => (
                          <TableRow key={index}>
                            <TableCell align="center">{index + 1}</TableCell>

                            <TableCell align="center">{student.admissionSession}</TableCell>
                            <TableCell align="center">
                              {student.randomId}
                            </TableCell>
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>

                            <TableCell align="center" >
                              <DatePicker
                                selected={selectedDate || new Date(student.dob)}
                                onChange={(date) => handleDateChange(date)}
                                dateFormat="dd/MM/yyyy"
                                className="text-center"
                              />
                            </TableCell>
                            <TableCell align="center">
                              {student.fathersname}
                            </TableCell>
                            <TableCell align="center">
                              {student.mothersname}
                            </TableCell>
                            <TableCell align="center">{student.mobile}</TableCell>
                            <TableCell align="center">{student.domicile}</TableCell>
                            <TableCell align="center">
                              {student.qualification}
                            </TableCell>
                            <TableCell align="center">
                              {student.qualificationPercentage}
                            </TableCell>
                            <TableCell align="center">{student.courseType}</TableCell>
                            <TableCell align="center">{student.courseName}</TableCell>
                            <TableCell align="center">
                              {student.courseBranch}
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <TablePagination
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              )
              }
            </CardContent>
          )}
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default SearchVer;
