import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posy1 from "./R & D dept/3d Printer.jpg"
import Posy3 from "./R & D dept/R&D.jpg"
import Posy4 from "./R & D dept/R&D1.jpg"
import Posy5 from "./R & D dept/R&D2.jpg"
import Posy6 from "./R & D dept/R&D3.jpg"
import Posy7 from "./R & D dept/R&D4.jpg"
import Nav from '../HomePage/Nav';

const RD = () => {
  return (
    <> 
    <Nav/>
    <>
    <img style={{width:"100%"}} src='https://innovationcloud.com/pub/blog/16569183520849_innovation_cloud-_r__d_and_innovation_management_connection.png' alt='' />
    <font face="sans-serif" color="#017bf5" size={5} align="center">
      <h1><b>R & D</b></h1>
    </font>
    <font face="sans-serif" color="#444" size={3} align="center">
      <h1><b>Departments</b></h1>
    </font>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <img
              src={Posy1}
              height={350}
              width={400}
            />
          </td>
        
          <td>
            <img
              src={Posy3}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posy7}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posy4}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posy5}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posy6}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
        
      
        </tr>
      </tbody>
    </table>
  </>
  <Footerpage/>
    </>
  )
}

export default RD