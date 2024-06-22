// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import axios from "axios";
// import Sidebar from "./HodDashboard";
// import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme();

// const StudentVerify = () => {
//   const [branch, setBranch] = useState("");
//   const [approvedStudents, setApprovedStudents] = useState([]);
//   const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
//   const [sortBy, setSortBy] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // or "desc"
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const branch1 = userData?.Branch;

//   const fetchApprovedStudents = async () => {
//     try {
//       const response = await axios.get(process.env.REACT_APP_STD_VERIFY_STD + `${branch1}`);

//       setApprovedStudents(response.data.students);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // ///////////////////pagination///////////////////////////////////
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   // /////////////////////////////////name sort/////////////////////////
//   const handleSort = (column) => {
//     if (column === sortBy) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortBy(column);
//       setSortOrder("asc");
//     }
//   };

//   const sortedStudents = [...approvedStudents].sort((a, b) => {
//     if (sortBy === "name") {
//       return sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name);
//     }

//     return 0;
//   });
//   // ///////////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     fetchApprovedStudents();
//   }, [branch]);

//   /////////////////////datepicker/////////////////
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Sidebar />

//         <div
//           className="shadow p-3 mb-3 bg-body rounded"
//           style={{
//             backgroundColor: "#e8e5d5",
//             width: "90%",
//             marginLeft: "80px",
//             marginRight: "auto",
//             marginTop: "50px",
//             textAlign: "center",
//             maxWidth: "1200px",
//           }}
//         >
//           <br />
//           <h4 style={{ fontFamily: "fantasy" }}> VERIFIED STUDENT </h4>
//           <br />
//           <Paper sx={{ width: "100%" }}>
//             <TableContainer sx={{ maxHeight: "440px" }}>
//               <Table stickyHeader aria-label="sticky table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: "#023047",
//                         color: "white",
//                         position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>S.No.</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Session</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                       // /////////////for sorting name//////////////////
//                       onClick={() => handleSort("name")}
//                     >

//                       <h5>
//                         <b>Student Name</b>
//                         {/* /////////////name sort////////////////////////// */}
//                         {sortBy === "name" && (
//                           <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
//                         )}
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}

//                     >
//                       <h5>
//                         <b>Email</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Date of Birth</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Father's Name</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Mother's Name</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Contact</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Nationality</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Qualification</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Qualification %</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Course Type</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Course Name</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >

//                       <h5>
//                         <b>Course Branch</b>
//                       </h5>
//                     </TableCell>
//                     <TableCell
//                       align="left"
//                       style={{
//                         backgroundColor: '#023047', color: 'white', position: "sticky",
//                         top: 0,
//                         zIndex: 1,
//                       }}
//                     >
//                       <h5>
//                         <b>Edit</b>
//                       </h5>
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {sortedStudents
//                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                     .map((student, index) => (
//                       <TableRow key={index}>
//                         <TableCell align="center">{index + 1}</TableCell>
//                         <TableCell align="center">{student.admissionSession}  </TableCell>
//                         <TableCell align="center" style={{ color: '#6a040f', fontWeight: 'bold' }}>{student.name}</TableCell>
//                         <TableCell align="center">{student.email}</TableCell>
//                         {/* Replace the line below with the DatePicker component */}
//                         <TableCell align="center" >
//                           <DatePicker
//                             selected={selectedDate || new Date(student.dob)}
//                             onChange={(date) => handleDateChange(date)}
//                             dateFormat="dd/MM/yyyy"
//                             className="text-center"
//                           />
//                         </TableCell>
//                         <TableCell align="center">
//                           {student.fathersname}
//                         </TableCell>
//                         <TableCell align="center">
//                           {student.mothersname}
//                         </TableCell>
//                         <TableCell align="left">{student.mobile}</TableCell>
//                         <TableCell align="center">{student.domicile}</TableCell>
//                         <TableCell align="center">
//                           {student.qualification}
//                         </TableCell>
//                         <TableCell align="center">
//                           {student.qualificationPercentage}
//                         </TableCell>
//                         <TableCell align="center">{student.courseType}</TableCell>
//                         <TableCell align="center">{student.courseName}</TableCell>
//                         <TableCell align="center">
//                           {student.courseBranch}
//                         </TableCell>
//                         <TableCell align="center">
//                           <Link to={`/studentverifieddetailed/${student._id}`}>
//                             <Button variant="success" disabled={!student.isEnrolled}>More....</Button>
//                           </Link>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             <TablePagination
//               component="div"
//               count={approvedStudents.length}
//               page={page}
//               onPageChange={handleChangePage}
//               rowsPerPage={rowsPerPage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </Paper>
//         </div>
//       </ThemeProvider>
//     </>
//   );
// };

// export default StudentVerify;

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Sidebar from "./HodDashboard";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const StudentVerify = () => {
  const [branch, setBranch] = useState("");
  const [approvedStudents, setApprovedStudents] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // or "desc"
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const branch1 = userData?.Branch;

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_STD_VERIFY_STD + `${branch1}`);

      setApprovedStudents(response.data.students);
    } catch (error) {
      console.error(error);
    }
  };
  // ///////////////////pagination///////////////////////////////////
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // /////////////////////////////////name sort/////////////////////////
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedStudents = [...approvedStudents].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    return 0;
  });
  // ///////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchApprovedStudents();
  }, [branch]);

  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />

        <div
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            backgroundColor: "#e8e5d5",
            width: "90%",
            marginLeft: "120px",
            marginRight: "auto",
            marginTop: "50px",
            textAlign: "center",
            maxWidth: "1200px",
          }}
        >
          <br />
          <h4 style={{ fontFamily: "fantasy" }}> VERIFIED STUDENT </h4>
          <br />
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: "440px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: "#023047",
                        color: "white",
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        left: 0
                      }}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>S.No
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,

                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', minWidth: '80px', fontSize: '20px', fontWeight: 'bold' }}>Session</h5>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                        top: 0,
                        zIndex: 2,
                        left: '50px',
                      }}
                      // /////////////for sorting name//////////////////
                      onClick={() => handleSort("name")}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>Student Name
                        {/* /////////////name sort////////////////////////// */}
                        {sortBy === "name" && (
                          <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                        )}
                      </h5>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 2,
                        left: '240px'
                      }}

                    >
                      <h5 style={{
                        fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold',


                      }}>Email</h5>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >

                      <h5>
                        <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>DOB</h5>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', minWidth: '200px', fontWeight: 'bold' }}>Father's Name</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '180px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>Mother's Name</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '130px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>Contact</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', minWidth: '120px', fontSize: '20px', fontWeight: 'bold' }}>Nationality</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', minWidth: '150px', fontWeight: 'bold' }}>Qualification</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '150px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >


                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>Qualification percentage</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', minWidth: '150px', fontWeight: 'bold' }}>Course Type</h5>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', minWidth: '250px', fontSize: '20px', fontWeight: 'bold' }}>Course Name</h5>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >

                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', minWidth: '250px', fontWeight: 'bold' }}>Course Branch</h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        backgroundColor: '#023047', color: 'white', position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <h5 style={{ fontFamily: 'montserrat', fontSize: '20px', fontWeight: 'bold' }}>Edit</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedStudents
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((student, index) => (
                      <TableRow key={index}>
                        <TableCell align="center" style={{ position: 'sticky', top: 0, left: '0px', zIndex: '1', color: 'red', fontWeight: 'bold' }}>{index + 1}</TableCell>
                        <TableCell align="center">{student.admissionSession}  </TableCell>
                        <TableCell align="center" style={{ color: '#6a040f', fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", position: 'sticky', top: 0, left: '50px', zIndex: '1' }}>{student.name}</TableCell>
                        <TableCell align="center" style={{ color: 'purple', position: 'sticky', left: '230px', top: 0, zIndex: '1', fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>{student.email}</TableCell>
                        {/* Replace the line below with the DatePicker component */}
                        <TableCell align="center" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>
                          <DatePicker
                            selected={selectedDate || new Date(student.dob)}
                            onChange={(date) => handleDateChange(date)}
                            dateFormat="dd/MM/yyyy"
                            className="text-center"
                          />
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>
                          {student.fathersname}
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>
                          {student.mothersname}
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>{student.mobile}</TableCell>
                        <TableCell align="center" style={{ fontFamily: "'Open Sans', sans-serif" }}>{student.domicile}</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }} >
                          {student.qualification}
                        </TableCell>
                        <TableCell align="center">
                          {student.qualificationPercentage}
                        </TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>{student.courseType}</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold', color: '#344e41', fontFamily: "'Open Sans', sans-serif" }}>{student.courseName}</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>
                          {student.courseBranch}
                        </TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif" }}>
                          <Link to={`/studentverifieddetailed/${student._id}`}>
                            <Button style={{ height: '40px', width: '90px', padding: '2px' }} variant="success" disabled={!student.isEnrolled}>More....</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              component="div"
              count={approvedStudents.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
};

export default StudentVerify;

