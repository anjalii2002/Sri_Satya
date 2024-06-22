
import React from 'react';
import BE2SEM from "../SyllabusPDF/BENONCBSE/BE2sem.pdf";

function BE2sem() {
  return (
    <>
 
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BE2SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '40px',
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

export default BE2sem;

