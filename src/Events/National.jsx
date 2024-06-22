import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posn1 from "./national images/20240228_33204PMByGPSMapCamera.jpg"
import Posn2 from "./national images/20240229_10703PMByGPSMapCamera.jpg"
import Posn3 from "./national images/20240229_10801PMByGPSMapCamera.jpg"
import Posn4 from "./national images/20240229_112959AMByGPSMapCamera.jpg"
import Posn5 from "./national images/20240229_23038PMByGPSMapCamera.jpg"
import Posn6 from "./national images/20240302_113322AM_ByGPSMapCamera.jpg"
import Posn7 from "./national images/20240302_121333PM_ByGPSMapCamera.jpg"
import Posn8 from "./national images/i_123322PMByGPSMapCamera.jpg"
import Nav from '../HomePage/Nav';

const Lok = () => {
  return (
    <> 
     <Nav/>
    
    
     <>
     <img style={{width:"100%"}} src='https://cdn.cdnparenting.com/articles/2021/02/23135728/1913572111.webp' alt='' />
  <font face="sans-serif" color="#017bf5" size={5} align="center">
    <h1><b>National Science</b></h1>
  </font>
  <font face="sans-serif" color="#444" size={3} align="center">
    <h1><b>Day</b></h1>
  </font>
  <table align="center">
    <tbody>
      <tr>
        <td>
          <img
            src={Posn1}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posn2}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posn3}
            height={350}
            width={400}
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src={Posn4}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posn5}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posn6}
            height={350}
            width={400}
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src={Posn7}
            height={350}
            width={400}
          />
        </td>
        <td>
          <img
            src={Posn8}
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

export default Lok