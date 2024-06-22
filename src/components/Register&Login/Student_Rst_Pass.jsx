import React from 'react'
import StudentDashboard from '../../AdminComponent/StudentDashboard'
import axios from "axios"
import { useState } from 'react'
import { Button } from 'react-bootstrap'


function Student_Rst_Pass() {


    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const response = await axios.post("http://localhost:7786/api/v1/reset_password", {
                oldPassword,
                newPassword
            })
            setMessage(response.data.message)
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
            else {
                setMessage("server error")
            }
        }
    }
    return (
        <div>
            <StudentDashboard />
            <div>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit} style={{ margin: "20%" }}>
               
                    <div>
                        <label htmlFor="oldPassword">Old Password:</label>
                        <input
                          style={{
                            border:"2px solid black"
                        }}
                            type="text"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword">New Password:</label>
                        <input 
                        style={{
                            border:"2px solid black"
                        }}
                            type="text"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit">Reset Password</Button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default Student_Rst_Pass