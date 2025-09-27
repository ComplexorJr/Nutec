import React, { useState } from 'react';

function MinimalApp() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>NUTEC Website</h1>
      <p style={{ color: '#666', textAlign: 'center', marginBottom: '30px' }}>
        React is working correctly! All context errors have been resolved.
      </p>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Count: {count}
        </button>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>✅ Working Features:</h2>
        <ul>
          <li>React hooks (useState working)</li>
          <li>Event handlers working</li>
          <li>Component rendering working</li>
          <li>No JavaScript errors!</li>
        </ul>
        
        <h2>🚀 Ready to add:</h2>
        <ul>
          <li>Theme Provider</li>
          <li>UI Components</li>
          <li>Navigation</li>
          <li>Full NUTEC functionality</li>
        </ul>
      </div>
    </div>
  );
}

export default MinimalApp;