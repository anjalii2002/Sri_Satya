import React from 'react';
import Nav from '../../../HomePage/Nav'
import Footerpage from '../../../HomePage/Footerpage'

const Internal_Complaint = () => {
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
            <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '80px' }}>
                <h4>Internal Complaint Committee</h4>
                {/* <h3>A tOP-rANKED uNIVERSITY</h3> */}
            </div>


            <h6 style={{ color: '#7f5539', fontWeight: 700, marginLeft: '80px' }}>INTERNAL COMPLAINT COMMITTEE RELATING TO SEXUAL HARASSMENT OF WORKING WOMEN
            </h6>

            <div className="container mt-3" style={{ width: '60%', marginRight: '500px' }}>
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
                            <td>
                                Dr. Kanchan Shrivastava

                            </td>
                            <td> Chairman</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td> Ms. Shobha Vyas

                            </td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>   Ms. Priyanka Jhawar</td>
                            <td>     Member</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr. Abhijat Krishan Tripathi<br></br>Principal, ShriJanki Raman Mahavidyalaya, Jabalpur</td>
                            <td> Member</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <Footerpage />
        </>
    )
}

export default Internal_Complaint