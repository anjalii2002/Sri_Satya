

import React from "react";

import { Link } from "react-router-dom";

function EducationScheme() {
  return (
    <>
      <style>
        {`
          .ddd {
            margin: 10px auto; /* Center the table */
            padding: 30px;
            overflow-x: auto; /* Allow horizontal scrolling on small screens */
            counter-reset: examples approaches;
            background-color: Gainsboro;
            color: #333;
            font-size: 93.75%;
            line-height: 1.5;
            max-width: 1680px;
          }

          table {
            width: 70%; /* Make the table fill the container */
            border-collapse: collapse; /* Remove default spacing between table cells */
          }

          th, td {
            padding: .5em;
            border: 1px solid #999;
          }

          @media screen and (max-width: 768px) {
            /* Apply responsive styles for screens smaller than 768px */
            .ddd {
              overflow-x: auto;
            }

            table {
              max-width: 100%; /* Allow horizontal scrolling on small screens */
            }
          }
          h2 {
            text-align: center;
            background-color:#14adad;
            // Width : 100%;
            // margin-left:10px;
            border-radius: 25px;
            font-size: 30px; /* Default font size */
            margin: 0; /* Remove default margin */
           
          }
          @media screen and (max-width: 600px) {
            h2 {
                font-size: 18px; /* Adjust font size for smaller screens */
            }
        }
        @media screen and (max-width: 768px) {
          table {
            width: 100%;
          }
          table thead {
            display: none;
          }
          table, table tbody, table tr, table td {
            display: block;
            width: 100%;
          }
          table tr {
            margin-bottom: 15px;
            display: block;
            border: 1px solid #ccc;
          }
          table td {
            text-align: left;
            padding: 10px;
          }
        }
        `}
      </style>
  
      <div className="ddd" style={{ color: "black" }}>
        <h2>Education </h2>
        <br />
       
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Bachelor of Education
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Course</b>
                </h6>
              </th>
              <th colSpan={6} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Semester
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">
                1.
              </th>
              <th>Bachelor of Education (CBCS)</th>
              <td><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20Education/SCBEDC_I_IV.pdf"> <h6>
                  <b>I to IV Semester(CBCS)</b>
                </h6>{" "}</Link>
                   </td>
              <td >
                <Link to = ""> <h6>
                  <b></b>
                </h6></Link>
               </td>
            
             
            </tr>
            <tr>
          </tr>

          <tr>
              <th scope="rowgroup">
                2.
              </th>
              <th>B.Ed. (Non- CBCS)</th>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/EDU/BEdscheme2sem..pdf"> <h6>
                  <b>Second Semester</b>
                </h6>{" "}</Link>
               
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/EDU/bed32.pdf">
                <h6>
                  <b>Second Year   ( III & IV Semester) </b>
                </h6>
                </Link>
              </td>
            
            
            </tr>
            <tr>
          </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* ================================== */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
           B.A.B.Ed.
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
            <th scope="col">
                <h6>
                  <b>S.No.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                <b>Syllabus</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th  scope="rowgroup">
              1
              </th>
              <th rowSpan={2}>Bachelor of Arts Bachelor of Education  (B.A.B.Ed.)<br/>(Session 2021-22)</th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/BA_BED_Schem_I__sem_New_-__-_Copy_(2)_09072022_1212.pdf">
                <h6>
                  <b>I-Sem</b>
                </h6>{" "}</Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/BA_BED_Schem_II_sem_09072022_1212.pdf">
                <h6>
                  <b>II-Sem</b>
                </h6></Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BABED/Session2022-23.pdf">
                <h6>
                  <b>III-Sem</b>
                </h6>
                </Link>
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BABED/Session2022-23.pdf">
                <h6>
                  <b>IV Sem</b>
                </h6></Link>
              
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/babed%205%20sem.pdf">
                <h6>
                  <b>VI Sem</b>
                </h6></Link>
              
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td  scope="rowgroup">
               
                  {" "}
                  <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCBA_Bedn_ISem_R_25052022_1151.pdf">
                  <span>
                  {" "}
                  <b> I-Sem</b>
                </span>{" "}</Link>
                 
                <br />
                {/* <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/babed_syllabus_II_sem_2021-22_final_09072022_1214.pdf">
                <span>
                  <b> II Sem </b>
                </span>{" "}
                </Link> */}
               {" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCBA_Bedn_IISem_R_25052022_1151.pdf">
                <span>
                  {" "}
                  <b>  II Sem</b>
                </span>{" "}
                </Link>
                {/* <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/babed%20II%20year%20syllabus2022-2023%20final..pdf">
                <span>
                  <b> IV Sem </b>
                </span>{" "}</Link> */}
               
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20Education/SCBA_Bedi_IIISem.pdf">
                <span>
                  {" "}
                  <b> III-Sem</b>
                </span>{" "}
                </Link>
                <br />
                {/* <span>
                  <b></b>
                </span>{" "} */}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b>  </b>
                </span>{" "}
                <br />
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
              </td>
            </tr>

            <tr>
              <th  scope="rowgroup">
              2
              </th>
              <th rowSpan={2}> Bachelor of Arts Bachelor of Education    (B.A.B.Ed.)</th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20Education/SCBABed_IVrr.pdf">
                <h6>
                  <b>IV-Sem (Rev)</b>
                </h6>{" "}</Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20Education/SCBABed_V.pdf">
                <h6>
                  <b>V-Sem </b>
                </h6></Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20Education/SCBABed_VI.pdf">
                <h6>
                  <b>VI Sem</b>
                </h6>
                </Link>
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BA_BED_syllabus_VIII.pdf">
                <h6>
                  <b></b>
                </h6></Link>
              
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BA_BED_syllabus_VIII.pdf">
                <h6>
                  <b></b>
                </h6></Link>
              
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td  scope="rowgroup">
               
                  {" "}
                  <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/Scheme%207sem.pdf">
                  <span>
                  {" "}
                  <b> VII Sem</b>
                </span>{" "}</Link>
                 
                <br />
                {/* <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/babed_syllabus_II_sem_2021-22_final_09072022_1214.pdf">
                <span>
                  <b> II Sem </b>
                </span>{" "}
                </Link> */}
               {" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BA_BED_Schem_VIII.pdf ">
                <span>
                  {" "}
                  <b>  VIII Sem</b>
                </span>{" "}
                </Link>
                {/* <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/babed%20II%20year%20syllabus2022-2023%20final..pdf">
                <span>
                  <b> IV Sem </b>
                </span>{" "}</Link> */}
               
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/babed%20III%20year%20V%20sem%20syllabus.pdf">
                <span>
                  {" "}
                  <b></b>
                </span>{" "}
                </Link>
                <br />
                {/* <span>
                  <b></b>
                </span>{" "} */}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b>  </b>
                </span>{" "}
                <br />
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
              </td>
            </tr>
     </tbody>
        </table>{" "}
        <br />
        <br />
        
      </div>

     
    </>
  );
}

export default EducationScheme;

