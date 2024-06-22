import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posr1 from "./BAMS/Chavanprash/BAMS Aavla.jpeg"
import Posr2 from "./BAMS/Chavanprash/BAMS celebration.jpeg"
import Posr3 from "./BAMS/Chavanprash/BAMS chavanprash1.jpeg"
import Posr4 from "./BAMS/Chavanprash/BAMS day.jpeg"
import Posr5 from "./BAMS/Chavanprash/BAMS event.jpeg"
import Posr6 from "./BAMS/Chavanprash/BAMS memebers.jpeg"
import Posr7 from "./BAMS/Chavanprash/BAMS work progress.jpeg"
import Nav from '../HomePage/Nav';
const Bams = () => {
  return (
  <>
     <Nav/>
     <>
     <img style={{width:"100%"}} src='https://ayushcourses.com/wp-content/uploads/2023/09/Ayurveda-Blog-Banner.jpg' alt='' />
  <font face="sans-serif" color="#017bf5" size={5} align="center">
    <h1><b>BAMS</b></h1>
  </font>
 
  <table align="center">
    <tbody>
      <tr>
        <td>
          <img
            src={Posr1}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posr2}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posr3}
            height={350}
            width={400}
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src={Posr4}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posr5}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posr6}
            height={350}
            width={400}
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src={Posr7}
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

export default Bams