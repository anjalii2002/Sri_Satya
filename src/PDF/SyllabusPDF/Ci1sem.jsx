import React from 'react';
import CI1SEM from "../SyllabusPDF/BENONCBSE/CI1sem.pdf";


function  Ci1sem() {
  return (
    <>
   
   
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CI1SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '1px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
     
     
    </>
  );
}

export default  Ci1sem;


