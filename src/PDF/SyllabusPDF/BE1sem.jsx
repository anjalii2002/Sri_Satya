import React from 'react';
import BE1SEM from "../SyllabusPDF/BENONCBSE/BE1semm.pdf"

function BE1sem() {
  return (
    <>
     
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BE1SEM}
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

export default BE1sem;

