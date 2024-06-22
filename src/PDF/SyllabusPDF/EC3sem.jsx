import React from 'react';
import EC3SEM from "../SyllabusPDF/BENONCBSE/ECsem3.pdf";


function EC3sem() {
  return (
    <>
      
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EC3SEM}
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

export default EC3sem;


