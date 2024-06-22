import React from 'react';
import EC1SEM from "../SyllabusPDF/BENONCBSE/ECsem1.pdf";



function EC1sem() {
  return (
    <>
     
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EC1SEM}
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

export default EC1sem;


