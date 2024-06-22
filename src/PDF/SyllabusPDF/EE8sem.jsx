import React from 'react';
import EE8SEM from "../SyllabusPDF/BENONCBSE/EEsem8.pdf";



function EE8sem() {
  return (
    <>
     
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EE8SEM}
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

export default EE8sem;


