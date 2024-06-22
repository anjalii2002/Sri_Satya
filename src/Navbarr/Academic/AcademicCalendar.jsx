// import { React, useEffect } from 'react';
// import UTD from "../../PDF/AcadmicPDF/UTD.pdf"
// import paramedical from '../../PDF/AcadmicPDF/Paramedical.pdf'
// import nursing from '../../PDF/AcadmicPDF/Nursing.pdf'
// import law from '../../PDF/AcadmicPDF/law.pdf'
// import bed from '../../PDF/AcadmicPDF/bed babed.pdf'
// // import first from '../../PDF/AcadmicPDF/FIRSTYEAR.pdf'
// import ENG from '../../PDF/AcadmicPDF/Eng.pdf'
// import third from '../../PDF/AcadmicPDF/THIRDFOURTH.pdf'
// import soh from '../../PDF/AcadmicPDF/SOH.pdf'
// import bams from '../../PDF/AcadmicPDF/BAMS.pdf'
// import firstsecond from '../../PDF/AcadmicPDF/firstsecond.pdf'
// import pharma from '../../PDF/AcadmicPDF/pharma.pdf'
// import Yearly from '../../PDF/AcadmicPDF/YearlySystem.pdf'
// import diploma from '../../PDF/AcadmicPDF/AllUGPGDiplomaSemester.pdf'
// import bamscalender from '../../PDF/AcadmicPDF/bamscalender.pdf'
// import pgyearly from '../../PDF/AcadmicPDF/PGYearly.pdf'
// import BAMS2223 from '../../PDF/AcadmicPDF/BAMS2223.pdf'
// import para1920 from '../../PDF/AcadmicPDF/para1920.pdf'
// import Nav from '../../HomePage/Nav';
// import Footerpage from '../../HomePage/Footerpage';



// const AcademicCalendar = () => {


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <style>
//         {
//           `


//           .twohead{
//             margin-left:30px;
//             marign-top:70px;
//           }
          
//           h1 {
//             position: relative;
//             padding: 0;
//             margin: 0;
//             font-family: montserrat;
//             font-weight: 300;
//             font-size: 40px;
//             color: #023047;
//             -webkit-transition: all 0.4s ease 0s;
//             -o-transition: all 0.4s ease 0s;
//             transition: all 0.4s ease 0s;
//           }
          
          
          
//           .bot{
//             margin-top:50px;
//           }
//           h1 span {
//             display: block;
//             font-size: 0.5em;
//             line-height: 1.3;
//           }
//           h1 em {
//             font-style: normal;
//             font-weight: 600;
//           }
          
//           /* === HEADING STYLE #2 === */
          
          
//           .twohead h1 {
//             text-transform: capitalize;
//           }
//           .twohead h1:before {
//             position: absolute;
//             left: 0;
//             // margin-left:30px;
//             bottom: 0;
//             width: 60px;
//             height: 2px;
//             content: "";
//             background-color: #c50000;
//           }
          
//           .twohead h1 span {
//             font-size: 13px;
//             font-weight: 500;
//             text-transform: uppercase;
//             letter-spacing: 4px;
//             line-height: 3em;
//             padding-left: 0.25em;
//             color: rgba(0, 0, 0, 0.4);
//             padding-bottom: 10px;
//           }
//           .alt-twohead h1 {
//             text-align:center;
//           }
//           .alt-twohead h1:before {
//             left:50%; margin-left:-30px;
//           }
        
//           .list-romboic {
//             counter-reset: ol-counter;
//             padding-left: 0;
//             list-style: none;
//             font-weight: 500;
//             font-family:montserra;
//             filter: drop-shadow(-8px 0px 34px rgba(22, 31, 64, 0.1));
//           }

//           .list-romboic .list-group-item {
//             margin-bottom: 5px;
//             // text-transform: uppercase;
//             background: #ccc;
//             clip-path: polygon(1.5em 0%, calc(100% - 1.5em) 0%, 100% 50%, calc(100% - 1.5em) 100%, 1.5em 100%, 0% 50%);
//             position: relative;
//             padding: 0.5em 1.1875em; /* Adjusted padding */
//             box-sizing: border-box;
//             display: block;
//           }

//           .list-romboic .list-group-item::before {
//             content: '';
//             width: calc(100% - 1px);
//             height: calc(100% - 1px);
//             background: #fff;
//             display: block;
//             position: absolute;
//             top: 1px;
//             left: 1px;
//             z-index: 1;
//             clip-path: polygon(1.5em 0%, calc(100% - 1.5em) 0%, 100% 50%, calc(100% - 1.5em) 100%, 1.5em 100%, 0% 50%);
//           }



//           .list-group-item-text a{
//             font-size:20px;
//           }
//           .list-romboic .list-group-item span {
//             // font-size: 1.475em;
//             position: relative;
//             z-index: 2;
//             font-family: 'Open Sans',sans-serif;
//            font-size: 20px;
//           }

//           .list-romboic .list-group-item-number::before {
//             counter-increment: ol-counter;
//             content: "0" counter(ol-counter);
//             color: #428628;
//           }

// `
//         }
//       </style>

//       <Nav/>
   
//         <div className="twohead">
//           <h1>Academic Calendar</h1>
//         </div>
//         <div className='bg-body rounded p-3' style={{width:'80% ',marginTop:'30px',marginLeft:'80px'}}>
//  <ol className="list list-romboic no-style">
//  <li className="list-group-item">
    
   
    
//     <span className="list-group-item-text" style={{color:'black'}}><a style={{     fontSize:'17px'}}  href={paramedical} target="_blank">Academic Calendar for All Paramedical 2023-24</a> </span>
//   </li>



       

//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#ff9f1c'}}>
//             <a style={{     fontSize:'17px'}} href={nursing} target="_blank">
//               Academic Calendar for Nursing Session 2023-24 (Yearly & Semester System)

//           </a> </span>
//           </li>
//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#ff9f1c'}}>
//             <a style={{     fontSize:'17px'}} href={law} target="_blank">
//               Academic Calendar for the year 2023-24 (School of Law)

//           </a> </span>
//           </li>




//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#7209b7'}}>
//             <a style={{     fontSize:'17px'}} href={bed} target="_blank">
//               Academic Calendar for the year 2023-24 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)

//           </a> </span>
//           </li>





//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#219ebc'}}>
//             <a style={{     fontSize:'17px'}} href=''>
//               Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(First Year)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#219ebc'}}>
//             <a style={{     fontSize:'17px'}} href={ENG} target="_blank">
//               Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(Second Year)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={third} target="_blank">
//               Academic Calendar for the Year 2023-24  DIPLOMA ENGG. (THIRD YEAR) /B. E./B. PHARMA/BHMCT(Third & Fourth Year)

//           </a> </span>
//           </li>


//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#7209b7'}}>
//             <a style={{     fontSize:'17px'}} href={soh} target="_blank">
//               Academic Calendar for the year 2022-23 (School of Homoeopathy)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={bams} target="_blank">
//               Academic Calendar B.A.M.S. First Year 2023 - 24 (18 Months )

//           </a> </span>
//           </li>



//           <br>
//           </br>
//           <br></br>
//           <br></br>
//           <br>
//           </br>
//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#2c6e49'}}>
//             <a style={{     fontSize:'17px'}} href={firstsecond} target="_blank">
//               Academic Calendar for the Year 2022-2023 Bachelor of Engg. Diploma/UG/PG/MBA/MCA/BHMCT (First & Second Semester)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={pharma} target="_blank">
//               Academic Calendar for the year 2022-2023 Pharmacy UG and PG Semester system (First & Second Semester)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={Yearly} target="_blank">
//               Academic Calendar for Session 2022-23 (Yearly System-I, II & III Year)

//           </a> </span>
//           </li>


//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#78290f'}}>
//             <a style={{     fontSize:'17px'}} href={diploma} target="_blank">
//               Academic Calendar for the year 2022-23 (Semester System All UG, PG & Diploma (Engg.)- III Semester Onward)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//        <span className="list-group-item-text" style={{color:'#78290f'}}>
//             <a style={{     fontSize:'17px'}}  >
//               Academic Calendar for the year 2022-23 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={bamscalender} target="_blank">
//               Academic Calendar B.A.M.S. First Year 2021-22 to 2023 (18 Months )

//           </a> </span>
//           </li>



//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'black'}}>
//             <a style={{     fontSize:'17px'}} href={pgyearly} target="_blank">
//               Academic Calendar for the Year 2022-23 (Post Graduate Course)

//           </a> </span>
//           </li>













//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#15616d'}}>
//             <a style={{     fontSize:'17px'}} href={BAMS2223} target="_blank">
//               Academic Calendar B.A.M.S. First Year 2022 - 23 (18 Months )

//           </a> </span>
//           </li>
//        <li className="list-group-item">
    
//     <span className="list-group-item-text" style={{color:'#15616d'}}>
//             <a style={{     fontSize:'17px'}} href={para1920} target="_blank">
//               Academic Calendar for All Paramedical 2019-20

//           </a> </span>
//           </li>
       

//   </ol>
//   </div> 
      
//       <Footerpage/>
//     </>
//   )
// }

// export default AcademicCalendar



import { React, useEffect } from 'react';
import UTD from "../../PDF/AcadmicPDF/UTD.pdf"
import paramedical from '../../PDF/AcadmicPDF/Paramedical.pdf'
import nursing from '../../PDF/AcadmicPDF/Nursing.pdf'
import law from '../../PDF/AcadmicPDF/law.pdf'
import bed from '../../PDF/AcadmicPDF/bed babed.pdf'
// import first from '../../PDF/AcadmicPDF/FIRSTYEAR.pdf'
import ENG from '../../PDF/AcadmicPDF/Eng.pdf'
import third from '../../PDF/AcadmicPDF/THIRDFOURTH.pdf'
import soh from '../../PDF/AcadmicPDF/SOH.pdf'
import bams from '../../PDF/AcadmicPDF/BAMS.pdf'
import firstsecond from '../../PDF/AcadmicPDF/firstsecond.pdf'
import pharma from '../../PDF/AcadmicPDF/pharma.pdf'
import Yearly from '../../PDF/AcadmicPDF/YearlySystem.pdf'
import diploma from '../../PDF/AcadmicPDF/AllUGPGDiplomaSemester.pdf'
import bamscalender from '../../PDF/AcadmicPDF/bamscalender.pdf'
import pgyearly from '../../PDF/AcadmicPDF/PGYearly.pdf'
import BAMS2223 from '../../PDF/AcadmicPDF/BAMS2223.pdf'
import para1920 from '../../PDF/AcadmicPDF/para1920.pdf'
import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';



const AcademicCalendar = () => {
  return (
   <>
   <style>
    {
      `
      .titlee{
        font-family:'Open Sans', Sans-serif;
        margin-left:30px;
           color:#780000
   
      }
      
      .list-group-item-text{
        font-family:'Open Sans', Sans-serif;
        font-size:25px;
        padding: 0;
        font-weight:700
      }
     
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
      `
    }
   </style>
   <Nav/>
   <div className="container" style={{marginTop:'30px',width:'90%',marginBottom:'30px'}}>
    <div id="main" className="card card-body"  style={{backgroundColor:'#D1D8C5'}}>
      <h2 className="titlee"> | Academic Calender</h2>
     <br></br>
      
      <ul id="items" className="list-group">
    
        <li className="list-group-item">
    
   
    
      <span className="list-group-item-text" style={{color:'black'}}><a  style={{     fontSize:'17px'}} href={paramedical} target="_blank">Academic Calendar for All Paramedical 2023-24</a> </span>
       </li>
    
    
    
           
    
            <li className="list-group-item">
        
        <span className="list-group-item-text" >
                <a style={{     fontSize:'17px'}} href={nursing} target="_blank">
                  Academic Calendar for Nursing Session 2023-24 (Yearly & Semester System)
    
              </a> </span>
               </li>
            <li className="list-group-item">
        
         <span className="list-group-item-text" >
                 <a style={{     fontSize:'17px'}} href={law} target="_blank">
                   Academic Calendar for the year 2023-24 (School of Law)
    
               </a> </span>
               </li>
    
    
    
    
           <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'#7209b7'}}>
                 <a style={{     fontSize:'17px'}} href={bed} target="_blank">
                  Academic Calendar for the year 2023-24 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)
    
               </a> </span>
               </li>
    
    
    
    
    
            <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'#219ebc'}}>
                 <a style={{     fontSize:'17px'}} href=''>
                   Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(First Year)
    
           </a> </span>
               </li>
    
    
    
           <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'#219ebc'}}>
                 <a style={{     fontSize:'17px'}} href={ENG} target="_blank">
                  Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(Second Year)
    
               </a> </span>
               </li>
    
    
    
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'black'}}>
                 <a style={{     fontSize:'17px'}} href={third} target="_blank">
                   Academic Calendar for the Year 2023-24  DIPLOMA ENGG. (THIRD YEAR) /B. E./B. PHARMA/BHMCT(Third & Fourth Year)
    
               </a> </span>
              </li>
    
    
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'#7209b7'}}>
                 <a style={{     fontSize:'17px'}} href={soh} target="_blank">
                   Academic Calendar for the year 2022-23 (School of Homoeopathy)
    
               </a> </span>
               </li>
    
    
    
           <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'black'}}>
                <a style={{     fontSize:'17px'}} href={bams} target="_blank">
                   Academic Calendar B.A.M.S. First Year 2023 - 24 (18 Months )
    
              </a> </span>
              </li>
    
    
    
             
 

    
      </ul>
    </div>
  </div>


  <div className="container" style={{marginTop:'30px',width:'100%',marginBottom:'30px'}}>
    <div id="main" className="card card-body"  style={{backgroundColor:'#D1D8C5'}}>
      
      
      <ul id="items" className="list-group">
    
     
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'#2c6e49'}}>
                <a style={{     fontSize:'17px'}} href={firstsecond} target="_blank">
                  Academic Calendar for the Year 2022-2023 Bachelor of Engg. Diploma/UG/PG/MBA/MCA/BHMCT (First & Second Semester)
    
              </a> </span>
               </li>
    
    
    
            <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'black'}}>
                 <a style={{     fontSize:'17px'}} href={pharma} target="_blank">
                   Academic Calendar for the year 2022-2023 Pharmacy UG and PG Semester system (First & Second Semester)
    
               </a> </span>
              </li>
    
    
    
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'black'}}>
                 <a style={{     fontSize:'17px'}} href={Yearly} target="_blank">
                  Academic Calendar for Session 2022-23 (Yearly System-I, II & III Year)
    
              </a> </span>
               </li>
    
    
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'#78290f'}}>
                 <a style={{     fontSize:'17px'}} href={diploma} target="_blank">
                   Academic Calendar for the year 2022-23 (Semester System All UG, PG & Diploma (Engg.)- III Semester Onward)
    
               </a> </span>
               </li>
    
    
  
           <li className="list-group-item">
        
            <span className="list-group-item-text" style={{color:'#78290f'}}>
                <a style={{     fontSize:'17px'}}  >
                   Academic Calendar for the year 2022-23 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)
    
               </a> </span>
               </li>
    
    
    
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'black'}}>
                 <a style={{     fontSize:'17px'}} href={bamscalender} target="_blank">
                   Academic Calendar B.A.M.S. First Year 2021-22 to 2023 (18 Months )
    
              </a> </span>
               </li>
    
    
    
            <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'black'}}>
                 <a style={{     fontSize:'17px'}} href={pgyearly} target="_blank">
                   Academic Calendar for the Year 2022-23 (Post Graduate Course)
    
              </a> </span>
               </li>
    
    
    
    
    
    
    
    
    
    
    
    
    
            <li className="list-group-item">
        
        <span className="list-group-item-text" style={{color:'#15616d'}}>
                 <a style={{     fontSize:'17px'}} href={BAMS2223} target="_blank">
                   Academic Calendar B.A.M.S. First Year 2022 - 23 (18 Months )
    
               </a> </span>
               </li>
            <li className="list-group-item">
        
         <span className="list-group-item-text" style={{color:'#15616d'}}>
                 <a style={{     fontSize:'17px'}} href={para1920} target="_blank">
                   Academic Calendar for All Paramedical 2019-20
    
              </a> </span>
              </li>

 

    
      </ul>
    </div>
  </div>
  <Footerpage/>
   </>
  )
}

export default AcademicCalendar