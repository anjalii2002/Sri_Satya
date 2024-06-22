import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TableCell, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent"
import HodDashboard from "../../AdminComponent/HodDashboard";
import axios from 'axios'
const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

function TotalFeePaidHod() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);

  const hod = JSON.parse(sessionStorage.getItem("AnkitHOD"));

  const branch = hod.Branch
  //console.log( , "branch")
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.post(
          process.env.REACT_APP_STD_BRANCH_PAID_LIST + `${branch}`
        );
        const data = response.data;
        console.log(response.data, "dataresponse")
        setStudentData(data.students);
        // console.log(data, "data from api");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);
  // console.log(studentdata);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <>
      <ThemeProvider theme={theme}>
        <HodDashboard />
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
          <CardContent>
            <Paper sx={{ width: "100%", overflow: "auto" }}>
              <TableContainer sx={{ maxHeight: '440px' }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          S.No.
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0", minWidth: '200px' }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Enrollment Status
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Registration ID
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Registration Password
                        </h1>
                      </TableCell>


                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Candidate Name
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Father's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Mother's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Email
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Contact
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          CourseType
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Course Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Branch
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h1
                          style={{
                            fontSize: '20px',
                            fontWeight: "bolder",
                            color: 'black',
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Fee Status
                        </h1>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentdata &&
                      studentdata?.map((student, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>                       
                          <TableCell align="left">
                              
                          {student?.isEnrollGenerated ?(
                             <Button variant="success">generated</Button>
                          ):(
                            <Button variant="danger">Not generated</Button>
                          )
                        }
                          </TableCell>
                          <TableCell align="left">
                            {student?.randomId}
                          </TableCell>
                          <TableCell align="left">
                            {student?.randomPassword}
                          </TableCell>

                          <TableCell align="left">
                            {student?.name}
                          </TableCell>
                          <TableCell align="left">
                            {student?.fathersname}
                          </TableCell>
                          <TableCell align="left">
                            {student?.mothersname}
                          </TableCell>
                          <TableCell align="left">
                            {student?.email}
                          </TableCell>
                          <TableCell align="left">
                            {student?.mobile}
                          </TableCell>
                          <TableCell align="left">
                            {student?.courseType}
                          </TableCell>
                          <TableCell align="left">
                            {student?.courseName}
                          </TableCell>
                          <TableCell align="left">
                            {student?.courseBranch}
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
                count={""}
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

export default TotalFeePaidHod