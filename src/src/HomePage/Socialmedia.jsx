import React from 'react'

function Socialmedia() {
  return (
    <>
    <style>{`
    .sticky-icon  {
        z-index:1;
        position:fixed;
        top:30%;
        right:0%;
        width:203px;
        display:flex;
        flex-direction:column;}  


    .sticky-icon a  {
        transform:translate(160px,0px);
        border-radius:50px 0px 0px 50px;
        text-align:left;
        margin:3px;
        text-decoration:none;
        text-transform:uppercase;
        padding:2px;
        font-size:15px;
        font-family:'Oswald', sans-serif;
        transition:all 0.8s;}
    .sticky-icon a:hover  {
        color:#FFF;
        transform:translate(0px,0px);}	
    .sticky-icon a:hover i  {
        transform:rotate(360deg);}
    /*.search_icon a:hover i  {
        transform:rotate(360deg);}*/
    .Facebook  {
        background-color:#2C80D3;
        color:#FFF;}
        
    .Youtube  {
        background-color:#fa0910;
        color:#FFF;}
        
    .Twitter  {
        background-color:#53c5ff;
        color:#FFF;}
        
    .Instagram  {
        background-color:#FD1D1D;
        color:#FFF;}
        
    .Google  {
        background-color:#d34836;
        color:#FFF;}						
    .sticky-icon a i {
        background-color:#FFF;
        height:305x;
        width:32px;
        color:#000;
        text-align:center;
        line-height:30px;
        border-radius:50%;
        margin-right:20px;
        transition:all 0.5s;}
    .sticky-icon a i.fa-facebook-f  {
        background-color:#FFF;
        color:#2C80D3;}
        
    .sticky-icon a i.fa-google-plus-g  {
        background-color:#FFF;
        color:#d34836;}
        
    .sticky-icon a i.fa-instagram  {
        background-color:#FFF;
        color:#FD1D1D;}
        
    .sticky-icon a i.fa-youtube  {
        background-color:#FFF;
        color:#fa0910;}
        
    .sticky-icon a i.fa-twitter  {
        background-color:#FFF;
        color:#53c5ff;}
    .fas fa-shopping-cart  {
        background-color:#FFF;}	
    #myBtn {
        height:50px;
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      text-align:center;
      padding:1px;
      text-align:center;
        line-height:40px;
      border: none;
      outline: none;
      background-color: #1e88e5;
      color: white;
      cursor: pointer;
      border-radius: 50%;
    }
    .fa-arrow-circle-up  {
        font-size:30px;}
    
    #myBtn:hover {
      background-color: #555;
    }			
    `}</style>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossOrigin="anonymous"
  />
  {/*Start Sticky Icon*/}
  <div className="sticky-icon">
    <a href="https://www.instagram.com/p/CW79qNsqynM/" className="Instagram">
      <i className="fab fa-instagram" /> Instagram{" "}
    </a>
    <a href="https://www.facebook.com/www.sssutms.co.in" className="Facebook">
      <i className="fab fa-facebook-f"> </i> Facebook{" "}
    </a>
    <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
      <i className="fab fa-google-plus-g"> </i> Google +{" "}
    </a>
    <a href="https://www.youtube.com/@srisatyasaiuniversityoftec815" className="Youtube">
      <i className="fab fa-youtube" /> Youtube{" "}
    </a>
    <a href="https://twitter.com/login" className="Twitter">
      <i className="fab fa-twitter"> </i> Twitter{" "}
    </a>
  </div>
  {/*End Sticky Icon*/}
</>

  )
}

export default Socialmedia

 