import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posd1 from "./Engeneering/Mech. Dept/mechanical lab.jpg";
import Posd2 from "./Engeneering/Visit/Aerospace mesum banglore.jpg";
import Posd3 from "./Engeneering//Visit/mesum.jpg";
import Posd4 from "./Engeneering/eng workshop/IMG_20180626_142138.jpg";
import Posd5 from "./Engeneering/eng workshop/IMG_20180910_111533.jpg";
import Posd6 from "./Engeneering/aerospace mesum.jpg";
import Posd7 from "./Engeneering/chemical lab.jpg";
import Nav from '../HomePage/Nav';
const Eng = () => {
  return (
    <> 
    <Nav/>
    <>
    <img style={{width:"100%"}} src='https://media.licdn.com/dms/image/C511BAQGoXfr-P6PrOQ/company-background_10000/0/1586687101925/engineering_updates_cover?e=2147483647&v=beta&t=N9O2Da95xr10cm1mA87wPvMEkTmt0vJaAVvueDTdoJw' alt='' />
    <font face="sans-serif" color="#017bf5" size={5} align="center">
      <h1><b>Engineering's</b></h1>
    </font>

    <table align="center">
      <tbody>
        <tr>
          <td>
            <img
              src={Posd1}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posd2}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posd3}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posd4}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posd5}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posd6}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posd7}
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

export default Eng