import React from 'react'
import Nav from '../HomePage/Nav'
import poly from "../PDF/Approval/2024-25/Poly_Eng.PDF"
import SHM from "../PDF/Approval/2024-25/SHM.PDF"
import SOD from "../PDF/Approval/2024-25/SOD.PDF"
import SOMS from "../PDF/Approval/2024-25/SOMS.PDF"
import SOCA from "../PDF/Approval/2024-25/SOCA.PDF"
import Footerpage from '../HomePage/Footerpage'

function Approval() {
    return (
        <div>
            <Nav />
            <>
                <p>
                    <a href={poly} target='_blank'>
                        <b>POLYTECHNIC (ENGINEERING)</b>
                    </a>
                </p>
                <p>
                    <a href={SHM} target='_blank'>
                        <b>SCHOOL OF HOTEL
                            MANAGEMENT, SRI SATYA SAI
                            UNIVERSITY OF TECHNOLOGY
                            AND MEDICAL
                            SCIENCES,(SSSUTMS)</b>
                    </a>
                </p>
                <p>
                    <a href={SOCA} target='_blank'>
                        <b>SCHOOL OF COMPUTER
                            APPLICATION,SRI SATYA SAI
                            UNIVERSITY OF TECHNOLOGY
                            AND MEDICAL
                            SCIENCES,(SSSUTMS)</b>
                    </a>
                </p>
                <p>
                    <a href={SOD} target='_blank'>
                        <b>SCHOOL OF DESIGN SRI SATYA
                            SAI UNIVERSITY OF TECHNOLOGY
                            AND MEDICAL SCIENCE</b>
                    </a>
                </p>
                <p>
                    <a href={SOMS} target='_blank'>
                        <b>SRI SATYA SAI INSTITUTE OF
                            MANAGEMENT.</b>
                    </a>
                </p>
            </>
            <Footerpage />
        </div >
    )
}

export default Approval