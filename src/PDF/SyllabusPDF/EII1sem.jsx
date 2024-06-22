import React from 'react';
import EI1SEM from "../SyllabusPDF/BENONCBSE/EIsem1.pdf";

import { RefreshCw } from 'lucide-react';


function  EII1sem() {
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EI1SEM}
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

export default EII1sem;





