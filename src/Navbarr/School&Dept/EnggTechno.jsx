import React,{useEffect,useState} from 'react'
import enggtechno from '../../images/enggtechno.webp'
import { Plane, FlaskConical,HardHat  } from 'lucide-react';
import cs from '../../images/cs.png'
import ee from '../../images/ee.png'
import ELECTRICAL from '../../images/ELECTRICAL.png'
import EC from '../../images/EC.png'
import einstru from '../../images/einstru.png'
import it from '../../images/it.png'
import me from '../../images/me.png'
import mie from '../../images/mie.png'
import sd from '../../images/sd.png'
import dc from '../../images/dc.png'
import id from '../../images/id.png'
import te from '../../images/te.png'
import hai from '../../images/Hai.png'
import techno1 from '../../images/techno1.jpg'
import techno2 from '../../images/techno2.jpg'
import se from '../../images/se.png'
import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';

const EnggTechno = () => {
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
      align-items: center;
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
//   background: url(${techno2});
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
  background: url(${techno2}) no-repeat center center / cover;
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



  .info {
    grid-template-columns: 1fr;
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

    .info {
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }

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

  <div style={{ position: 'relative', width: '100%', }}>
        <img src={enggtechno } style={{ height: '350px', width: '100%', }} alt="Background" />
        <div style={{ position: 'absolute', top: 0, left: 0, textAlign: 'left', color: 'white', padding: '20px' }}>
          <h1 style={{color:'white'}}>FACULTY OF ENGINEERING </h1>
          <h1 style={{color:'white'}}>& TECHNOLOGY</h1>
        </div>
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
    <button
      style={{ color: activeTab === 'tab2' ? 'orange' : 'white' }}
      onClick={() => setActiveTab('tab2')}
      className={activeTab === 'tab2' ? 'active' : ''}
    >
      PG Programs
    </button>
    <hr />
    <button
      style={{ color: activeTab === 'tab3' ? 'orange' : 'white' }}
      onClick={() => setActiveTab('tab3')}
      className={activeTab === 'tab3' ? 'active' : ''}
    >
      Diploma
    </button>
  </div>
  <div className="content">
    {activeTab === 'tab1' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653'}}>  SCHOOL OF ENGINEERING (4 Year)</h4>
        </div>
        <br></br>
        <div className="grid">
          <article>
            <div className="text">
             <Plane/>
              <h6 style={{ fontSize: '15px', marginTop: '6px', marginLeft: '10px' }}>Aeronautical Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              {/* <img src={chemical} alt="Chemical Engineering" /> */}
              < FlaskConical/>
              <h6 style={{ fontSize: '15px', marginTop: '6px', marginLeft: '16px' }}>Chemical Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              {/* <img src={civil} alt="Civil Engineering" /> */}<HardHat />
              <h6 style={{ fontSize: '15px', marginTop: '6px', marginLeft: '10px' }}>Civil Engineering</h6>
            </div>
          </article> <article>
            <div className="text">
              <img className="custom-img"  src={it} alt="Information Technology" />
              <h6 style={{ fontSize: '15px', marginTop: '12px', marginLeft: '10px' }}>Information Technology</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={mie} alt="Mining Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '12px', marginLeft: '10px', }}>Mining Engineering</h6>
            </div>
          </article> 
           <article>
            <div className="text">
              <img className="custom-img" src={me} alt="Mechanical Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '12px', marginLeft: '10px' }}>Mechanical Engineering</h6>
            </div>
          </article>
        
          <article>
            <div className="text">
              <img  className="custom-img"src={ELECTRICAL} alt="Electrical Engineering"   style={{ fill: "red" }} />
              <h6 style={{ fontSize: '15px', marginTop: '12px', marginLeft: '10px' }}>Electrical Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={EC} alt="Electronic & Communication Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '8px', marginLeft: '2px' }}>Electronic & Communication Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={einstru} alt="Electronics & Instrumentation Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '8px', marginLeft: '3px' }}>Electronics & Instrumentation Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className="custom-img" src={ee} alt="Electrical and Electronics Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '8px', marginLeft: '10px' }}>Electrical and Electronics Engineering</h6>
            </div>
          </article>
        
          <article>
            <div className="text">
              <img className="custom-img" src={cs} alt="Computer Science and Engineering" />
              <h6 style={{ fontSize: '15px', marginTop: '8px', marginLeft: '10px' }}>Computer Science and Engineering</h6>
            </div>
          </article>
        </div>
      </>
    )}
    {activeTab === 'tab2' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653'}}>  SCHOOL OF ENGINEERING (2 Year)</h4>
        </div>        <br></br>
        <div className="grid">
       
          <article>
            <div className="text">
              <img className='custom-img' src={dc} alt="Digital Communication" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Digital Communication</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={ELECTRICAL} alt="Electrical Power System" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Electrical Power System</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={id} alt="Industrial Design" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Industrial Design</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={it} alt="Information Technology" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Information Technology</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className="custom-img" src={einstru} alt="Power Electronics" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Power Electronics</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className='custom-img' src={se} alt="Software Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Software Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className='custom-img' src={sd} alt="Structural Design" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Structural Design</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img" src={te} alt="Thermal Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Thermal Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className="custom-img" src={it} alt="VLSI" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>VLSI</h6>
            </div>
          </article>   <article>
            <div className="text">
              <img className="custom-img" src={cs} alt="Computer Science and Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'7px'}}>Computer Science and Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img  className="custom-img"src={cs} alt="Computer Technology & Applications" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'16px'}}>Computer Technology & Applications</h6>
            </div>
          </article>
        </div>
      </>
    )}
    {activeTab === 'tab3' && (
      <>
        <div data-aos='fade-right' className='title aos-init aos-animate' style={{fontFamily:"'Open Sans', Sans-serif", marginTop: '40px', marginLeft: '50px' }}>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653'}}>  POLYTECHNIC (3 Year)</h4>
        </div>        <br></br>
        <div className="grid">
          <article>
            <div className="text">
            <HardHat style={{marginTop:'10px'}} />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'12px'}}>Civil Engineering</h6>
            </div>
          </article>
          
          <article>
            <div className="text">
              <img className='custom-img' src={ELECTRICAL} alt="Electrical Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Electrical Engineering</h6>
            </div>
          </article>
        
          <article>
            <div className="text">
              <img className='custom-img' src={me} alt="Mechanical Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Mechanical Engineering</h6>
            </div>
          </article><article>
            <div className="text">
              <img  className='custom-img' src={cs} alt="Computer Science and Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'10px',marginLeft:'10px'}}>Computer Science and Engineering</h6>
            </div>
          </article>  <article>
            <div className="text">
              <img className='custom-img'src={einstru} alt="Electronic & Communication Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px'}}>Electronic & Communication Engineering</h6>
            </div>
          </article>
          <article>
            <div className="text">
              <img className='custom-img'src={ee} alt="Electrical and Electronics Engineering" />
              <h6 style={{fontSize:'15px',marginTop:'12px',marginLeft:'10px'}}>Electrical and Electronics Engineering</h6>
            </div>
          </article>
        </div>
      </>
    )}

</div>
</div>
<div className="wrapper">
    {/* Boxes Section */} 
    <div style={{backgroundColor: '#023047',marginTop:'50px'}}>
     <div class="two hai" style={{marginLeft:'85px',marginTop:'40px',}}>
  <h1 style={{color:'white',marginLeft:'20px'}}>What makes
    <span style={{color:'orange'}}> SSSUTMS Faculty of Engineering & Technology unique?</span>
  </h1>
</div>
    <section className="boxes" >
   

  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
      The Faculty of Engineering aims to emerge as a leading world-class faculty that creates and disseminates knowledge upholding the highest standards of instruction in Engineering and Technology
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
      Along with academic excellence and skills, our curriculum imparts integrity and social sensitivity to mold our graduates who may be best suited to serve the nation and the world.
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
      To motivate the students, the Faculty of Engineering creates various platforms for inspiration where students can learn and develop their innovative elements.
    </p>
  </div>
  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
      The faculty endeavors to offer students structured evaluation and feedback mechanisms, fostering an enriched learning environment characterized by comprehensiveness.
    </p>
  </div>
</section></div>
{/* /////////////////////////////////////////////////images card/////////////////////////////// */}
{/* <style>
      {
        `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');


.wrapperr {
    display: flex;
    gap: 40px;
    width:90%;
    margin-left:50px;
    margin-top:60px;
    margin-bottom:60px
}

.card1 {
    position: relative;
    width: 350px;
    height: 250px;
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: .5s;
}

.card1 .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px #fff;
}

.card1 .front img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-h1 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: rgba(0, 0, 0, .4);
    text-align: center;
}

.card1 .back {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transform: perspective(600px) rotateY(180deg);
    background: rgb(3, 35, 54);
    padding: 15px;
    color: crimson;
    text-align: center;
    box-shadow: 0 5px 10px #fff;
}





.card1 .back .text-h2 {
    font-size: 30px;
    letter-spacing: 2px;
}

.card1 .back .text-p {
    letter-spacing: 1px;
}

.card1:hover .front {
    transform: perspective(600px) rotateY(180deg);
}

.card1:hover .back {
    transform: perspective(600px) rotateY(360deg);
}

`
      }
    </style>
    <div className="wrapperr">
  <div className="card1">
    <div className="face front">
    <img
        src={hai}
        alt="city"
      />
    
    </div>
    
  </div>

  <div className="card1">
    <div className="face front">
         
    <img
        src={hai}
        alt="city"
      />
    
    
    </div>
    
  </div>
  <div className="card1">
    <div className="face front">
      <img
        src={hai}
        alt="city"
      />
    
    </div>
    <div className="face back">
      <h2 className="text-h2">City</h2>
      <p className="text-p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
        maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
        eius accusamus harum cum unde natus.
      </p>
      <div className="links">
        <a className="link-a" href="#">
          Details
        </a>
      </div>
    </div>
  </div>
  <div className="card1">
    <div className="face front">
    <img
        src={hai}
        alt="city"
      />
    
    </div>
    
  </div>
  
</div>




<div className="wrapperr">
  <div className="card1">
    <div className="face front">
      <img
        src={hai}
        alt="city"
      />
    
    </div>
    <div className="face back">
      <h2 className="text-h2">City</h2>
      <p className="text-p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
        maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
        eius accusamus harum cum unde natus.
      </p>
      <div className="links">
        <a className="link-a" href="#">
          Details
        </a>
      </div>
    </div>
  </div>

  <div className="card1">
    <div className="face front">
      <img
        src={hai}
        alt="city"
      />
    
    </div>
    <div className="face back">
      <h2 className="text-h2">City</h2>
      <p className="text-p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat
        maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga
        eius accusamus harum cum unde natus.
      </p>
      <div className="links">
        <a className="link-a" href="#">
          Details
        </a>
      </div>
    </div>
  </div>
  <div className="card1">
    <div className="face front">
    <img
        src={hai}
        alt="city"
      />
    
    </div>
    
  </div>
 
  
</div> */}

{/* ////////////////////////////////// */}
<div  className='headinghai'>
    {/* Info Section */}   < div class="two" >
  <h1>About
    <span>Faculty of  Engineering & Technology </span>
  </h1>
</div>   
    <section className="info" style={{marginTop:'-20px'}} >
    
      <img  className='imgabout'src={techno1} alt="" />
      <div>
     
        {/* <h2 style={{ fontFamily:"'Open Sans', Sans-serif",color:'#023047'}}>About */}
        {/* Faculty of Engineering & Technology</h2> */}
        <p style={{textAlign:'justify'}}>
        Engineering technology involves the hands-on application of technical expertise to engineering tasks in a wide range of industries. From building our nation's infrastructure to making our transportation and energy systems more efficient, wherever scientists and engineers are found, so are engineering technicians and technologists. Engineering techs may assist with setting up equipment, conducting experiments, and collecting data, or they may be involved in the design and development end of the process, using computer-aided design and drafting (CADD) equipment or constructing prototypes.
        Working in the field of engineering technology most likely means spending a lot of time in a lab, at a construction site, or in a manufacturing or industrial plant. Depending on your area of specialization, you might find job opportunities anywhere from microelectronics to biotechnology to industrial manufacturing.<br></br>A career in the technology of engineering is more narrowly focused than the career of a regular engineer, focusing on applied rather than theoretical knowledge. Most people who work in the field specialize in a particular area, such as aerospace engineering technology, environmental engineering technology or manufacturing engineering technology, to name just a few.  </p>
      
      </div>
    </section>
  </div>


  </div>

<Footerpage/>
</>
)
}
export default EnggTechno