import React from 'react';
import CA7SEM from "../SyllabusPDF/BENONCBSE/BE7sem.pdf";



function CA7sem() {
  return (
    <>

            <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CA7SEM}
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

export default CA7sem;


