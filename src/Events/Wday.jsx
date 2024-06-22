// import React from 'react'
// import Pos1 from "./Womens day/IMG-20240309-WA0036.jpg";
// import Pos2 from './Womens day/IMG-20240309-WA0037.jpg';
// import Pos3 from './Womens day/IMG-20240309-WA0051 (1).jpg';
// import Pos4 from './Womens day/IMG-20240309-WA0062 (1).jpg';
// import Pos5 from './Womens day/IMG-20240309-WA0065.jpg';
// import Pos6 from './Womens day/IMG-20240309-WA0091.jpg'

// const Wday = () => {
//   return (
// <>
// <div>
//   <img style={{width:"95%",height:"400px",marginLeft:"2%"}} src='https://imgeng.jagran.com/images/2024/mar/International%20Womens%20Day%202024%20theme1709618889970.jpg' alt='' />
// </div>
// <style>{`
//     .grid{
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
//     gap: 10px;
//     padding: 2rem;
//   }
//   img{
//     max-width: 100%;
//     border-radius: 1rem;
//   }
  
//   @media (max-width: 768px) {
//     .grid {
//       grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
//     }
//   }
  
//   @media (max-width: 480px) {
//     .grid {
//       grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
//     }
//   }`}</style>

// <div className="grid">
//   <img
//     src={Pos1}
//     alt=""
//   />
//   <img
//     src={Pos2}
//     alt=""
//   />
//   <img
//     src={Pos3}
//     alt=""
//   />
//   <img
//     src={Pos4}
//     alt=""
//   />
//   <img
//     src={Pos5}
//     alt=""
//   />
//   <img
//     src={Pos6}
//     alt=""
//   />
// </div>
// </>
//   )
// }

// export default Wday

import React from 'react';
import Pos1 from "./Womens day/IMG-20240309-WA0036.jpg";
import Pos2 from './Womens day/IMG-20240309-WA0037.jpg';
import Pos3 from './Womens day/IMG-20240309-WA0051 (1).jpg';
import Pos4 from './Womens day/IMG-20240309-WA0062 (1).jpg';
import Pos5 from './Womens day/IMG-20240309-WA0065.jpg';
import Pos6 from './Womens day/IMG-20240309-WA0091.jpg';
import Footerpage from '../HomePage/Footerpage';
import Nav from '../HomePage/Nav';

const Wday = () => {
  return (
    <> 
     <Nav/>
    
     <>
     <img src='https://images.indianexpress.com/2024/03/ie.com-thumbnails-3.jpg' alt='' />
  <font face="sans-serif" color="#d00000" size={5} align="center">
    <h1><b>Women's</b></h1>
  </font>
  <font face="sans-serif" color="#85182a" size={3} align="center">
    <h1><b>Day</b></h1>
  </font>
  <table align="center">
    <tbody>
      <tr>
        <td>
          <img
            src={Pos1}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Pos2}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Pos4}
            height={350}
            width={400}
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src={Pos5}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Pos5}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Pos6}
            height={350}
            width={400}
          />
        </td>

      
      </tr>
    </tbody>
  </table>
</>

<Footerpage/>
    </>

  );
}

export default Wday;
