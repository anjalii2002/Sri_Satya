import React, { useState, useEffect } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import AdminDashboard from "../Admin_Dashboard/AdminDashboard";
import DatePicker from "react-datepicker";
import { FormControl } from "react-bootstrap";

const AdminUpdate_Clg_Name_Branch = () => {
    const { id } = useParams()
    const userID = id;

    const [formData, setFormData] = useState({
        branch: "",
        courseName: "",
        studentId: ""
    });


    console.log(formData, "formdataaaaaaaaaaaaa")



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    process.env.REACT_APP_STD_UPDT_ALLDETAIL + `${userID}`
                );
                const data = await response.json();
                const studentData = data.Studentdata[0];
                console.log(studentData, "dataaaaaa")

                setFormData({
                    name: studentData.name,
                    fathersname: studentData.fathersname,
                    mothersname: studentData.mothersname,
                    dob: studentData.dob,
                    gender: studentData.gender,
                    mobile: studentData.mobile,
                    branch: studentData.courseBranch,
                    courseName: studentData.courseName,
                    assignCollege: studentData.assignCollege,
                    studentId: studentData._id
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    /////////////////////datepicker/////////////////
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://sssutms.ac.in/apitest/admin/update-course`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID,
                    //   branch,
                    formData
                }),
            });

            if (response.ok) {
                const errorData = await response.json();
                swal({
                    title: "Success",

                    icon: "success",
                    text: `Data updated successfully!: ${errorData.errors.join(", ")}`,
                });
                return;
            }

            if (!response.ok) {
                const errorData = await response.json();
                swal({
                    icon: "error",
                    title: "Error",
                    text: `Error: ${errorData.errors.join(", ")}`,
                });
                return;
            }

            const data = await response.json();
            swal({
                icon: "error",
                title: "Error",
                text: "Something went wrong!",
            });
        } catch (error) {
            swal({
                title: "Success",
                text: "Data updated successfully!",
                icon: "success",
                buttons: "OK",
            });
        }
    };

    return (
        <>
            <AdminDashboard />
            <Container className="shadow p-3 bg-body rounded" style={{ marginTop: "80px", marginLeft: "11%" }}>
                <h3 style={{ fontWeight: "inherit", backgroundImage: "linear-gradient(to right, #004e92, #990033)", borderRadius: "10px", color: 'whitesmoke', padding: "5px" }}>Update Student Data</h3>
                <Form style={{ marginTop: "3%" }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled="true"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="fathersname">
                            <Form.Label>Father's Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fathersname"
                                value={formData.fathersname}
                                onChange={handleChange}
                                disabled="true"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="fathersname">
                            <Form.Label>Mother's Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="mothersname"
                                value={formData.mothersname}
                                onChange={handleChange}
                                disabled="true"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Date of Birth</Form.Label>
                          
                            <div >
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={selectedDate || (formData?.dob ? new Date(formData?.dob) : null)}
                                    name="dob"
                                    onChange={(date) =>handleChange(date)}
                                    required
                                    readOnly={true}
                                    customInput={<FormControl style={{ width: '169%' }} />}
                                />
                                
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type="text"
                                name="gender"
                                value={formData?.gender}
                                onChange={handleChange}
                                disabled="true"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="fathersname">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                type="text"
                                name="mobile"
                                value={formData?.mobile}
                                onChange={handleChange}
                                disabled="true"
                            />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="courseName">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="branch">
                            <Form.Label>Course Branch</Form.Label>
                            <Form.Control
                                type="text"
                                name="branch"
                                value={formData?.branch}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="assignedCollege">
                            <Form.Label>College</Form.Label>
                            <Form.Control
                                type="text"
                                name="assignedCollege"
                                value={formData?.assignCollege || "Not assigned"}
                                onChange={handleChange}
                            />
                        </Form.Group>

                    </Row>

                </Form>



                <Form>

                    <Button variant="primary" onClick={handleSubmit}>
                        Update
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AdminUpdate_Clg_Name_Branch;
