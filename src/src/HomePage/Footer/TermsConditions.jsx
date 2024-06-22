import React from 'react'
import Footerpage from '../Footerpage'
import Nav from '../Nav'

const TermsConditions = () => {
  return (
    <>
      <style>
        {

          `
   :root {
            margin-top:-150px;
        }

               html {
            scroll-behavior: smooth;
              overscroll-behavior: none;
          
          }
          
      
          
          * {
            box-sizing: border-box;
          }
          

          .listing{
            font-family:poppins,sans-serif;
            font-size:18px;
            line-height:22.5px;
            text-decoration:none solid rgb(68,68,68);
            text-align:left;
            dispaly:inline;
          word-spacing:zero;
          margin-top:10px;
       
        }
          // nav {
          //   position: absolute;
          //   z-index: 10;
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   padding: 0;
          //   height: 125px;
          //   background-color: #204763;
          //   border-bottom-left-radius: 100%;
          // }
          
          // nav .logo {
          //   width: 10%;
          //   position: absolute;
          //   top: 10px;
          //   left: 10px;
          //   border-radius: 90%;
          // }
          // li{
          //   margin:10px
          // }
      
          main {
            margin-top: 50px;
            display: flex;
            margin-left:60px;
          
         
            align-items: center;
        
            flex-direction: column;
          }
          
          p {
            padding: 0px 30px;
          }
          
          button {
            border-radius: 20px;
            border: 7px solid #298acb;
            background-color: #204763;
            padding: 15px;
            margin-top: 8px;
            letter-spacing: 1px;
            font-size: 1.1em;
            transition: transform 80ms ease-in;
            cursor: pointer; /* Add a mouse pointer on hover */
          }
          
          button a {
            color: white;
            text-decoration: none;
          }
          
          button:hover {
            opacity: 0.7;
          }
          
     
  
          
          .footer-logo {
            width: 200px;
          }
          
          .social-icons {
            display: flex;
            justify-content: center;
            margin: auto;
          }
          
          .social-icons a {
            color: white;
            margin: 1px 15px 3px 15px;
            font-size: 1.4em;
            text-decoration: none;
            transition: 0.3s linear;
          }
          
          .social-icons a:hover {
            color: #298acb;
          }
          
       
          
          @media screen and (max-width: 768px) {
            nav .logo {
              border-radius: 90%;
              min-width: 90px;
            }

            .listing{
                margin-right:40px;
                width:400px;
            }
          
            nav .links {
              float: none;
              position: fixed;
              z-index: 9;
              left: 0;
              right: 0;
              top: 0;
              bottom: 100%;
              flex-direction: column;
              justify-content: space-evenly;
              width: 100vw;
              height: auto;
              background-color: rgba(0, 0, 0, 0.95);
              overflow: hidden;
              transition: all 0.5s ease-in-out;
              font-size: 1.1em;
            }
          
            nav .links a:hover {
              color: white;
              background-color: inherit;
            }
            .welclass{
                width:400px;
            }
       
          
         
          
       
         
          }
          `
        }
      </style>
      <Nav />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Horizon Careers Recruitment Terms Page</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Abel&family=Inconsolata:wght@600&family=Poppins&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <main>
        <section style={{ marginTop: '150px' }}>
          <div className='welclass'>
            <h3 style={{ fontFamily: 'cursive', color: '#1d3557', width: '1200px' }}> Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use</h3>
            <hr style={{ color: '#f3722c', width: '1200px' }}></hr>
            <ol className='listing'>

              <br></br>
              <li >  The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>

              <li >     Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              <li >   Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>

              <li >   We have reserves the right to refuse service to anyone at anytime.</li>


              <li >    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>

              <li >   All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>

              <li >  Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>

              <li >You may not create a link to this website from another website or document without our prior written consent.</li>
              <li >Your use of this website and any dispute arising out of such use of the website is subject to the laws of India and shall fall under the jurisdiction of the Courts of Madhya Pradesh(Bhopal), India.
              </li>
              <li >From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
            </ol>

          </div>
        </section>
      </main>
      <div style={{ marginTop: "70px" }}>
        <Footerpage />
      </div>
    </>

  )
}

export default TermsConditions











