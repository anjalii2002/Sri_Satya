import React from 'react'
import Nav from '../HomePage/Nav'
import campus1 from "../images/Campus/DJI_0006.png"
import medicalpic from "../images/Campus/medicalpic.jpg"
import classroom from "../images/Campus/class.webp"
import libary from "../images/Campus/libary.jpg"
import sport1 from "../images/Campus/sport1.webp"
import sport2 from "../images/Campus/sport4.webp";
import sport3 from "../images/Campus/sport3.webp";
import Footerpage from '../HomePage/Footerpage'

function Campus() {
    return (
        <>
            <style>
                {`
/* REMOVE BEFORE USE */

/* IMPORT FONTS */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

/* BODY */
body {
  font-family: "Poppins", sans-serif;
  /* font-family: "open_sans-bold",sans-serif; */
  margin: 0;
  padding: 0;
}

/* REMOVE BEFORE USE */

/* SET MAX WIDTH - STOP OVERFLOW */
.section img,
.section iframe {
  max-width: 100%;
}

/* SECTION COLORS */
.bg-white {
  background-color: #fff;
  border-bottom: 1px solid #8dc63f; /* Brand Color */
}

.bg-grey {
  background-color: #eee;
  border-bottom: 1px solid #8dc63f; /* Brand Color */
}

.bg-dark {
  background-color: #151515;
  border-bottom: 1px solid #8dc63f; /* Brand Color */
}

/* SECTION CONTENT */
.section {
  display: flex;
  max-width: 1400px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 4em;
  align-items: center;
  justify-content: center;
  gap: 3em;
  text-wrap: balance;
}

/* SECTION HEADINGS */
.section h1 {
  color: #8dc63f;
  line-height: 1.1em;
  text-transform: none;
}

/* SECTION PARAGRAPHS */
.section p {
  font-weight: 400;
  color: #000;
}

/* SECTION IMAGE ROW */
.image-row {
  display: flex;
  gap: 1em;
}

/* BUTTON */
.section .btn {
  display: flex;
  padding: 0.5em 1em;
  background: linear-gradient(to top, #858484, #a0a0a0);
  /* font-family: "open_sans-bold",sans-serif; */
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  width: fit-content;
}

/* BUTTON - HOVER */
.section .btn:hover {
  background: linear-gradient(to top, #858484, #737373);
}

/* LINKS */
.section a {
  color: #8dc63f; /* Brand Color */
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
}

/* STACK ON MOBILE - CENTER COLUMNS */
@media (width <= 900px) {
  .section {
    flex-direction: column;
    gap: 1em;
    padding: 2em;
  }

  .image-row {
    flex-direction: column;
    gap: 1em;
  }

  .section h1,
  .section p,
  .section a {
    text-align: center;
    justify-content: center;
  }

  .section .btn {
    margin: 2em auto;
  }

  a {
    display: block;
  }
}

/* BOX CONTAINERS */
.box1 {
  flex: 1 1 50%;
}

.box2 {
  flex: 1 1 50%;
}

/*---------------------------------
ENLARGE IMAGES COMPONENT - START
----------------------------------- */

/* THUMBNAIL */
.thumbnail-component {
  position: relative;
  padding: 1em;
  cursor: pointer;
  background-color: #f5f5f5;
  border: 1px solid #8dc63f;
  /* Brand Color */
}

/* HOVER FOR THUMBNAIL IMAGE */
.thumbnail-component:hover .thumbnail-image {
  opacity: 0.6;
}

/* THUMBNAIL IMAGE */
.thumbnail-image {
  position: relative;
  transition: opacity 0.3s ease;
  z-index: 0;
}

/* FULL IMAGE CONTAINER */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
}

/* OVERLAY TARGET - VISIBLE */
.overlay:target {
  visibility: visible;
  opacity: 1;
  z-index: 1;
}

/* FULL IMAGE - BACKGROUND COLOR CONTAINER */
.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  background-color: #f5f5f5;
  width: 90%;
}

.overlay-image {
  display: flex;
  margin: 0 auto;
}

/* ICON CONTAINER */
.icon-container {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  z-index: 0;
}

/* HOVER FOR ICON CONTAINER */
.thumbnail-component:hover .icon-container {
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}

/* CLOSE BUTTON */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  color: #fff !important;
  text-decoration: none;
  background-color: #30303090;
  border-radius: 0.25em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}

/* MOBILE VIEWS */
@media (width <=900px) {
  .thumbnail-component {
    padding: 0.5em;
  }

  .overlay-content {
    width: 90%;
    padding: 0.5em;
    touch-action: auto;
  }

  .thumbnail-component:target .thumbnail-image {
    opacity: 1;
  }

  .thumbnail-component:target .icon-container {
    display: none;
  }
}

/*-------------------------------
ENLARGE IMAGES COMPONENT - END
--------------------------------- */

/* SECTIONS */

/* SECTION TWO */
@media (width >= 900px) {
  .section-two {
    flex-direction: row-reverse;
  }
}

/* SECTION THREE */
.section-three {
  flex-direction: column;
  text-align: center;

  & .btn {
    margin: 0 auto;
  }
}

/* SECTION FOUR */
.section-four {
  flex-direction: column-reverse;
  text-align: center;

  & .btn {
    margin: 0 auto;
  }
}

/* SECTION FIVE */
.section-five {
  display: flex;
  flex-direction: column;
  text-align: center;

  & .btn {
    margin: 0 auto;
  }
}

/* SECTION SIX */
.section-six {
  display: flex;
  flex-direction: column;
  text-align: center;

  & .btn {
    margin: 0 auto;
  }
}

/* SECTION SEVEN */
.section-seven {
  display: flex;
  text-align: center;
}


:root{
    --white:#FFF;
    --black:#000;
    --lite:rgba(255,255,255,0.6);
    --gray:rgba(1,1,1,0.6);
    --dark:#121212;
    --primary:#f97008;
    --primary_dark:;
    --primary_lite:;
    --default_font:'Nunito Sans', sans-serif;
    --title_font:'Nunito Sans', sans-serif;
}






/***************************
            DEFAULT
****************************/


a{
    text-decoration:none !important;
    min-width: fit-content;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
}

a, button{
    transition:0.5s;
}

a:hover, .active, .active_sub_link, .btn{
    opacity:1;
}

em{
    font-style:normal;
    color:var(--primary);
}

figure{
    padding:0;
    margin:0;
    pointer-events:none;
}

figure img{
    width:100%;
    height:100%;
}

a, p, .btn{
    font-size:15px;
}

p{
    line-height:1.9em;
    opacity:0.6;
}

a, button, input, textarea, select{
    outline:none !important;
}

fieldset{
    border:0;
}

ul{
    padding:0;
    margin:0;
}

li{
    list-style:none;
}

.title, .sub_title{
    font-family:var(--title_font);
    font-weight:700;
}

.flex, .fixed_flex{
    display:flex;
}

.flex_content{
    width:100%;
    position:relative;
}

.grid{
    display:grid;
}

.padding_1x{
    padding:1rem;
}

.padding_2x{
    padding:2rem;
}

.padding_3x{
    padding:3rem;
}

.padding_4x{
    padding:4rem;
}

.big{
    font-size:3.5em;
}

.medium{
    font-size:2em;
}

.small{
    font-size:1.3em;
}

.btn{
    padding:0.8rem 1rem;
    border-radius:5px;
    position:relative;
    border:0;
    text-align:center;
}

.btn_1{
    background:var(--primary);
    color:var(--white);
}

.btn_2{
    background-color:var(--white);
    color:var(--dark);
}

.btn_1:hover, .btn_2:hover{
    opacity:0.6;
}

.btn_3{
    display:block;
    background-color:0;
    color:var(--white);
    position:relative;
    font-family:var(--default_font);
    font-weight:400;
    text-transform:uppercase;
}

.btn_3:before{
    content:"";
    border-radius:50%;
    background-color:rgba(255,255,255,0.2);
    position:absolute;
    left:0;
    top:50%;
    width:50px;
    height:50px;
    transition:0.5s;
    transform:translate(0%, -50%);
}

.btn_3:after{
    content:"\f178";
    font-family:"FontAwesome";
    margin-left:5px;
}

.btn_3:hover:before{
    border-radius:40px;
    width:100%;
}

.btn_4{
    background-color:transparent;
    border:1px solid var(--white);
    color:var(--white);
}

.btn_4:hover{
    background-color:var(--white);
    color:var(--primary);
}

.divisions{
    position:relative;
}

.title_header{
    margin:auto;
    text-align:center;
    width:60%;
}

.ball{
    position:relative;
}

.ball:before{
    content:"";
    border-radius:50%;
    background-color:rgba(1,1,1,0.2);
    position:absolute;
    left:0;
    top:30%;
    width:30px;
    height:30px;  
    transform:translate(-50%, -50%);
}

.link-tag{
    position:relative;
}

.link-tag:before{
    content:"\f0da";
    font-family:"FontAwesome";
    margin-right:5px;
    transition:0.5s;
    color:var(--primary_dark);
}

.link-tag:hover:before{
    margin-right:10px;
    color:inherit;
}

.link-tag:hover{
    color:var(--primary);
}

.buttons{
    align-items:center;
}

.buttons .btn:not(:last-child){
    margin-right:10px;
}

@media (max-width:1000px){
     .big{
        font-size:1.8em;
    }
    
    .medium{
        font-size:1.5em;
    }
    
    .small{
        font-size:1.1em;
    }
    
    .btn{
        padding:0.5rem 1rem;
    }
    
    a, p, .btn{
        font-size:12px;
    }
}

@media (max-width:620px){
    .flex{
        flex-wrap:wrap;
    }
    
    .padding_1x, .padding_2x, .padding_3x, .padding_4x{
        padding:1rem;
    }
    
    .btn_3:before{
        width:40px;
        height:40px;
    }
    
    .title_header{
        width:100%;
    }
}




/***************************
      CUSTOM  LOGO
****************************/
.logo{
    max-width:200px;
    font-weight:800;
    padding:1rem;
    align-items:center;
    pointer-events:none;
}

.logo img{
    width:50px;
    margin-right:10px;
}

.logo .title, .logo .sub_title{
    margin:0;
}

.logo .title{
    font-size:1em;
    line-height:0.8
}

.logo .sub_title{
    font-size:0.6em;
}

@media (max-width:620px){
    .logo img{
        width:30px;
    }
    
    .logo .title{
        font-size:0.8em
    }
    
    .logo .sub_title{
        font-size:0.6em;
    }
}





/***************************
            FOOTER
****************************/
footer{
    width:100%;
    color:var(--dark);
}

footer section{
    align-items:center;
    justify-content:center;
}

footer section a{
    color:var(--dark);
    margin:0 20px;
    opacity:0.6;
}

@media (max-width:620px){
    footer{
        background-color:var(--dark);
         color:var(--white);
    }
    
    footer section{
        justify-content:left;
        display:block !important; 
        padding:0 1rem;
    }
    
    footer section:nth-child(2) a{
        display:block;
    }
    
    footer section a{   
        margin:10px 0;
        color:var(--white);
        margin-right:10px;
    }
    
    footer section:last-child{
        padding-bottom:1rem;
    }
}


/***************************
           ADDITIONAL
****************************/
.cookie{
    position:fixed;
    bottom:1rem;
    right:1rem;
    z-index:11;
    box-shadow:0px 6px 16px -6px var(--gray);
    border-radius:10px;
    border:2px solid var(--gray);
    background-color:var(--dark);
    color:var(--white);
    padding:0.5rem 1rem;
    max-width:350px;
}

.cookie .close{
    position:absolute;
    top:5px;
    right:-5px;
    color:var(--white);
}

.cookie iconify-icon{
    font-size:20px;
    margin-right:10px;
    
}

.cookie .title{
    margin:0;
    align-items:center;
}

.cookie p, .cookie .btn, .cookie p a{
    font-size:11px;
}

.cookie p a{
    color:var(--primary);
}

.cookie .buttons{
    justify-content:space-between;
}

.cookie .btn{
    padding:0.5rem 1rem;
    display:block;
}

/*OVERLAY*/
.overlay{
    position:fixed;
    top:0;
    left:0;
    background-color:var(--gray);
    width:100%;
    height:100%;
    z-index:1;
    transition:0.5s;
}



/***************************
         ANIMATE.CSS
****************************/
/*Animated bar*/
.bar{
    display:block;
    height: 5px;
    width: 100px;
    background: var(--primary);
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin: 20px auto 20px 0;
}

.bar:before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: var(--white);
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: MOVE-BG;
    animation-name: MOVE-BG;
}

@keyframes MOVE-BG{
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(105px);
        transform: translateX(105px);
    }
}

/*ROTATE*/
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}



/***************************
         HOME.CSS
****************************/
/***************************
         HEADER
****************************/
header{
    width:100%;
    background:linear-gradient(to right, rgba(1,1,1,0.9) 10%, rgba(1,1,1,0.6) 50%, rgba(1,1,1,0.4) 100%);
    background-size:cover;
    background-position:center;
    color:var(--white);
    flex-wrap:wrap;
}

header article{
    padding:6rem 2rem;
    flex: 0 0 60%;
}

header article .title{
    margin:0.5em 0;
}

header article .btn_3:after{
    content:"\f0f4";
}

@media (max-width:920px){
    header article{
        flex: 0 0 100%;
        padding:6rem 0rem;
    }
}



/***************************
             MAIN
****************************/
main{
    width:100%;
    border-top:3px solid var(--primary);
}

/*DIVISION_1*/
.division_1{
    background-color:var(--dark);
    color:var(--white);
}

.division_1 article{
    transition:0.5s;
}

.division_1 article:nth-child(1){
    background-color:#121212;
}

.division_1 article:nth-child(2){
    background-color:#282828;
}

.division_1 article .link-tag{
    color:var(--primary);
}


/*DIVISION_2*/
.division_2{
    align-items:center;
}

.division_2 article .title{
    color:var(--dark);
}

.division_2 figure{
    width:auto;
}


/*DIVISION_3*/
.division_3{
    padding:0 4rem;
}

.division_3 section{
    margin:auto;
    border-radius:20px;
    background-color:var(--primary);
    color:var(--white);
    align-items:center;
    justify-content:space-between;
    position:relative;
    overflow:hidden;
}

.division_3 section:before{
    content:"";
    position:absolute;
    left:-50px;
    top:-50px;
    width:150px;
    height:150px;
    background-color:rgba(1,1,1,0.1);
    border-radius:100px;
}

.division_3 section .btn_2{
    color:var(--primary);
}

@media (max-width:920px){
    .division_3 section{
        border-radius:0;
        text-align:center;
    }
    
    .division_3 .buttons{
        justify-content:center;
        align-items:center;
        width:100%;
    }
}

@media (max-width:920px){
    .divisions{
        padding:0 !important;
    }
}
        `}
            </style>
            <Nav />
            {/*HEADER*/}

            <header className="flex padding_2x">
                <img src={campus1} />
            </header>
            {/*MAIN*/}
            <br /> <br /><br />
            <main>
                {/*DIVISION_1*/}

                {/* SECTION ONE */}
                <section className="bg-grey" >
                    <div id="return-one" className="section section-one">
                        <div className="box1">
                            <h1>CLASS ROOMS</h1> <br />
                            <p>
                                In order to achieve its ambition of being a world-class education provider, Sri Satya Sai University Of Technology And Medical Sciences
                                is committed to significant enhancement of its facilities and buildings, essential for world-class
                                research and all-round development of students. The University has an extremely modern and
                                state-of-the-art infrastructure that goes a long way in facilitating a number of services for the students as well as the staff members.
                            </p>

                        </div>
                        <div className="box2 thumbnail-component">
                            <a href="#img1">
                                <img
                                    className="thumbnail-image"
                                    src={classroom}
                                    alt="Image description"
                                />
                                <br /> <br />

                            </a>
                            <div id="img1" className="overlay">
                                <a href="#img1" className="overlay-background" />
                                <div className="overlay-content">
                                    <img
                                        className="overlay-image"
                                        src="https://placehold.co/1920x1080"
                                        alt="image description"
                                    />
                                    <a href="#return-one" className="close-button">
                                        ✖
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION TWO */}
                <section className="bg-white">
                    <div id="return-two" className="section section-two">
                        <div className="box1">
                            <h1>Library</h1> <br />
                            <p>
                                In our university we have one central library and eighteen constituents Library. All
                                constituents Institutes have their library having extensive range of Reference books,
                                textbooks, International & national journals. All libraries are
                                digital with large number of e-journal subscriptions for the benefit of students.
                            </p>

                        </div>
                        <div className="box2 thumbnail-component">
                            <a href="#img2">
                                <img
                                    className="thumbnail-image"
                                    src={libary}
                                    alt="Image description"
                                />
                            </a>

                        </div>
                    </div>
                </section>
                {/* SECTION SIX */}
                <section className="bg-white">
                    <div id="return-six" className="section section-six">
                        <div className="box1">
                            <h1>SPORTORIUM</h1> <br />
                            <p>
                                Students are encouraged to enjoy sports on campus as well as participate in various sports competitions.
                                We inspire students to follow the camaraderie and spirit of adventure through sports.
                                Outdoor sports facilities include Athletics, Basketball, Cricket, Football, Tennis, Volleyball.
                                Indoor sports facilities include Badminton, Chess, Carrom, Multigym, Pool, Table Tennis etc.
                            </p>

                        </div>
                        <div className="image-row">
                            <div className="box2 thumbnail-component">
                                <a href="#img8">
                                    <img
                                        className="thumbnail-image"
                                        src={sport1}
                                        alt="Image description"
                                    />
                                </a>
                            </div>
                            <div className="box2 thumbnail-component">
                                <a href="#img9">
                                    <img
                                        className="thumbnail-image"
                                        src={sport3}
                                        alt="Image description"
                                    />

                                </a>

                            </div>
                            <div className="box2 thumbnail-component">
                                <a href="#img10">
                                    <img
                                        className="thumbnail-image"
                                        src={sport2}
                                        alt="Image description"
                                    />

                                </a>

                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION SEVEN */}



                {/*DIVISION_2*/}
                <div className="divisions division_2 flex padding_2x">
                    <section className="flex_content padding_2x">
                        <article>
                            <h2 className="title medium">MEDICAL FACILITIES !</h2>
                            <span className="bar" />
                            <p>
                                A healthy body makes for a healthy mind. In order to ensure your well-being,
                                Sri Satya Sai University of Technology & Medical Sciences has tie- ups with renowned hospitals to take
                                care of any kind of emergency. At  Sri Satya Sai University of Technology & Medical Sciences, you will be covered by a
                                comprehensive medical insurance to meet all kinds of exigencies..{" "}
                            </p>

                        </article>
                    </section>
                    <section className="flex_content padding_1x">
                        <figure>
                            <img
                                src={medicalpic}
                                alt=""
                                loading="lazy"
                            />
                        </figure>
                    </section>
                </div>


            </main>
            <Footerpage />

        </>

    )
}

export default Campus
