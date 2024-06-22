

import React from "react";
import { Link, useLocation } from "react-router-dom";
import checked from "../../images/checked.png";
import jsPDF from "jspdf";

function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const orderId = queryParams.get("orderId");
  const transactionTime = new Date(queryParams.get("TxDate"));
  const bankTransactionId = queryParams.get("BankTxnId");
  const Amount = queryParams.get("Transamount");
  const paymentMode = queryParams.get("paymentMode");
  const TxnID = queryParams.get("txnId");
  // const Name = queryParams.get("Name");
  // const FName = queryParams.get("FName");
  // const email= queryParams.get("email");
  // const mobile= queryParams.get("mobile");

  // console.log(Amount, "amount")
  const formattedDate = transactionTime.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Formatting time (Indian time)
  const formattedTime = transactionTime.toLocaleTimeString('en-IN', {
    hour12: false, // Use 24-hour format
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  // console.log(formattedDate,formattedTime)    

  return (
    <>
      <style>
        {`
                p{
                    margin-bottom:8px;
                }
      .card {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 40%; /* Adjust as needed */
        max-width: 800px; /* Set a maximum width if needed */
        height:80%;
        margin: 20px auto; /* Center the card horizontally */
        text-align: left; /* Center text within the card */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      img {
        display: block; /* Ensure the image is a block element */
        margin: 0 auto; /* Center the image within its container */
      }

      h4 {
        margin-top: 20px; /* Add margin to the top of the heading */
      }
     .top{
        text-align: center; 
        margin-bottom:50px;
     }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
      .animated-button {
        display: inline-block;
        padding: 8px 60px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 5px;
        background: linear-gradient(to right, #FF5F6D, #FFC371);
        color: #fff;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .animated-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
      }

      @media screen and (max-width: 600px) {
        .card {
          width: 80%; /* Adjust width for smaller screens */
        }
      }
    `}
      </style>
      <div
        style={{
          background: "linear-gradient(to right, #A9F1DF , #FFBBBB)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <div className="top">
            <img src={checked} alt="check" height="20%" width="20%" />
            <h4> Your Payment has been Successful</h4>
            <h6>Date:  {formattedDate}{" "}{formattedTime}</h6>
            <h5 style={{ color: "red" }}>Paid Amount: <b> ₹ {Amount}</b></h5>
          </div>
          <div className="bottom">
            <div>


              <p>TXN ID</p>
              <p> ORDER ID</p>
              <p>PAYMENT MODE</p>
              <p> BANKTXN ID</p>

            </div>
            <div>


              <p>{TxnID} </p>
              <p>{orderId} </p>
              <p>{paymentMode} </p>
              <p>{bankTransactionId} </p>

            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="animated-button">Print</button>
            <Link to='/'><button className="animated-button">Close</button></Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Success;




