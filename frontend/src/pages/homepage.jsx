import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={containerStyle}>
      <main style={mainContentStyle}>
        <h1 style={headingStyle}>
          Welcome to <span style={{ color: '#3fcaff' }}>SMART DHAN</span>
        </h1>
        <p style={subheadingStyle}>Your Gateway to Financial Freedom 💸</p>
        
        <div style={buttonContainerStyle}>
          <Link to="/login" style={buttonStyle}>Login</Link>
          <Link to="/signup" style={{ ...buttonStyle, marginLeft: '20px' }}>Sign Up</Link>
        </div>
      </main>
    </div>
  );
};

// Styling
const containerStyle = {
  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  color: 'white',
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  fontFamily: 'Segoe UI, sans-serif',
  overflow: 'hidden',
};

const mainContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const subheadingStyle = {
  fontSize: '1.2rem',
  fontWeight: '300',
  color: '#ddd',
  marginBottom: '30px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #3fcaff 0%, #0072ff 100%)',
  border: 'none',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '25px',
  boxShadow: '0 4px 24px rgba(63,202,255,0.15)',
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: '1.1rem',
  letterSpacing: '1px',
  transition: 'transform 0.2s, box-shadow 0.2s, background 0.3s',
  margin: '0 10px',
  display: 'inline-block',
  cursor: 'pointer',
};

const responsiveStyles = `
  @media (max-width: 900px) {
    .homepage-main {
      padding: 40px 10px !important;
      height: auto !important;
    }
    .homepage-heading {
      font-size: 2.1rem !important;
    }
    .homepage-subheading {
      font-size: 1.1rem !important;
    }
    .homepage-buttons {
      flex-direction: column !important;
      gap: 18px !important;
    }
    .homepage-buttons a {
      margin: 0 0 14px 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }
    .homepage-footer {
      font-size: 0.95rem !important;
      padding: 10px 0 !important;
    }
  }
`;

// Inject responsive styles
if (typeof document !== 'undefined' && !document.getElementById('homepage-responsive-styles')) {
  const style = document.createElement('style');
  style.id = 'homepage-responsive-styles';
  style.innerHTML = responsiveStyles;
  document.head.appendChild(style);
}

// Footer style
const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100vw',
  background: 'rgba(20, 30, 40, 0.85)',
  color: '#b0e0ff',
  textAlign: 'center',
  padding: '12px 0',
  fontSize: '1rem',
  letterSpacing: '2px',
  fontWeight: 500,
  zIndex: 100,
};

export default Homepage;
