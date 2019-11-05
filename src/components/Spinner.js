import React from 'react';

const Spinner = () => (
  <div className="d-flex justify-content-center" style={{ alignItems: 'center', height: '100vh' }}>
    <div className="spinner-border text-warning" style={{ width: '5rem', height: '5rem' }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
