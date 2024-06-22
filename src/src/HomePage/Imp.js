import React from 'react'
import Imp1 from '../images/IMG_00011_page-0001.jpg'


const Imp = () => {
  return (
    <>
 
    <div style={{
      background: "linear-gradient(to right, #A9F1DF, #FFBBBB)",
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img
        src={Imp1}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          marginTop: '20px',
        }}
        alt="Scan"
      />
    </div>

    </>
  )
}

export default Imp
