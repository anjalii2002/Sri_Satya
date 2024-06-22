import React from 'react';
import CA5SEM from "../SyllabusPDF/BENONCBSE/CA5sem.pdf";


function CA5sem() {
  return (
    <>
    
            <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CA5SEM}
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

export default CA5sem;


