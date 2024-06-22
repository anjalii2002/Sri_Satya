import React from 'react'
import {Link} from "react-router-dom"
import Nav from './Nav'
import Footerpage from './Footerpage'

function Edetails() {
  return (
    <>
      <style>
        {`
  //   body {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     flex-direction: column;
  //     font-family: sans-serif;
  //  }
  //   h1 {
  //     color: coral;
  //  }
    .grid-container {
      columns: 5 200px;
      column-gap: 1.5rem;
      width: 90%;
      margin: 0 auto;
   }
    .grid-container div {
      width: 150px;
      margin: 0 1.5rem 1.5rem 0;
      display: inline-block;
      width: 100%;
      border: solid 2px black;
      padding: 5px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
   }
  //   .grid-container div:hover img {
  //     filter: grayscale(0);
  //  }
    .grid-container div:hover {
      border-color: coral;
   }
    .grid-container div img {
      width: 100%;
      // filter: grayscale(100%);
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
   }
    .grid-container div p {
      margin: 5px 0;
      padding: 0;
      text-align: center;
      font-style: italic;
   }
    `}
      </style>
      <Nav />

      <h2 style={{ marginTop: "30px", fontWeight: 'bolder', marginLeft: '80px',}}> | Upcomming Events -</h2>
      <br></br>
      <div className="grid-container">
        <Link to="/women">
          <div>
            <img
              className="grid-item grid-item-1"
              src="https://assets.thehansindia.com/h-upload/2024/03/02/1427009-article-2-1.webp"
              alt=""
            />
            <p>
              <b>"Womens Day"</b>
            </p>
          </div>
        </Link>
        <Link to="/national"><div>
          <img
            className="grid-item grid-item-2"
            src="https://cdn.cdnparenting.com/articles/2021/02/23135728/1913572111.webp"
            alt=""
          />
          <p>
            <b>"National Science Day"</b>
          </p>
        </div></Link>
        <Link to="/lok"><div>
          <img
            className="grid-item grid-item-3"
            src="https://theleaflet.in/wp-content/uploads/2020/12/1591456930Permanent-Lok-Adalts.jpg"
            alt=""
          />
          <p>
            <b>"National Lok Adalat day"</b>
          </p>
        </div></Link>
        <Link to="/bams"><div>
          <img
            className="grid-item grid-item-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpvm4nx6fkpiMFRAU_dMGYgWPNt4TYMdMash2Oy_9iQ&s"
            alt=""
          />
          <p>"BAMS"</p>
        </div></Link>
        <Link to="/bhms"><div>
          <img
            className="grid-item grid-item-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEwGCCC5l1mIEuUqCDVybehv0POhuo1accQCJzd_kbA&s"
            alt=""
          />
          <p>"BHMS"</p>
        </div></Link>
        <Link to="/r&d"><div>
          <img
            className="grid-item grid-item-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc6tQTSM6aYsIQFVtpSuBqtKsvT7t5Fpa9vvYVXZfDw&s"
            alt=""
          />
          <p>"R&D Department"</p>
        </div></Link>
        <Link to="/eng"><div>
          <img
            className="grid-item grid-item-7"
            src="https://r2.erweima.ai/imgcompressed/compressed_d726efbfc21c86c10b0e941b50bd0650.webp"
            alt=""
          />
          <p>"Engineering"</p>
        </div></Link>
        <Link to="/cs"><div>
          <img
            className="grid-item grid-item-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq03FXlZ4VZP5L86FI07GTUUoR-hfXwthC6PJ0wh8x0g&s"
            alt=""
          />
          <p>"CS Department"</p>
        </div>
        </Link>
        <Link to="/uni"><div>
          <img
            className="grid-item grid-item-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11p_-vhwPuFfk-90BQu2XnrGHfqWzn4aC9rD5NoWakg&s"
            alt=""
          />
          <p>"University Events "</p>
        </div></Link>
      </div>

<Footerpage/>
    </>

  )
}

export default Edetails

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import Footerpage from './Footerpage';

// function Edetails() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1357/api/events?populate=*')
//       .then(response => response.json())
//       .then(data => setEvents(data.data))
//       .catch(error => console.error('Error fetching events:', error));
//   }, []);

//   console.log(events, "events")
//   return (
//     <>
//       <style>
//         {`
          
          
//           h1 {
//             color: coral;
//           }
//           .grid-container {
//             columns: 5 200px;
//             column-gap: 1.5rem;
//             width: 90%;
//             margin: 0 auto;
//           }
//           .grid-container div {
//             width: 150px;
//             margin: 0 1.5rem 1.5rem 0;
//             display: inline-block;
//             width: 100%;
//             border: solid 2px black;
//             padding: 5px;
//             box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
//             border-radius: 5px;
//             transition: all 0.25s ease-in-out;
//           }
//           .grid-container div:hover img {
//             filter: grayscale(0);
//           }
//           .grid-container div:hover {
//             border-color: coral;
//           }
//           .grid-container div img {
//             width: 100%;
//             filter: grayscale(100%);
//             border-radius: 5px;
//             transition: all 0.25s ease-in-out;
//           }
//           .grid-container div p {
//             margin: 5px 0;
//             padding: 0;
//             text-align: center;
//             font-style: italic;
//           }
//         `}
//       </style>
//       <Nav />

//       <h2 style={{ marginTop: '30px', fontWeight: 'bolder', marginLeft: '80px', textDecorationColor: 'purple', textDecorationLine: 'underline' }}> | Upcoming Events -</h2>
//       <br></br>
//       <div className="grid-container">
//         {events.map(event => (
//           <Link to={event.attributes.EventPageLink} key={event.id}>
//             <div>
//               <img
//                 className="grid-item"
//                 src={`http://localhost:1337${event.attributes.EventImage.data[0].attributes.url}`} // Use EventImage URL
//                 alt={event.attributes.EventName}
//               />
//               <p>
//                 <b>{event.attributes.EventName}</b>
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <Footerpage />
//     </>
//   );
// }

// export default Edetails;



