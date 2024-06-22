import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HodDashboard from "./HodDashboard";

const theme = createTheme({
    typography: {
        fontWeightBold: 700,
    },
});

const HodMainDetails = () => {

    const [selectedRadioButton1, setSelectedRadioButton1] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [selectedRadioButton, setSelectedRadioButton] = useState("")
    const [admissionSession, setAdmissionSession] = useState("");
    const navigate = useNavigate();

    const handleRadioChange1 = (event) => {
        setSelectedRadioButton1(event.target.value);
    };

    const handleRadioChange = (event) => {
        setSelectedRadioButton(event.target.value);
    };
    const handleSearchDetails = async () => {
        setShowForm(false);
        if (selectedRadioButton1 === "Pending Student List") {
            navigate("/studentpending");
        } else if (selectedRadioButton1 === "Verified Student List") {
            navigate("/studentverify", {

            });
        }
        handleSearch()
    };

    const handleSearch = async () => {
        setShowForm(false);
        // if (selectedRadioButton === 'E-Pravesh') {
        //     navigate("/Epravesh/pending/student")
        // } else if (selectedRadioButton === 'Student Registration') {
        //     navigate("/")
        // }
        if (selectedRadioButton === 'E-Pravesh') {
            // navigate("/Epravesh/pending/student")
        } else if (selectedRadioButton === 'Student Registration') {
            navigate("/")
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <HodDashboard />
                {showForm && (
                    <div
                        className="shadow p-3 bg-body rounded"
                        style={{
                            backgroundColor: "#e8e5d5",
                            width: "90%",
                            marginLeft: "90px",
                            marginRight: "auto",
                            marginTop: "100px",
                            maxWidth: "350px",
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#1d2671, #C33764)",
                                color: "#ffff",
                                borderRadius: "as7px",
                                width: '300px'
                            }} as
                        >
                            <h5 style={{ padding: "10px" }}>Registration Verification</h5>
                        </div>

                        <div
                            className="shadow p-3 mb-3 bg-body rounded"
                            style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
                        >
                            {/* <h5>E-Pravesh</h5>
                            <h5>Student Registration</h5> */}

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={selectedRadioButton}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    value="E-Pravesh"
                                    control={<Radio />}
                                    label="E-Pravesh"
                                />
                                <FormControlLabel
                                    value="Student Registration"
                                    control={<Radio />}
                                    label="Student Registration"
                                />
                            </RadioGroup>
                            <h5>
                                <b>Admission Session</b>
                            </h5>
                            <Form.Group className="mb-3" controlId="">
                                <b>{admissionSession}</b>
                            </Form.Group>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={selectedRadioButton1}
                                onChange={handleRadioChange1}
                            >
                                <FormControlLabel
                                    value="Pending Student List"
                                    control={<Radio />}
                                    label="Check Pending Student List"
                                />
                                <FormControlLabel
                                    value="Verified Student List"
                                    control={<Radio />}
                                    label="Check Verified Student List"
                                />
                            </RadioGroup>
                            <Button
                                backgroundColor='yellow'
                                size="small"
                                style={{ padding: "10px" }}
                                onClick={handleSearchDetails}
                            >
                                Search Details
                            </Button>
                            {/* </div> */}
                        </div>
                    </div>
                )}
            </ThemeProvider>
        </>
    );
};

export default HodMainDetails;