// HomePage.js
import React from 'react';
import Navigation from './Navigation';
import './App.css'; // Import CSS file

function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="header">
          <h1>Welcome to My Personal Website!</h1>
          <p style={{ color: '#5fdbfa' }}>
            I'm Ettienne Marais, a passionate web developer with a focus on creating dynamic and engaging online experiences. With a strong foundation in web development technologies and a knack for creativity, I'm here to turn your ideas into reality.
          </p>
          <br />
          <p style={{ color: '#fd893c' }}>
            As a seasoned developer, I possess a wide range of skills in HTML, CSS, and JavaScript, allowing me to craft beautiful and functional websites from scratch. I'm also proficient in modern frameworks like React, empowering me to build responsive and interactive user interfaces that captivate audiences.
          </p>
          <p style={{ color: '#5fdbfa' }}>
            In addition to front-end development, I'm well-versed in server-side programming languages such as Python, along with frameworks like Flask, Django, Node.js, and Express. This expertise enables me to develop robust and scalable web applications that meet your specific requirements.
          </p>
          <br />
          <p style={{ color: '#fd893c' }}>
            But my skills don't stop there. I leverage the power of cloud computing and artificial intelligence to enhance the performance and capabilities of your web projects. From deploying applications to the cloud to implementing AI-driven features, I'm dedicated to staying at the forefront of technological innovation.
          </p>
          <br />
          <p style={{ color: '#5fdbfa' }}>
            Whether you're a business owner looking to establish an online presence or an individual with a unique project in mind, I'm here to help bring your vision to life. Let's work together to create something extraordinary and make your mark on the digital landscape.
          </p>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default HomePage;
