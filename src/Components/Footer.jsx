import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Portfolio</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#191970',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'relative',
  bottom: '0',
  width: '100%',
  marginTop: '20px',
 }
 export default Footer