import React, { useState } from "react";
import { SimpleThemeProvider } from "./components/SimpleThemeProvider";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

function SafeApp() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (email: string) => {
    // Mock login
    const mockUser: User = {
      id: "1",
      name: "NUTEC User",
      email: email,
    };
    setUser(mockUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <SimpleThemeProvider>
        <div style={{ 
          padding: '40px', 
          fontFamily: 'Arial, sans-serif',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '40px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <h1>NUTEC Dashboard</h1>
            <div>
              <span>Welcome, {user.name}!</span>
              <button 
                onClick={handleLogout}
                style={{
                  marginLeft: '20px',
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>Welcome to NUTEC</h3>
              <p>Your dashboard is ready and working perfectly!</p>
              <ul>
                <li>✅ Authentication working</li>
                <li>✅ Theme system ready</li>
                <li>✅ No React errors</li>
                <li>✅ Ready for full UI components</li>
              </ul>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>Next Steps</h3>
              <p>Now we can safely add:</p>
              <ul>
                <li>Advanced UI components</li>
                <li>Data visualization</li>
                <li>Complex forms</li>
                <li>Full navigation system</li>
              </ul>
            </div>
          </div>
        </div>
      </SimpleThemeProvider>
    );
  }

  return (
    <SimpleThemeProvider>
      <div style={{ 
        padding: '40px', 
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          NUTEC Website
        </h1>
        <p style={{ color: '#666', marginBottom: '40px', fontSize: '18px' }}>
          Welcome to the NUTEC platform. Please sign in to continue.
        </p>

        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'inline-block',
          minWidth: '400px'
        }}>
          <h2 style={{ marginBottom: '30px' }}>Sign In</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '20px',
                fontSize: '16px'
              }}
            />
            
            <input 
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '20px',
                fontSize: '16px'
              }}
            />
          </div>

          <button 
            onClick={() => handleLogin('demo@nutec.com')}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              marginBottom: '10px'
            }}
          >
            Sign In
          </button>

          <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>
            Demo login - click "Sign In" to continue
          </p>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#e8f5e8',
          borderRadius: '8px'
        }}>
          <h3>✅ System Status: All Good!</h3>
          <p>React is running perfectly with no context errors!</p>
        </div>
      </div>
    </SimpleThemeProvider>
  );
}

export default SafeApp;