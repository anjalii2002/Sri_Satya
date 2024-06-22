// import React from 'react'

// function Socialmedia() {
//   return (
//     <>
//     <style>{`
//     .sticky-icon  {
//         z-index:1;
//         position:fixed;
//         top:30%;
//         right:0%;
//         width:203px;
//         display:flex;
//         flex-direction:column;}  


//     .sticky-icon a  {
//         transform:translate(160px,0px);
//         border-radius:50px 0px 0px 50px;
//         text-align:left;
//         margin:3px;
//         text-decoration:none;
//         text-transform:uppercase;
//         padding:2px;
//         font-size:15px;
//         font-family:'Oswald', sans-serif;
//         transition:all 0.8s;}
//     .sticky-icon a:hover  {
//         color:#FFF;
//         transform:translate(0px,0px);}	
//     .sticky-icon a:hover i  {
//         transform:rotate(360deg);}
//     /*.search_icon a:hover i  {
//         transform:rotate(360deg);}*/
//     .Facebook  {
//         background-color:#2C80D3;
//         color:#FFF;}
        
//     .Youtube  {
//         background-color:#fa0910;
//         color:#FFF;}
        
//     .Twitter  {
//         background-color:#53c5ff;
//         color:#FFF;}
        
//     .Instagram  {
//         background-color:#FD1D1D;
//         color:#FFF;}
        
//     .Google  {
//         background-color:#d34836;
//         color:#FFF;}						
//     .sticky-icon a i {
//         background-color:#FFF;
//         height:305x;
//         width:32px;
//         color:#000;
//         text-align:center;
//         line-height:30px;
//         border-radius:50%;
//         margin-right:20px;
//         transition:all 0.5s;}
//     .sticky-icon a i.fa-facebook-f  {
//         background-color:#FFF;
//         color:#2C80D3;}
        
//     .sticky-icon a i.fa-google-plus-g  {
//         background-color:#FFF;
//         color:#d34836;}
        
//     .sticky-icon a i.fa-instagram  {
//         background-color:#FFF;
//         color:#FD1D1D;}
        
//     .sticky-icon a i.fa-youtube  {
//         background-color:#FFF;
//         color:#fa0910;}
        
//     .sticky-icon a i.fa-twitter  {
//         background-color:#FFF;
//         color:#53c5ff;}
//     .fas fa-shopping-cart  {
//         background-color:#FFF;}	
//     #myBtn {
//         height:50px;
//       display: none;
//       position: fixed;
//       bottom: 20px;
//       right: 30px;
//       z-index: 99;
//       text-align:center;
//       padding:1px;
//       text-align:center;
//         line-height:40px;
//       border: none;
//       outline: none;
//       background-color: #1e88e5;
//       color: white;
//       cursor: pointer;
//       border-radius: 50%;
//     }
//     .fa-arrow-circle-up  {
//         font-size:30px;}
    
//     #myBtn:hover {
//       background-color: #555;
//     }			
//     `}</style>
//   <link
//     rel="stylesheet"
//     href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
//   />
//   <link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//     crossOrigin="anonymous"
//   />
//   {/*Start Sticky Icon*/}
//   <div className="sticky-icon">
//     <a href="https://www.instagram.com/p/CW79qNsqynM/" className="Instagram">
//       <i className="fab fa-instagram" /> Instagram{" "}
//     </a>
//     <a href="https://www.facebook.com/www.sssutms.co.in" className="Facebook">
//       <i className="fab fa-facebook-f"> </i> Facebook{" "}
//     </a>
//     <a href="https://aboutme.google.com/u/0/?referer=gplus" className="Google">
//       <i className="fab fa-google-plus-g"> </i> Google +{" "}
//     </a>
//     <a href="https://www.youtube.com/@srisatyasaiuniversityoftec815" className="Youtube">
//       <i className="fab fa-youtube" /> Youtube{" "}
//     </a>
//     <a href="https://twitter.com/login" className="Twitter">
//       <i className="fab fa-twitter"> </i> Twitter{" "}
//     </a>
//   </div>
//   {/*End Sticky Icon*/}
// </>

//   )
// }

// export default Socialmedia

 import React from 'react'
 
 const Socialmedia = () => {
   return (
    <>
    <style>
      {
        `
//         body {
//   background-image: url(https://picsum.photos/3000/2000?image=1050);
//   background-size: cover;
//   background-position: center;
//   color: white;
//   font-family: tahoma;
//   height: 100vh;
// }


    

.social {
  position: fixed;
  top: 30%;

  
  z-index: 1000; /* Ensure this is higher than other elements */
}


.social ul {
  list-style-type: none;
  padding: 0;
  transform: translatex(-270px);
}

.social ul li {
  display: block;
  margin: 5px;
  background-color: #01204E;
  width: 300px;
  text-align: right;
  padding: 7px;
  margin-left:10px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
}

.social ul li:hover {
  transform: translatex(110px);
}

.social ul li.twitter:hover {
  background-color: #808836;
}

.social ul li.facebook:hover {
  background-color: #3b5999;
}

.social ul li.google-plus:hover {
  background-color: #543310;
}

.social ul li.instagram:hover {
  background-color: #e4405f;
}


.social ul li.youtube:hover {
  background-color: #FF7D29;
}
.social ul li a {
  color: white;
  text-decoration: none;
}

.social ul li i {
  text-align: center;
  margin-left: 20px;
  color: black;
  background-color: white;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  transform: rotate(0deg);
}

.social ul li:hover i {
  transform: rotate(360deg);
  transition: all 1s;
}`
      }
    </style>
   
    <nav className="social">
  <ul>
    <li className="twitter">
    <a href="https://twitter.com/login" >
        Twitter
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
    </li>
    <li className="facebook">
    <a href="https://www.facebook.com/www.sssutms.co.in">
        Facebook
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
    </li>
    <li className="google-plus">
      <a href="https://aboutme.google.com/u/0/?referer=gplus">
        Google
        <i className="fa fa-google-plus" aria-hidden="true" />
      </a>
    </li>
    <li className="instagram">
    <a href="https://www.instagram.com/p/CW79qNsqynM/" >
        Instagram
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
    </li>







    <li className="youtube">
    <a href="https://www.youtube.com/@srisatyasaiuniversityoftec815" >
     YouTube
     <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
</>
   )
 }
 
 export default Socialmedia