import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter,} from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header style={{ backgroundColor: '#191970', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        {/* Assuming you have a logo or similar */}
        <span>🌟 Aijamal Jusupova </span>
      </div>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/resume" style={{ color: 'white', textDecoration: 'none' }}>Resume</Link></li>
                    <li style={{ margin: '0 10px' }}>
            <a href="https://github.com/yourusername" style={{ color: 'white', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://linkedin.com/in/yourusername" style={{ color: 'white', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href="https://twitter.com/yourusername" style={{ color: 'white', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          {/* Telephone Icon */}
          <li style={{ margin: '0 10px' }}>
            <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faPhone} /> +44 (073) 623-150-53
            </a>
          </li>
          {/* Email Icon */}
          <li style={{ margin: '0 10px' }}>
            <a href="mailto:vivaaija@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faEnvelope} /> vivaaija@gmail.com
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

