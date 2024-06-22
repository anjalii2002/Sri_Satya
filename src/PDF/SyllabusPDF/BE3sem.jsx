

import React from 'react';
import BE3SEM from "../SyllabusPDF/BENONCBSE/BE3sem.pdf";

function BE3sem() {
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BE3SEM}
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

export default BE3sem;

