import React, { useEffect } from "react";
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import Registrationn from "./AdminComponent/StudentMainDetails"
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/*--------------------STUDENT Routes----------------------------------------------*/
import StudentDashboardHome from './components/Register&Login/StudentDashboardHome';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import StudentVerify from './AdminComponent/StudentVerify';
import EnrollementForm from './AdminComponent/EnrollementForm';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Success from './AdminComponent/Payment/Success';
import Failure from './AdminComponent/Payment/Failure';
import PaymentPage from './AdminComponent/Payment/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';

/*-------------------- Website Main Page Routes----------------------------------------------*/
import MainPage from './HomePage/MainPage';

/*--------------------HOD Routes----------------------------------------------*/
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import HodSignUp from './AdminComponent/HodSignup';
import HodSignin from './AdminComponent/HodSignin';
import Dashboard from './AdminComponent/HodMainDas';
import Pending from './AdminComponent/SudentPending';
import VerifyDetailed from './AdminComponent/VerifyDetailed';

/*--------------------Admin Routes----------------------------------------------*/
import AdminLogin from './Main_Admin/Masters/Registered_Login/Admin_login';
import AdminDashboard from './Main_Admin/Masters/Admin_Dashboard/AdminDashboard';
import EnrollementG from './Main_Admin/Masters/EnrollmentG';
import Branchmapping from "./Main_Admin/Masters/Branchmapping"
import Centermaster from "./Main_Admin/Masters/Centermaster"
import SpecializationMaster from './Main_Admin/Masters/SpecializationMaster';
import SpecializationSubjectMapping from "./Main_Admin/Masters/SpecializationSubjectMapping"
import SpecializationTypeMaster from "./Main_Admin/Masters/SpecializationTypeMaster"
import SubjectHeaderInsert from "./Main_Admin/Masters/SubjectHeaderInsert"
import UploadSubjectMasterFromExcelData from "./Main_Admin/Masters/UploadSubjectMasterFromExcelData"
import CreateCollege from "./Main_Admin/Masters/CreateCollege"
import AdmissionSessionMaster from "./Main_Admin/Masters/AdmissionSessionMaster"
import FacultyMaster from "./Main_Admin/Masters/FacultyMaster"
import DepartmentMaster from "./Main_Admin/Masters/DepartmentMaster"
import CourseType from "./Main_Admin/Masters/CourseType"
import CourseMaster from "./Main_Admin/Masters/CourseMaster"
import BranchMaster from "./Main_Admin/Masters/BranchMaster"
import SubBranchMaster from "./Main_Admin/Masters/SubBranchMaster"
import CourseGroupMaster from "./Main_Admin/Masters/CourseGroupMaster"
import AdmissionOpen from "./Main_Admin/Masters/AdmissionOpen"
import ReservationMaster from "./Main_Admin/Masters/ReservationMaster"
import CreateCounsellingRound from "./Main_Admin/Masters/CreateCounsellingRound"
import LastExamSubjectGroup from "./Main_Admin/Masters/LastExamSubjectGroup"
import GradePointMaster from "./Main_Admin/Masters/GradePointMaster"
import SubjectMasterExcelDownload from "./Main_Admin/Masters/SubjectMasterExcelDownload"
import SubjectMasterPaperWise from "./Main_Admin/Masters/SubjectMasterPaperWise"
import SubGroupMaster from "./Main_Admin/Masters/SubGroupMaster"
import TransferSubject from "./Main_Admin/Masters/TransferSubject"
import TransferSubjectGroup from "./Main_Admin/Masters/TransferSubjectGroup"
import ProgramScheduling from "./Main_Admin/Masters/ProgramScheduling"
import ErpDashboard from './Main_Admin/Masters/ErpDashboard';
import Search from './Main_Admin/Masters/Search';
import Edetails from './HomePage/Edetails.jsx'
import EnrolledStudentlist from "./Main_Admin/Masters/EnrolledStudent_list";
import EnrollementStudentSearch from "./Main_Admin/Masters/EnrolledStudent_search";
import StudentRegistrationList from "./Main_Admin/Masters/StudentRegistrationList"
import Admin_Pending from "./Main_Admin/Masters/Admin_Pending.jsx";
import TotalFeePaid from "./Main_Admin/Masters/TotalFeePaid"
import TotalRegistered from "./Main_Admin/Masters/TotalRegistered"
import TotalEnrolled from "./AdminComponent/TotalEnrolled";
import TotalSession from "./AdminComponent/TotalSession";
import TotalRegisStdtHod from "./AdminComponent/HodRegistStdt";
import TotalEnrolledAdmin from "./Main_Admin/Masters/AdminTotalEnrollStdt";
import AdminStdtSearch from "./Main_Admin/Masters/AdminStdtSearch";
import AdminUpdtStdt_Detail from "./Main_Admin/Masters/AdminUpdtStdt_Detail";
import AdminUpdateAllDetail from "./Main_Admin/Masters/AdminUpdateAllDetail";
import AdminUpdate_Documents from "./Main_Admin/Masters/AdminUpdate_Documents";
import AdminDocumentSearch from "./Main_Admin/Masters/AdminDocumentSearch";
import Contactpage from './HomePage/Footer/Contactpage.jsx';
import BackgroundPage from './Navbarr/BackgroundPage';
import Institutepage from './Navbarr/Institutepage';
import PromotingSociety from './Navbarr/PromotingSociety';
import VisionMission from './Navbarr/AboutUs/VisionMission.jsx';
import CoreValues from './Navbarr/CoreValues';
import BestPractices from './Navbarr/AboutUs/BestPractices.jsx';
import EntranceExamAlert from './Navbarr/Examination/EntranceExamAlert';
import ExamNotifications from './Navbarr/Examination/ExamNotifications';
import Result from './Navbarr/Examination/Result';
import ExamSchedule from './Navbarr/Examination/ExamSchedule';
import Interface from './Navbarr/Examination/Interface';
import PhdPage from './Navbarr/Academic/PhdPage';
import AcademicCalendar from './Navbarr/Academic/AcademicCalendar';
import Scholarship from './Navbarr/Academic/Scholarship';
import ConstituentUnits from './Navbarr/Academic/ConstituentUnits';
import HEIHandbook from './Navbarr/Academic/HEIHandbook';
import MandatoryDisclosures from './Navbarr/Academic/MandatoryDisclosures';
import Director from './Navbarr/Research/Director';
import RDCell from './Navbarr/Research/RDCell';
import ConsultancyServices from './Navbarr/Research/ConsultancyServices';
import TotalFeePaidHod from "./Main_Admin/Masters/TotalFeePaidHod";
import AdminPenSearch from "./Main_Admin/Masters/AdminPenSearch.jsx";
import AdminVeriStdSearch from "./Main_Admin/AdminVerified_Std_Search.jsx";
import Chancellor from "./Navbarr/UniversityOfficeal/Chancellor.jsx";
import ViceChancellorr from "./Navbarr/UniversityOfficeal/ViceChancellorr.jsx";
import Registrar from "./Navbarr/UniversityOfficeal/Registrar.jsx";
import DeputyRegistrar from "./Navbarr/UniversityOfficeal/DeputyRegistrar.jsx";
import SearchPen from "./Main_Admin/Masters/SearchPen.jsx";
import SearchVer from "./Main_Admin/Masters/SearchVer.jsx";
import Admissionstatus from "./Main_Admin/Masters/Admissionstatus.jsx";
import Adminser from "./Main_Admin/Masters/Adminser.jsx"
import ManualEnrol_G from "./Main_Admin/Masters/ManualEnrol_G.jsx";
import Paym from "./Main_Admin/Masters/Admin_Dashboard/Paym.jsx";
import Paymen from "./Main_Admin/Masters/Admin_Dashboard/Paymen.jsx";
import TermsConditions from "./HomePage/Footer/TermsConditions.jsx";
import PrivacyPolicy from "./HomePage/Footer/PrivacyPolicy.jsx";
import RefoundCancellation from "./HomePage/Footer/RefoundCancellation.jsx";
import Admission_Slip from "./Main_Admin/Masters/Admission_Slip.jsx"
import Admission_Slip_Search from "./Main_Admin/Masters/Admission_Slip_Search.jsx";
import { useNavigate } from "react-router-dom";


import Grievance from "./HomePage/Gravience.jsx";
import Bonafied_Certificate from "./Main_Admin/Masters/Bonafied_Certificate.jsx";
import Bonafied_Search from "./Main_Admin/Masters/Bonafied_Certificate_Search.jsx";
import EntranceForm from "./ERP/Student_Erp/EntranceForm.jsx";
import Entrance_Payment from "./ERP/Student_Erp/Entrance_Payment.jsx";
import Entrance_Success from "./ERP/Student_Erp/Entrance_Success.jsx";
import Entrance_Slip from "./Main_Admin/Masters/Admin_Dashboard/Admin_Entrance/Entrance_Slip.jsx";
import E_Pravesh_Course from "./E-Pravesh/Student_E-pravesh/E-Courses.jsx";
import E_RegistrationForm from "./E-Pravesh/Student_E-pravesh/E-RegistrationForm.jsx";
import E_Payment from "./E-Pravesh/Student_E-pravesh/E-Payment.jsx";
import E_Success from "./E-Pravesh/Student_E-pravesh/E-Success.jsx";


/*  fvfvrebhg ytyrehyergbyhbygrgfyergygfbgfuhbugbfdugyeugfeugyuegbgfuygugyggyggygyg*/

import BESyllabuspage from "./Syllabus/BESyllabuspage.jsx";
import PharmacySyllabus from "./Syllabus/PharmacySyllabus.jsx";
import MTechSyllabus from "./Syllabus/MTechSyllabus.jsx";
import EducationSyllabus from "./Syllabus/EducationSyllabus.jsx";
import BHMCTSyllabus from "./Syllabus/BHMCTSyllabus.jsx";
import MBASyllabus from "./Syllabus/MBASyllabus.jsx";
import MCASyllabus from "./Syllabus/MCASyllabus.jsx";
import PhysicalEducationSyllabus from "./Syllabus/PhysicalEducationSyllabus.jsx";
import BScHonsAGSyllabus from "./Syllabus/BScHonsAGSyllabus.jsx";
import BHMSSyllabus from "./Syllabus/BHMSSyllabus.jsx";
import UTDSyllabus from "./Syllabus/UTDSyllabus.jsx";
import ParamedicalSyllabus from "./Syllabus/ParamedicalSyllabus.jsx";
import PolytechnicEngineeringSyllabus from "./Syllabus/PolytechnicEngineeringSyllabus.jsx";
import BLibIScSyllabus from "./Syllabus/BLibIScSyllabus.jsx";
import BacheloroflawsSyllabus from "./Syllabus/BacheloroflawsSyllabus.jsx";
import BScHMCSSyllabus from "./Syllabus/BScHMCSSyllabus.jsx";

import CBSCSemster1 from "../src/PDF/SyllabusPDF/BECBSE/CBSCSemster1.jsx";
import CBSCSemster2 from "../src/PDF/SyllabusPDF/BECBSE/CBSCSemster2.jsx";
import CBSCAE3sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE3sem.jsx";
import CBSCAE4sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE4sem.jsx";
import CBSCAE5sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE5sem.jsx";
import CBSCAE6sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE6sem.jsx";
import CBSCAE7sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE7sem.jsx";
import CBSCAE8sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCAE8sem.jsx";
import CBSCCE3sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE3sem.jsx";
import CBSCCE4sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE4sem.jsx";
import CBSCCE5sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE5sem.jsx";
import CBSCCE6sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE6sem.jsx";
import CBSCCE7sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE7sem.jsx";
import CBSCCE8sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCE8sem.jsx";
import CBSCCIE3sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE3sem.jsx";
import CBSCCIE4sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE4sem.jsx";
import CBSCCIE5sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE5sem.jsx";
import CBSCCIE6sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE6sem.jsx";
import CBSCCIE7sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE7sem.jsx";

import CBSCCIE8sem from "../src/PDF/SyllabusPDF/BECBSE/CBSCCIE8sem.jsx";
import BESchema from "../src/Scheme/BESchema.jsx";
import PharmacySchema from "../src/Scheme/PharmacySchema.jsx";
import MtechScheme from "../src/Scheme/MtechScheme.jsx";
import BHMCTSchemee from "../src/Scheme/BHMCTScheme.jsx";
import MBAScheme from "../src/Scheme/MBAScheme.jsx";
import MCAScheme from "../src/Scheme/MCAScheme.jsx";
import EducationScheme from "../src/Scheme/EducationScheme.jsx";
import PhysicalEducationScheme from "../src/Scheme/PhysicalEducationScheme.jsx";
import BScHonsAg from "../src/Scheme/BScHonsAg.jsx";
import BHMSScheme from "../src/Scheme/BHMSScheme.jsx";
import UTDScheme from "../src/Scheme/UTDScheme.jsx";
import ParamedicalScheme from "../src/Scheme/ParamedicalScheme.jsx";
import PolytechniEngineering from "../src/Scheme/PolytechniEngineering.jsx";
import BLibIScScheme from "../src/Scheme/BLibIScScheme.jsx";
import BachelorofLawsScheme from "../src/Scheme/BachelorofLawsScheme.jsx";
import BScHMCSScheme from "../src/Scheme/BScHMCSScheme.jsx";
import Contact from "../src/HomePage/Footer/Contact.jsx";
import Approval from "../src/Navbarr/Approval.jsx";
import NotFound from "./Notfound/NotFound.jsx";
import National from '../src/Events/National.jsx'
import Lok from "../src/Events/Lok.jsx";
import Bams from "../src/Events/Bams.jsx";
import Bhms from "../src/Events/Bhms.jsx";
import RD from "../src/Events/RD.jsx";
import Eng from "../src/Events/Eng.jsx";
import Cs from "../src/Events/Cs.jsx";
import Uni from "../src/Events/Uni.jsx";
import Wday from "../src/Events/Wday.jsx";
import PHD from "./HomePage/PHD.jsx";
import Entrance_Inst from "./ERP/Student_Erp/Entrance_Inst.jsx";
import Online_Form from "./ERP/Student_Erp/Online_Form.jsx";
import Leadership from "./Navbarr/AboutUs/Leadership.jsx";
import PressMedia from "./Navbarr/AboutUs/PressMedia.jsx";
import CollaborationMou from "./Navbarr/Research/MOU.jsx";
import DoctoralProgramsPhD from "./Navbarr/Research/Doc_phd.jsx";
import Researchpromotionpolicy from "./Navbarr/Research/Resarch_Promo_Policy.jsx";
import HistoryMilestone from "./Navbarr/AboutUs/History_Milestone.jsx";
import Comm_cell from "./Navbarr/AboutUs/Commite&Cell/Commite&cell.jsx";

import GrievanceRedressal from "./Navbarr/AboutUs/Commite&Cell/GrievanceRedressal.jsx";
import Campus from "./Navbarr/Campus.jsx";
import AdminClgSearch from "./Main_Admin/Masters/Admin_Clg_Search.jsx";
import AdminUpdate_Clg_Name_Branch from "./Main_Admin/Masters/Admin_Dashboard/AdminUpdate_Clg_Name_Branch.jsx";
import PassView_Search from "./Main_Admin/Masters/PassView_Search.jsx";
import Placement from "./Navbarr/Placement.jsx";
import Student_Rst_Pass from "./components/Register&Login/Student_Rst_Pass.jsx";
import EntrPr_Dev_cell from "./Navbarr/AboutUs/Commite&Cell/EntrPr_Dev_cell.jsx";
import Internal_Complaint from "./Navbarr/AboutUs/Commite&Cell/Internal_Complaint.jsx";
import Scst from "./Navbarr/AboutUs/Commite&Cell/Sc-St.jsx";
import Inter_High_Edu_cell from "./Navbarr/AboutUs/Commite&Cell/Inter_High_Edu_cell.jsx";
import Proctorial_Board from "./Navbarr/AboutUs/Commite&Cell/Proctorial_Board.jsx";
import E_Pending from "./E-Pravesh/Student_E-pravesh/E_Pending.jsx";

// /////////////////////NAVBAR // SCHOOL & dEPT////////////////////////////////////////////////////////////////////
import EnggTechno from "./Navbarr/School&Dept/EnggTechno.jsx";
import Pharmacy from "./Navbarr/School&Dept/Pharmacy.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
    const hodData = JSON.parse(sessionStorage.getItem("currentUser"));
    const AdminData = JSON.parse(sessionStorage.getItem("Admin"));
    if (userData || hodData || AdminData) {
      return true
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }
  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/erp
      
      
      `} />;
    }
  }
  useEffect(() => {
    // console.log("Location changed:", location.pathname);
  }, [location]);
  // useEffect(() => {
  //   const logoutTimer = setTimeout(() => {
  //     sessionStorage.clear();
  //     navigate('/erp');
  //   }, 20 * 60 * 1000);
  //   return () => clearTimeout(logoutTimer);
  // }, []);

  return (
    <>
      <Routes>

        {/* ======================= Syllabus ============================== */}

        <Route path="/BESyllabuspage" element={<BESyllabuspage />} />
        <Route path="/PharmacySyllabus" element={<PharmacySyllabus />} />
        <Route path="/M.TechSyllabus" element={<MTechSyllabus />} />
        <Route path="/EducationSyllabus" element={<EducationSyllabus />} />
        <Route path="/BHMCTSyllabus" element={<BHMCTSyllabus />} />
        <Route path="/MBASyllabus" element={<MBASyllabus />} />
        <Route path="/MCASyllabus" element={<MCASyllabus />} />
        <Route path="/PhysicalEducationSyllabus" element={<PhysicalEducationSyllabus />} />
        <Route path="/BScHonsAGSyllabus" element={<BScHonsAGSyllabus />} />
        <Route path="/BHMSSyllabus" element={<BHMSSyllabus />} />
        <Route path="/UTDSyllabus" element={<UTDSyllabus />} />
        <Route path="/ParamedicalSyllabus" element={<ParamedicalSyllabus />} />
        <Route path="/PolytechnicEngineeringSyllabus" element={<PolytechnicEngineeringSyllabus />} />
        <Route path="/BLibIScSyllabus" element={<BLibIScSyllabus />} />
        <Route path="/BacheloroflawsSyllabus" element={<BacheloroflawsSyllabus />} />
        <Route path="/BScHMCSSyllabus" element={<BScHMCSSyllabus />} />


        {/* {==================== B.SC(CBCS)  PDF =========================} */}

        <Route path="/BECBSC1SEM" element={<CBSCSemster1 />} />
        <Route path="/BECBSC2SEM" element={<CBSCSemster2 />} />


        {/* {====================  Aeronautical Engineering (CBSE) PDF =========================} */}

        <Route path="/BEAE3sem" element={<CBSCAE3sem />} />
        <Route path="/BEAE4sem" element={<CBSCAE4sem />} />
        <Route path="/BEAE5sem" element={<CBSCAE5sem />} />
        <Route path="/BEAE6sem" element={<CBSCAE6sem />} />
        <Route path="/BEAE7sem" element={<CBSCAE7sem />} />
        <Route path="/BEAE8sem" element={<CBSCAE8sem />} />

        {/* {====================  Chemical Engineering (CBSE) PDF =========================} */}

        <Route path="/BECBSCCE3sem" element={<CBSCCE3sem />} />
        <Route path="/BECBSCCE4sem" element={<CBSCCE4sem />} />
        <Route path="/BECBSCCE5sem" element={<CBSCCE5sem />} />
        <Route path="/BECBSCCE6sem" element={<CBSCCE6sem />} />
        <Route path="/BECBSCCE7sem" element={<CBSCCE7sem />} />
        <Route path="/BECBSCCE8sem" element={<CBSCCE8sem />} />

        {/* {====================  Civil Engineering (CBSE) PDF =========================} */}

        <Route path="/BECBSCCIE3sem" element={<CBSCCIE3sem />} />
        <Route path="/BECBSCCIE4sem" element={<CBSCCIE4sem />} />
        <Route path="/BECBSCCIE5sem" element={<CBSCCIE5sem />} />
        <Route path="/BECBSCCIE6sem" element={<CBSCCIE6sem />} />
        <Route path="/BECBSCCIE7sem" element={<CBSCCIE7sem />} />
        <Route path="/BECBSCCIE8sem" element={<CBSCCIE8sem />} />

        {/* {====================  Civil Engineering (CBSE) PDF =========================} */}

        <Route path="/BECBSCCIE3sem" element={<CBSCCIE3sem />} />
        <Route path="/BECBSCCIE4sem" element={<CBSCCIE4sem />} />
        <Route path="/BECBSCCIE5sem" element={<CBSCCIE5sem />} />
        <Route path="/BECBSCCIE6sem" element={<CBSCCIE6sem />} />
        <Route path="/BECBSCCIE7sem" element={<CBSCCIE7sem />} />
        <Route path="/BECBSCCIE8sem" element={<CBSCCIE8sem />} />

        {/* {==================== Schema =========================} */}

        <Route path="/B.E-Scheme" element={<BESchema />} />
        <Route path="/Pharmacy-scheme" element={<PharmacySchema />} />
        <Route path="/M.Tech-Scheme" element={<MtechScheme />} />
        <Route path="/BHMCT-Scheme" element={<BHMCTSchemee />} />
        <Route path="/MBA-Scheme" element={<MBAScheme />} />
        <Route path="/MCA-Scheme" element={<MCAScheme />} />
        <Route path="/Education-Scheme" element={<EducationScheme />} />
        <Route path="/PhysicalEducation-Scheme" element={<PhysicalEducationScheme />} />
        <Route path="/BscHonsAg-Scheme" element={<BScHonsAg />} />
        <Route path="/BHMS-Scheme" element={<BHMSScheme />} />
        <Route path="/UTD-Scheme" element={<UTDScheme />} />
        <Route path="/Paramedical-Scheme" element={<ParamedicalScheme />} />
        <Route path="/POLYTECHNIC(ENGINEERING)-Scheme" element={<PolytechniEngineering />} />
        <Route path="/BLIBISC-Scheme" element={<BLibIScScheme />} />
        <Route path="/BachelorofLaws-Scheme" element={<BachelorofLawsScheme />} />
        <Route path="/BSCHMCS-Scheme" element={<BScHMCSScheme />} />

        <Route path="/campus" element={<Campus />}></Route>
        <Route path="/placement" element={<Placement />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms & conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Refund & Cancellation" element={<RefoundCancellation />} />

        {/*------------------------Student Routes-----------------------------------------*/}
        <Route path="/erp/studentregister" element={<Signup />} />
        <Route path="/erp/studentlogin" element={<Signin />} />
        <Route path="/studentlogin/selectCourse" element={<PrivateRoute element={<Course />} />} />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/erp/studentDashboard' element={<PrivateRoute element={<StudentDashboard />} />} />
        <Route path='/student/reset/password' element={<PrivateRoute element={<Student_Rst_Pass />} />} />

        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentDetail' element={<StudentMainDetails />} />
        <Route path='/studentHome' element={<StudentHome />} />
        <Route path='/student/Enrollement/Form' element={<PrivateRoute element={<EnrollementForm />} />} />
        <Route path='/studentpending' element={<Pending />} />
        <Route path='/studentverify' element={<StudentVerify />} />
        <Route path='/student/dashboard/home' element={<StudentDashboardHome />} />
        <Route path='/studentUpdateDetail' element={<Registrationn />} />
        <Route path='/PaymentPage' element={<PrivateRoute element={<PaymentPage />} />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/verifyDetailed' element={<PrivateRoute element={<VerifyDetailed />} />} />


        <Route path='/' element={<MainPage />} />
        <Route path='/erp' element={<Erp />} />


        <Route path="/eventss" element={<Edetails />} />

        <Route path="/women" element={<Wday />} />
        <Route path="/national" element={<National />} />
        <Route path="/lok" element={< Lok />} />
        <Route path="/bams" element={< Bams />} />
        <Route path="/bhms" element={< Bhms />} />
        <Route path="/r&d" element={< RD />} />
        <Route path="/eng" element={< Eng />} />
        <Route path="/cs" element={< Cs />} />
        <Route path="/uni" element={< Uni />} />

        {/*------------------------Student Entrance form Routes-----------------------------------------*/}
        <Route path="/entrance/form" element={<EntranceForm />}></Route>
        <Route path="/entrance/payment" element={<Entrance_Payment />}></Route>
        <Route path="/entrance/payment_success" element={<Entrance_Success />}></Route>
        <Route path="/entrance/slip" element={<Entrance_Slip />}></Route>

        <Route path="/entrance/form/start" element={<Entrance_Inst />}></Route>
        <Route path="/entrance/online/form" element={<Online_Form />}></Route>

        {/*------------------------Student E-Pravesh Routes-----------------------------------------*/}
        <Route path="/Epravesh/Student/Register" element={<E_Pravesh_Course />}></Route>
        <Route path="/Epravesh/Student/RegisterForm" element={<E_RegistrationForm />}></Route>
        <Route path="/Epravesh/Student/payment" element={<E_Payment />}></Route>
        <Route path="/Epravesh/Success" element={<E_Success />}></Route>
        <Route path="/Epravesh/pending/student" element={<E_Pending />}></Route>


        {/*--------------------------------Hod Routes--------------------------------------------------*/}

        <Route path='/erp/hodlogin' element={< HodSignin />} />
        <Route path='/erp/hodregister' element={<HodSignUp />} />

        <Route path='/totalenrolled' element={<TotalEnrolled />} />
        <Route path='/total/student/Registered' element={<TotalRegisStdtHod />} />
        <Route path='/total/student/branch' element={<TotalSession />} />
        <Route path='/total/student/feepaid' element={<TotalFeePaidHod />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<PrivateRoute element={<VerifyDetailed />} />} />
        <Route path='/hodDashboard' element={<PrivateRoute element={<HodDashboard />} />} />
        <Route path='/hodDetail' element={<PrivateRoute element={<HodMainDetails />} />} />


        {/*------------------------Admin Routes-----------------------------------------*/}

        <Route path='/adminlogin' element={< AdminLogin />} />
        <Route path='/admindashboard' element={<PrivateRoute element={< AdminDashboard />} />} />
        <Route path="/admin/erpdasboard" element={<PrivateRoute element={<ErpDashboard />} />} />
        <Route path='/student/totalfeepaid' element={<PrivateRoute element={< TotalFeePaid />} />} />
        <Route path='/student/totalenrolled' element={<PrivateRoute element={< TotalEnrolledAdmin />} />} />
        <Route path='/student/totalregistered' element={<PrivateRoute element={< TotalRegistered />} />} />
        <Route path='/registered/studentlist' element={<PrivateRoute element={< StudentRegistrationList />} />} />

        <Route path='/erpdashboard/student/updatedetails' element={<PrivateRoute element={<AdminUpdtStdt_Detail />} />} />
        <Route path="/erpdashboard/student/updatealldetails/:id" element={<PrivateRoute element={<AdminUpdateAllDetail />} />} />
        <Route path="/erpdashboard/student/search" element={<PrivateRoute element={<AdminStdtSearch />} />} />

        {/*//////////////////////PassViewSearch/////////////////////////////////////*/}

        <Route path="/erpdashboard/student/Pass-search" element={<PrivateRoute element={<PassView_Search />} />} />

        <Route path="/erpdashboard/pending/student/search" element={<PrivateRoute element={<AdminPenSearch />} />} />
        <Route path="/search/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchPen />} />} />
        <Route path="/searchver/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchVer />} />} />
        <Route path="/sea/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<Adminser />} />} />
        <Route path="/student/status" element={<PrivateRoute element={<Admissionstatus />} />} />
        <Route path="/erpdashboard/verified/student/search" element={<PrivateRoute element={<AdminVeriStdSearch />} />} />

        <Route path="/erpdashboard/student/document/search" element={<PrivateRoute element={<AdminDocumentSearch />} />} />
        <Route path="/erpdashboard/student/updatedocuments/:id" element={<PrivateRoute element={<AdminUpdate_Documents />} />} />


        {/*jhbdhjbdhjbjhb*/}
        <Route path="/erpdashboard/student/updateclg&branch" element={<PrivateRoute element={<AdminClgSearch />} />} />
        <Route path="/erpdashboard/student/updateClgBranch/:id" element={<PrivateRoute element={<AdminUpdate_Clg_Name_Branch />} />} />
        {/*jhbdhjbdhjbjhb*/}

        <Route path="/admin/search/student-pending/list" element={<PrivateRoute element={<Admin_Pending />} />} />


        <Route path="/enrollment" element={<PrivateRoute element={<EnrollementG />} />} />
        <Route path="/manual/enrollment/generation" element={<ManualEnrol_G />} />

        <Route path="/admin/erpdashboard/admissionslip/search" element={<PrivateRoute element={<Admission_Slip_Search />} />} />
        <Route path="/admissionslip/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Admission_Slip />} />} />

        <Route path="/admin/erpdashboard/Bonafied/certificate" element={<Bonafied_Search />} />



        <Route path="/search-result/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Search />} />} />
        <Route path="/enrolled/student/list/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<EnrolledStudentlist />} />} />
        <Route path="/enrolled/student/search-result" element={<PrivateRoute element={<EnrollementStudentSearch />} />} />
        <Route path="/brancmapping-session" element={<Branchmapping />} />
        <Route path="/center-master" element={<Centermaster />} />
        <Route path="/specialization-master" element={<SpecializationMaster />} />
        <Route path="/specialization-subject-mapping" element={<SpecializationSubjectMapping />} />
        <Route path="/sprcialization-type-master" element={<SpecializationTypeMaster />} />
        <Route path="/subject-header-insert" element={<SubjectHeaderInsert />} />
        <Route path="/upload-subject-master-from-excel-data" element={<UploadSubjectMasterFromExcelData />} />
        <Route path="/create-collage" element={<CreateCollege />} />

        <Route path='/grievance' element={< Grievance />} />
        <Route path="/admission-session-update" element={<AdmissionSessionMaster />} />
        <Route path="/faculty-master" element={<FacultyMaster />} />
        <Route path="/department-master" element={<DepartmentMaster />} />
        <Route path="/course-type" element={<CourseType />} />
        <Route path="/course-master" element={<CourseMaster />} />
        <Route path="/branch-master" element={<BranchMaster />} />
        <Route path="/sub-branch-master" element={<SubBranchMaster />} />
        <Route path="/course-group-master" element={<CourseGroupMaster />} />
        <Route path="/admission-open" element={<AdmissionOpen />} />
        <Route path="/reservation-master" element={<ReservationMaster />} />
        <Route path="/create-counselling-round" element={<CreateCounsellingRound />} />
        <Route path="/last-exam-sunject-group" element={<LastExamSubjectGroup />} />
        <Route path="/grade-point-master" element={<GradePointMaster />} />
        <Route path="/subject-master-excel-download" element={<SubjectMasterExcelDownload />} />
        <Route path="/subject-master-paper-wise" element={<SubjectMasterPaperWise />} />
        <Route path="/subject-group-master" element={<SubGroupMaster />} />
        <Route path="/transfer-subject" element={<TransferSubject />} />
        <Route path="/transfer-subject-group" element={<TransferSubjectGroup />} />
        <Route path="/program-scheduling" element={<ProgramScheduling />} />



        <Route path="/paym" element={<PrivateRoute element={<Paym />} />} />
        <Route path="/paymen" element={<PrivateRoute element={<Paymen />} />} />



        {/* ======================================================= */}

        <Route path="/contact" element={<Contactpage />} />
        <Route path="/Phd/degree" element={<PHD />} />



        <Route path="/background-page" element={<BackgroundPage />} />
        <Route path="/institutes" element={<Institutepage />} />
        <Route path="/promoting-society" element={<PromotingSociety />} />

        {/*///////////////////////RESARCH/////////////////////*/}


        {/* /////////////////////////*About Us/////////////////////////////////////////////*/}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/leadership" element={<Leadership />}></Route>
        <Route path="/press-media" element={<PressMedia />}></Route>
        <Route path="/best-practices" element={<BestPractices />}></Route>
        <Route path="/History_Milestones" element={<HistoryMilestone />}></Route>
        {/* /////////////////////////////commmiittee cell /////////////////////////////// */}
        <Route path="/committe&cell/entrepreneurship/cell" element={<EntrPr_Dev_cell />}></Route>
        <Route path="/committe&cell/internal/complaint" element={<Internal_Complaint />}></Route>
        <Route path="/committe&cell/sc-st" element={<Scst />}></Route>
        <Route path="/committe&cell/International/higher/education" element={<Inter_High_Edu_cell />}></Route>
        <Route path="/grievanceredressal" element={<GrievanceRedressal />}></Route>
        <Route path="/committe&cell" element={<Comm_cell />}></Route>
        <Route path="/committe&cell/proctorial/board" element={<Proctorial_Board />}></Route>



        <Route path="/" element={<Approval />}></Route>
        <Route path="/core-approvalsvalues" element={<CoreValues />} />


        <Route path="/chancellor" element={<Chancellor />} />
        <Route path="/vice-chancellor" element={<ViceChancellorr />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/deputy-registrar" element={<DeputyRegistrar />} />
         {/* /////////////////////NAVBAR // SCHOOL & dEPT//////////////////////////////////////////////////////////////////// */}
        
         <Route path="/enggtechno" element={<EnggTechno/>} />
         <Route path="/pharma" element={<Pharmacy/>} />
        {/* ======================== Examination =============================== */}
        <Route path="/entrance-exam-alert" element={<EntranceExamAlert />} />
        <Route path="/exam-notifications" element={<ExamNotifications />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/result" element={<Result />} />


        {/* ========================= Academic  =========================================== */}

        <Route path="/phd-page" element={<PhdPage />} />
        <Route path="/academic-calender" element={<AcademicCalendar />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/Hei-handbook" element={<HEIHandbook />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/mandatory-discIosures" element={<MandatoryDisclosures />} />

        {/* ========================= Research ============================================ */}

        <Route path="/mou-collaboration" element={<CollaborationMou />} />
        <Route path="/director(R&D)" element={<Director />} />
        <Route path="/R&D-cell" element={<RDCell />} />
        <Route path="/consultancy-services" element={<ConsultancyServices />} />
        <Route path="/doctoral-phd" element={<DoctoralProgramsPhD />} />
        <Route path="/resarch-promotion-policy" element={<Researchpromotionpolicy />} />
        <Route path="*" element={<NotFound />} />

        {/*=========================================================================*/}





      </Routes >
    </>

  )
}

export default App