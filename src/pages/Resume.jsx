import React from 'react';

const Resume = () => {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
           
      <h1>My Resume</h1>
      <p>View my resume:</p>
      {/* Link to view the resume */}
      <iframe title="My Resume" src="/images/CV.pdf" style={{ width: '100%', height: '500px' }} />

      <p style={{ marginTop: '20px' }}>Download my resume:</p>
      {/* Link to download the resume */}
      <a href="/images/CV.pdf" download style={buttonStyle}>Download Resume</a>
    </div>
  );
}

// Styles
const linkStyle = {
  padding: '10px 20px',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px'
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: '#fff',
  textDecoration: 'none',
  display: 'inline-block'
};

export default Resume;
