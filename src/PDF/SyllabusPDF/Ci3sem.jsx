import React from 'react';
import CI3SEM from "../SyllabusPDF/BENONCBSE/CI3sem.pdf";



function  Ci3sem() {
  return (
    <>


      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CI3SEM}
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

export default  Ci3sem;


