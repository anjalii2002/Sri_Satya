import React, { useState, useEffect } from 'react';

const Newly = ({ direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newSection = document.getElementById('newly');
      if (newSection) {
        const top = newSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSlideInAnimation = (direction) => {
    switch (direction) {
      case 'left':
        return `
          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `;
      case 'right':
        return `
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `;
      default:
        return '';
    }
  };

  return (
    <>
      <style>{`
        p {
          line-height: 178%;
          letter-spacing: 0.0028em;
          font-size: 18px; /* default font size */
        }
        
        strong {
          font-weight: bold;
        }
        
        .flex-container {
          max-width: 1240px;
          margin: 100px auto; /* adjust margin for desktop */
          display: flex;
          flex-direction: row; /* Keep direction as row */
          justify-content: center;
          align-items: center;
        }
        
        .col {
          flex: 1;
          padding: 0 20px; /* add space between columns */
        }
        
        .col-image {
          position: relative;
          width: 100%; /* take full width */
          display: flex;
          justify-content: center;
          margin-top: 50px; /* add some top margin */
        }
        
        .image {
          background-image: url(https://www.sssutms.co.in/erp/UniversityImage/student_timeline.jpg);
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background-size: cover;
          background-position: center center;
        }
        
        @media screen and (max-width: 768px) {
          .flex-container {
            flex-direction: column; /* change to column layout for mobile */
            align-items: center;
          }
          
          .col {
            padding: 20px 0; /* space on top and bottom */
            text-align: center;
          }
          
          .col-image {
            margin-top: 0; /* remove top margin */
          }
        }

        ${getSlideInAnimation(direction)}

        // .animate-on-scroll {
        //   opacity: 0;
        //   animation: ${isVisible ? (direction === 'left' ? 'slideInLeft 1s ease-out forwards' : 'slideInRight 1s ease-out forwards') : 'none'};
        // }
      `}</style>
      
      <section id="newly" className="animate-on-scroll" style={{marginTop:"-10%"}}>
        <div className="flex-container">
          <div className="col col-image"> 
            <div className="image" />
          </div>
          <div className="col"> 
            <h2>Learning and Study</h2>
            <p>Not sure what to study or need more information about courses? Wondering what kind of practical experience you’ll get to prepare you for the future? Check out more about our courses, meet the academics you’ll learn from and about our work experience program. </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newly;