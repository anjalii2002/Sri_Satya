import React from 'react';
import EEE4SEM from "../SyllabusPDF/BENONCBSE/EEEsem4.pdf";



function EEE4sem() {
  return (
    <>
 
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EEE4SEM}
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

export default EEE4sem;


