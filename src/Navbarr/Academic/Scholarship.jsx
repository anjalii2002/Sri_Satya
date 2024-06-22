import React from 'react'
import Nav from '../../HomePage/Nav'
import Footerpage from '../../HomePage/Footerpage'
import scholarship2 from '../../images/libr.webp'

const  Scholarship= () => {
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



 
  
  
  
               `
        }
    </style>
    <Nav/>
    <div className='anti'>
        <img src={scholarship2} style={{height:'300px',width:'100%'}} alt="Library" />
      
      </div>
      <div data-aos='fade-right' className='title aos-init aos-animate' style={{ marginTop: '40px', marginLeft: '50px' }}>
                <h4>Scholarship</h4>
               
            </div>
            <br></br>
     
      <div className='enter'>
      
      
    
        <p className='enterp1'>Government of Madhya Pradesh has introduced scholarship schemes for students belonging to reserved classes i.e. Scheduled caste (SC)/ Scheduled Tribes(ST) & Other Backward Castes (OBC- Non creamy Layer) pursuing higher education. For availing benefits under these schemes, candidates can apply online on web site of Adim Jati Kalyan Vibhag.</p>
     
        
       
        <p className='enterp' style={{fontWeight:700,marginLeft:'30px'}}>Similar schemes are available for students belonging to minority Communities.</p>
        </div>
   
        <p className='enterp1' style={{marginLeft:'30px'}}> The University has committed officials in scholarship department to help students applying for scholarship schemes in & outside Madhya Pradesh.</p>
 <Footerpage/>
    </>
  )
}

export default  Scholarship