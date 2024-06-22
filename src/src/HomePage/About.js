import React, { useEffect, useRef } from 'react';
import videoplayer from "../images/Aboutus.3gp";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.muted = true;
          videoElement.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // Adjust threshold as needed
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .img-fluid-custom {
            max-width: 100%;
            height: auto;
          }
          
          .clear-custom {
            clear: both;
          }
          
          .container-custom {
            background: #fff;
            max-width: 1090px;
            height: auto;
            margin: auto;
            transform: translateY(15%);
            box-shadow: 0px 0px 6px 0px #222 73;
          }
          
          .container-custom .circles-custom {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .container-custom .circles-custom:before {
            content: '';
            position: absolute;
            left: -6%;
            top: 1%;
            width: 200px;
            height: 200px;
            background: #dc2f02;
            border-radius: 60%;
          }
          
          .container-custom .circles-custom:after {
            content: '';
            position: absolute;
            right: -11%;
            bottom: -15%;
            width: 200px;
            height: 200px;
            background: #dc2f02;
            border-radius: 50%;
          }
          
          .container-custom .details-container-custom {
            position: relative;
            display: flex;
          }
          
          .container-custom .details-container-custom .avatar-custom {
            margin: 10px auto;
            position: relative;
            float: left;
            padding: 20px;
            animation: 1s ease-out 0s 1 slideInFromLeft;
          }
          
          .container-custom .details-container-custom .avatar-custom video {
            max-width: 345px;
            height: 300px;
            margin-top: -45px;
            border: 10px solid #fff;
            box-shadow: 0px 0px 6px 0px #222 73;
          }
          
          .container-custom .details-container-custom .about-custom {
            float: right;
            padding: 20px;
            margin-top: 50px;
            animation: 1s ease-out 0s 1 slideUpFromBottom;
          }
          
          .container-custom .details-container-custom .about-custom .name-custom p {
            margin: 0;
            color: #222;
            font-size: 1.1em;
            font-weight: bold;
          }
          
          .container-custom .details-container-custom .about-custom .name-custom h1 {
            color: #dc2f02;
            font-weight: bold;
            margin: 0;
            font-size: 3em;
          }
          
          .container-custom .details-container-custom .about-custom .about-content-custom p {
            line-height: 1.6em;
          }
          
          .container-custom .details-container-custom .about-custom .about-content-custom button {
            border: none;
            color: #222;
            padding: 10px;
            background: #fddb33;
            cursor: pointer;
            font-weight: bold;
            width: 250px;
            height: 40px;
            font-family: 'Nunito', sans-serif;
            box-shadow: 1px 1px 10px 0px #222 2b;
            transition: 0.2s all;
          }
          
          .container-custom .details-container-custom .about-custom .about-content-custom button:hover {
            box-shadow: 1px 1px 1px 0px #222 2b;
          }
          
          .container-custom .details-container-custom .about-custom .about-content-custom button:focus, .container-custom .details-container-custom .about-custom .about-content-custom button:active {
            outline: 0;
            box-shadow: 1px 1px 10px 0px #222 80;
          }
          
          .container-custom .skills-container-custom {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            position: relative;
            z-index: 1;
            animation: 1s ease-in 0s 1 fadeIn;
          }
          
          .container-custom .skills-container-custom button {
            flex: 1;
            padding: 10px;
            margin: 5px;
            border: none;
            color: #222;
            padding: 10px;
            background: #dc2f02;
            cursor: pointer;
            font-weight: bold;
            width: 250px;
            height: 40px;
            font-family: 'Nunito', sans-serif;
            box-shadow: 1px 1px 10px 0px #222 2b;
            transition: 0.2s all;
          }
          
          .container-custom .skills-container-custom button:hover {
            box-shadow: 1px 1px 1px 0px #222 2b;
          }
          
          .container-custom .skills-container-custom button:focus, .container-custom .skills-container-custom button:active {
            outline: 0;
            box-shadow: 1px 1px 10px 0px #222 80;
          }
          
          @media only screen and (max-width: 766px) {
            .container-custom {
              height: auto;
            }
          
            .container-custom .details-container-custom {
              flex-direction: column;
            }
          
            .container-custom .details-container-custom .avatar-custom video {
              width: 300px;
            }
          
            .container-custom .details-container-custom .about-custom {
              margin-top: 10px;
            }
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
          
          @keyframes slideUpFromBottom {
            0% {
              transform: translateY(70%);
              opacity: 0;
            }
          
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
          
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
      
      <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
      />
      <div className="container-custom">
        <div className="circles-custom" />
        <div className="details-container-custom">
          <div className="avatar-custom">
            <video
              ref={videoRef}
              style={{ height: "60%" }}
              src={videoplayer}
              className="img-fluid-custom"
              controls
            />
          </div>
          <div className="about-custom">
            <div className="name-custom">
              <p>Hello There!</p>
              <h1>About us</h1>
            </div>
            <div className="about-content-custom">
              <p><b>
                Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
                due to the quality of education at an affordable cost, without any hidden fees policy. In its history
                of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were
                the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees
                to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of
                the population is agriculture-dependent & the percentage of the population living at a low standard of
                living is 80.6. The growth rate recorded recently is 21.5%.
              </b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
