import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {
    TableCell,
    Box,
    Button
} from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Container, ThemeProvider, createTheme } from '@mui/material';
import AdminDashboard from '../AdminDashboard';
import jsPDF from 'jspdf';
import logo from "../../../images/sssutms.jpg"
import SearchIcon from '@mui/icons-material/Search';
import * as XLSX from "xlsx";

const theme = createTheme();

function Entrance_Slip() {

    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [studentdata, setStudentData] = useState([])
    const [loading, setLoading] = useState(false)
    const [filteredData, setFilteredData] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("")

    console.log(studentdata, "studentDataaaaaaa")
    console.log(searchQuery, "searchquery")
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(process.env.REACT_APP_ENTRANCE_DETAILS);
                const data = await response.json();

                console.log(data.User, "data from api")
                setStudentData(data.User)
                setFilteredData(data.User);
                if (data.length === 0) {
                    setDataNotFound(true);
                } else {
                    setDataNotFound(false);

                }

                console.log(data.User, "datakauser")
            } catch (error) {
                console.error('Error fetching data:', error);
                setDataNotFound(true);
            } finally {
                setLoading(false)
            }
        };

        // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
        fetchData();
    }, []);


    useEffect(() => {

        filterData();
    }, [searchQuery, studentdata]);



    const filterData = () => {
        if (searchQuery.trim() !== "") {
            const filtered = studentdata.filter(student =>
                student.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(studentdata);
        }
    };




    // console.log(studentdata, "data of student from use state")
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    // console.log(branchname, coursename, collegename, ' message from K4LI ..............')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }



    const sortedStudents = [...studentdata].sort((a, b) => {
        if (sortBy === "name") {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }

        return 0;
    });


    ///////////////////////////pdf///////////////////////////////////////////
    const generatePDF = (student) => {
        const pdf = new jsPDF();
        console.log(student, "student")
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, 210, 297, 'F');

        // Add title
        pdf.addImage(logo, "JPEG", 4, 6, 30, 25);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.setTextColor(0, 0, 0);
        pdf.text("SRI SATYA SAI UNIVERSITY OF TECHONOLOGY AND MEDICAL SCIENCES ", 120, 10, { align: "center" });
        pdf.setFontSize(10);
        pdf.text("[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]", 120, 18, { align: "center" });
        pdf.text("SH-18 Bhopal-Indore Road, Pachama,", 120, 25, { align: "center" });
        // pdf.text("ACADEMIC YEAR: 2024-2025", 120, 33, { align: "center" });

        pdf.setDrawColor(255, 0, 0); // Red color

        pdf.setFontSize(13);
        pdf.setTextColor(255, 0, 0); // Red color
        pdf.setTextColor(0, 0, 0);
        pdf.setFont("helvetica", "bold");
        pdf.text("Online Entrance Exam - 2024", 115, 40, { align: "center" });

        pdf.setFont("helvetica", "bold");
        pdf.text("ADMIT CARD", 115, 34, { align: "center" });


        // Add payment details
        // Black color



        pdf.setDrawColor(0, 0, 0);
        pdf.setLineWidth(0.5);
        pdf.line(25, 45, 185, 45);
        pdf.setFontSize(9);


        pdf.text(`ROLL NO.                     :               ${student?.RollNumber}`, 27, 60);
        pdf.text(`Candidate Name          :                ${student?.name}`, 27, 70);
        pdf.addImage(student?.Documents?.applicantPhoto, "JPEG", 150, 70, 30, 30);
        pdf.text(`Fathers Name              :                 ${student?.fathersname}`, 27, 80);
        pdf.text(`Mothers Name             :                 ${student?.mothersname}`, 27, 90);
        pdf.text(`gender                          :                 ${student?.gender}`, 27, 100);
        // const formattedDOB = new Date(student?.dob).toLocaleDateString('en-GB'); // Assuming 'en-GB' format (DD-MM-YYYY)
        pdf.text(`Applied For                  :                ${student.courseBranch}`, 27, 110);

        pdf.text(`Date                             :                  12/05/2024`, 27, 120);
        pdf.text(`Time                            :                 2:00 to 3:00 pm`, 27, 130);

        // pdf.text(`Domicile :                            ${student?.domicile}`, 25, 120);
        // pdf.text(`Category :                           ${student?.category}`, 25, 130);
        // pdf.text(`Mobile Number :                 ${student?.mobile}`, 25, 140);
        // pdf.text(`Email :                                ${student?.email}`, 25, 150);

        // pdf.text(`Specialization :                  ${student?.courseBranch}`, 25, 160);





        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.text("Provisionally permitted subject to eligibility. Any Discrepancy in Candidate 's , Father's, Mother's Name etc. ", 25, (150));
        // pdf.setFont("helvetica", "normal");
        pdf.text("Should be Informed to the office of the Controller Examination Immediately.", 25, (155));
        pdf.text("Point to be Notice:", 25, (160));
        pdf.text("Examination Time: 1 Hours", 25, (165));
        pdf.text("1. There is no negative mark for incorrect answers.", 25, (170));
        pdf.text("2. Form do not share to anyone", 25, (175));
        pdf.text("3. You can fill out the form only once per email address.", 25, (180));
        pdf.text("4. Please be careful while marking the response to questions. ", 25, (185));
        pdf.text("The response once marked cannot be changed and if done shall be treated as wrong answer.", 28, (190));





        // const formattedDate = transactionTime.toLocaleDateString('en-IN', {
        //     day: '2-digit',
        //     month: '2-digit',
        //     year: 'numeric'
        //   });





        pdf.text(`Controller Of Examination`, 145, 200)
        pdf.text(`SSSUTMS`, 153, 205)
        pdf.save("Admission_slip.pdf");
    }
    const Excel = studentdata.map(student => ({
        Name: student.name,
        Fathers_Name: student.fathersname,
        Mothers_Name: student.mothersname,
        Email: student.email,
        Mobile: student.mobile,
        // Course_Type: student.courseType,
        // Course: student.courseName,
        // Branch: student.courseBranch
    }))
    console.log(studentdata, "stuednt after function")
    /////////////////////////name sort ////////////////////////////
    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    // console.log("Student data " , studentdata)
    // ///////////////////////////////////////////////////////////////////////////////////
    const getSortedAndSlicedData = () => {
        // Sort the data
        const sortedData = [...filteredData].sort((a, b) => {
            if (sortBy === "name") {
                return sortOrder === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }

            return 0;
        });


        const startIndex = page * rowsPerPage;
        return sortedData.slice(startIndex, startIndex + rowsPerPage);
    };
    ////////////////////////Export to Excel//////////////////////////////////
    const ExportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(Excel)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Enrolled Student")
        XLSX.writeFile(workbook, "Student_Data.xlsx")
    }
    return (
        <ThemeProvider theme={theme}>
            <AdminDashboard />
            {loading ? (<CircularProgress color="inherit" style={{ marginTop: "90px", marginLeft: "50%" }} />) : (
                <Container
                    className="shadow p-3  bg-body rounded"
                    style={{
                        marginTop: "80px",
                        width: "100%",
                        textAlign: "center",
                        justifyContent: "center",
                    }}
                >

                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <Button style={{ float: "right", marginRight: "10px" }} variant="outlined" onClick={ExportToExcel}>Export to Excel</Button>

                        <Box sx={{ p: 2 }}>
                            <SearchIcon sx={{ mr: 1 }} />
                            <input
                                type="text"
                                placeholder="Search  by ID or Name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </Box>

                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="left"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
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
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                }}
                                            >
                                                Application Number
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '100px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                            // /////////////for sorting name//////////////////
                                            onClick={() => handleSort("name")}
                                        >

                                            <h1
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                }}
                                                // /////////////for sorting name//////////////////
                                                onClick={() => handleSort("name")}
                                            >
                                                Candidate Name
                                                {sortBy === "name" && (
                                                    <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                                                )}
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    // width: "150px"
                                                }}
                                                onClick={() => handleSort("fathername")}
                                            >
                                                Father's Name
                                                {sortBy === "fathername" && (
                                                    <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                                                )}
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    // width: "150px"
                                                }}
                                            >
                                                Mother's Name
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    // width: "150px"
                                                }}
                                            >
                                                Email
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    // width: "150px"
                                                }}
                                            >
                                                Mobile
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    // width: "150px"
                                                }}
                                            >
                                                Selected Course Type
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    width: "200px"
                                                }}
                                            >
                                                Course Branch
                                            </h1>
                                        </TableCell>

                                        <TableCell
                                            align="center"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                    width: "150px"
                                                }}
                                            >
                                                Course Name
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                }}
                                            >
                                                Fee Status
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                }}
                                            >
                                                Verify Fees
                                            </h1>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{ backgroundColor: '#023047' }}
                                        >
                                            <h1
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white",
                                                    fontFamily: "-moz-initial",
                                                }}
                                            >
                                                Download
                                            </h1>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {getSortedAndSlicedData().map((student, index) => (
                                        <TableRow key={index}>

                                            <TableCell align="center" typeof='check' >{index + 1}</TableCell>
                                            <TableCell align="center">


                                            </TableCell>
                                            <TableCell align="center" style={{ color: "red" }}>
                                                {student?.applicationNumber}
                                            </TableCell>

                                            <TableCell align="center">
                                                {student.name}
                                            </TableCell>
                                            <TableCell align="center">{student.fathersname
                                            }</TableCell>
                                            <TableCell align="center">{student.mothersname
                                            }</TableCell>
                                            <TableCell align="center">{student.email
                                            }</TableCell>
                                            <TableCell align="center">{student.mobile
                                            }</TableCell>
                                            <TableCell align="center">{student.courseType
                                            }</TableCell>
                                            <TableCell align="center">{student.courseBranch}</TableCell>
                                            <TableCell align="center">
                                                {student.courseName}
                                            </TableCell>

                                            <TableCell align="center" style={{ color: "green" }}>
                                                {student.isPaid ? "Paid" : "unpaid"}
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "green" }}>
                                                {student.isPaid ? "Verified" : <Button variant="contained" >Verify</Button>}
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "green" }}>
                                                <Button variant="success" onClick={() => generatePDF(student)}>Admit Card</Button>
                                            </TableCell>


                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 25, 100, 300, 500]}
                            component="div"
                            count={filteredData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>

                </Container>
            )}
        </ThemeProvider>
    )
}

export default Entrance_Slip