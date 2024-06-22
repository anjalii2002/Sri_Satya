import React from "react";

import { Link } from "react-router-dom";

function BScHonsAg() {
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
        <h2>B.Sc.(Hons.) (Ag)</h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme : B.Sc. (Agriculture)  </b>
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
                  <b>As per Fifth Dean Committee</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Non CBCS  (Old scheme)</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/I_Sem_SC.pdf">I Semester</Link> </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBSCAG_I.pdf">I Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/II_Sem_SC.pdf">II Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/II_sc_Non_CBCS.pdf">II Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 3  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/III_Sem_SC.pdf">III Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBAG_IIIr.pdf">III Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 4  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/IV_Sem_SC.pdf">IV Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBAG_IVr.pdf">IV Semester</Link></th>
           </tr>

              <tr>
              <th scope="row"> 5  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/V_Sem_SC.pdf">V Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBAG_V.pdf">V Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 6  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/VI_Sem_SC.pdf">VI Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBAG_VI.pdf">VI Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 7  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/VII_Sem_SC.pdf">VII Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCB%20Sc%20(Agri)%207th%20Sem%20non-cbcs.pdf">VII Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 8  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/fifth_Dean/VIII_Sem_SC.pdf">VIII Semester</Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/BSCAG/SCBScAG_NonCBCS_%208.pdf">VIII Semester</Link></th>
              </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        
      </div>

     
    </>
  );
}

export default BScHonsAg;
