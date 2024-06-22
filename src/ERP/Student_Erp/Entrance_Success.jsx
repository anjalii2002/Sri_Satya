import React from "react";
import { Link, useLocation } from "react-router-dom";
import checked from "../../images/checked.png";
import logo from "../../AdminComponent/12.png"
import jsPDF from "jspdf";

function Entrance_Success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const orderId = queryParams.get("orderId");
    const transactionTime = new Date(queryParams.get("TxDate"));
    const bankTransactionId = queryParams.get("BankTxnId");
    const Amount = queryParams.get("Transamount");
    const paymentMode = queryParams.get("paymentMode");
    const TxnID = queryParams.get("txnId");
    const Name = queryParams.get("Name");
    const FName = queryParams.get("FName");
    const email = queryParams.get("email");
    const mobile = queryParams.get("mobile");

    // console.log(Amount, "amount")
    const formattedDate = transactionTime.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    const formattedTime = transactionTime.toLocaleTimeString('en-IN', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit'
    });
    // console.log(formattedDate, formattedTime)

  

    // function addHeader(doc, text) {
    //     doc.setFont("helvetica", "bold");
    //     doc.setTextColor(...styles.header.color);
    //     doc.setFontSize(styles.header.fontSize);
    //     doc.text(text, 105, 15, { align: styles.header.align });
    // }


    // function addSubHeader(doc, text) {
    //     doc.setFont("helvetica");
    //     doc.setTextColor(...styles.subHeader.color);
    //     doc.setFontSize(styles.subHeader.fontSize);
    //     doc.text(text, 105, 30, { align: "center" });
    //     // doc.text(text, 105, doc.autoTable.previous.finalY + styles.subHeader.marginBottom, "center");
    // }

    // function addNormalText(doc, text, yPos) {
    //     doc.setFont("helvetica");
    //     doc.setTextColor(...styles.normalText.color);
    //     doc.setFontSize(styles.normalText.fontSize);
    //     doc.text(text, 10, yPos || 20); // Adjust the Y position as needed
    // }
    // function addBoldText(doc, text, yPos) {
    //     doc.setFont("helvetica", "bold");
    //     doc.setTextColor(...styles.boldText.color);
    //     doc.setFontSize(styles.boldText.fontSize);
    //     doc.text(text, 10, yPos || 20); // Adjust the Y position as needed
    // }




    // const generatePDF = () => {
    //     const doc = new jsPDF();

    //     // Add header
    //     addHeader(doc, "SRI SATYA SAI UNIVERSITY OF TECHNOLOGY AND MEDICAL SCIENCES SEHORE");

    //     // Add sub-header
    //     addSubHeader(doc, "[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]");

    //     // Add normal text
    //     addNormalText(doc, "Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,", 40); // Provide a valid Y position
    //     // Add bold text
    //     addBoldText(doc, `Name of Candidate: ${Name}`, 60); // Provide a valid Y position
    //     addBoldText(doc, `Father Name: ${FName}`);
    //     addBoldText(doc, `Email: ${email}`);

    //     doc.save("payment_success.pdf");
    // };


    const generatePDF = () => {
        const doc = new jsPDF();
        doc.addImage(logo, "JPEG", 3, 5, 30, 28);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("SRI SATYA SAI UNIVERSITY OF TECHNOLOGY AND MEDICAL ", 118, 10, { align: "center" });
        doc.text("SCIENCES SEHORE", 118, 17, { align: "center" });
        doc.setFontSize(13);
        doc.text("[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]", 118, 24, { align: "center" });
        doc.text("Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,", 118, 30, { align: "center" });
        doc.text("Fee Receipt", 110, 40, { align: "center", color:"red" });
        const yPos = 60;

        doc.setFontSize(12);
        doc.text(`                                           Name of Candidate  :  ${Name}`,10, 60);
        doc.text(`                                           Father Name             :  ${FName}`, 10, 70);
        doc.text(`                                           Email                         :  ${email}`, 10, 80);
        doc.text(`                                           Mobile                       :  ${mobile}`, 10, 90);
        doc.text(`                                           TXN ID                       :  ${TxnID}`, 10, yPos + 40);
        doc.text(`                                           ORDER ID                 :  ${orderId}`, 10, yPos + 50);
        doc.text(`                                           PAYMENT MODE     :  ${paymentMode}`, 10, yPos + 60);
        doc.text(`                                           BANKTXN ID            :  ${bankTransactionId}`, 10, yPos + 70);
        doc.text(`                                           Paid Amount            :  ${Amount}`, 10, yPos + 80);
        doc.text(`                                           Date & Time             :  ${formattedDate}   ${formattedTime}`, 10, yPos + 90);

        doc.save("payment_success.pdf");


        console.log(doc,"docssss")
    };


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
        height:20%;
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
      h6 {
        margin-top: 20px; /* Add margin to the top of the heading */
      }
     .top{
        text-align: center; 
        margin-bottom:30px;
     }
      .bottom {
        display: flex;
        justify-content: center;
        gap:60px;
      }
      .animated-button {
        display: inline-block;
        padding: 5px 40px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 5px;
        background: green;
        // background: linear-gradient(to right, #FF5F6D, #FFC371);
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
                    background: "#F5F5F5",
                    // background: "linear-gradient(to right, #A9F1DF , #FFBBBB)",
                    // minHeight: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="card">
                    <div className="top">
                        <img src={checked} alt="check" height="20%" width="20%" />
                        <h4>Hello, {Name} Your Payment has been Successful</h4>
                        <h6>Date:  {formattedDate}{" "}{formattedTime}</h6>
                        <h5 style={{ color: "red" }}>Paid Amount: <b> ₹ {Amount}</b></h5>
                    </div>
                    <div className="bottom">
                        <div>
                            <p>Father Name </p>
                            <p>Email</p>
                            <p>Mobile</p>


                            <p>TXN ID</p>
                            <p> ORDER ID</p>
                            <p>PAYMENT MODE</p>
                            <p> BANKTXN ID</p>

                        </div>
                        <div>

                            <p> {FName} </p>
                            <p>{email} </p>
                            <p> {mobile} </p>
                            <p>{TxnID} </p>
                            <p> {orderId} </p>
                            <p>{paymentMode} </p>
                            <p> {bankTransactionId} </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "70px" }}>
                        <button onClick={generatePDF} className="animated-button">Print</button>
                        <Link to='/'><button className="animated-button">Close</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Entrance_Success;




