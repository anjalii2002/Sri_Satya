// import React from 'react'
// import Footerpage from '../Footerpage'
// import Nav from '../Nav'

// const Contact = () => {
//   return (
//     <>
//       <style>
//         {
//           ` 
        
        
//         :root {
//             margin-top:-60px;
//         }
//         h1,
//         h2,
//         h3,
//         h4,
//         h5,
//         h6 {}
//         a,
//         a:hover,
//         a:focus,
//         a:active {
//             text-decoration: none;
//             // outline: none;
//         }
        
//         a,
//         a:active,
//         a:focus {
//             color: #333;
//             text-decoration: none;
//             transition-timing-function: ease-in-out;
//             -ms-transition-timing-function: ease-in-out;
//             -moz-transition-timing-function: ease-in-out;
//             -webkit-transition-timing-function: ease-in-out;
//             -o-transition-timing-function: ease-in-out;
//             transition-duration: .2s;
//             -ms-transition-duration: .2s;
//             -moz-transition-duration: .2s;
//             -webkit-transition-duration: .2s;
//             -o-transition-duration: .2s;
//         }
        
//         ul {
//             margin: 0;
//             padding: 0;
//             // list-style: none;
//         }
//         img {
//     max-width: 100%;
//     height: auto;
// }


// .sec-title-style1 {
//     position: relative;
//     display: block;
//     margin-top: -9px;
//     padding-bottom: 50px;
// }
// .sec-title-style1.max-width{
//     position: relative;
//     display: block;
//     max-width: 770px;
//     margin: -9px auto 0;
//     padding-bottom: 52px;    
// }
// .sec-title-style1.pabottom50 {
//     padding-bottom: 42px;
// }
// .sec-title-style1 .title {
//     position: relative;
//     display: block;
//     color: #131313;
//     font-size: 36px;
//     line-height: 46px;
//     font-weight: 700;
//     text-transform: uppercase;
// }
// .sec-title-style1 .title.clr-white{
//     color: #ffffff;
// }
// .sec-title-style1 .decor {
//     position: relative;
//     display: block;
//     width: 70px;
//     height: 5px;
//     margin: 19px 0 0;
// }
// .sec-title-style1 .decor:before{
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }
// .sec-title-style1 .decor:after{
//     position: absolute;
//     top: 0;
//     right: 10px;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }
// .sec-title-style1 .decor span {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 50px;
//     height: 1px;
//     background: #FFA500;
//     margin: 2px 0;
// }


// .sec-title-style1 .text{
//     position: relative;
//     display: block;
//     margin: 7px 0 0;
// }
// .sec-title-style1 .text p{
//     position: relative;
//     display: inline-block;
//     padding: 0 15px;
//     color: #131313;
//     font-size: 14px;
//     line-height: 16px;
//     font-weight: 700;
//     text-transform: uppercase;
//     margin: 0;
// }
// .sec-title-style1 .text.clr-yellow p{
//     color: #FFA500;
// }
// .sec-title-style1 .text .decor-left{
//     position: relative;
//     top: -2px;
//     display: inline-block;
//     width: 70px;
//     height: 5px;
//     background: transparent;
// }
// .sec-title-style1 .text .decor-left span {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 50px;
//     height: 1px;
//     background: #FFA500;
//     content: "";
//     margin: 2px 0;
// }
// .sec-title-style1 .text .decor-left:before{
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }
// .sec-title-style1 .text .decor-left:after{
//     position: absolute;
//     top: 0;
//     right: 10px;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }

// .sec-title-style1 .text .decor-right{
//     position: relative;
//     top: -2px;
//     display: inline-block;
//     width: 70px;
//     height: 5px;
//     background: transparent;
// }
// .sec-title-style1 .text .decor-right span {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     width: 50px;
//     height: 1px;
//     background: #FFA500;
//     content: "";
//     margin: 2px 0;
// }
// .sec-title-style1 .text .decor-right:before{
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }
// .sec-title-style1 .text .decor-right:after{
//     position: absolute;
//     top: 0;
//     left: 10px;
//     bottom: 0;
//     width: 5px;
//     height: 5px;
//     background: #FFA500;
//     border-radius: 50%;
//     content: "";
// }

// .sec-title-style1 .bottom-text{
//     position: relative;
//     display: block;
//     padding-top: 16px;
// }
// .sec-title-style1 .bottom-text p{
//     color: #848484;
//     font-size: 16px;
//     line-height: 26px;
//     font-weight: 400;
//     margin: 0;
// }
// .sec-title-style1 .bottom-text.clr-gray p{
//     color: #cdcdcd;    
// }
// .contact-address-area{
//     position: relative;
//     display: block;
//     background: #ffffff;
//     padding: 100px 0 120px;
// }
// .contact-address-area .sec-title-style1.max-width {
//     padding-bottom: 72px;
// }
// .contact-address-box{
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     flex-wrap: wrap;
//     align-items: center;    
// }
// .single-contact-address-box {
//     position: relative;
//     display: block;
//     background: #131313;
//     padding: 27px 30px 50px;
// }
// .single-contact-address-box .icon-holder{
//     position: relative;
//     display: block;
//     padding-bottom: 24px;
// }
// .single-contact-address-box .icon-holder span:before{
//     font-size: 75px;
// }
// .single-contact-address-box h3{
//     color: #ffffff;
//     margin: 0px 0 9px;
// }
// .single-contact-address-box h2{
//     color: #FFA500;
//     font-size: 24px;
//     font-weight: 600;
//     margin: 0 0 19px;
// }
// .single-contact-address-box a{
//     color: #ffffff;
// }

// .single-contact-address-box.main-branch {
//     background: #FFA500;
//     padding: 34px 30px 51px;
//     margin-top: -20px;
//     margin-bottom: -20px;
// }
// .single-contact-address-box.main-branch h3{
//     color: #131313;
//     font-size: 18px;
//     font-weight: 700;
//     margin: 0 0 38px;
//     text-transform: uppercase;
//     text-align: center;
// }
// .single-contact-address-box.main-branch .inner{
//     position: relative;
//     display: block;
    
// }
// .single-contact-address-box.main-branch .inner ul{
//     position: relative;
//     display: block;
//     overflow: hidden;
// }
// .single-contact-address-box.main-branch .inner ul li{
//     position: relative;
//     display: block;
//     padding-left: 110px;
//     border-bottom: 1px solid #737373;
//     padding-bottom: 23px;
//     margin-bottom: 24px;
// }
// .single-contact-address-box.main-branch .inner ul li:last-child{
//     border: none;
//     margin-bottom: 0;
//     padding-bottom: 0;
// }
// .single-contact-address-box.main-branch .inner ul li .title{
//     position: absolute;
//     top: 2px;
//     left: 0;
//     display: inline-block;
// }
// .single-contact-address-box.main-branch .inner ul li .title h4{
//     color: #131313;
//     font-size: 18px;
//     font-weight: 600;
//     line-height: 24px;
//     text-transform: capitalize;
//     border-bottom: 2px solid #a5821e;
// }

// .single-contact-address-box.main-branch .inner ul li .text{
//     position: relative;
//     display: block;
// }
// .single-contact-address-box.main-branch .inner ul li .text p{
//     color: #131313;
//     font-size: 16px;
//     line-height: 24px;
//     font-weight: 600;
//     margin: 0;
// }

// .contact-info-area {
//     position: relative;
//     display: block;
//     background: #ffffff;
// }
// .contact-form {
//     position: relative;
//     display: block;
//     background: #ffffff;
//     padding: 100px 60px 80px;
//     -webkit-box-shadow: 0px 3px 8px 2px #ededed; 
//     box-shadow: 0px 3px 8px 2px #ededed;
//     z-index: 3;
// }
// .contact-form .sec-title-style1{
//     position: relative;
//     display: block;
//     padding-bottom: 51px;
//     width: 50%;
// }
// .contact-form .text-box{
//     position: relative;
//     display: block;
//     margin-top: 19px;
//     width: 50%;    
// }
// .contact-form .text p{
//     color: #848484;
//     line-height: 26px;
//     margin: 0;
// }

// .contact-form .inner-box{
//     position: relative;
//     display: block;
//     background: #ffffff;
// }
// .contact-form form{
//     position: relative;
//     display: block;
// }
// .contact-form form .input-box{
//     position: relative;
//     display: block;
// }

// .contact-form form input[type="text"],
// .contact-form form input[type="email"],
// .contact-form form textarea{
//     position: relative;
//     display: block;   
//     background: #ffffff;
//     border: 1px solid #eeeeee;
//     width: 100%;
//     height: 55px;
//     font-size: 16px;
//     padding-left: 19px;
//     padding-right: 15px;
//     border-radius: 0px;
//     margin-bottom: 20px;
//     transition: all 500ms ease;
// }
// .contact-form form textarea {
//     height: 130px;
//     padding-left: 19px;
//     padding-right: 15px;
//     padding-top: 14px;
//     padding-bottom: 15px;
// }
// .contact-form form input[type="text"]:focus{
//     color: #222222;
//     border-color: #d4d4d4; 
// }
// .contact-form form input[type="email"]:focus{
//     color: #222222;
//     border-color: #d4d4d4;
// }
// .contact-form form textarea:focus{
//     color: #222222;
//     border-color: #d4d4d4;
// }
// .contact-form form input[type="text"]::-webkit-input-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="text"]:-moz-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="text"]::-moz-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="text"]:-ms-input-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="email"]::-webkit-input-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="email"]:-moz-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="email"]::-moz-placeholder {
//     color: #848484;
// }
// .contact-form form input[type="email"]:-ms-input-placeholder {
//     color: #848484;
// }
// .contact-form form button {
//     position: relative;
//     display: block;
//     width: 100%;
//     background: #FFA500;
//     border: 1px solid #FFA500;
//     color: #131313;
//     font-size: 16px;
//     line-height: 55px;
//     font-weight: 600;
//     text-align: center;
//     text-transform: capitalize;
//     transition: all 200ms linear;
//     transition-delay: 0.1s;
//     cursor: pointer;
// }

// .contact-form form button:hover{
//     color: #ffffff;
//     background: #131313;
// }`
//         }
//       </style>
//       <Nav />
//       <section className="contact-address-area" >
//         <div className="container">
//           <div className="sec-title-style1 text-center max-width">
//             <div className="title">Contact Us</div>
//             <div className="text">
//               <div className="decor-left">
//                 <span />
//               </div>
//               <p>Quick Contact</p>
//               <div className="decor-right">
//                 <span />
//               </div>
//             </div>
//             <div className="bottom-text">
//               <p>

//               </p>
//             </div>
//           </div>
//           <div className="contact-address-box row">

//             <div className="col-sm-4 single-contact-address-box text-center">
//               <div className="icon-holder">
//                 <span className="icon-clock-1">
//                   <span className="path1" />
//                   <span className="path2" />
//                   <span className="path3" />
//                   <span className="path4" />
//                   <span className="path5" />
//                   <span className="path6" />
//                   <span className="path7" />
//                   <span className="path8" />
//                   <span className="path9" />
//                   <span className="path10" />
//                   <span className="path11" />
//                   <span className="path12" />
//                   <span className="path13" />
//                   <span className="path14" />
//                   <span className="path15" />
//                   <span className="path16" />
//                   <span className="path17" />
//                   <span className="path18" />
//                   <span className="path19" />
//                   <span className="path20" />
//                 </span>
//               </div>
//               <h3>SRI SATYA SAI</h3>
//               <h2>University of Technology and Medical Sciences</h2>
//             </div>

//             <div className="col-sm-4  single-contact-address-box main-branch">
//               <h3 >SSSUTMS</h3>
//               <div className="inner">
//                 <ul>
//                   <li>
//                     <div className="title">
//                       <h4>Address:</h4>
//                     </div>
//                     <div className="text">
//                       <p>

//                         Opp.Oilfed Plant, Bhopal-Indore Road,
//                         <br /> Sehore (M.P), Pin - 466001
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="title">
//                       <h4>Ph &amp; Fax:</h4>
//                     </div>
//                     <div className="text">
//                       <p>
//                         +91-7562292740 |<br></br> +91-07562-292204 ,<br></br> 07562-292205 <br />Fax :- +91-07562-292201
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="title">
//                       <h4>Office Hrs:</h4>
//                     </div>
//                     <div className="text">
//                       <p>
//                         Mon-Sat: 10:00am - 5:00pm

//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-sm-4 single-contact-address-box text-center">

//               <div className="inner">
//                 <ul>
//                   <li>
//                     <div className="title" style={{ color: 'white', marginRight: '240px' }}>
//                       <h4> Email :</h4>
//                     </div>
//                     <div className="text" style={{ color: '#ffa500' }}>
//                       <p style={{ marginLeft: '-120px' }}>

//                         info@sssutms.co.in</p>
//                       <p style={{ marginTop: '-20px' }}>srisatyasaiuniversity2013@gmail.com
//                       </p>



//                     </div>

//                     <br></br>


//                     <div className="title" style={{ color: 'white', marginRight: '200px' }}>
//                       <h4> Visit us at :</h4>
//                     </div>
//                     <div className="text" style={{ color: '#ffa500' }}>
//                       <p style={{ marginLeft: '-120px' }}>
//                         {/* <p> */}
//                         www.sssutms.co.in,</p>
//                       <p style={{ marginTop: '-20px', marginLeft: '-120px' }}> www.sssutms.ac.in
//                       </p>



//                     </div>
//                   </li>


//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="contact-info-area" >
//         <div className="container" style={{ marginTop: '-100px' }}>
//           <div className="row">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="contact-form">
//                 <div className="row">
//                   <div className="col-xl-12">
//                     <div className="sec-title-style1 float-left">
//                       <div className="title" style={{ marginTop: '-40px' }}>Send Your Message</div>
//                       <div className="text">
//                         <div className="decor-left">
//                           <span />
//                         </div>
//                         <p>Contact Form</p>
//                       </div>
//                     </div>
//                     <div className="text-box float-right">
//                       <p>
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry.{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="inner-box">
//                   <form
//                     id="contact-form"
//                     name="contact_form"
//                     className="default-form"
//                     action="inc/sendmail.php"
//                     method="post"
//                   >
//                     <div className="row">
//                       <div className="col-xl-6 col-lg-12">
//                         <div className="row">
//                           <div className="col-xl-6">
//                             <div className="input-box">
//                               <input
//                                 type="text"
//                                 name="form_name"
//                                 defaultValue=""
//                                 placeholder="Name"
//                                 required=""
//                               />
//                             </div>
//                             <div className="input-box">
//                               <input
//                                 type="text"
//                                 name="form_phone"
//                                 defaultValue=""
//                                 placeholder="Phone"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-xl-6">
//                             <div className="input-box">
//                               <input
//                                 type="email"
//                                 name="form_email"
//                                 defaultValue=""
//                                 placeholder="Email"
//                                 required=""
//                               />
//                             </div>
//                             <div className="input-box">
//                               <input
//                                 type="text"
//                                 name="form_website"
//                                 defaultValue=""
//                                 placeholder="Website"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-xl-12">
//                             <div className="input-box">
//                               <input
//                                 type="text"
//                                 name="form_subject"
//                                 defaultValue=""
//                                 placeholder="Subject"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-xl-6 col-lg-12">
//                         <div className="input-box">
//                           <textarea
//                             name="form_message"
//                             placeholder="Your Message..."
//                             required=""
//                             defaultValue={""}
//                           />
//                         </div>
//                         <div className="button-box">
//                           <input
//                             id="form_botcheck"
//                             name="form_botcheck"
//                             className="form-control"
//                             type="hidden"
//                             defaultValue=""
//                           />
//                           <button type="submit" data-loading-text="Please wait...">
//                             Send Message
//                             <span className="flaticon-next" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> <br />
//       <Footerpage />
//     </>

//   )
// }

// export default Contact





import React from 'react'
import Nav from '../Nav'
import Footerpage from '../Footerpage'

const Contact = () => {
  return (
    <>
    <style>
      {
        `
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

         .title{
         font-family:inherit;
         font-weight:350;
         margin-left:80px;
}


 .title h4{
  text-transform:uppercase;
  font-weight:500;
  font-size:20px;
  position:relative;
  padding-left:60px;
  margin-top:0px;
  margin-bottom:15px;
  display:inline-block;
  color:rgb(53,56,88);
  font-style:normal;
 }

        section {
          padding: 10px 0;
          min-height: 100vh;
      }
.contact-info {
display: inline-block;
width: 100%;
text-align: center;
    margin-bottom: 10px;
}
.contact-info-icon {
margin-bottom: 15px;
}
.contact-info-item {
background: #071c34;
padding: 30px 0px;
}
.contact-page-sec .contact-page-form h2 {
color: #071c34;
text-transform: capitalize;
font-size: 22px;
font-weight: 700;
}
.contact-page-form .col-md-6.col-sm-6.col-xs-12 {
padding-left: 0;
}  
.contact-page-form.contact-form input {
margin-bottom: 5px;
}  
.contact-page-form.contact-form textarea {
height: 110px;
}
.contact-page-form.contact-form input[type="submit"] {
background: #071c34;
width: 150px;
border-color: #071c34;
}
.contact-info-icon i {
font-size: 48px;
color: #fda40b;
}
.contact-info-text p{margin-bottom:0px;}
.contact-info-text h2 {
color: #fff;
font-size: 22px;
text-transform: capitalize;
font-weight: 600;
margin-bottom: 10px;
}
.contact-info-text span {
color: #999999;
font-size: 16px;
font-weight: ;
display: inline-block;
width: 100%;
}

.contact-page-form input {
background: #f9f9f9 none repeat scroll 0 0;
border: 1px solid #f9f9f9;
margin-bottom: 20px;
padding: 12px 16px;
width: 100%;
border-radius: 4px;
}

.contact-page-form .message-input {
display: inline-block;
width: 100%;
padding-left: 0;
}
.single-input-field textarea {
background: #f9f9f9 none repeat scroll 0 0;
border: 1px solid #f9f9f9;
width: 100%;
height: 120px;
padding: 12px 16px;
border-radius: 4px;
}
.single-input-fieldsbtn input[type="submit"] {
background: #fda40b none repeat scroll 0 0;
color: #fff;
display: inline-block;
font-weight: 600;
padding: 10px 0;
text-transform: capitalize;
width: 150px;
margin-top: 20px;
font-size: 16px;
}
.single-input-fieldsbtn input[type="submit"]:hover{background:#071c34;transition: all 0.4s ease-in-out 0s;border-color:#071c34}
.single-input-field  h4 {
color: #464646;
text-transform: capitalize;
font-size: 14px;
}
.contact-page-form {
display: inline-block;
width: 100%;
margin-top: 30px;
}

.contact-page-map {
margin-top: 36px;
}
.contact-page-form form {
  padding: 20px 15px 0;
}`
      }
    </style>
<Nav/>
    <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '120px' }}>
        <h4>Contact Us</h4>
      </div>
    <section className="contact-page-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marked" />
              </div>
              <div className="contact-info-text">
                <h2>Address</h2>

                <span>Opp.Oilfed Plant, Bhopal-Indore Road,Sehore(M.P),  <br></br>
              Pin - 466001</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span> info@sssutms.co.in</span>
                <span>srisatyasaiuniversity2013@gmail.com</span>
              <span>Fax :- +91-07562-292201</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-clock" />
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
              
                <span>Mon- Sat 10:00 pm - 5:00 pm</span>
                <span>Visit us :- www.sssutms.co.in,
                  <br></br> www.sssutms.ac.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-page-form" method="post">
            <h2>Get in Touch</h2>
            <form action="contact-mail.php" method="post">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="single-input-field">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="single-input-field">
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="single-input-field">
                    <input type="text" placeholder="Phone Number" name="phone" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="single-input-field">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
                <div className="col-md-12 message-input">
                  <div className="single-input-field">
                    <textarea
                      placeholder="Write Your Message"
                      name="message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="single-input-fieldsbtn">
                  <input type="submit" defaultValue="Send Now" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-page-map">
            <iframe
                 title="SSSUTMS Sehore Map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.576984127963!2d77.12720060000001!3d23.215651799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf4c949567e4d%3A0xc7649cfdfe73a024!2s%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%88%20%E0%A4%AF%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%9F%E0%A5%80%20%E0%A4%91%E0%A4%AB%E0%A4%BC%20%E0%A4%9F%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%A8%E0%A5%8B%E0%A4%B2%E0%A5%89%E0%A4%9C%E0%A5%80%20%26%20%E0%A4%AE%E0%A5%87%E0%A4%A1%E0%A4%BF%E0%A4%95%E0%A4%B2%20%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%B8%2C%20%E0%A4%B8%E0%A5%80%E0%A4%B9%E0%A5%8B%E0%A4%B0%2C%20%E0%A4%AE%E0%A4%A6%E0%A5%8D%E0%A4%B9%E0%A5%8D%E0%A4%AF%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B6!5e0!3m2!1sen!2sin!4v1642818613881!5m2!1sen!2sin"
              width="100%"
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footerpage/>
</>  
  )
}

export default Contact