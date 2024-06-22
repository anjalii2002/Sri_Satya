import React from 'react';
 import ME4SEM from "../SyllabusPDF/BENONCBSE/MEsem4.pdf";

import { RefreshCw } from 'lucide-react';


function ME4sem() {
    
  return (
    <>
  
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={ME4SEM}
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

export default ME4sem ;





