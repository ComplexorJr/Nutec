import React from 'react';

function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>NUTEC Website Test</h1>
      <p>If you can see this, React is working correctly!</p>
      <button onClick={() => alert('React is working!')}>
        Test Button
      </button>
    </div>
  );
}

export default TestApp;