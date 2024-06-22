
// import { React, useEffect } from 'react';

// import Nav from '../../HomePage/Nav';
// import Footerpage from '../../HomePage/Footerpage';



// const StudyMaterial = () => {
//   return (
//    <>
//    <style>
//     {
//       `
//       .titlee{
//         font-family:'Open Sans', Sans-serif;
//         margin-left:30px
   
//       }
      
//       .list-group-item-text{
//         font-family:'Open Sans', Sans-serif;
//         font-size:25px;
//         padding: 0;
//         font-weight:700
//       }
     
//       // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//       `
//     }
//    </style>
//    <Nav/>
//    <div className="container" style={{marginTop:'30px'}}>
//     <div id="main" className="card card-body">
//       <h2 className="titlee"> | E-Resources</h2>
//       <h5 style={{marginTop:'10px',marginLeft:'25px'}}>
//       Places for Access copyright Free or Public Domain Books Link</h5>
//      <br></br>
      
//       <ul id="items" className="list-group">
    
//         <li className="list-group-item">
    
//         <a href="http://www.gutenberg.org/" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989">www.gutenberg.org</font></a>
    

//        </li>

//        <li className="list-group-item">
    
//     <a href="http://www.manybooks.net" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989">www.manybooks.net</font></a>


//    </li>


      
//    <li className="list-group-item">
    
//     <a href="http://www.booksinmyphone.com" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> www.booksinmyphone.com </font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://www.planetebook.com" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> www.planetebook.com </font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://www.bookdepository.com/free" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989">  www.bookdepository.com/free</font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://www.feedbooks.com/publicdomin" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> www.feedbooks.com/publicdomin </font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://http://newfreebooks.com" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> http://newfreebooks.com </font></a>


//    </li>

//    <li className="list-group-item">
    
//     <a href="http://www.scribd.com" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> www.scribd.com </font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://www.openculture.com/free_ebooks" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989">www.openculture.com/free_ebooks  </font></a>


//    </li>


//    <li className="list-group-item">
    
//     <a href="http://www.authorama.com" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> www.authorama.com </font></a>


//    </li>

//    <li className="list-group-item">
    
//     <a href="http://http://alison.com/" target="_blank" style={{textRendering: "optimizelEgibility"}}><font color="#006989"> http://alison.com/ </font></a>


//    </li>
          

 

    
//       </ul>






      
//     </div>
//   </div>
//   <Footerpage/>
//    </>
//   )
// }

// export default StudyMaterial



import { React, useEffect } from 'react';

import Nav from '../../HomePage/Nav';
import Footerpage from '../../HomePage/Footerpage';

const StudyMaterial = () => {
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
          `
        }
      </style>
      <Nav/>
      <div className="container" style={{marginTop:'30px',marginBottom:'30px'}}>
        <div id="main" className="card card-body" style={{backgroundColor:'#D1D8C5'}}>
          <h2 className="titlee"> | E-Resources</h2>
          <h5 style={{marginTop:'10px',marginLeft:'25px'}}>
            Places for Access to Copyright-Free or Public Domain Books Link
          </h5>
          <br/>

          <div className="row">
            <div className="col-md-6">
              <ul id="items" className="list-group">
                <li className="list-group-item">
                  <a href="http://www.gutenberg.org/" target="_blank" style={{textRendering: "optimizeLegibility"}}>
               <font color="#006989" family="poppins,sans-serif">www.gutenberg.org</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.manybooks.net" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                    <font color="#006989" family="poppins,sans-serif">www.manybooks.net</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.booksinmyphone.com" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.booksinmyphone.com</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.planetebook.com" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.planetebook.com</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.bookdepository.com/free" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.bookdepository.com/free</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.feedbooks.com/publicdomain" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.feedbooks.com/publicdomain</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://newfreebooks.com" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">http://newfreebooks.com</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.scribd.com" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.scribd.com</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.openculture.com/free_ebooks" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.openculture.com/free_ebooks</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.authorama.com" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">www.authorama.com</font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://alison.com/" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">http://alison.com/</font>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul id="items" className="list-group">
              <li className="list-group-item">
                  <a href="http://nptel.iitm.ac.in/" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">http://nptel.iitm.ac.in/  </font>
                  </a>
                </li>


                <li className="list-group-item">
                  <a href="http://www.indest.iitd.ac.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> www.indest.iitd.ac.in </font>
                  </a>
                </li>


                <li className="list-group-item">
                  <a href="http://www.ignca.gov.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> www.ignca.gov.in </font>
                  </a>
                </li>


                <li className="list-group-item">
                  <a href="http://www.vidyanidhi.org.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> www.vidyanidhi.org.in </font>
                  </a>
                </li>


                <li className="list-group-item">
                  <a href="http://www.digitallibrary.ernet.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> http://www.digitallibrary.ernet.in </font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.inflibnet.ac.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> www.inflibnet.ac.in </font>
                  </a>
                </li><li className="list-group-item">
                  <a href="http://www.niscair.res.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> http://www.niscair.res.in </font>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="http://www.vvgnli.org" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">  www.vvgnli.org</font>
                  </a>
                </li><li className="list-group-item">
                  <a href="http://www.new.dli.ernet.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif"> http://www.new.dli.ernet.in </font>
                  </a>
                </li><li className="list-group-item">
                  <a href="http://scholar.google.co.in" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">http://scholar.google.co.in(Search for All Subject E-books)  </font>
                  </a>
                </li>


                <li className="list-group-item">
                  <a href="http://paniit.iitd.ac.in/indest/downloads/brochureforcoremembers.pdf" target="_blank" style={{textRendering: "optimizeLegibility"}}>
                   <font color="#006989" family="poppins,sans-serif">http://paniit.iitd.ac.in/indest/downloads/brochureforcoremembers.pdf  </font>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footerpage/>
    </>
  )
}



export default StudyMaterial;
