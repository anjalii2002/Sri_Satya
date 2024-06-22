import React from 'react';
 import ME8SEM from "../SyllabusPDF/BENONCBSE/MEsem8.pdf";

import { RefreshCw } from 'lucide-react';


function ME8sem() {
    
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={ME8SEM}
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

export default ME8sem ;





