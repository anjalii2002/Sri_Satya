import React, { useState, useEffect } from 'react';
import Newly from './Newly';

const New = ({ direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newSection = document.getElementById('new');
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
          flex-direction: row;
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
          background-image: url(https://murdoch-website-002.azurewebsites.net/sf-images/default-source/signpost-imagery/open-day-event-880x880.jpg);
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

        .animate-on-scroll {
          opacity: 0;
          animation: ${isVisible ? (direction === 'left' ? 'slideInLeft 1s ease-out forwards' : 'slideInRight 1s ease-out forwards') : 'none'};
        }
      `}</style>
      
      <section id="new" className="animate-on-scroll">
        <div className="flex-container">
          <div className="col">
            <h2>Campus Life</h2>
            <p>
              Wondering what it’s like to be part of the SSSUTMS community and what
              university is like? Let our students take you on a guided tour or
              check out our facilities.
            </p>
          </div>
          <div className="col col-image">
            <div className="image" />
          </div>
        </div>
      </section>
      <Newly/>
    </>
  );
};

export default New;