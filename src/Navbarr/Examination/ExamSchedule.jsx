import React from 'react'
import BACA from "../../PDF/Examination_Schedule/BA_CA.pdf"
import BAPLAIN from '../../PDF/Examination_Schedule/BA_Plain.pdf'
import BBA from '../../PDF/Examination_Schedule/BBA.pdf'
import BCA from '../../PDF/Examination_Schedule/BCA.pdf'
import BCOMCA from '../../PDF/Examination_Schedule/BCOM_CA.pdf'
import BCOMPLAIN from '../../PDF/Examination_Schedule/BCOM_Plain.pdf'
import BSCBIO from '../../PDF/Examination_Schedule/BSC_BIO.pdf'
import BSCMICROBIO from '../../PDF/Examination_Schedule/BSC_MICROBIO.pdf'
import BSCCS from '../../PDF/Examination_Schedule/BSC_CS.pdf'
import BSCMATHS from '../../PDF/Examination_Schedule/BSC_MATHS.pdf'

import Nav from '../../HomePage/Nav'

import ban2 from '../../PDF/Examination_Schedule/BANEPIIYEAR.pdf'
import ban3 from '../../PDF/Examination_Schedule/BA_III_YEAR.pdf'
import bba2 from '../../PDF/Examination_Schedule/bba2.pdf'
import bba3 from '../../PDF/Examination_Schedule/bba3.pdf'
import bca2 from '../../PDF/Examination_Schedule/bca2.pdf'
import bca3 from '../../PDF/Examination_Schedule/bca3.pdf'
import bsc2 from '../../PDF/Examination_Schedule/bsc2.pdf'
import bsc3 from '../../PDF/Examination_Schedule/bsc3.pdf'
import bcom2 from '../../PDF/Examination_Schedule/bcom2.pdf'
import bcom3 from '../../PDF/Examination_Schedule/bcom3.pdf'

import diplomapharma from '../../PDF/Examination_Schedule/diplomapharma.pdf'
import bpes from '../../PDF/Examination_Schedule/bpes.pdf'
import pbbsc from '../../PDF/Examination_Schedule/pbbsc.pdf'


import nursing from '../../PDF/Examination_Schedule/nursing.pdf'
import ayurveda from '../../PDF/Examination_Schedule/ayurveda.pdf'
import phd from '../../PDF/Examination_Schedule/phd.pdf'
import bscnursing from '../../PDF/Examination_Schedule/bscnursing.pdf'
import Footerpage from '../../HomePage/Footerpage'




const ExamSchedule = () => {
  return (

    <>
      <style>
        {
          `
        



          .list-group-item-text a{
            font-size:20px;
          }
       
       
     


      .midtable{
       width: 800px;
        height: 600px;
         margin-top:30px;
         border-radius:60px;
       margin-left:130px;
        animation: fadeInLeft 1s ease-in-out;
      }
  
.midtable1{
  margin-top:-140px;
  width: 800px;
 margin-left:130px;
  height: 80px;
  padding:px
}



.table-fill1 {
  background: white;
  border-radius: 60px;
  // border-collapse: collapse;
  // height: auto;
  margin: auto;
  max-width: 95%;
  width: 100%;
  height:250px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}



.midtable2{
   margin-top:240px;
  width: 800px;
 margin-left:130px;
  height: 80px;
  padding:px
}



.table-fill2 {
  background: white;
  border-radius: 60px;
  // border-collapse: collapse;
  // height: auto;
  margin: auto;
  max-width: 95%;
  width: 100%;
  height:100px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}






.midtable3{
  margin-top:20px;
 width: 800px;
 margin-left:130px;
 height: 80px;
 padding:px
}



.table-fill3{
 background: white;
 border-radius: 60px;
 // border-collapse: collapse;
 // height: auto;
 margin: auto;
 max-width: 95%;
 width: 100%;
 height:100px;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
 animation: float 5s infinite;
}







.midtable4{
  margin-top:20px;
 width: 800px;
 margin-left:130px;
//  margin-bottom:100px;
 height:30px;


}



.table-fill4{
 background: white;
 border-radius: 60px;
 // border-collapse: collapse;
 // height: auto;
 margin: auto;
 max-width: 95%;
 width: 100%;
 height:100px;
 margin-bottom:20px;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
 animation: float 5s infinite;
}

      .h5div{
       margin-left:130px;
        font-size:30px;
        font-family:montserra;
        font-weight:bold;
        color: #6f1d1b;
        margin-top:50px;

      }




      .table-hover a{
        font-size:20px;
      }
    
      .content {
        margin-left: 5%;
        background: rgba(255, 255, 255, 0.8);
        padding: 20px;
        animation: fadeInContent 1s ease-in-out;
      }

      .table-fill {
        background: white;
        border-radius: 60px;
        // border-collapse: collapse;
        // height: auto;
        margin: auto;
        max-width: 95%;
        width: 100%;
        height:360px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        animation: float 5s infinite;
      }

      th {
        color: #D5DDE5;
        background: #1b1e24;
        font-size: 20px;
        font-weight: 100;
        font-family:montserra;
        padding: 10px;
        text-align: left;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        vertical-align: middle;
      }

      th:first-child {
        border-top-left-radius: 3px;
      }

      th:last-child {
        border-top-right-radius: 3px;
        border-right: none;
      }

      tr {
        color: #666B85;
        font-size: 20px;
        font-family:poppins sans-serif;
        font-weight: normal;
        text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
      }

      tr:nth-child(odd) td {
        background: #b7b7a4;
        color:black;
      }

      tr:last-child td:first-child {
        border-bottom-left-radius: 3px;
      }

      tr:last-child td:last-child {
        border-bottom-right-radius: 3px;
      }

      td {
        background: #FFFFFF;
        padding: 10px;
        text-align: center;
        vertical-align: middle;
        font-weight: 300;
        font-family:poppins sans-serif;
        font-size: 20px;
        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
        border-right: 1px solid #C1C3D1;
      }

      td:last-child {
        border-right: 0px;
      }

      th.text-left,
      td.text-left {
        text-align: left;
      }

      th.text-center,
      td.text-center {
        text-align: center;
      }

      th.text-right,
      td.text-right {
        text-align: right;
      }


      // ///////////////////////////////animation ////////////////////////
      .animated-content1 {
        animation-name: fadeInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        opacity: 0;
        transform: translateX(-100%);
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
      






// //////////////////////////////////////////////////////////////////////////////////////////////////////////

    .animated-content {
      animation-name: fadeInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      opacity: 0;
      transform: translateX(-100%);
  }
  
  @keyframes fadeInLeft {
      from {
          opacity: 0;
          transform: translateX(-100%);
      }
      to {
          opacity: 1;
          transform: translateX(0);
      }
  }






// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      @media screen and (max-width: 768px) {
        .table-fill {
          width: 90%;
        }
      }

      @media screen and (max-width: 480px) {
        .table-fill {
          width: 100%;
        }



      }`
        }
      </style>



      <Nav />
      {/* <div>
        <h2 style={{ fontWeight: 'bolder', marginLeft: '80px', marginTop: '30px' }}> | Exam Schedule </h2>
        <br></br>

      </div> */}

      <h5 style={{ marginLeft: '80px', marginTop: '40px', fontSize: '30px', fontweight: 'bold', fontFamily: 'montserra' }}>Examination April -  2024 </h5>
     
 <div className="container" style={{marginTop:'30px'}}>
    <div id="main" className="card card-body" style={{backgroundColor:'#D1D8C5'}}>
      <h2 className="titlee" style={{ color:'#780000',  fontFamily:"'Open Sans', Sans-serif",
        marginLeft:'30px'}}> | Exam Schedule</h2>
     <br></br>
      
      <ul id="items" className="list-group">
      



     




<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#780000',fontFamily:"'Roboto',sans-serif"}}><a href={BAPLAIN} target="_blank">  Bachelor of Arts [Plain] Third Year     (BA PLAIN III YEAR) </a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d',fontFamily:"'Roboto',sans-serif" }}><a href={BBA} target="_blank"> Bachelor of Business Administration Third Year    (BBA III YEAR)</a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d',fontFamily:"'Roboto',sans-serif"}}><a href={BCA} target="_blank">Bachelor of Computer Application Third Year  (BCA III YEAR)  </a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d',fontFamily:"'Roboto',sans-serif"}}><a href={BCOMCA} target="_blank">
  Bachelor of Commerce [Computer Application] Third Year  (B COM CA III) </a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d',fontFamily:"'Roboto',sans-serif" }}><a href={BCOMPLAIN} target="_blank">
  Bachelor of Commerce [Plain] Third Year  (B COM PLAIN III) </a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#9e0059',fontFamily:"'Roboto',sans-serif" }}><a href={BSCBIO} target="_blank"> Bachelor of Science [Biology] Third Year   (BSC BIO III YEAR)</a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d',fontFamily:"'Roboto',sans-serif" }}><a href={BSCCS} target="_blank">   Bachelor of Science [Computer Science] Third Year   (BSC CS III YEAR  )</a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#31572c',fontFamily:"'Roboto',sans-serif" }}><a href={BSCMATHS} target="_blank">Bachelor of Science [Mathematics] Third Year     (BSC MATH III YEAR)  </a> </span>
</li>


<li className="list-group-item">

<span className="list-group-item-text" style={{ color: '#14213d' ,fontFamily:"'Roboto',sans-serif"}}><a href={BSCMICROBIO} target="_blank">  Bachelor of Science [Microbiology] Third Year      (BSC MICRO III YEAR)</a> </span>
</li>




    
      </ul>
    </div>
  </div>


      <h5 className='h5div' >Time Table (As Per NEP Annual Scheme)</h5>
      <div className='midtable'>
        <table className="table-fill">
          <thead>



            <tr>
              <th className="text-left">S.No</th>
              <th className="text-left">Course</th>
              <th className="text-left">Second Year</th>
              <th className="text-left">Third Year</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">1</td>
              <td className="text-left">Bachelor of Arts  </td>
              <td className="text-left"><a href={ban2} target="_blank">Link</a></td>
              <td className="text-left"><a href={ban3} target="_blank">Link</a></td>
            </tr>
            <tr>
              <td className="text-left">2</td>
              <td className="text-left">
                Bachelor of Business Administration</td>
              <td className="text-left"><a href={bba2} target="_blank">Link</a></td>
              <td className="text-left"><a href={bba3} target="_blank">Link</a></td>
            </tr>
            <tr>
              <td className="text-left">3</td>
              <td className="text-left">
                Bachelor of Computer Application </td>
              <td className="text-left"><a href={bca2} target="_blank">Link</a></td>
              <td className="text-left"><a href={bca3} target="_blank">Link</a></td>
            </tr>
            <tr>
              <td className="text-left">4</td>
              <td className="text-left">Bachelor of Science </td>
              <td className="text-left"><a href={bsc2} target="_blank">Link</a></td>
              <td className="text-left"><a href={bsc3} target="_blank">Link</a></td>
            </tr>
            <tr>
              <td className="text-left">5</td>
              <td className="text-left">
                Bachelor of Commerce</td>
              <td className="text-left"><a href={bcom2} target="_blank">Link</a></td>
              <td className="text-left"><a href={bcom3} target="_blank">Link</a></td>
            </tr>


          </tbody>
        </table>
      </div>








      <div className='midtable1'>
        <table className="table-fill1">
          <thead>



            <tr>
              <th className="text-left">S.No</th>
              <th className="text-left">Time Table</th>

            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">1</td>
              <td className="text-left" ><a href={diplomapharma} target="_blank">Diploma in Pharmacy First Year & Second Year Exam April – 2024</a>  </td>

            </tr>
            <tr>
              <td className="text-left">2</td>
              <td className="text-left">  <a href={bpes} target="_blank">
                Bachelorof Physical Education and Sports ( I - III ) Year Exam April – 2024</a></td>

            </tr>



            <tr>
              <td className="text-left">3</td>
              <td className="text-left">  <a href={pbbsc} target="_blank">

                Post Basic B.Sc. (Nursing) Exam April – 2024  (REVISED)</a></td>

            </tr>

          </tbody>
        </table>
      </div>




      <div className='midtable2'>
        <table className="table-fill2">
          <thead>



            <tr>
              <th className="text-left">S.No</th>
              <th className="text-left">Time Table</th>

            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">1</td>
              <td className="text-left" ><a href={nursing} target="_blank"> B.Sc. (Nursing) I-III Semester(Ex/Reg)</a>  </td>

            </tr>





          </tbody>
        </table>
      </div>


      <h5 className='h5div' style={{ marginTop: '100px' }}  >Supplementary Examination  March -  2024</h5>
      <div className='midtable3'>
        <table className="table-fill3">
          <thead>



            <tr>
              <th className="text-left">S.No</th>
              <th className="text-left">Time Table</th>

            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">1</td>
              <td className="text-left" ><a href={ayurveda} target="_blank">BACHELOR OF AYURVEDIC MEDICINE AND SURGERY

                [Supplementary Examination - First Year] Revised</a>  </td>

            </tr>





          </tbody>
        </table>
      </div>



      <h5 className='h5div' style={{ marginTop: '130px' }}  >Examination February – 2024  </h5>
      <div className='midtable4'>
        <table className="table-fill4">
          <thead>



            <tr>
              <th className="text-left">S.No</th>
              <th className="text-left">Time Table</th>

            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">1</td>
              <td className="text-left" ><a href={phd} target="_blank">


                Ph.D Course Work Examination ( I- II Semester)  </a>  </td>

            </tr>





          </tbody>
        </table>
      </div>


      <br></br><br></br><br></br><br></br>
     
      <Footerpage/>
    </>
  )
}

export default ExamSchedule