import React from 'react';
// import IT8SEM from "../SyllabusPDF/IT8sem.pdf";

import { RefreshCw } from 'lucide-react';


function  IT8sem() {
    
  return (
    <>
      
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
        //   src={IT8SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '20px',
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

export default IT8sem;





