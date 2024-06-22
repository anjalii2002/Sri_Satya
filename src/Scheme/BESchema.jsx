

import React from "react";
import { Link } from "react-router-dom";

function BESchema() {
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
        <h2>B.E. Schema </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b> Schema for Bachelor of engineering</b>
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
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    SEMESTER <br />
                    (As pre AICTE Curriculum)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td>
                {" "}

                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AE_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AE_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_AE_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_AE_VIII_SC.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_A_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_A_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CM_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CM_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCM_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCM_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_CM_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_CM_VIII_SC.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/III%20SEM%20SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/IV%20SEM%20SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/V%20SEM%20SCHEME.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/VI%20SEM%20SCHEME.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/VII%20SEM%20SCHEME.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/sesssion%202022-23/VIII%20SEM%20SCHEME.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CSE_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CSE_IV_SCHEME.pdf">
                <span>
                
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCS_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/RSCCS_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_CSE_VII_SC_R.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_CSE_VIII_SC_R.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20BE/2019/I_A_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20BE/2019/I_A_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEE_III_SCHEME.pdf"> 
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20BE/R2019/EE_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_V_D2020R.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_VI_D2020R.pdf"> 
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EE_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EE_VIII_SC.pdf"> 
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_A_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_A_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link >
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEE_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEE_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_V_D2020R.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_VI_D2020R.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EX_VII_SC_R.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EX_VIII_SC_R.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_A_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_A_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ECE_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ECE_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EC_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EC_VIII_SC.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EI_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EI_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_V_D2020.pdf">
                {" "}
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EI_VII_SC_R.pdfM">
                {" "}
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_EI_VIII_SC_R.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_A_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_A_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
             
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/IT_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/IT_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/IT_V_SCHEME%20NEW.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_IT_VI_SC%20updated.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_IT_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_IT_VIII_SC.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20BE/2019/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ME_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ME_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_ME_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_ME_VIII_SC.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/I_B_Scheme.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_B_Scheme.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MI_III_SCHEME.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MI_IV_SCHEME.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMI_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMI_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_MI_VII_SC.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AAICTE_BE_MI_VIII_SC_R.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
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
            Choice Based Credit System(CBCS) with effect from academic session
            2016-17
          </b>
        </h5>
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
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    SEMESTER <br />
                    (CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td rowSpan={20} scope="rowgroup">
                <b>
                  {" "}
                 <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/BECBCS_I.pdf"> <span> I Semester and</span><br /></Link> 
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/SCHEMEII%20SEM/BECII_SH.pdf">  <span>II Semester Common to All{" "}</span> </Link>  
                </b>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_BEAE_VSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEAE_VISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEAE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEAE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCMC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCH_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_CMrVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_CMrVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECME_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECME_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>

              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCE_IV_CBCSr.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_CErVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_CErrVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCSC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCS_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
            
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_rCSEVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_rCSEVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
               
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECS_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBECS_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEEC_III.pdf">  
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
              
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_IV.pdf">  
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_IV.pdf"> 
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/CBCS%20SCHEME/Scheme%20BE/SCBE_EEVISem_CBCS.pdf">  
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEE_CBCS7thSEM..pdf"> 
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEE_CBCS8thSEM..pdf">  
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEXC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_EXVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_EXVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEX_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCECC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_ECVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_ECVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEC_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEC_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEIC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_EIVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_EIVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEEI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCITC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCIT_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_ITrVSem_CBCS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_ITrVISem_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEIT_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEIT_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_IVr.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/B.E.%20ME%20%20V%20Sem%20Scheme.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/B.E.%20ME%20VI%20%20Sem%20Scheme.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEME_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEME_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMIC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMI_IV_R.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_MI_V.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBE_MI_VI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEMI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBEMI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b> Non CBCS (for 2014 and 2015 admitted students)</b>
        </h5>
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
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    SEMESTER
                    <br />
                    (Non-CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td rowSpan={20} scope="rowgroup">
                <b>
                  {" "}
               <span>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/SC_BE_I.pdf">I Semester and</Link></span>    <br />
               <span><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/SC_BE_I.pdf" >II Semester Non-CBCS(Old scheme)<br/> Common to All{" "}</Link></span>
                </b>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_III.pdf"></Link>
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BEAEIV.pdf"></Link>
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AEVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/AEVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCAE_VIII.pdf"></Link>
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CMIIISem.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BECMI.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CMVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CMVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCM_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCH_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CEivSCHEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CEVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCE_VIr.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHCSE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/cse4schem.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/CSEVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BECSEVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCS_VII.pdf">
                <span>
                  {" "}
                  <b>  7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCCS_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEIVScheme.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EEVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EX-IVScheme.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EXVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EXVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEX_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EC4SEMSCHM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ECVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ECVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEC_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BE%20_IV/EI-IV%20Scheme.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EIVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/EIVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCEI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/IT_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BEITIVSch.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ITVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/ITVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCIT_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCIT_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/me4schem.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MEVS.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MEVI.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCME_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMIN_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BEMIIV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MIV_SH.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MIVI_SH.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
   </div>

    </>
  );
}

export default BESchema;
