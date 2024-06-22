import React,{useEffect,useState} from 'react'
import fod from '../../images/fod.jpeg'
import fod1 from '../../images/fod1.png'
import books from '../../images/books.png'
import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';
import fod2 from '../../images/fod2.png'
import fod3 from '../../images/fod3.png'
import fod4 from '../../images/fod4.png'
import fod5 from '../../images/fod5.png'
import fod6 from '../../images/fod6.jpg'

const Design = () => {
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
  <img src={fod} style={{ height: '350px', width: '100%' }} alt="Background" />
  <div style={{
    position: 'absolute', top: 0, left: 0, height: '350px', width: '35%',
    backgroundColor: '#003049'
  }}> <h1 style={{ position: 'absolute',  textAlign: 'left', color: 'white', padding: '20px' }}>FACULTY OF DESIGN  
  <br></br>& ARCHITECTURE</h1>
  </div></div> 
  


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
        <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",color:'#264653',marginTop:'-30px',marginBottom:'30px'}}>  INSTITUTE NAME:   SCHOOL OF DESIGN</h4>
          <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#780000',textAlign:'center'}}>BACHELOR OF DESIGN (4 Year)</h4>
        </div>     
           <br></br>
        <div className="grid">
       
         
          <article>
            <div className="text">
            <img  className="custom-img"  src={fod3} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Industrial Design </h6>
            </div>
          </article>   
          
          
          
          

          <article>
            <div className="text">
            <img  className="custom-img"  src={fod2} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Communication Design </h6>
            </div>
          </article> 


         


          <article>
            <div className="text">
            <img  className="custom-img"  src={fod1} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Textile Design </h6>
            </div>
          </article> 


          <article>
            <div className="text">
            <img  className="custom-img"  src={fod5} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Interior Design </h6>
            </div>
          </article> 


          <article>
            <div className="text">
            <img  className="custom-img"  src={fod4} alt="Medicine" />
              <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Product Design </h6>
            </div>
          </article> 



             </div>     
           <br></br>
        
             <h4 style={{fontWeight:700,fontFamily:"'Open Sans', Sans-serif",fontSize:'15px',color:'#780000',textAlign:'center'}}>BACHELOR OF ARCHITECTURE (5 Year)</h4>
           <br></br>
             <div className="grid">
       
         
       <article>
         <div className="text">
         <img  className="custom-img"  src={books} alt="Medicine" />
           <h6 style={{fontSize:'15px',marginTop:'8px',marginLeft:'10px'}}>Bachelor of architecture </h6>
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
    <span style={{color:'orange'}}> SSSUTMS Faculty of design & architecture unique?</span>
  </h1>
</div>
    <section className="boxes" >
   
 
  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    Foster creativity and excellence in design through rigorous academic programs and hands-on experiences.
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    Integrate the latest technologies and innovative practices into the design process.
    </p>
  </div>
  <div className="box">
    <p className='vertical-line' style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    Promote sustainable and ethical design practices that consider environmental and social impacts.
    </p>
  </div>
  <div className="box">
    <p  className='vertical-line'style={{textAlign:'justify',marginTop:'5px',color:'white'}}>
    Equipped with state-of-the-art tools and technology for various design disciplines.</p>
  </div>
</section></div>



{/* ////////////////////////////////// */}
<div  className='headinghai'>
    {/* Info Section */}   < div class="two" >
  <h1>About
    <span>Faculty of Design & Architecture </span>
  </h1>
</div>   
    <section className="info" style={{marginTop:'-20px'}} >
    
      <img  className='imgabout'src={fod6} alt="" />
      <div>
     
        {/* <h2 style={{ fontFamily:"'Open Sans', Sans-serif",color:'#023047'}}>About */}
        {/* Faculty of Engineering & Technology</h2> */}
        <p style={{textAlign:'justify'}}>
        The Faculty of Design and Architecture is a dynamic and innovative academic division dedicated to cultivating creativity, technical expertise, and critical thinking in its students. This faculty offers a range of programs that encompass various disciplines, including interior design, industrial design, graphic design, landscape architecture, and urban planning. Students benefit from a curriculum that integrates theoretical knowledge with practical experience, enabling them to develop a deep understanding of design principles and their applications in real-world contexts. The faculty boasts state-of-the-art facilities, including design studios, workshops, and digital labs, which provide an inspiring environment for experimentation and learning. Faculty members are accomplished professionals and scholars who bring a wealth of industry experience and research acumen to the classroom. Through a combination of lectures, hands-on projects, and collaborative assignments, students are encouraged to push the boundaries of conventional design thinking and explore innovative solutions to contemporary challenges. Additionally, the faculty maintains strong connections with industry partners, offering students opportunities for internships, networking, and exposure to the latest trends and technologies in design and architecture. Graduates of the Faculty of Design and Architecture are well-equipped to enter the workforce as skilled and visionary designers, capable of making significant contributions to the built environment and the broader creative industries.
</p>
      </div>
    </section>
  </div>


    
  </div>


<Footerpage/>
</>
)
}
export default Design


