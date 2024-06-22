import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posu1 from "./Uni_Event/events/Rangoli Competition.jpg"
import Posu2 from "./Uni_Event/events/Vishkarma Poojan.jpg"
import Posu3 from "./Uni_Event/events/independence day.jpg"
import Posu4 from "./Uni_Event/events/snapedit_1713941847436.jpg"
import Posu5 from "./Uni_Event/events/stall1.jpg"
import Posu6 from "./Uni_Event/events/wall painting1.jpg"
import Posu7 from "./Uni_Event/events/wall painting2.jpg"
import Posu8 from "./Uni_Event/events/yoga day.jpg"
import Posu9 from "./Uni_Event/student/plantation.jpg"
import Posu10 from "./Uni_Event/about/university.jpg"
import Posu11 from "./Uni_Event/about/buses.jpg"
import Nav from '../HomePage/Nav';
const Uni = () => {
  return (
    <> 
    <Nav/>
    <>
    <font face="sans-serif" color="#017bf5" size={5} align="center">
      <h1><b>University Events</b></h1>
    </font>

    <table align="center">
      <tbody>
        <tr>
          <td>
            <img
              src={Posu1}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu2}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu3}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posu4}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu5}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu6}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posu7}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu8}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu9}
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Posu10}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src={Posu11}
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

export default Uni