import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Post1 from "./BHMS/events/BHMS.jpg"
import Post2 from "./BHMS/events/BHMS1.jpg"
import post3 from "./BHMS/events/Modal.jpg"
import Nav from '../HomePage/Nav';
const Bhms = () => {
  return (
    <>
    <Nav/>
    <>
    <img style={{width:"100%"}} src='https://img.jagranjosh.com/images/2024/April/1042024/homeopathy-day.webp' alt='' />
 <font face="sans-serif" color="#017bf5" size={5} align="center">
   <h1><b>BHMS</b></h1>
 </font>

 <table align="center">
   <tbody>
     <tr>
       <td>
         <img
           src={Post1}
           height={350}
           width={400}
         />
       </td>
       <td>
         <img
           src={Post2}
           height={350}
           width={400}
         />
       </td>
       <td>
            <img
              src={post3}
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
  )
}

export default Bhms