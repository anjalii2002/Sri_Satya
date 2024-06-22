import React from 'react'
import Footerpage from '../HomePage/Footerpage';
import Posc1 from "./CS dept/netLink company.jpg"
import Nav from '../HomePage/Nav';
const Cs = () => {
  return (
    <> 
    <Nav/>
    <>
    <img style={{width:"90%"}} src='https://5.imimg.com/data5/HP/NJ/GLADMIN-16005751/computer-science-and-engineering.png' alt='' />
    <font face="sans-serif" color="#017bf5" size={5} align="center">
      <h1><b>Computer Science </b></h1>
    </font>

    <table align="center">
      <tbody>
        <tr>
          <td>
            <img
              src={Posc1}
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/nVg0xVTn/2.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/KY0DHmRS/3.jpg"
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://i.postimg.cc/1RnrvhS2/4.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/DwFQfSG3/5.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/Dy3L5SB4/6.jpg"
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://i.postimg.cc/SR6XHGD2/7.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/htjj0gW7/8.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/XYpjC8df/9.jpg"
              height={350}
              width={400}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="https://i.postimg.cc/MH6xKbzj/10.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/VLN1xR7x/11.jpg"
              height={350}
              width={400}
            />
          </td>
          <td>
            <img
              src="https://i.postimg.cc/5NGcZMQz/12.jpg"
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

export default Cs