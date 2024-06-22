import React from "react";

import { Link } from "react-router-dom";

function  UTDScheme() {
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
        <h2> UTD </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Scheme for UTD</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Scheme (NEP-2022-23)<br/>
           UTD (All UG Courses)
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> YEARLY </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">BA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/NEP%20YEARLY/SCHEME%20BA%203%20year%20%20new%202023-24.pdf">III Year</Link></th>
           
            </tr>

            <tr>
              <th scope="rowgroup">B.Com.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/NEP%20YEARLY/BCom%20III%20Year%20Scheme%20NEP%20%20FINAL.pdf">III Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">B.Sc.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/NEP%20YEARLY/BSC%20NEP%20III%20YEARLY%20%20SCHEME%20.pdf">III Year</Link></th>

            </tr>

            <tr>
              <th scope="rowgroup">BBA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/NEP%20YEARLY/BBA%20III%20Year%20Scheme.pdf">III Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">BCA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/NEP%20YEARLY/BCA%20SCHEME%20%20III%20YR.pdf">III Year</Link></th>
           
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
            Scheme (NEP-2022-23) SEMESTER SYSTEM <br/>  
               UTD ( UG Courses)
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">BA</th>
              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/SCHEME%20BA%201SEM.pdf">   I SEM </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/2nd%20sem/BA%20NEP%202nd%20sem.pdf">II  Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/3%20SEM%20NEP%202024/B%20A%203rd%20sem.pdf">III Sem</Link></th>
              <th><Link to = ""> IV Sem</Link></th>
            </tr>

            <tr>
              <th scope="rowgroup">B.Com.</th>

              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/B.COM%20IST%20SEM%202022-23%20%281%29.pdf">   I SEM </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/2nd%20sem/B.COM%202%20ND%20SEM%20SCHEME.pdf">II  Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/3%20sem/BCom%20III%20SEMESTER%20Scheme%20NEP%20Final%20%281%29.pdf">III Sem</Link></th>
              <th><Link to = ""> IV Sem</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">B.Sc.</th>

              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/BSC%20I%20SEM%20NEP%2022-23.pdf">   I SEM </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/2nd%20sem/BSC%20II%20SEM%20NEP%20SCHEME.pdf">II  Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/3%20sem/NEW%20BSC%20III%20SEM%20SCHEME.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/4%20TH%20SEM/NEW%20BSC%20%20IV%20SEM%20SCHEME.pdf"> IV Sem</Link></th>
           
            </tr>

            <tr>
              <th scope="rowgroup">BBA</th>

              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/BBA/BBA%20Ist%20Semester%20Scheme.pdf">   I SEM </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/2nd%20sem/BBA%20II%20Semester%20Scheme.pdf">II  Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/3%20sem/BBA%20III%20Semester%20Scheme.pdf">III Sem</Link></th>
              <th><Link to = ""> IV Sem</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">BCA</th>

              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/BCA%20Scheme%20I.pdf">   I SEM </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/2nd%20sem/BCA%20Scheme%20II%20NEP.pdf">II  Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/3%20sem/BCA%20Scheme%203RD%20SEM.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/4%20TH%20SEM/BCA%20Scheme%204TH%20SEM.pdf"> IV Sem</Link></th>
             
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
       
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b> Course -M.Sc. (w.e.f. 2022-23)</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th colSpan={2} scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> Semster</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20}>M.SC</th>
              <th scope="rowgroup">MATHEMATICS</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/M.Sc%20Mathematics%20Scheme%20%28I%29%20Semester.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/M.Sc%20Mathematics%20Scheme%20%28II%29%20Semester.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/M.Sc%20Mathematics%20Scheme%20%28III%29%20Semester.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/M.Sc%20Mathematics%20Scheme%20%28IV%29%20Semester.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>CHEMISTRY</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/MASTER%20OF%20SCIENCE%20%28CHEMISTRY%291.PDF">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/MASTER%20OF%20SCIENCE%20%28CHEMISTRY%292.PDF">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/MASTER%20OF%20SCIENCE%20%28CHEMISTRY%293.PDF">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/MASTER%20OF%20SCIENCE%20%28CHEMISTRY%294.PDF">IV Sem</Link></th>
            </tr>

            <tr>
              <th>PHYSICS</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/MASTER%20OF%20SCIENCE%20%28PHYSICS%29%201%20.PDF">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/Master%20of%20Science%20%28physics%29%202%20.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/Master%20of%20Science%20%28physics%29%203%20.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/Master%20of%20Science%20%28physics%29%204.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>MICROBIOLOGY</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/SCHEME%20MICROBIOLOGY1.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/SCHEME%20MICROBIOLOGY2.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/SCHEME%20MICROBIOLOGY3.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/SCHEME%20MICROBIOLOG4Y.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>ZOOLOGY</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/M.%20Sc.%20Zoology%20SCHEME1.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/M.%20Sc.%20Zoology%20SCHEME2.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/M.%20Sc.%20Zoology%20SCHEME3.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/M.%20Sc.%20Zoology%20SCHEME4.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>BOTANY</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/BOTANY%20SCHEME%201.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/BOTANY%20SCHEME%202.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME//M.SC%202023/BOTANY/BOTANY%20SCHEME%203.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/BOTANY%20SCHEME%204.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>COMPUTER SCIENCE</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MASTER%20OF%20SCIENCE%20%28COMPUTER%20SCIENCE%29%201.PDF">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MASTER%20OF%20SCIENCE%20%28COMPUTER%20SCIENCE%29%202.PDF">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/LINK/SCHEME/M.SC%202023/CS/MASTER%20OF%20SCIENCE%20%28COMPUTER%20SCIENCE%29%203.PDF">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MASTER%20OF%20SCIENCE%20%28COMPUTER%20SCIENCE%29%204.PDF">IV Sem</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Scheme (NEP-2022-23) UTD (All UG Courses)
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> YEARLY </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">BA</th>
              <th> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/SCHEME%20BA%202%20year%20.pdf">II Year</Link></th>
           
            </tr>

            <tr>
              <th scope="rowgroup">B.Com.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/BCom%20II%20Year%20Scheme%20NEP.pdf">II Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">B.Sc.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/BSC%20SCHEME%20%20II%20YR.pdf">II Year</Link></th>

            </tr>

            <tr>
              <th scope="rowgroup">BBA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/BBA%20II%20Year%20Scheme%20NEP.pdf">II Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">BCA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/BCA%20SCHEME%20%20II%20YR%20%281%29.pdf">II Year</Link></th>
           
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Scheme (NEP-2021-22) UTD (All UG Courses)
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> YEARLY </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">BA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SC_R_NEP_BA_12032022_0121.pdf">I Year</Link></th>
           
            </tr>

            <tr>
              <th scope="rowgroup">B.Com.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SC_R_NEP_BCom_12032022_0121.pdf">I Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">B.Sc.</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SC_R_NEP_BSC_12032022_0121.pdf">II Year</Link></th>

            </tr>

            <tr>
              <th scope="rowgroup">BBA</th>
              <th><Link to= "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SC_R_NEP_BBA_12032022_0121.pdf">I Year</Link></th>
            
            </tr>

            <tr>
              <th scope="rowgroup">BCA</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SC_R_NEP_BCA_12032022_0121.pdf">I Year</Link></th>
           
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>All PG Courses (M.A./M.Sc./M.Com.) (w.e.f. 2021)</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th colSpan={2} scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> SYLLABUS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={7}>MA</th>
              <th scope="rowgroup">ENGLISH</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/MA%20ENG/MA_I_ENG_2022.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/MA%20ENG/MA_Il_ENG_2022.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/MA%20ENG/MA_III_ENG_2022.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/MA%20ENG/MA_IV_ENG_2022.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>HINDI</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_I_HIN_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_II_HIN_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/M.A.HINDI%20III%20SEM%20SCHEME%20.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_IV_HIN_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>HISTORY</th>
              <th><Link to = ""></Link>I Sem</th>
              <th><Link to = ""></Link>II Sem</th>
              <th><Link to = ""></Link>III Sem</th>
              <th><Link to = ""></Link>IV Sem</th>
            </tr>

            <tr>
              <th>ECONOMICS</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_I_ECO_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_II_ECO_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/scheme2022/M.A.%20Economics%20III%20sem%20%20Scheme%20.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_IV_ECO_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>SOCIOLOGY</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_I_SOC_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_II_SOC_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_III_SOC_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_IV_SOC_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>POLITICAL SCIENCE</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_I_POLS_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_II_POLS_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_III_POLS_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MA_IV_POLS_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th>PSYCHOLOGYE</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_I_PSY_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_II_PSY_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_III_PSY_2021_R.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RSC_MA_IV_PSY_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              <th rowSpan={20}>M.Com.</th>
              <th scope="rowgroup">COMMERCE</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MCOM_I_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MCOM_II_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MCOM_III_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME2021/RRSC_MCOM_IV_2021.pdf">IV Sem</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
{/* {==========================================================================} */}
        
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Yearly Courses w.e.f. 2017-18</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Choice Based Credit System (CBCS)w.e.f. 2016-17</b>
                </h6>
              </th>
              <th scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Non – CBCS ( for Old Batches)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
              All UG Courses <br/>
           (BA/BCA/BBA/BCom/BSc) 
              </th>

              <th>I  Year</th>
               <td>
                {" "}
                <span>
                  {" "}
                  <b> I Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b> II Semester</b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> I Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b> II Semester</b>
                </span>{" "}
              </td>
            </tr>


            <tr>
             

              <th>II Year</th>
               <td>
                {" "}
                <span>
                  {" "}
                  <b> III Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b> IV Semester </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> III Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b>IV Semester</b>
                </span>{" "}
              </td>
            </tr>

            <tr>
             

             <th>III Year (All UG) <br/>
             B.Com. 2018-19</th>
              <td>
               {" "}
               <span>
                 {" "}
                 <b> V Semester </b>
               </span>{" "}
               <br />
               <span>
                 <b>VI Semester </b>
               </span>{" "}
             </td>
             <td>
               {" "}
               <span>
                 {" "}
                 <b>V Semester</b>
               </span>{" "}
               <br />
               <span>
                 <b>VI Semester</b>
               </span>{" "}
             </td>
           </tr>
           
        
    
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        {/* {=============================================} */}
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Syllabus</b>
                </h6>
              </th>

              <th colSpan={3} scope="colgroup">
                <h6>
                  <b> Course</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                All PG Courses <br /> (MA/MSc/MCom)
              </th>

              <td>
                <h6>
                  <b>I Semester</b>
                </h6>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <h6>
                  <b>II Semester</b>
                </h6>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <h6>
                  <b>III Semester</b>
                </h6>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <h6>
                  <b>
                    IV Semester <br />
                 </b>
                </h6>{" "}
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <br/><br/><br/>

        {/* _{====================================================} */}
        <br />
        <br />
        <br />
      </div>

   
    </>
  );
}

export default  UTDScheme;


