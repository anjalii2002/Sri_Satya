import React from "react";
import Nav from "../HomePage/Nav";
import Footerpage from "../HomePage/Footerpage";
import C1 from "../HomePage/Photo/C1.jpg";
import C2 from "../HomePage/Photo/C2.jpg";
import C3 from "../HomePage/Photo/C3.png";
import C4 from "../HomePage/Photo/C4.png";
import C5 from "../HomePage/Photo/C5.jpg";
import C6 from "../HomePage/Photo/C6.jpg";

import C9 from "../HomePage/Photo/C9.jpg";
import C10 from "../HomePage/Photo/C10.png";
import C11 from "../HomePage/Photo/C11.jpg";

import C13 from "../HomePage/Photo/C13.jpg";
import C14 from "../HomePage/Photo/C14.png";
import C15 from "../HomePage/Photo/C15.jpg";
import C16 from "../HomePage/Photo/C16.jpg";

import C20 from "../HomePage/Photo/C20.png";
import C21 from "../HomePage/Photo/C21.png";
import C22 from "../HomePage/Photo/C22.png";
import C23 from "../HomePage/Photo/C23.png";

import C25 from "../HomePage/Photo/C25.png";
import C26 from "../HomePage/Photo/C26.png";

import C28 from "../HomePage/Photo/C28.png";
import C29 from "../HomePage/Photo/C29.png";

function Placement() {
  return (
    <>
      <style>
        {`
 
    
    
 #main-photo {
    background: url("https://tulas.edu.in/wp-content/uploads/2020/12/7-essential-career-a-1.jpg");
    background-size: cover;
    background-position: center center;
    min-height: 520px;
  }
  
  /* Media query for small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #main-photo {
      background-size: contain; /* Adjust background size for small devices */
      background-position: top center; /* Adjust background position for better visibility on small screens */
      min-height: 120px; /* Adjust min-height for small devices */
    }
  }
  }
   









.sec-pad {
  padding: 60px 0 0;
  margin: 50px 0;
}

.contact-sec {
  align-item: center;
  display: flex;
  background-color: #5cbde466;
}

.contact-sec .contact-ul li,
.contact-ul b {
  font-size: 20px;
  margin: 10px 0;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  word-wrap: break-word;
}

.contact-sec .contact-ul i {
  font-size: 18px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
}
.contact-detail a {
  color: #000;
  text-decoration: none;
}

.contact-sec .contact-ul li b:hover {
  color: #f93;
}

.contact-sec .contact-ul li .fa-location-dot {
  color: #f44337;
  border: 2px solid #f4433790;
}

.contact-sec .contact-ul li .fa-phone {
  color: #00b055;
  border: 2px solid #00b05590;
}

.contact-sec .contact-ul li .fa-envelope {
  color: #ff6347;
  border: 2px solid #ff634790;
}

.contact-detail span {
  width: 400px;
  display: flex;
  justify-content: center;
}
.contact-detail span a {
  font-size: 20px;
  padding: 6px 12px;
  color: #000;
  border-radius: 50%;
  margin: 0px 5px;
}
.contact-detail span .fb {
  color: #3b5998;
  border: 3px solid #3b5998;
}
.contact-detail span .fb:hover {
  color: #fff;
  background-color: #3b5998;
}

.contact-detail span .insta {
  color: #833ab4;
  border: 3px solid #833ab4;
}
.contact-detail span .insta:hover {
  color: #fff;
  background-color: #833ab4;
}

.contact-detail span .twitter {
  color: #00acee;
  border: 3px solid #00acee;
}
.contact-detail span .twitter:hover {
  color: #fff;
  background-color: #00acee;
}

form.contFrm {
  max-width: 396px;
  margin: auto;
}

.inptFld {
  width: 100%;
  height: 50px;
  border: 0;
  margin: 0 0 10px;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 16px;
  color: #000;
}

.inptFld:focus {
  outline-offset: -4px;
  outline: 1px solid #f93;
}

.contFrm textarea {
  height: 75px;
  padding-top: 5px;
}
.inptBtn {
  height: 50px;
  border: 0;
  background: #00b055;
  font-size: 14px;
  color: #fff;
  margin: auto;
  letter-spacing: 1px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
}

/* Responcive css Start */

@media (max-width: 991px) {
  .sec-pad {
    padding: 20px 0 0px;
  }

  .contact-sec .contact-ul li,
  .contact-ul b {
    font-size: 18px;
  }

  .contact-sec .contact-ul i {
    font-size: 14px;
    padding: 6px;
    margin-right: 6px;
  }

  .inptFld {
    height: 40px;
    margin: 0 0 10px;
    padding: 0 14px;
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .contact-detail span {
    width: auto;
  }
  .contact-detail span a {
    font-size: 18px;
    padding: 5px 10px;
    color: #000;
    border-radius: 50%;
    margin: 0px 5px 20px;
  }
}

@media (max-width: 575px) {
  .section-title {
    font-size: 26px;
    font-weight: 500;
  }
  .contact-sec {
    border-radius: 10% 10% 0% 0% / 5% 5% 0% 0%;
  }

  .contact-sec .contact-ul i {
    border: none;
  }
  .inptFld {
    height: 36px;
    margin: 0 0 8px;
    padding: 0 14px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .contact-sec .contact-ul li,
  .contact-ul b {
    font-size: 16px;
  }
}




.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}
.form_wrapper {
    background: #fff;
    width: 400px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 8% auto 0;
    position: relative;
    z-index: 1;
    border-top: 5px solid #f5ba1a;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
}
.form_wrapper h2 {
    font-size: 1.5em;
    line-height: 1.5em;
    margin: 0;
}
.form_wrapper .title_container {
    text-align: center;
    padding-bottom: 15px;
}
.form_wrapper h3 {
    font-size: 1.1em;
    font-weight: normal;
    line-height: 1.5em;
    margin: 0;
}
.form_wrapper label {
    font-size: 12px;
}
.form_wrapper .row {
    margin: 10px -15px;
}
.form_wrapper .row > div {
    padding: 0 15px;
    box-sizing: border-box;
}
.form_wrapper .col_half {
    width: 50%;
    float: left;
}
.form_wrapper .input_field {
    position: relative;
    margin-bottom: 20px;
    -webkit-animation: bounce 0.6s ease-out;
    animation: bounce 0.6s ease-out;
}
.form_wrapper .input_field > span {
    position: absolute;
    left: 0;
    top: 0;
    color: #333;
    height: 100%;
    border-right: 1px solid #ccc;
    text-align: center;
    width: 30px;
}
.form_wrapper .input_field > span > i {
    padding-top: 10px;
}
.form_wrapper .textarea_field > span > i {
    padding-top: 10px;
}
.form_wrapper input[type="text"], .form_wrapper input[type="email"], .form_wrapper input[type="password"] {
    width: 100%;
    padding: 8px 10px 9px 35px;
    height: 35px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline: none;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.form_wrapper input[type="text"]:hover, .form_wrapper input[type="email"]:hover, .form_wrapper input[type="password"]:hover {
    background: #fafafa;
}
.form_wrapper input[type="text"]:focus, .form_wrapper input[type="email"]:focus, .form_wrapper input[type="password"]:focus {
    -webkit-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    -moz-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
    border: 1px solid #f5ba1a;
    background: #fafafa;
}
.form_wrapper input[type="submit"] {
    background: #f5ba1a;
    height: 35px;
    line-height: 35px;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1em;
    margin-bottom: 10px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.form_wrapper input[type="submit"]:hover {
    background: #e1a70a;
}
.form_wrapper input[type="submit"]:focus {
    background: #e1a70a;
}
.form_wrapper input[type="checkbox"], .form_wrapper input[type="radio"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
.form_container .row .col_half.last {
    border-left: 1px solid #ccc;
}
.checkbox_option label {
    margin-right: 1em;
    position: relative;
}
.checkbox_option label:before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
    vertical-align: -2px;
    border: 2px solid #ccc;
    padding: 0.12em;
    background-color: transparent;
    background-clip: content-box;
    transition: all 0.2s ease;
}
.checkbox_option label:after {
    border-right: 2px solid #000;
    border-top: 2px solid #000;
    content: "";
    height: 20px;
    left: 2px;
    position: absolute;
    top: 7px;
    transform: scaleX(-1) rotate(135deg);
    transform-origin: left top;
    width: 7px;
    display: none;
}
.checkbox_option input:hover + label:before {
    border-color: #000;
}
.checkbox_option input:checked + label:before {
    border-color: #000;
}
.checkbox_option input:checked + label:after {
    -moz-animation: check 0.8s ease 0s running;
    -webkit-animation: check 0.8s ease 0s running;
    animation: check 0.8s ease 0s running;
    display: block;
    width: 7px;
    height: 20px;
    border-color: #000;
}
.radio_option label {
    margin-right: 1em;
}
.radio_option label:before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.5em;
    border-radius: 100%;
    vertical-align: -3px;
    border: 2px solid #ccc;
    padding: 0.15em;
    background-color: transparent;
    background-clip: content-box;
    transition: all 0.2s ease;
}
.radio_option input:hover + label:before {
    border-color: #000;
}
.radio_option input:checked + label:before {
    background-color: #000;
    border-color: #000;
}
.select_option {
    position: relative;
    width: 100%;
}
.select_option select {
    display: inline-block;
    width: 100%;
    height: 35px;
    padding: 0px 15px;
    cursor: pointer;
    color: #7b7b7b;
    border: 1px solid #ccc;
    border-radius: 0;
    background: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all 0.2s ease;
}
.select_option select::-ms-expand {
    display: none;
}
.select_option select:hover, .select_option select:focus {
    color: #000;
    background: #fafafa;
    border-color: #000;
    outline: none;
}
.select_arrow {
    position: absolute;
    top: calc(50% - 4px);
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    border-color: #7b7b7b transparent transparent transparent;
}
.select_option select:hover + .select_arrow, .select_option select:focus + .select_arrow {
    border-top-color: #000;
}
.credit {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px;
    color: #f5ba1a;
}
.credit a {
    color: #e1a70a;
}
@-webkit-keyframes check {
    0% {
        height: 0;
        width: 0;
   }
    25% {
        height: 0;
        width: 7px;
   }
    50% {
        height: 20px;
        width: 7px;
   }
}
@keyframes check {
    0% {
        height: 0;
        width: 0;
   }
    25% {
        height: 0;
        width: 7px;
   }
    50% {
        height: 20px;
        width: 7px;
   }
}
@-webkit-keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        opacity: 0;
   }
    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
   }
    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
   }
    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
   }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        opacity: 1;
   }
}
@keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        transform: scale3d(1, 0, 1);
        opacity: 0;
   }
    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
        transform: scale3d(1, 1.2, 1);
   }
    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
        transform: scale3d(1, 0.85, 1);
   }
    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
        transform: scale3d(1, 1.05, 1);
   }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        opacity: 1;
   }
}
@-webkit-keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        opacity: 0;
   }
    25% {
        -webkit-transform: translate3d(0, 10px, 0);
   }
    50% {
        -webkit-transform: translate3d(0, -6px, 0);
   }
    75% {
        -webkit-transform: translate3d(0, 2px, 0);
   }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        opacity: 1;
   }
}
@keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        transform: translate3d(0, -25px, 0);
        opacity: 0;
   }
    25% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
   }
    50% {
        -webkit-transform: translate3d(0, -6px, 0);
        transform: translate3d(0, -6px, 0);
   }
    75% {
        -webkit-transform: translate3d(0, 2px, 0);
        transform: translate3d(0, 2px, 0);
   }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
   }
}
@media (max-width: 600px) {
    .form_wrapper .col_half {
        width: 100%;
        float: none;
   }
    .bottom_row .col_half {
        width: 50%;
        float: left;
   }
    .form_container .row .col_half.last {
        border-left: none;
   }
    .remember_me {
        padding-bottom: 20px;
   }
}
///////////////////

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}


.card{
    width: auto;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
}

.card h2{
  margin-bottom: 10px;
}

.card a.fp{
  width: 100%;
  display: flex;
  color: #5881D0;
}

.login_register{
  display: flex;
  width: 100%;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 15px;
  margin: 20px 0;
}

.login_register a{
  font-size: 1em;
  padding: 10px 55px;
  border: none;
  width: 50%;
}

.login_register a.login{
  border-radius: 15px;
  background-color: transparent;
  color: black;
}

.login_register a.register{
  border-radius: 15px;
  background: linear-gradient(90deg, #003A74, #006AD5);
  color: white;
}

.form{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form input{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #DDDDDD;
  color: #A0A6A3;
  font-family: "Roboto Mono", sans-serif;
  box-shadow: 1px 5px 9px rgba(211, 211, 211, .7);
}

.form input.email{
  margin-bottom: 15px;
}

.form input.pass{
  margin-bottom: 15px;
}

.form input.comfirm_pass{
  margin-bottom: 5px;
}

.login_btn{
  font-size: 20px;
  color: white;
  border-radius: 15px;
  border: none;
  background-color: #003A74;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: linear-gradient(-90deg, #003A74, #006AD5);
  box-shadow: 1px 5px 9px rgba(211, 211, 211, .9);
}




// ///////


@import url('https://fonts.googleapis.com/css?family=Bangers|Cinzel:400,700,900|Lato:100,300,400,700,900|Lobster|Lora:400,700|Mansalva|Muli:200,300,400,600,700,800,900|Open+Sans:300,400,600,700,800|Oswald:200,300,400,500,600,700|Roboto:100,300,400,500,700,900&display=swap');
/* Used Google Fonts */
font-family: 'Roboto', sans-serif;
font-family: 'Mansalva', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Lora', serif;
font-family: 'Muli', sans-serif;
font-family: 'Lobster', cursive;
font-family: 'Cinzel', serif;
font-family: 'Bangers', cursive;
/* Used Google Fonts */
*{
  margin:0;
  padding:0;
}
.ctn{
  font-size:17px;
  color:#424242;
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
  background-image: url("https://www.transparenttextures.com/patterns/clean-gray-paper.png");
}
h1, h2, h3, h4, h5, h6, p{
  margin:0px;
  padding:0px;
}
.logo-container ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display:inline-block;
}
.logo-container ul li {
    width: 170px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    margin: 10px;
    float: left;
    padding:20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);    
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-container ul li a{
  text-decoration:none !important;
  display: inline-block;
}
.logo-holder{
  text-align:center;
}
/* Logo-1 */
.logo-1 h3 {
    color: #e74c3c;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 50px;
    line-height:1.3;
}
.logo-1 p {
    font-size: 14px;
    letter-spacing: 8px;
    text-transform: uppercase;
    padding-left: 10px;
    color: #34495e;
    font-weight: 600;
}
/* Logo-2 */
.logo-2 h3 {
    color: #e74c3c;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 50px;
    text-transform: uppercase;
    line-height:1;
}
.logo-2 p {
    font-size: 14px;
    padding-left: 0px;
    color: #34495e;
    font-weight: 600;  
    text-transform: uppercase;
}
/* Logo-3 */
.logo-3 h3 {
    color: #e74c3c;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 50px;
    line-height:1.3;
}
.logo-3 p {
    font-size: 14px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #34495e;
    font-weight: 400;
    color: #fff;
    padding-left: 5px;
}
/* Logo-4 */
.logo-4 h3 {
    color: #e74c3c;
    font-weight: 300;
    font-size: 50px;
    line-height: 0.65;
    font-family: 'Lobster', cursive;
}
.logo-4 p {
    font-size: 14px;
    margin-left: 50px;
    color: #545454;
    font-weight: 400;
    text-transform: capitalize;
    font-style: italic;
    font-family: 'Mansalva', cursive;
}
/* Logo-5 */
.logo-5 h3 {
    color: #e74c3c;
    font-weight: 300;
    font-size: 50px;
    line-height: 0.6;
    font-family: 'Bangers', cursive;
    letter-spacing: 5px;
}
.logo-5 p {
    font-size: 14px;
    margin-left: 0;
    color: #545454;
    font-weight: 400;
    text-transform: capitalize;
    font-style: italic;
    font-family: 'Mansalva', cursive;
    position: relative;
}
.logo-5 p:before {
    position: absolute;
    content: '';
    width: 17px;
    height: 12px;
    background: #545454;
    left: 0px;
    top: 5px;
}
.logo-5 p:after {
    position: absolute;
    content: '';
    width: 17px;
    height: 12px;
    background: #545454;
    right: 0px;
    top: 5px;
}
/* Logo-6 */
.logo-6 h3 {
    color: #e74c3c;
    font-family: 'Cinzel', serif;
    font-weight: 300;
    font-size: 30px;
    line-height:1.3;
}
.logo-6 h3 span {
    background: #e74c3c;
    color: #fff;
    display: inline-block;
    line-height: 1.8;
    padding: 0 16px;
}
/* Logo-7 */
.logo-7 {
    width: 100%;
    display: inline-block;
}
.logo-7 i {
    font-size: 60px;
    display: inline-block;
    float: left;
    margin-right: 5px;
    color: #34495e;
}
.logo-7 .left {
    float: left;
    margin-left: 10px;
    text-align: left;
}
.logo-7 a {
    color: #545454;
}
.logo-7 .left h3 {
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    font-size: 25px;
    text-transform: uppercase;
    color: #e74c3c;
}
.logo-7 .left p {
    text-align: right;
    font-size: 14px;
    color: #919191;
    font-style: italic;
    border-top: 1px dashed #919191;
    letter-spacing: 2px;
    padding-top: 3px;
    font-family: 'Lobster', cursive;
}
/* Logo-8 */
.logo-8 h3 {
    color: #e74c3c;
    font-family: 'Cinzel', serif;
    font-weight: 300;
    font-size: 30px;
    line-height:1.3;
}
.logo-8 h3 span {
    background: ;
    color: #e74c3c;
    display: inline-block;
    line-height: 1.8;
    padding: 0px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    opacity:0.5;
    margin-left:-34px;
}
/* Logo-9 */
.logo-9{
    position:relative;
}
.logo-9 i{
    font-size:80px;
    position:absolute;
    z-index:0;
    text-align:center;
    width:100%;
    left:0;
    top:-10px;
    color:#34495e;
    -webkit-animation:ring 2s ease infinite;
    animation:ring 2s ease infinite;
}
.logo-9 h3{
    font-family: 'Lora', serif;
    font-weight:600;
    text-transform:uppercase;
    font-size:40px;
    position:relative;
    z-index:1;
    color:#e74c3c;
    text-shadow: 3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff;
}
@-webkit-keyframes ring{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}2%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}4%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}6%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}8%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}10%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}12%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}14%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}18%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,20%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes ring{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}2%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}4%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}6%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}8%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}10%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}12%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}14%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}18%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,20%{-webkit-transform:rotate(0);transform:rotate(0)}}

/* logo-10 */
.logo-10 h3{
  font-family: 'Muli', sans-serif;
  font-weight:100;
  text-transform:uppercase;
  font-size:40px;
  color:#545454;
  line-height:0.3;
}
.logo-10 p{
  color: rgba(255, 255, 255, 0);
  background:#e74c3c;
}
/* Followed */
.follow{
  position:fixed;
  right:20px;
  bottom:10px;
}
.follow img {
    width: 40px;
    height: 40px;
    border: 2px solid #3F51B5;
    border-radius: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    padding: 5px;
    background: #fff;
}


@media only screen and (max-width:736px) {
  o-container ul {
      width: 100%;
      text-align: center;
  }
  .logo-container ul li {
      width: 290px;
      margin-left: auto;
      margin-right: auto;
      float: none !important;
  }
  .logo-4 p {
      margin-top: 2px;
  }
  .Logos{
    margin-top:20px;
  }
}

h5.Logos {
    font-weight: 500;
    
    font-size: 20px;
    text-align: center;
  
 

}
p.para {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
    letter-spacing: 30px;
    font-family: 'Lora', serif;
    padding-top: 5px;
    color: #333333;
}







:root{
  --text-color:#474747;
}
*{
  box-sizing:border-box;
}

.wraper{
  max-width:1200px;
  margin:auto;
}
.header{
  
  align-items:center;
  line-height:1.5;
  background-color:#F7F2EF;
  border-radius:0.5rem;
  display:flex;
  justify-content:space-between;
  padding: 1rem 1.3rem;
}
.navbar,.menu{
  display:flex;
  align-items:center;
}
.navbar{
  gap:1rem;
}
.menu{
  font-weight:500;
  display:none;
  gap:0.5rem;
  font-size:15px;
}

.contact-btn{
  background-color:#FFED4F;
  padding:0.2rem 1rem;
  border-radius:1rem;
  border:1px solid black;
  box-shadow: 2px 2px 0px 0px black;
  font-weight:500;
  transition: transform 0.25s;
  &:hover{
   transform:scale(1.1);
    cursor:pointer;
  }
}



.font-w-500{
  font-weight:500;
}
.logo{
  font-weight:500;
  display:flex;
  align-items:center;
  gap:0.2rem;
}

section{
  margin-top:0.5rem;
}
.icon-burger{
  display:block;
}
.section-img{
  position:relative;
  overflow:hidden;
  column-gap:2rem;
  border-radius:0.5rem;
  background-color:#f5f4f3;
  padding:clamp(1rem,3vw,3rem) clamp(2rem,5vw,5rem);
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(min(400px,100%),1fr));
}

img{
  
  height:auto;
  width:100%;
 
}

.image{
  

  place-items:center;
  position:relative;
  
}

h1{
  font-size:clamp(20px,5vw + 10px,50px);
  line-height: 1;
  margin-bottom:0.5rem;
}
p{
  color: var(--text-color);
}

.texto{
  display:grid;
  align-items:center;
  JUSTIFY-ITEMS:START;
  GAP:1REM;
}


svg{
  height:20px;
  width:20px;
}

.icon-card{
  height:30px;
  width:30px;
}
.title-card{
  font-weight:600;
  font-size:20px;
}
.p-card{
  font-size:15px;
  color:var(--text-color);
}
.reset-section{
  grid-template-columns:auto;
  gap:1rem;
}
.yellow{
  background-color:#FFED4F;
}
.green{
  background-color:#0DFFA8;
}
.violet{
  background-color:#FFD9FE;
}

.section-img > * {
  z-index: 3;
}
.section-img::after{
  /*content:'';
  height:10rem;
  width:10rem;
  background-color:#c099ff;
  border-radius:50%;
  filter:blur(80px);
  position:absolute;
  left:70%;
  top:40%;
  z-index:0; */
}

.section-img::before{
  
  content:'';
  height:10rem;
  width:10rem;
  background-color:#f6cd6d;
  border-radius:50%;
  filter:blur(80px);
  position:absolute;
  right:3%;
  top:50%;
  z-index:0;
}

.card{
 
  border-radius:0.5rem;
  padding:1rem 1rem;
  display:grid;
  gap:1rem;
  justify-items:start;
}
.section-tres-columnas{
  gap:0.5rem;
  display:grid;
  grid-template-columns:repeat(1,1fr);
}

.btn-card{
  display:flex;
  align-items:center;
  gap: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius:1rem;
  background-color:black;
  color:white;
  border:none;
  transition:filter 0.2s;
  cursor:pointer;
  padding: 0.3rem 1rem;
}
.btn-card:hover{
  filter:drop-shadow(2px 2px 0px lightgrey);
}

.btn-card svg{
  fill:white;
}

.clip-path-square{
 clip-path: polygon(0 45%, 40% 0, 82% 6%, 100% 25%, 100% 57%, 89% 68%, 100% 85%, 100% 97%, 85% 100%, 27% 100%, 12% 89%, 0% 85%);
}

.brutal-btn{
  COLOR:BLACK;
  FONT-WEIGHT:700;
  PADDING:0.5REM 2REM;
  BORDER-RADIUS:2REM;
  BACKGROUND-COLOR:TRANSPARENT;
  BORDER:1PX SOLID BLACK;
  BOX-SHADOW:2PX 4PX 0PX 0PX BLACK;
  transition: transform 0.25s;
  &:hover{
   transform:scale(1.1);
    cursor:pointer;
  }
}
.centrado{
  place-items:Center;
}

.blanco{
  background-color:white;
}
.menu>div:hover{
      text-decoration: underline;
    text-underline-offset: 0.3rem;
  cursor:pointer;
      text-decoration-thickness: 0.2rem;
}


.borde-negro{
  border-radius:1rem;
  border:3px solid black;
  clip-path:none;
}
@media (min-width: 750px){
  .menu{
    display:flex;
  }
  .section-tres-columnas{
     grid-template-columns:repeat(3,1fr);
  }
  .icon-burger{
    display:none;
  }
}


    
    
        `}
      </style>
      {/* STORY BEGINS */}
      <Nav />
      {/* NAVBAR */}
      {/* SECTION: PHOTO WITH TEXT AND BUTTON */}
      <section id="main-photo" className="text-center">
        <div className="container-fluid">
          <div className="row"></div>
        </div>
      </section>
      {/* SECTION: KEY POINTS WITH FONT-AWSOME */} <br />
      <div className="wraper">
        <section>
          <div className="section-img">
            <div className="texto">
              <h2>
                <b>CAMPUS RECRUITMENT</b>
              </h2>
              <p>
                {" "}
                Since Inception, Sri Satya Sai University of Technology &
                Medical Science University Has A Path Breaking Recruitment
                Record For Graduates From Various Academic Programs. We offer
                our students comprehensive opportunities to occupy themselves
                with questions around their career planning right from the
                beginning of their studies. A broadly diversified choice of
                career activities accompanies them during their studies and
                offers numerous networking opportunities with company
                representatives and alumni.{" "}
              </p>
            </div>
            <div className="image">
              <img src="https://www.bssnews.net/assets/news_photos/2022/10/28/image-90531-1666934715.jpg" />
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <div className="container">
        <h5>
          <b>FOCUS ON CAREERS :-</b>
        </h5>{" "}
        <br />
        <div className="result" />
        <div className="blog-content">
          <p>
            Sri Satya Sai University of Technology & Medical Science prepares
            students for the real world and fulfilling careers. With industry
            representation our course continues to keep pace with real world
            practice making our students work-ready the moment they graduate.
          </p>
          <br />
          <h5>
            <b>MENTORING :-</b>
          </h5>{" "}
          <br />
          <p>
            Sometimes a little advice and guidance from someone who has “been
            there and done that” can go a long way. Students have unlimited
            opportunities to interact with professionals from their field to
            build contacts and learn about new industry trends.
          </p>
          <br />
          <h5>
            <b>STUDENT SUPPORT SERVICES :-</b>
          </h5>{" "}
          <br />
          <p>
            Our Career Centre provides personal career counselling, extensive
            career development seminars and invaluable assistance in developing
            one’s resumes that showcase his/her skill and experiences.
          </p>
          <br />
          <h5>
            <b>NETWORKING :-</b>
          </h5>{" "}
          <br />
          <p>
            Smart graduates require tapping into network of people, technology
            and information. At Sri Satya Sai University of Technology & Medical
            Science, you are connected with world-class faculty, savvy
            technocrats and innovators. Technical workshops with guest speakers
            from the industry are held regularly to acquaint you with the latest
            happenings.
          </p>
          <br />
          <h5>
            <b>INTERNSHIPS :-</b>
          </h5>{" "}
          <br />
          <p>
            At the end of every academic year, most students are provided
            opportunities to pursue internships to gain some real world
            practical experience. Emphasis is placed on ensuring that students
            attending the program are placed in rewarding, real-world company
            assignments that extend the learning experience into areas that are
            not available at the University. Most of our degree programs offer
            the opportunity for practical, hands-on experience, internships and
            projects within the local community. This is why our graduates are
            in demand.
          </p>
        </div>{" "}
        <br />
        <a>
          If you want to get in touch with our training and placement team,
          please contact:
        </a>{" "}
        <br />
        <br />
        <br />
        <b> Dr. Mukesh Tiwari</b> <br />
        Vice Chancellor <br />
        Sri Satya Sai University of Technology & Medical Science University.
        <br />
        e-mail: info@sssutms.co.in
      </div>
      <br />
      <section>
        <div className="section-img">
          <div className="texto">
            <h2>
              <b>STUDENT SUPPORT SERVICES</b>
            </h2>
            <p>
              {" "}
              Our Career Centre provides personal career counselling, extensive
              career development seminars and invaluable assistance in
              developing one’s resumes that showcase his/her skill and
              experiences. Students Facilitation Center aims to provide
              Comprehensive services under one roof to the students, of Sri
              Satya Sai University of Technology & Medical Science University.
              SFC providing services like Applying and Receiving various
              documents/certificates related to Examination and Academics
              departments, through both (online and offline) mode. SFC providing
              facility that students can apply and receive their documents from
              anywhere from the globe. SFC provides an online support portal for
              students as{" "}
            </p>
          </div>
          <div className="image">
            <img
              className="clip-path-square"
              src="https://pes.edu/wp-content/uploads/2022/10/Fee-Details-600x400.jpg"
            />
          </div>
        </div>
      </section>
      <br />
      <>
        <div className="ctn">
          <div className="logo-container">
            <br />
            <h5 className="Logos">
              <b>SOME OF THE PROMINENT RECRUITERS ON CAMPUS ARE :-</b>
            </h5>
            <br />

            <ul>
              <li>
                <div className="logo-holder logo-1">
                  <a href="">
                    <img src={C1} style={{ width: "110px" }} />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-2">
                  <a href="">
                    <img src={C2} style={{ width: "130px" }} />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-3">
                  <a href="">
                    <img src={C3} style={{ width: "110px" }} />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-4">
                  <a href="">
                    <img
                      src={C4}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-5">
                  <a href="">
                    <img
                      src={C5}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-6">
                  <a href="">
                    <img
                      src={C6}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-7">
                  <a href="">
                    <div className="left">
                      <img
                        src={C9}
                        style={{ marginTop: "7px", width: "110px" }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-8">
                  <a href="">
                    <img
                      src={C10}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-9">
                  <a href="">
                    <img
                      src={C11}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C13}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>

              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C14}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C15}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C16}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C20}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C21}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C22}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C23}
                      style={{ marginTop: "7px", width: "110px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C25}
                      style={{ marginTop: "7px", width: "90px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C26}
                      style={{ marginTop: "7px", width: "70px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C28}
                      style={{ marginTop: "7px", width: "90px" }}
                    />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo-holder logo-10">
                  <a href="">
                    <img
                      src={C29}
                      style={{ marginTop: "7px", width: "90px" }}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
      <br />
      <Footerpage />
    </>
  );
}

export default Placement;