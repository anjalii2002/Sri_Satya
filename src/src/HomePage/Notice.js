import React from 'react';
import exa from '../images/Notice_Copy_page-0001.jpg';


const Notice = () => {
  return (
    <>

    <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: '5%', boxSizing: 'border-box' }}>
      <img
        src={exa}
        style={{ width: '100%', maxWidth: '550px', height: 'auto', margin: '0 auto', display: 'block' }}
        alt="Scan"
      />
    </div>

    </>
  );
};

export default Notice;
