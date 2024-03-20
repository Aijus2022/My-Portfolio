import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const iconStyle = { color: 'white', fontSize: '24px', margin: '10px' };
  const textStyle = { color: 'salmon', margin: '10px 0', fontSize: '18px' };

  return (
    <div>
      {/* Hero Image */}
      <img src="/images/bridge-turkey-istambul.jpg" alt="Hero Image" style={{ width: '100%', height: 'auto' }} />

      {/* Content */}
      <div style={{ backgroundColor: '#000', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'salmon' }}>Let's Connect!</h1>
        <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        
        <div>
          <div style={textStyle}>Check out my GitHub for recent projects:</div>
          <a href="https://github.com/Aijus2022" style={iconStyle}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
        <div>
          <div style={textStyle}>Connect with me on LinkedIn:</div>
          <a href="https://www.linkedin.com/in/aija-jusupova-web-developer/" style={iconStyle}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        
        <div>
          <div style={textStyle}>Follow me on Twitter for updates:</div>
          <a href="https://twitter.com/Aijus010101" style={iconStyle}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        
        <div>
          <div style={textStyle}>Give me a call:</div>
          <a href="tel:+1234567890" style={iconStyle}>
            <FontAwesomeIcon icon={faPhone} /> 44 (073) 613-250-53
          </a>
        </div>
        
        <div>
          <div style={textStyle}>Or send me an email:</div>
          <a href="mailto:vivaaija@egmail.com" style={iconStyle}>
            <FontAwesomeIcon icon={faEnvelope} /> vivaaija@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
