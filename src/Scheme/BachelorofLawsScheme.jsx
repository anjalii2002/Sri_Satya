
import React from "react";

import { Link } from "react-router-dom";

function BachelorofLawsScheme() {
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
        <h2> Bachelor of laws ( LLB) </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme for Bachelor of laws</b>
        </h4>{" "}
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>FIRST YEAR</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> Bachelor of LAWS(LL.B.) </th>
              <th scope="row">
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/LLB/LLB_I.pdf">I & II Sem</Link></th>
            </tr>

            <tr>
              <th scope="row"> Bachelor of LAWS(LL.B.) </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/LLB/LLB_II.pdf">III & IV Sem</Link></th>
            </tr>

            <tr>
              <th scope="row"> Bachelor of LAWS(LL.B.) </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/LLB/LLB_III.pdf"> V & VI Sem</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
      </div>

    
    </>
  );
}

export default BachelorofLawsScheme;
