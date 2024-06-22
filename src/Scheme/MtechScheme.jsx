



import React from "react";

import { Link } from "react-router-dom";

function MtechScheme() {
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
        <h2>M.Tech. </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme for M.Tech.</b>
        </h4>{" "}
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
                  <b>First Semester Syllabus</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Second Semester Syllabus</b>
                </h6>
              </th>
              <th  scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Third Semester Syllabus
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTCS_I.pdf">Computer Science and Engineering </Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MCSE_II.pdf">Computer Science and Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYCSE_III.pdf">Computer Science and Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTCTA_I.pdf">Computer Technology and Application </Link> </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MCTA_II.pdf">Computer Technology and Application</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/M.TECH%20CTA%20III%20SEM%20SYLLABUS%202022.pdf">Computer Technology and Application</Link></th>
              </tr>

              <tr>
              <th scope="row"> 3  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTDC_I.pdf">Digital Communication</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_DC_II.pdf">Digital Communication</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYDC_III.pdf">Digital Communication</Link></th>
              </tr>

              <tr>
              <th scope="row"> 4  </th>
              <th scope="row"> <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTEPS_I.pdf">Electrical Power System</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_EPS_II.pdf">Electrical Power System</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYEPS_III.pdf">Electrical Power System</Link></th>
            
              </tr>

              <tr>
              <th scope="row"> 5  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTID_I.pdf">Industrial Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_ID_II.pdf">Industrial Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SyllabusIIIsem/SYID_III.pdf">Industrial Design</Link></th>
              </tr>

              <tr>
              <th scope="row"> 6  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTIT_I.pdf">Information Technology</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MIT_II.pdf">Information Technology</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYIT_III.pdf">Information Technology</Link></th>
              </tr>

              <tr>
              <th scope="row"> 7  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTPE_I.pdf">Electronics</Link> </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_PE_II.pdf">Power Electronics</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYPE_III.pdf">Power Electronics</Link></th>
              </tr>

              <tr>
              <th scope="row"> 8  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTSE_I.pdf">Software Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MSE_II.pdf">Software Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYMSE_III.pdf">Software Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 9  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTSD_I.pdf">Structural Design </Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_SD_II.pdf">Structural Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYSD_III.pdf">Structural Design</Link></th>
              </tr>

              <tr>
              <th scope="row"> 10  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MTTH_I.pdf">Thermal Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_TH_II.pdf">Thermal Engineering</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYTH_III.pdf">Thermal Engineering</Link></th>
              </tr>

              <tr>
              <th scope="row"> 11  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MTech/SY_MTVLSI_I.pdf">VLSI Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_VLSI_II.pdf">VLSI Design</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/MTECH/SYVL_III.pdf">VLSI Design</Link></th>
              </tr>
         
          </tbody>
        </table>{" "}
        <br />
        <br />
        
      </div>

    
    </>
  );
}

export default MtechScheme;

