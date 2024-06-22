import React,{useEffect,useState} from 'react'
import foe from '../../images/FOE.jpg'
import foe1 from '../../images/FOE1.jpg'
import books from '../../images/books.png'
import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';



const Edu = () => {
    const [activeTab, setActiveTab] = useState('tab1');

  return (
  <>
  <style>
    {
        `
    
    .container {
      display: flex;
      width:100%;
      font-family: 'Open Sans', sans-serif;
    }
    .tabs {
      flex: 1;
      background-color: #023047;
      color: white;
      display: flex;

      flex-direction: column;
      padding: 10px;
    }
    .tabs button {
      background: none;
      border: none;
      color: white;
      padding: 10px;
      text-align: left;
      cursor: pointer;
      font-size: 16px;
      transition: color 0.3s;
    }


    .text{
    display:flex;
    
    }



.custom-img {
  width: 40px; /* Adjust the size as needed */
  height: 40px; /* Adjust the size as needed */
  // fill: red; /* Change the color to red */


  // transition: all 0.3s ease; /* Add transition for smooth effect */
}


    

    .tabs button.active {
      font-weight: bold;
      color: black;
    }
    .content {
      flex: 3;
      padding: 20px;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .grid article {
      // background: #f7f7f7;
      border: 1px solid #ddd;
      border-radius: 4px;
      flex: 1 1 calc(33.333% - 20px);
      display: flex;
      flex-direction: column;
      // align-items: center;
      padding: 10px;
      transition: transform 0.3s;
    }
    .grid article:hover {
      transform: scale(1.05);
      color:#023047
    }
    .grid .text {
      text-align: center;
    }
    .grid img {
      max-width: 100px;
      height: auto;
      margin-bottom: 10px;
    }
    h4, h5, h6 {
      margin: 0;
      padding: 0;
    }


    
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


.wrapper {
  display: grid;
  grid-gap: 20px;
}
.headinghai{
background-color:#e9ecef;
margin-top:50px;
    }


    .h1hai{
   color:white;
   margin-top:40px;
   }

/* Top Container */
// .top-container {
//   display: grid;
//   grid-gap: 20px;
//   grid-template-areas:
//     'showcase showcase top-box-a'
//     'showcase showcase top-box-b';
// }

/* Showcase */
// .showcase {
//   position: relative; /* Ensure the pseudo-element is positioned correctly */
//   grid-area: showcase;
//   min-height: 300px;

//   background-size: cover;
//   background-position: center;
//   padding: 3rem;
//   display: flex;
//   margin-top: 50px;
//   margin-left: 30px;
//   width: 1300px;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   box-shadow: var(--shadow);
//   color: white; /* Ensure text is visible */
// }

// .showcase::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   color:white;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity for the desired blackish effect */
//   z-index: 1;
// }

// .showcase h1 {
//   font-size: 4rem;
//   margin-bottom: 0;
//   color: white
// }


.showcase {
  position: relative;
  grid-area: showcase;
  min-height: 300px;

  background-attachment: fixed; /* Added for parallax effect */
  padding: 3rem;
  display: flex;
  margin-top: 50px;
   margin-bottom: 20px;
  width: 1400px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: var(--shadow);
  color: white;
}

.showcase::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.vertical-line {
  position: relative;
  padding-left: 20px; /* Adjust the space for the line */
}

.vertical-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px; /* Adjust the width of the line */
  background-color: orange; /* Adjust the color of the line */
}
.showcase h1, .showcase p {
  position: relative;
  z-index: 2;
}
.showcase p {
  font-size: 1.3rem;
  margin-top: 0;
  color: white;
  padding:20px;
 font-family:'Open Sans', Sans-serif

}



.boxes {
  display: flex;
  flex-wrap: wrap;
  margin-top:5px;
  //  background-color: #023047;
  
  
 justify-content: space-evenly; /* Adjust spacing between boxes */
}

.box {
  width: calc(40% - 10px); /* Adjust width as needed */
    //  background-color: #023047;
    color:black;
  // border: 1px solid #ddd;
  // border-radius: 4px;
  padding: 30px;
  // margin-top: 20px;
  margin-bottom: 20px; /* Adjust margin between boxes */
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */
}
.imgabout{
width:700px;

}

/* Info */
.info {
  // background: var(--primary);
  box-shadow: var(--shadow);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}

// /* Portfolio */
// .portfolio {
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// }

// .portfolio img {
//   width: 100%;
//   box-shadow: var(--shadow);
// }
.two h1 {
  text-transform: capitalize;
  margin-left:170px;
  margin-top:20px;
}
.two h1:before {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 2px;
  content: "";
 
  
  background-color: #c50000;
}

.two h1 span {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 3em;
  padding-left: 0.25em;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 10px;
}
.alt-two h1 {
  text-align:center;
}
.alt-two h1:before {
  left:50%; margin-left:-30px;
}


.custom-img {
  width: 30px; /* Adjust the size as needed */
  height: 30px; /* Adjust the size as needed */
  // fill: red; /* Change the color to red */
    }

h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 1 em;
  line-height: 1.3;
  
}
h1 em {
  font-style: normal;
  font-weight: 600;
}


/* Media Queries */
@media (max-width: 700px) {
  .top-container {
    grid-template-areas:
      'showcase showcase'
      'top-box-a top-box-b';
  }

  .showcase h1 {
    font-size: 2.5rem;
  }



  
  .info .btn {
    display: block;
    text-align: center;
    margin: auto;
  }
}

@media (max-width: 500px) {
  .top-container {
    grid-template-areas:
      'showcase'
      'top-box-a'
      'top-box-b';
  }

  .two h1 {
  text-transform: capitalize;
  margin-left:40px;
  // width:240px;
  margin-top:20px;

}


.two.hai h1 {
        font-size: 24px;
        text-align: left;
        margin-left: -90px;
        margin-top: 20px;
    }

    .boxes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box {
        width: 90%;
        margin-top: 10px;
    }

    .headinghai .two h1 {
        font-size: 24px;
        text-align: center;
    }

    // .info {
    //     flex-direction: column;
    //     align-items: center;
    //     margin-top: 10px;
    // }

    .imgabout {
        width: 90%;
        margin-bottom: 20px;
    }

    .info p {
        width: 90%;
        font-size: 14px;
    }



     [style*='position: relative;'] img {
        height: 200px; /* Adjust image height for smaller screens */
    }

    [style*='position: absolute;'] {
        padding: 10px; /* Reduce padding for smaller screens */
        text-align: center; /* Center align text for smaller screens */
        top: 50%; /* Center vertically */
        left: 50%; /* Center horizontally */
        transform: translate(-50%, -50%); /* Adjust position */
    }

    [style*='position: absolute;'] h1 {
        font-size: 20px;
        margin:-51px ;
        margin-top:50px;
        margin-left:150px

        }

}

    
  `
    }
  </style>
<Nav/>
<div style={{ position: 'relative', width: '100%' }}>
  <img src={foe} style={{ height: '350px', width: '100%' }} alt="Background" />
  {/* <h1 style={{ position: 'absolute',  textAlign: 'left', color: 'white', padding: '20px' }}>FACULTY OF  EDUCATION &<br></br> PHYSICAL EDUCATION */}
  {/* </h1> */}
  </div>
  

  <div className="container" style={{marginTop:'50px'}}>
  <div className="tabs">
    <h5 style={{fontWeight:700,color:'white',marginLeft:'50px',marginTop:'30px',fontFamily:"'Open Sans', Sans-serif"}}>Program Levels</h5>
    <hr />
    <button
      style={{ color: activeTab === 'tab1' ? 'orange' : 'white' }}
      onClick={() => setActiveTab('tab1')}
      className={activeTab === 'tab1' ? 'active' : ''}
    >
      UG Programs
    </button>
    <hr />
   
  </div>
  <div className="content">
    {activeTab === 'tab1' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
        <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653',marginTop:'-30px',marginBottom:'30px'}}>  INSTITUTE NAME: FACULTY OF EDUCATION</h4>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#780000',textAlign:'center'}}> SCHOOL OF EDUCATION (2 Year)</h4>
        </div>     
           <br></br>
        <div className="grid">
       
         
          <article>
            <div className="text">
            <img  className="custom-img"  src={books} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Bachelor of  Education (B.Ed.) </h6>
            </div>
          </article>      </div>     
           
         <br></br>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#780000',textAlign:'center'}}> SCHOOL OF TEACHER EDUCATION (2 Year)</h4>
          <br></br>  <div className="grid"><article>
            <div className="text">
            <img  className="custom-img"  src={books} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Bachelor of  Education (B.Ed.) </h6>
            </div>
          </article>
         </div>     
           
         <br></br>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#780000',textAlign:'center'}}> SCHOOL OF PHYSICAL EDUCATION (2 Year)</h4>
          <br></br>  <div className="grid"><article>
            <div className="text">
            <img  className="custom-img"  src={books} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Bachelor of Physical Education (B. P. Ed.)</h6>
            </div>
          </article>
         </div>     


         <br></br>

          <br></br>  <div className="grid"><article>
            <div className="text">
            <img  className="custom-img"  src={books} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px',textAlign:'center'}}>Bachelor of Arts Bachelor of Education (B. A. B. Ed.) (4 Year) </h6>
            </div>
          </article>
         </div>     
       
         
        
        
     
      </>
    )}
    {/* {activeTab === 'tab2' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
        <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653',marginTop:'-30px',marginBottom:'30px'}}>  INSTITUTE NAME: COLLEGE OF PHARMACY</h4>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#264653'}}> BACHELOR OF PHARMACY (4 Year)</h4>
        </div>        <br></br>
        <div className="grid">
       
         
          <article>
            <div className="text">
            <img  className="custom-img"  src={medicine} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Bachelor of Pharmacy </h6>
            </div>
          </article>
        
        
        
        </div>


        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
        
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653',fontSize:'15px',marginBottom:'10px'}}> MASTER OF PHARMACY (2 Year)</h4>
        </div>   
        <div className="grid">
       
         
       <article>
         <div className="text">
         <img  className="custom-img"  src={fop3} alt="Medicine" />
           <h6 style={{fontSize:'15px',marginTop:'10px',marginLeft:'10px'}}>M.Pharma Pharmaceutics</h6>
         </div>
       </article>
       <article>
         <div className="text">
         <img  className="custom-img"  src={fop4} alt="Medicine" />
           <h6 style={{fontSize:'15px',marginTop:'10px',marginLeft:'10px'}}>M.Pharma Pharmacology</h6>
         </div>
       </article>
     
     
     </div>
      </>
    )}
    {activeTab === 'tab3' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653'}}>   POLYTECHNIC PHARMACY (2 Year)</h4>
        </div>        <br></br>
        <div className="grid" xs={1}>
          <article>
            <div className="text">
            <img  className="custom-img"  src={fop3} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'12px'}}>Diploma Pharmacy</h6>
            </div>
          </article>
          
        
        
        </div>
      </>
    )} */}

</div>
</div>
<div className="wrapper">
    {/* Boxes Section */} 
    <div style={{backgroundColor: '#023047',marginTop:'50px'}}>
     <div class="two hai" style={{marginLeft:'85px',marginTop:'40px',}}>
  <h1 style={{color:'white',marginLeft:'20px'}}>What makes
    <span style={{color:'orange'}}> SSSUTMS Faculty of Education unique?</span>
  </h1>
</div>
    <section className="boxes" >
   
  {/* <h1 style={{fontFamily:"'Raleway', Sans-serif",marginTop:'20px',}}>What makes<br></br>
  <strong> SSSUTMS Faculty of Engineering & Technology unique?</strong></h1>
  <hr style={{color:'orange'}}></hr> */}

  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    To provide high-quality education and training for future teachers, educational leaders, and physical education professionals.
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    To conduct cutting-edge research that advances knowledge in education, teaching methodologies, physical health, and sports sciences.
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    To foster the intellectual, physical, and emotional development of students, preparing them to be well-rounded individuals and professionals.
    </p>
  </div>
  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    To evolve and implement a new programs of teacher education that would provide education and training to pre—service teachers that aim at development of new integral development of teachers.</p>
  </div>
</section></div>



{/* ////////////////////////////////// */}
<div  className='headinghai'>
    {/* Info Section */}   < div class="two" >
  <h1>About
    <span>Faculty of Education & Physical Education </span>
  </h1>
</div>   
    <section className="info" style={{marginTop:'-20px'}} >
    
      <img  className='imgabout'src={foe1} alt="" />
      <div>
     
        {/* <h2 style={{ fontFamily:"'Open Sans', Sans-serif",color:'#023047'}}>About */}
        {/* Faculty of Engineering & Technology</h2> */}
        <p style={{textAlign:'justify'}}>
        The Faculty of Education & Physical Education focuses on excellence in teaching, innovative research, community engagement, and the holistic development of students. It offers undergraduate programs like Bachelor of Education (B.Ed.) and Bachelor of Physical Education (B.P.Ed.), as well as postgraduate programs such as Master of Education (M.Ed.) and Master of Physical Education (M.P.Ed.), along with doctoral programs.

The curriculum includes pedagogical training, subject-specific courses, practical internships, and specialized physical education classes. Research areas include educational technology, inclusive education, health and wellness, and sports science.

Facilities include research labs, sports facilities, libraries, and advanced classrooms. Community and global engagement are fostered through school partnerships, public health initiatives, and international collaborations.

Graduates pursue careers in teaching, educational administration, sports, and health promotion, becoming teachers, principals, coaches, fitness trainers, and health educators. The faculty plays a crucial role in shaping future educators and promoting physical well-being.
</p>
      </div>
    </section>
  </div>
{/* ////////////////////// */}
    {/* Top Container */}
    {/* <section className="top-container">
      <header className="showcase">
        <h1 style={{color:'white'}}>Vision </h1>
        <p>
        To develop highly skilled professionals to man positions in the industry responding to
        technological and scientific advancements.To develop centres of excellence through establishment of state-of-the-art laboratories/
workshops which will help students learn through hands-on experience the latest advances in
technology.
        </p>
       
      </header>



      
       
       
    
     
    </section>
    */}

    
  </div>
<style>
  {
    `
    @import "https://fonts.googleapis.com/css?family=Open+Sans:800&display=swap";
 
 .slider {
   display: flex;
   height: 350px;
   max-height: auto;
   overflow-y: hidden;
   overflow-x: scroll !important;
   padding: 16px;
   transform: scroll(calc(var(--i,0)/var(--n)*-100%));
   scroll-behavior: smooth;
}
 .slider::-webkit-scrollbar {
   height: 5px;
   width: 150px;
   display: none;
}
 .slider::-webkit-scrollbar-track {
   background: transparent;
}
 .slider::-webkit-scrollbar-thumb {
   background: #888;
}
 .slider::-webkit-scrollbar-thumb:hover {
   background: #555;
}
 .slider img:hover {
   transform: scale(1.05);
   box-shadow: 10px 10px 10px rgba(0,0,0,0.15);
}
 .slide {

   position: relative;
}
 .slide img {
   height: 100%;
   width: 250px;
   margin: 0 10px;
   object-fit: cover;
   border-radius: 15px;
   cursor: pointer;
   transition: .25s ease-in-out;
}
 .control-prev-btn {
   position: absolute;
   top: 50%;
   left: 0;
   background-color: rgba(255,255,255,0.55);
   height: 100px;
   line-height: 100px;
   width: 45px;
   text-align: center;
   box-shadow: 0 1px 3px #888;
   user-select: none;
   color: #444;
   cursor: pointer;
}
 .control-next-btn {
   position: absolute;
   top: 50%;
   right: 0;
   background-color: rgba(255,255,255,0.55);
   height: 100px;
   line-height: 100px;
   width: 45px;
   text-align: center;
   box-shadow: 0 1px 3px #888;
   user-select: none;
   color: #444;
   cursor: pointer;
}
.slide img.zoomed{
    width: 500px;
    height: 600px;
    position: fixed;
    left: 25%;
    top: 0%;
    z-index: 1000;
    transform: scale(1) translatey(0) !important; 
  
}
.overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.45);
    top: 0;
    display: none;
}
.overlay.active{
  display: block;
}
 @media only screen and (max-width: 420px) {
   .slider {
     padding: 0;
  }
   .slide {
     padding: 16px 10px;
  }
   .slide img {
     margin: 0;
  }
   .control-prev-btn {
     top: 37%;
  }
   .control-next-btn {
     top: 37%;
  }
}
 `
  }
</style>
  <div className="carousel-gallery">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
        <div className="swiper-slide">
          <a
            href="https://images.pexels.com/photos/928276/pexels-photo-928276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            data-fancybox="gallery"
          >
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/928276/pexels-photo-928276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
              }}
            >
              <div className="overlay">
                <em className="mdi mdi-magnify-plus" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>

<Footerpage/>
</>
)
}
export default Edu

