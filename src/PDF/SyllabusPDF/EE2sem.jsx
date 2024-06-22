import React from 'react';
import EE2SEM from "../SyllabusPDF/BENONCBSE/EEsem2.pdf";



function EE2sem() {
  return (
    <>
      
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EE2SEM}
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

export default EE2sem;


