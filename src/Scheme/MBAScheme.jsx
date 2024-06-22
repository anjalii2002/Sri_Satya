

import React from "react";

import {Link} from "react-router-dom"

function MBAScheme() {
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
        <h2>MBA </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Masters of Business Administration</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            As per AICTE Curriculam with effect from academic session 2022-23
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.NO.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Course</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Scheme
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">
                1
              </th>
              <th>MBA (CBCS)( Wef. Academic Session 2016-17) </th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MBA_ICBCS.pdf">
                <h6>
                  <b>First Semester </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MBACII_SH.pdf">
                <h6>
                  <b>Second Semester</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMBAC_III.pdf">
                <h6>
                  <b>Third Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMBAr_IV.pdf">
                <h6>
                  <b>Fourth Semester </b>
                </h6>
                </Link>
              </td>
            </tr>
          


            <tr>
              <th scope="rowgroup">
                2
              </th>
              <th>MBA Non CBCS (Old Scheme) </th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MBA_I.pdf">
                <h6>
                  <b>First Semester </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/mba2.pdf">
                <h6>
                  <b>Second Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMBA_III.pdf"> 
                <h6>
                  <b>Third Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/mba.pdf"> 
                <h6>
                  <b>Fourth Semester </b>
                </h6>
                </Link>
              </td>
            </tr>


            <tr>
              <th scope="rowgroup">
                3
              </th>
              <th>Part Time </th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/mbaV_SH.pdf">
                <h6>
                  <b>Fifth Semester   </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MBAVISH.pdf">
                <h6>
                  <b>Six Semester</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "">
                <h6>
                  <b></b>
                </h6>
                </Link>
                
              </td>
              <td>
                <Link to = ""> 
                <h6>
                  <b></b>
                </h6>
                </Link>
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

export default MBAScheme;
