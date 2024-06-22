import React, { useState, useEffect } from 'react';
import vc from '../images/VC.png';
import Sir from '../images/sid.jpg';
import Reg from '../images/Registrar.jpg';

const Our = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('ourTeam');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
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

  return (
    <>
      <style>{`
        .tit {
          text-align: center;
          text-transform: capitalize;
          color: #726a95;
          margin: 10px 0;
          position: relative;
        }
        
        .tit::after {
          content: "";
          position: absolute;
          width: 20%;
          height: 2px;
          background-image: linear-gradient(to left, transparent 5%, #726a95);
          bottom: -10px;
          left: 50%;
          transform: translate(-50%);
        }
        
        .team-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 40px 0;
        }
        
        .member {
          flex: 1 1 250px;
          margin: 20px;
          text-align: center;
          padding: 20px 10px;
          cursor: pointer;
          max-width: 300px;
          transition: all 0.3s;
          opacity: 0;
          animation: ${isVisible ? 'slideInFromLeft 0.8s ease-out forwards' : 'none'};
        }
        
        .member:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: translateY(-20px);
        }
        
        .member img {
          display: block;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border: 4px solid #726a95;
          border-radius: 50%;
          margin: 0 auto;
        }
        
        .member h2 {
          text-transform: uppercase;
          font-size: 24px;
          color: #726a95;
          margin: 15px 0;
        }
        
        .member p {
          font-size: 15px;
          color: #838383;
          line-height: 1.6;
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <section id="ourTeam">
        <h1 className="tit">our team</h1>
        <div className="team-row">
          <div className="member">
            <img src={Sir} alt="Siddharth Kapoor" />
            <h2>Siddharth Kapoor (Chancellor)</h2>
            <p>
              I have great pleasure in welcoming the students to Sri Satya Sai University of Technology & Medical Science Sehore, Bhopal (MP), a great  statesman, and industrialist. The University aspires to educate and train the Indian youth to take up the challenges of the future with capability and confidence. 
            </p>
          </div>
          <div className="member">
            <img src={vc} alt="Dr. Mukesh Tiwari" />
            <h2>Dr. Mukesh Tiwari (Vice Chancellor)</h2>
            <p>
              Since its founding in 2013 by merging of several multi-disciplinary institutions, Sri Satya Sai University of Technology and Medical Sciences Sehore, Bhopal (MP) is acclaimed for its outstanding contribution to teaching, research and service in Nation building. Today, the University stands to meet the enormous aspirations and expectations of society.
            </p>
          </div>
          <div className="member">
            <img src={Reg} alt="Dr. G.R. Selokar" />
            <h2>Dr. G.R. Selokar (Registrar)</h2>
            <p>
              Dr. G.R. Selokar, Professor in the department of Mechanical Engineering of Sri Satya Sai University of Technology and Medical Sciences, Sehore is erudite professor, motivational teacher, eminent researcher and excellent institute builder with a dream to use science and technology for better community life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Our;
