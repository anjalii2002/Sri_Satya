

import React from "react";

import { Link } from "react-router-dom";

function PharmacySchema() {
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
        <h2>Pharmacy Scheme </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme for Pharmacy</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          B.Pharmacy
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Choice Based Credit System (CBCS) w.e.f. 2016-17</b>
                </h6>
              </th>
              <th colSpan={3} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Non CBCS for 2014 and 2015 admitted students
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"  rowSpan={20} > <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBPHC_I_VIII.pdf">Scheme of B. Pharma. (All Semester)</Link></th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_BPH_I.pdf">First Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
            
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBP_II.pdf"> Second Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 3  </th>
          
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBP_III.pdf"> Third Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 4  </th>
         
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SHMbph_ivsem.pdf">Forth Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 5  </th>
       
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCH_BPHV.pdf">Fifth Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 6  </th>
          
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCH_BPHVI.pdf">Sixth Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 7  </th>    <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBP_VII.pdf">Seventh Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 8  </th>
          
              <th scope="row" ><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBP_VIII.pdf">Eight Semester</Link></th>
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
          M. Pharmacy
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>New Scheme ( w.e.f. 2017-18)</b>
                </h6>
              </th>
            
              <th colSpan={3} scope="colgroup">
                <h6>
                  <b>
                  Old Scheme 
                  </b>
                </h6>
              </th>
           
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMPCO_I.pdf">    First and Second semester w.e.f. 2017-18</Link>
          
              </th>
             
              <td >

                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMPCE_I.pdf">
                <h6>
                  <b>	First  Year (Pharmcology)<br/> w.e.f 2015-16</b>
                </h6>{" "}
                </Link>
              </td>
              <td >
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SYPHARMACOLOGY_II.pdf">
                <h6>
                  <b>First Year (Pharmaceutics)  <br/> w.e.f 2015-16</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/COLOGY.pdf">
                <h6>
                  <b>Second  Year (Pharmcology) <br/> w.e.f 2015-16r</b>
                </h6>
                </Link>
              </td>
           
          
              
            </tr>

            <tr>
              <th>
                <Link to =  "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SC_MPharmacyr_III_IVSem.pdf">
              Third and Fourth semester w.e.f. 2017-18
              </Link>
              </th>
             
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/MPHARMACEUTICS.pdf">
                <h6>
                  <b>	Second   Year <br/>(Pharmaceutics) <br/>  w.e.f 2015-16</b>
                </h6>{" "}
                </Link>
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCMP_III.pdf">
                <h6>
                  <b>Third Semester <br/>(Pharmacology/Pharmaceutics)</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/mphar.pdf">
                <h6>
                  <b>Fourth Semester <br/>(Pharmacology/Pharmaceutics)</b>
                </h6>
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
          <b>D. Pharmacy</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>As per PCI (w.e.f. 2021-22)</b>
                </h6>
              </th>
              <th scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Old Scheme 
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/SC_DPHARMA_I_2021.pdf">I Year</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/DPH_Sch_I.pdf"></Link>I Year</th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/SC_DPHARMA_II_2021.pdf">II Year</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/DPH_Sch_II.pdf">II Year</Link></th>
              </tr>
           
          </tbody>
        </table>{" "}<br/><br/>
      </div>

    
    </>
  );
}

export default PharmacySchema;

