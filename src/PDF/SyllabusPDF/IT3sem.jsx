import React from 'react';
import IT3SEM from "../SyllabusPDF/BENONCBSE/ITsem3.pdf";

import { RefreshCw } from 'lucide-react';


function  IT3sem() {
  return (
    <>
  
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={IT3SEM}
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

export default IT3sem;





