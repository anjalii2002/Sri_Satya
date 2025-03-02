import React, { useEffect, useState } from "react";
import { Modal, label, Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {TableCell,Box} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

function TotalFeePaid() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);
 
  const { session, courseType, course, branch, college } = useParams();
  // console.log(session, courseType, course, branch, college, "data from query");
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch(
          process.env.REACT_APP_STD_PAID_LIST
        );
        const data = await response.json();
        setStudentData(data.students);
        // console.log(data, "data from api");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    fetchData();
  }, []);
  // console.log(studentdata);
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // console.log(studentdata, "data of student from use state");

  const branchname = studentdata.courseBranch;
  const coursename = studentdata.coursename;
  const studentId = studentdata._id;
  const assignedCollege = studentdata.assignedCollege;


  return (
    <>
     <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
          <CardContent>
            <Paper sx={{ width: "100%", overflow: "auto" }}>
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          S.No.
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Enrollment Status
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Registration ID
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                            Registration Password
                        </h1>
                      </TableCell>
                   

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Candidate Name
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Father's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Mother's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                         Email
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                      Mobile No.
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                       Paid
                        </h1>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentdata &&
                      studentdata?.map((student, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          {/* <TableCell align="center">2023</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.email}</TableCell>
                        {/* Replace the line below with the DatePicker component */}

                          <TableCell align="center">
                            <Button variant="danger">Not generated</Button>
                          </TableCell>
                          <TableCell align="center">
                            {student?.randomId}
                          </TableCell>
                          <TableCell align="center">
                            {student?.randomPassword}
                          </TableCell>
              
                          <TableCell align="center">
                            {student?.name}
                            </TableCell>
                          <TableCell align="center">
                            {student?.fathersname}
                          </TableCell>
                          <TableCell align="center">
                            {student?.mothersname}
                          </TableCell>
                          <TableCell align="center">
                            {student?.email}
                          </TableCell>
                          <TableCell align="center">
                            {student?.mobile}
                          </TableCell>
                          <TableCell align="center">
                          {student?.isPaid ? "Paid" : "Not Paid"}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[2, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
          {/* </Card> */}
          <br></br>
        </Box>
        </ThemeProvider>
      </>
  )
}

export default TotalFeePaid