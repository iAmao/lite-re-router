import React from 'react';
import Back from './Back';


export default () => {
  return (
    <div style={{
      position: 'absolute',
      textAlign: 'center',
      top: '45vh',
      width: '100vw'
    }}>
      <h2>404!</h2>
      <h3>Page not found</h3>
      <br />
      <Back
        style={{
          color: '#fff',
          cursor: 'pointer',
          padding: '10px 20px',
          backgroundColor: '#333'
        }}
      >
        Go Back
      </Back>
    </div>
  )
}
