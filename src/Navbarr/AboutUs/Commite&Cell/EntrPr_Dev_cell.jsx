
import React from 'react'
import Nav from '../../../HomePage/Nav'
import Footerpage from '../../../HomePage/Footerpage'
import edc from '../../../images/Commite_Cell/edc.png'

const EntrPr_Dev_cell = () => {
    return (
        <>
            <style>
                {
                    `


            .title h4::before{
                background: orange;
                height:2px;
                width:45px;
                content:"";
                position:absolute;
                top:0px;
                left:0px;
                bottom:0px;
                margin:auto;
          
               }
               
               
.title{
    font-family:inherit;
    font-weight:350;
   
    margin-left:80px;
  }
       .title h4{
        text-transform:uppercase;
        font-weight:500;
        font-size:20px;
        position:relative;
        padding-left:60px;
        margin-top:0px;
        margin-bottom:15px;
        display:inline-block;
        color:rgb(53,56,88);
        font-style:normal;
       }
            .anti{
                position:relative;
                height:300px;
                 width:100%;
               }


               .enter{
                width:90%;
                margin-left:40px;
                margin-top:-30px
               }
  .enterp{
    text-align:justify;
    font-family:'Open Sans', sans-serif;
    font-size:17px;

  }


  .enterp1{
    text-align:justify;
    font-family:'Open Sans', sans-serif;
    font-size:16px;
    margin-top:-15px

  }


//   ///////////////////////////////////////////////////////////////////////////////////
.table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .table,
  .table th,
  .table td {
    border: 1px solid #ccc;
  }
  
  .table th,
  .table td {
    padding: 0.5rem;
  }
  
  .table th {
    position: relative;
     cursor: grab;
        user-select: none;
  }   
     .table th:active {
        cursor: grabbing;
      }
  
 
  
  
  
               `
                }
            </style>

            <Nav />
            <div className='anti'>
                <img src={edc} style={{ height: '300px', width: '100%' }} alt="Library" />

            </div>
            <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '50px' }}>
                <h4>Entrepreneurship Development Cell</h4>

            </div>
            <br></br>
            <div className='enter'>
                <p className='enterp'>The Entrepreneurship Development Cell is established in the institution for the purpose to develop institutional mechanism and to create awareness about the Entrepreneurship amongst    the faculty and students. Throughout the nation’s history, entrepreneurship has served a critical role in driving economic growth and securing the United States position as a world leader. Reduced entrepreneurial dynamism, with a declining business start-up rate and difficulty maintaining and growing small businesses, has been a loss to the economy and to individual communities. Today, entrepreneurship is often associated with technology start-ups that launch into global companies. The Committee meets once in academic year.</p>

                <p className='enterp' style={{ fontWeight: 700 }}>The primary functions of the Entrepreneurship Development Cell are as follows:</p>
                <p className='enterp1'>1. The aim of Entrepreneurship Development Cell (EDC) at SSSUTMS, is to develop and strengthen entrepreneurial qualities in the budding professionals who are interested in starting their own ventures.</p>

                <p className='enterp1'>2.  The College provides infrastructure and technical support to the students having innovative ideas to transform into new products and services for the betterment of the society.</p>
                <p className='enterp1'>3.  The EDC also assists all the aspirants with mentoring, planning and execution of their start up idea into a real business.</p>



                <p className='enterp1'>4. The EDC has maintained a pool of Sponsors like banks, national entrepreneurship training agencies and suppliers, who are willing to aid budding entrepreneurs.</p>
                <p className='enterp' style={{ fontWeight: 700 }}>Committee members of EDC:</p>
            </div>

            <div className="container mt-3">
                <table id="resizeMe" className="resizable-table table table-hover">
                    <thead>
                        <tr id="header-row">
                            <th className="draggable-table" data-column={0}>
                                No.
                            </th>
                            <th className="draggable-table" data-column={1}>
                                Name
                            </th>
                            <th className="draggable-table" data-column={2}>
                                Designation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr. Mukesh Tiwari</td>
                            <td>Chairman</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr. Minakshi Pathak</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>    Dr. Neelesh Chaubey</td>
                            <td>    Member</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr. Indrajeet Singh Yadav</td>
                            <td>    Member</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dr. Pushpendra Sharma</td>
                            <td>    Member Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Dr. Kanchan Shrivastava</td>
                            <td>    Member</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Dr. Syed Shahab Ahmed</td>
                            <td>    Member</td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <Footerpage />
        </>
    )
}

export default EntrPr_Dev_cell