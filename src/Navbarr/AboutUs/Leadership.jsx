import React, { useEffect, useState } from 'react'
import library from '../../images/libr.webp';
import Vc from '../../images/VC.png'
import sid from '../../images/sid.jpg';
import hemant from '../../images/Hemant.jpg'
import Nav from '../../HomePage/Nav.jsx'
import Footerpage from '../../HomePage/Footerpage.jsx';
import kanchan from "../../images/kanchan.jpg"

function Leadership() {
    return (
        <>
            <style>
                {
                    `
   
.contentleader
{
text-align:justify;
}
   .title h4::before{
    background: orange;
    height:2px;
    width:45px;
    content:"";
    position:absolute;
    top:0px;
    left:0px;
    bottom:0px;
    margin:auto;

   }


   .buttondiv{
   
      position: absolute;

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); // Adjust opacity as needed
      pointer-events: none; // This allows clicks to go through the overlay to the button
   }

.leadership{
position:relative;
height:300px;
width:100%;
}

.leadbut{

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 20px;
  background-color: #780000;
  color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}}
}
.libimage{
height:100px;
width:100%;
filter:brightness(50%);
}

.dean-img{
height:340px;
width:300px
}


.title{
font-family:inherit;
font-weight:350;

margin-left:80px;
}
   .title h4{
    text-transform:uppercase;
    font-weight:500;
    font-size:30px;
    position:relative;
    padding-left:60px;
    margin-top:0px;
    margin-bottom:15px;
    display:inline-block;
    color:rgb(53,56,88);
    font-style:normal;
   }


   

.title h3 {
  font-size: 50px;
  font-weight: 700;
  line-height: 49px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #780000;
  font-style: normal;
}


    
// .sed_testimonial_section{
//   padding-top:6rem;
//   background-color: #F0002F;

// }








.col-lg-4.padding-section.align-self-center {
margin-left: 90px; /* Adjust the value as per your preference */
}

.img-fluid {
max-width: 100%;
height: 260px;

}
// img {
//   vertical-align: middle;
//   border-style: none;
// }
.change_contet_test:nth-child(1){
display: block;
}
.change_contet_test{
display: none;
}


.test_user_review_content p{
font-size: 14px;
text-align: left;
color: #ffffff;
}





// .img_peroson_fullsize{  
//   text-align: right;
// }

// .active_user{
//   position: relative; 
//   border: 3px solid #fddf59 !important;
//   border-radius: 11px;
// }


.cont{
margin-top:20px;
}
.title-hr {
width: 120px;
border-top: 5px solid #FF0000;
margin-left: 0px;
margin-top: 0rem;
margin-bottom:0rem
}

.active_user:after{
content: '';
position: absolute;
width: 15px;
height: 15px;
text-align:justify;
background: #fddf59;
left: 0;
right: 0;
margin: 0px auto;
border-radius: 50%;
bottom: -8px;
}

.p_b_80{
padding-bottom: 80px;
}




.vcimage{
height:300px;
width:300px;
margin-left:90px;
margin-top:40px
}


.containerrr{
margin-left:30px;
width:95%;
background-color:#023047;
color:white;
padding:20px
}
.img_peroson_fullsize{
position: relative;
}
@media only screen and (min-width: 768px) {
 



.sed_testimonial_section{
margin-top:0px
}.test_user_review_content p {
  margin-left: 175px;
}
.test_user_review_content h6{
  margin-left: 175px;
  font-size: 12px !important;
}
.bottom_line_yello {
  font-size: 22px;
}
.testi_person_img_icon ul {
  text-align: left;
}
.sed_testimonial_section {
  padding-left: 150px;
}



.text-align-justify {
text-align: justify;

}

.cont{
margin-left:48px
}

.leaderh {
font-size: 22px;
}



.vc-box{
max-width: 100%;
background-color: #f3f3f3;
padding: .8rem;
height:340px;
text-align: center;
border: 10px solid #023047;
display: inline-block;
position: relative;
margin-left:-50px;
margin-top:20px

}



.vc-box::before {
width: calc(100% - 30%);
height: 10px;
right: 15%;
left: 15%;
top: -10px;
z-index: 1;
}
.vc-box::before, .vc-box::after {
content: '';
position: absolute;
background: #fff;
}
*, ::after, ::before {
box-sizing: border-box;
}

vc-box::before {
width: calc(100% - 30%);
height: 10px;
right: 15%;
left: 15%;
top: -10px;
z-index: 1;
}
.dean-img-box::before, .dean-img-box::after {
content: '';
position: absolute;
background: #fff;
margin-left:30px
}

.dean-img-box::before {
width: calc(100% - 30%);
height: 10px;
right: 15%;
left: 15%;
top: -10px;
z-index: 1;
}
*, ::after, ::before {
box-sizing: border-box;
}
.dean-img-box {
max-width: 100%;
background-color: #f3f3f3;
padding: .8rem;
height:340px;

border: 10px solid #023047;
display: inline-block;
position: relative;
margin-left:20px;
margin-top:20px

}

*, ::after, ::before {
box-sizing: border-box;
}


.sidcontent{
margin-left:-60px;
margin-top:30px;
width:95%;
font-size:17px
}



.vccontent{
margin-top:30px;
width:100%
}


@keyframes fadeInUp {
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0%);
  opacity: 1;
}
}

.fadeInUp-animation {
animation: 1.5s fadeInUp;
}



.message{
margin-left:-120px;

}




@media only screen and (max-width: 1280px) {

.sed_testimonial_section {
    margin-top:0px;
 }

  .dirr {
  flex-direction: column-reverse;
}
@media only screen and (max-width: 768px) {

.sed_testimonial_section{
    margin-top:0px;
 }

  .dirr {
  flex-direction: column-reverse;
}


}
@media only screen and (max-width: 620px) {

  .colon {
      display: none;
  }

}
@media only screen and (max-width: 480px){

.contentleader
{
text-align:justify;
}


.h2 title-main{
margin-left:20px}

.img-fluid {
  margin-left:-100px;
}


.sidcontent{
  margin-left:40px;

}


.contentleader{
margin-left:20px}
}



    `
                }
            </style>

            <Nav />
            <div className='leader'>

                <div className='leadership'>
                    <img src={library} style={{ height: '300px', width: '100%' }} alt="Library" />
                    <div className='buttondiv'>
                        <div className='leadbut' >
                            LEADERSHIP
                        </div>
                    </div>
                </div>





                <div className="cont"
 
                >
                    <h2 className="h2 title-main" style={{color:'#780000'}}>Mr. Siddharth Kapoor</h2>
                    <hr className="title-hr"></hr>
                    <h2 className="h3 text-bold" style={{fontFamily:"'Anton', sans-serif "}}>Chancellor</h2>
                    <div className="row dirr">

                        <div class="col-lg-4 " style={{marginTop:'40px'}}>

                            <div className="dean-img-box">


                                <img
                                    className="img-fluid max-height-500"
                                    src={sid}
                                    alt="img"
                                />

                            </div>
                        </div>


                        <div className="col-lg-8 padding-section">


                            {/* <div className="left_text_testi_contetn"> */}
                            <div className='sidcontent'>

                                <div className="contentleader" style={{fontFamily:"'Anton', sans-serif "}} >

                                    Young  &  Dynamic  Chancellor  of   Sri Satya Sai University of Technology & Medical Sciences   Honourable Mr. Siddharth Kapoor   holds Degree in Family Management Business Administration (FMBA) from SP Jain, Mumbai. He also did his Masters of Business Administration (Finance) Degree from Temple University, Fox School of Business, Philadelphia after completing PA Bachelor of Business Administration (Finance) from Temple University, Fox School of Business, Philadelphia,PA.
                                    <br></br>
                                    Mr. Kapoor is associated with Largest Educational Group of Central India from last 14 years & is also Project head - Radio Popcorn. He has Led Analysis, design and Development of FM Station & is actively associated with total Diagnosis Private. Ltd., Bhopal, (India) from last 14 years.<br></br>
                                    <br></br>Mr. Kapoor is analyst of the Financial Management and Accountancy System. He is member of Ascend (SPO), an Association for Finance and Accounting Majors, Member & SOS Village Society, one of India’s largest Society for orphans. He has qualified and Won State level Swimming and Football competition.
                                    Honouable Governor of Madhya Pradesh Shri Ram Naresh Yadav has approved appointment of Shri Sidharth Kapoor as Chancellor of the University & under his guidance, the University will fulfil dreams & aspirations of young generation.
                                </div>
                            </div>

                            <br />

                        

                            {/* </div> */}

                        </div>

                    </div>



                </div>


                <br></br>
                <br></br>

                <div className="containerrr fadeInUp-animation">
                    <div className="row dirr">
                        <div className="col-lg-8 padding-section">
                            <div className='vccontent'>
                                <h2 className="h2 title-main text-bold" style={{ color: 'white',fontFamily:"'Anton', sans-serif " }}>Dr. Mukesh Tiwari</h2>
                                <hr className="title-hr" style={{ color: 'white' }} />
                                <h2 className="h3 text-bold" style={{ color: 'white' ,fontFamily:"'Anton', sans-serif "}}>Vice Chancellor</h2>
                                <div className="contentleader" style={{fontFamily:"'Anton', sans-serif "}}>
                                    Since its founding in 2013 by merging of several multi-disciplinary institutions, Sri Satya Sai University of Technology and Medical Sciences Sehore, Bhopal (MP) is acclaimed for its outstanding contribution to teaching, research and service in Nation building. Today, the University stands to meet the enormous aspirations and expectations of society. Society wants us to nurture professionals and scholars of high caliber, who can offer solutions to a broad range of issues.  This requires excellence in teaching and research at par with the best in the world.


                                    We, at Sri Satya Sai University of Technology and Medical Sciences, continuously aspire to be a breeding ground for positive ideas and emerge as a symbol of openness of thoughts, cultural pluralism and celebrating the unity in the diversity of India. We endeavour to touch the lives of every student by inculcating prudence, efficiency, creativity and compassion to work for the betterment of the marginalized sections of society. We attempt to kindle their sense of responsibility, honesty, conscience, justice and above all commitment to human values.


                                    We aim to expand our reach to the inaccessible regions through virtual presence and become a center of knowledge osmosis.   <br></br> We seek to empower every inquisitive soul with the best available human resources. We intend to intensify our endeavors to mobilize more resources and create conducive ambience for our faculty, students and staff to actualize their potential.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='vcimage'>
                                <div className='vc-box'>
                                    <img className='vcc' style={{ height: '280px' }} src={Vc} alt="Vice Chancellor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br>


                <div className="cont"

                >
                    <h2 class="h2 title-main text-bold" style={{fontFamily:"'Anton', sans-serif ",color:'#780000'}}>Dr. Hemant Kumar Sharma</h2>
                    <hr class="title-hr"></hr>
                    <h2 class="h3 text-bold" style={{fontFamily:"'Anton', sans-serif "}}>Registrar</h2>
                    <div className="row dirr">

                        <div class="col-lg-4 padding-section " style={{marginTop:'10px'}}>

                            <div class="dean-img-box">



                                <img
                                    className="img-fluid max-height-500"
                                    style={{ width: '220px' }}
                                    src={hemant}
                                    alt="img"
                                />

                            </div>
                        </div>


                        <div className="col-lg-8 padding-section">



                            <div className='sidcontent'>

                                <div className="contentleader" style={{fontFamily:"'Anton', sans-serif "}} >

                                    Sri Satya Sai University of Technology and Medical Sciences (SSSUTMS) is a dynamic institution offering a wide range of disciplines in both technology and medical sciences since its establishment in 2013. Our commitment to quality education is evident through our diverse research endeavors, with over 1500 research papers already published in renowned international and Indian journals. Our aim is to establish an internationally recognized R&D center, fostering excellence in education, research, technology implementation, and entrepreneurship for societal benefit.

                                   <br></br> <br></br>At SSSUTMS, our Research and Development cell plays a pivotal role in promoting research activities among faculty members, ensuring academic excellence. Collaborations with industry partners are integral to our mission, facilitating engineering, pharmacy, science, and medical research aligned with the demands of quality education. We organize research-oriented workshops, seminars, and development programs to enhance the research capabilities of our faculty members, fostering a culture of innovation and discovery.
                                </div>
                            </div>

                            <br />

                            <br />
                            <br />



                        </div>

                    </div>



                </div>


                <br></br>
                <br></br>
                <div className="containerrr fadeInUp-animation">
                    <div className="row dirr">
                        <div className="col-lg-8 padding-section">
                            <div className='vccontent'>
                                <h2 className="h2 title-main text-bold" style={{ color: 'white' ,fontFamily:"'Anton', sans-serif "}}>Dr. Kanchan Shrivastava</h2>
                                <hr className="title-hr" style={{ color: 'white' }} />
                                <h2 className="h3 text-bold" style={{ color: 'white',fontFamily:"'Anton', sans-serif " }}>Deputy Registrar</h2>
                                <div className="contentleader"  style={{fontFamily:"'Anton', sans-serif ",}}>
                                    Dr. Kanchan Shrivastava, Deputy Registrar, joined this university in September 2013 and has been diligently working for the improvement and all-round development of the university. She was awarded Ph.D.(Economics) on 17 Feb 2003 by Bundelkhand UNIVERSITY, JHANSI (UP). Since long she has been a teacher and administrator par excellence. During her long-time experience stint as Dean,and Examination in charge, etc. She made her definitive mark and was able to transform the institutions wherever she worked.               I welcome you all at to Sri Satya Sai University of Technology and Medical Sciences (SSSUTMS), Sehore (M.P). My dear shining students already enrolled and many more aspirant meritorious on security policy violation, cordially invited to join one of the best University Campuses. Our objective is to improve the standards to achieve excellence in higher education and provide high worth education to students from different Countries, Religion, and Culture at economical fee.
                                    With the Management encouraging point of view and visionary planning and dynamism of our President, we envisage the University to steaily grow into a leading multi-disciplinary centre for advanced learning. Our earnest objective is to provide quality service to current and future students as well as faculty and staff.
                                    <br></br> I assure you that your life in the campus as a student would be highly worthwhile regarding academic pursuit and filled with good human values.   </div>
                       </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='vcimage'>
                                <div className='vc-box'>
                                    <img className='vcc' style={{ height: '280px' }} src={kanchan} alt="Vice Chancellor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<br></br>
            </div>
            <Footerpage/>
        </>
    )
}

export default Leadership;
