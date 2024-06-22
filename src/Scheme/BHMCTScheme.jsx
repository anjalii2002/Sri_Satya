


// import Nav from "../HomePage/Nav";
// import Footerpage from "../HomePage/Footerpage";
import {Link} from "react-router-dom"

function BHMCTSchemee() {
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
        <h2>B.H.M.C.T. </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Bachelor of Hotel management and Catering Technology</b>
        </h4>{" "}
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Choice Based Credit System(CBCS)s</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Non-CBCS </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
           
              <th scope="row">
              <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/HMCT_ICBCS.pdf">
             First Semester <br/> (wef. Academic Session 2016-17){" "}</Link>
              </th>
             
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/HM_I.pdf">First Semester</Link> </th>
            </tr>

            <tr>
              <th scope="row">
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BHMCTCII_SH.pdf"> Second Semester <br/> (wef. Academic Session 2016-17){" "}</Link>
               
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/HM_II.pdf">Second Semester</Link></th>
            </tr>

            <tr>
              <th scope="row">
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMC_III.pdf">  Third Semester <br/> (wef. Academic Session 2017-18){" "}</Link>
              
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/HM_III.pdf">Third Semester</Link></th>
            </tr>

            <tr>
              <th scope="row">
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCHMC_IV.pdf">    Fourth Semester <br/> (wef. Academic Session 2017-18)</Link>
            
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BHMCT4.pdf">Fourth Semester </Link></th>
            </tr>

            <tr>
              <th scope="row">
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT%205th%20scheme%20cbcs.pdf">  Fifth Semester <br/> (wef. Academic Session 2017-18){" "}</Link>
              
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BHMCTV.pdf">Fifth Semester</Link></th>
            </tr>

            <tr>
              <th scope="row">
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT_6thsem.pdf">    Sixth Semester  <br/>(wef. Academic Session 2018-19 ){" "}</Link>
            
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/BHMCT_VISYL.pdf">Six Semester </Link></th>
            </tr>

            <tr>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT_7thsem.pdf">Seven Semester</Link>  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT_VIIr_19-01-18.pdf">Seven Semester</Link></th>
            </tr>

            <tr>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT_8thsem.pdf">Eight Semester </Link></th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/SCBHMCT_VIIIr_19-01-18.pdf">Eight Semester</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
      </div>

   
    </>
  );
}

export default BHMCTSchemee;
