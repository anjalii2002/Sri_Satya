import React from "react";
import { Link } from "react-router-dom";
import "./Erp.css";
import OnlyHeader from "../../AdminComponent/OnlyHeader";
import student from "../../images/student.png";
import employee from "../../images/employee.png";
import certificate from "../../images/ErpCertificate.png";
import shop from "../../images/ErpShop.png";
import library from "../../images/ErpLibrary.png";
import adminn from "../../images/adminn.png";

const Card = ({ image, title, description, link }) => (
  <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className="card" style={{ marginTop: "20px" }}>
        <div className="card-body">
          <div className="card-image" style={{ color: "#213661" }}>
            <img
              src={image}
              style={{ width: "100px", height: "100px", textAlign: "center" }}
              alt={title}
            />
          </div>
          <p className="card-text">{title}</p>
          <p style={{ color: "black", fontSize: "14px", textAlign: "center" }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

function Cards() {
  return (
    <>
      <OnlyHeader />
      <div className="erpBG">
        <div className="cardCont">
          <div className="container" style={{ marginTop: 65 }}>
            <div className="row">
              <Card
                image={student}
                title="STUDENT LOGIN"
                description="Click here for Student Login"
                link="/erp/studentlogin"
              />
              <Card
                image={employee}
                title="HOD LOGIN"
                description="Click here for Hod Login"
                link="/erp/hodlogin"
              />
              <Card
                image={adminn}
                title="ADMIN LOGIN"
                description="Click here for Admin Login"
                link="/adminlogin"
              />
            </div>
            <div className="row">
              <Card
                image={library}
                title="WEB MAIL LOGIN"
                description="Click here for Web Mail Login"
                link=""
              />
              <Card
                image={certificate}
                title="ACTIVE USER LOGIN"
                description="Click here for Active your user Login"
                link=""
              />
              <Card
                image={shop}
                title="QUICK ADMISSION PORTAL"
                description="Click here for Quick admission portal"
                link=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;



