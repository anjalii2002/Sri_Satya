import BSCNursing from "../../PDF/Exam_Notification/BSCNURSING.pdf"
import examnotify from '../../PDF/Exam_Notification/JUNE2024.pdf'
import april24 from '../../PDF/Exam_Notification/APRIL2024.pdf'
import soochna from '../../PDF/Exam_Notification/soochna.pdf'
import important from '../../PDF/Exam_Notification/important.pdf'
import examform from '../../PDF/Exam_Notification/examform.pdf'
import examformbed from '../../PDF/Exam_Notification/examformbed.pdf'
import examformbhms from '../../PDF/Exam_Notification/examformbhms.pdf'
import novdec23 from '../../PDF/Exam_Notification/novdec23.pdf'
import supply from '../../PDF/Exam_Notification/supply.pdf'
import nep from '../../PDF/Exam_Notification/nep.pdf'
import amended from '../../PDF/Exam_Notification/amended.pdf'
import bsc from '../../PDF/Exam_Notification/bsc.pdf'
import bhmsdiploma from '../../PDF/Exam_Notification/bhmsdiploma.pdf'
import rdc from '../../PDF/Exam_Notification/rdc.pdf'
import phd from '../../PDF/Exam_Notification/phd.pdf'
import phdcoursework from '../../PDF/Exam_Notification/phdcoursework.pdf'
import Nav from '../../HomePage/Nav';
import bams1st from '../../PDF/Exam_Notification/bams.pdf'

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
      <Nav />
      <div className="container" style={{ marginTop: '30px' }}>
        <div id="main" className="card card-body"  style={{backgroundColor:'#D1D8C5'}}>
          <h2 className="titlee"> | Exam Notifications</h2>
          <br></br>

          <ul id="items" className="list-group">




            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'red', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href="" target="_blank"> Revised Time table for B.E./ B.Ph Regular/ Ex (3,4,5,6 Semester) , B .A. B.Ed (3,4,5,6 Semester)& B.Ed / B. P.Ed 1 st & 2 nd Semester for Examination May-June 2024 Will be declared Soon </a>
              </span>


            </li>

            {/* <li className="list-group-item">
   
<span className="list-group-item-text" style={{ color: 'red' }}><a style={{     fontSize:'16px'}} href="" target="_blank"> Revised Time table for B.E./ B.Ph Regular/ Ex (3,4,5,6 Semester) , B .A. B.Ed (3,4,5,6 Semester)& B.Ed / B. P.Ed 1 st & 2 nd Semester for Examination May-June 2024 Will be declared Soon </a>
 </span>

</li> */}

            <li className="list-group-item" style={{ display: 'flex' }} >

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={bams1st} target="_blank">Examination form Notification  June 2024 BAMS 1 ST</a> </span>


            </li>





            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={BSCNursing} target="_blank">B.Sc. (Nursing) Examination Form Notification April - 2024</a> </span>
            </li>


            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#7209b7', fontWeight: 'bold', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href="" target="_blank"> B.H.M.S. Examination Form Notification June-2024</a> </span>
            </li>

            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={examnotify} target="_blank">Examination Form Notification June -2024</a>  </span>
            </li>


            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={april24} target="_blank">Examination Form Notification April – 2024 </a> </span>
            </li>


            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#219ebc', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={soochna} target="_blank">   परीक्षा संबंधी आवश्यक सूचना</a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#7209b7', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={important} target="_blank">  Important Examination Notice</a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontWeight: 'bold' }}><a style={{ fontSize: '16px' }} href={examform} target="_blank">Examination Form Notification December 2023 </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#7209b7', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={examformbed} target="_blank"> Examination Form Notification B.Ed. & B.P.Ed I Semester (Regular/Ex) Dec – 2023  </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={examformbhms} target="_blank"> Examination Form Notification B.H.M.S. & Paramedical Courses (Diploma/UG/PG) December - 2023 </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={novdec23} target="_blank">Examination Form Notification November - December 2023  </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#7209b7', fontWeight: 'bold', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={supply} target="_blank"> Supplementary Examination Form Notification Sep-2023 </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={nep} target="_blank">  Examination Form Notification September-2023 As per NEP </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={amended} target="_blank"> AMENDED ADMISSION NOTIFICATION-O 1 </a> </span>
            </li>







            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={bsc} target="_blank">  Notification For Bachelor of Science (Nursing) Examination     </a> </span>
            </li>


            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={bhmsdiploma} target="_blank">    Notification For BHMS & Diploma Pharmacy Examination   </a> </span>
            </li>



            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: '#ff9f1c', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={rdc} target="_blank">  Notification For Ph.D. RDC     </a> </span>
            </li>
            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={phd} target="_blank">   Notification for Last date Extended Ph.D. Course work Examination  </a> </span>
            </li>

            <li className="list-group-item">

              <span className="list-group-item-text" style={{ color: 'black', fontSize: '18px' }}><a style={{ fontSize: '16px' }} href={phdcoursework} target="_blank"> Notification for Ph.D. Course work Examination   </a> </span>
            </li>







          </ul>
        </div>
      </div>
    </>



  )
}

export default AcademicCalendar           
