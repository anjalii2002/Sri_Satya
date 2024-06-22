import React from 'react';
 import MIE1SEM from "../SyllabusPDF/BENONCBSE/MIEsem1.pdf";

import { RefreshCw } from 'lucide-react';


function MIE1sem() {
    
  return (
    <>
     
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={MIE1SEM}
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

export default MIE1sem ;





