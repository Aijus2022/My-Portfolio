import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const buttonStyle = {
        padding: '10px 20px',
        margin: '0 10px',
        backgroundColor: '#007bff',
        textDecoration: 'none',
        borderRadius: '5px',
        display: 'inline-block',
        transition: 'background-color 0.3s',
        color: 'white', // Make sure text is visible against the background
    };

    const backgroundStyle = {
        height: '100vh', // Adjusted to 'auto' to accommodate the content
        background: `url('/images/night-3505_512.gif') no-repeat center center`,
        backgroundSize: 'cover',
        color: 'white', // Ensure text color is set for visibility
        padding: '20px', // Add some padding to ensure content does not stick to the edges
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Align items in the center for a neat look
        justifyContent: 'center', // Center content vertically
    };

    return (
        <section style={backgroundStyle}>
                <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate Front-End Developer dedicated to building responsive, user-friendly websites and web applications. With a keen eye for design and a strong foundation in HTML, CSS, JavaScript, React, and other modern development tools and practices, I strive to create engaging user experiences.</p>
            <p>Technologies I love working with include:</p>
            <ul>
                <li>React & Redux for state-of-the-art single-page applications</li>
                <li>TypeScript for robust and error-free code</li>
                <li>Sass & Styled Components for dynamic styling</li>
                <li>Webpack & Babel for efficient bundling and transpilation</li>
            </ul>
            <p>Interested in seeing my work? Check out my projects or get in touch!</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link to="/projects" style={buttonStyle}>View Projects</Link>
                <Link to="/resume" style={buttonStyle}>My Resume</Link>
                <Link to="/contact" style={buttonStyle}>Let's Connect</Link>
            </div>
        </section>
    );
}

export default HomePage;


