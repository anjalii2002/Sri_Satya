import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posq1 from './Law Dept/IMG-20230909-WA0020.jpg'
import Posq12 from './Law Dept/IMG-20230925-WA0006.jpg'
import Posq3 from './Law Dept/IMG-20231209-WA0043.jpg'
import Posq4 from './Law Dept/IMG-20240108-WA0007.jpg'
import Posq5 from './Law Dept/law cover page.jpg'
import Nav from '../HomePage/Nav';
const Lok = () => {
  return (
    <>
      <Nav />
      <>
        <img style={{ width: "100%" }} src='https://theleaflet.in/wp-content/uploads/2020/12/1591456930Permanent-Lok-Adalts.jpg' alt='' />
        <font face="sans-serif" color="#017bf5" size={5} align="center">
          <h1><b>National Lok</b></h1>
        </font>
        <font face="sans-serif" color="#444" size={3} align="center">
          <h1><b>Adalat day</b></h1>
        </font>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <img
                  src={Posq1}
                  height={350}
                  width={400}
                />
              </td>
              <td>
                <img
                  src={Posq12}
                  height={350}
                  width={400}
                />
              </td>
              <td>
                <img
                  src={Posq3}
                  height={350}
                  width={400}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Posq4}
                  height={350}
                  width={400}
                />
              </td>
              <td>
                <img
                  src={Posq5}
                  height={350}
                  width={400}
                />
              </td>

            </tr>
            <tr>



            </tr>
            <tr>




            </tr>
          </tbody>
        </table>
      </>
      <Footerpage />
    </>
  )
}

export default Lok