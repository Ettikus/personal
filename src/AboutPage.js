// AboutPage.js
import React from 'react';
import Navigation from './Navigation';
import './App.css'; // Import CSS file

function AboutPage() {
  const orangeColor = '#5fdbfa'; // Define the orange color
  const redColor = '#fd893c'; // Define the red color

  return (
    <div className="about-page">
      <div className="container">
        <div className="header">
          <h1>About Me</h1>
          <p style={{ color: orangeColor }}>
            Hello! I'm Ettienne Marais, a seasoned IT professional with a passion for web development. With over 15 years of experience in the dynamic IT industry, I've honed my skills and expertise to deliver exceptional results in web development projects.
          </p>
          <br /> {/* Space between paragraphs */}
          <p style={{ color: redColor }}>
            My journey began over a decade ago, and since then I've immersed myself in various facets of IT, specializing particularly in web development for the past five years. From crafting responsive and visually appealing websites to optimizing user experience and functionality, I thrive on the creative and technical challenges that web development presents.
          </p>
          <br /> {/* Space between paragraphs */}
          <p style={{ color: orangeColor }}>
            My dedication to staying updated with the latest technologies and trends in the ever-evolving digital landscape ensures that my work remains at the forefront of innovation. Whether it's coding elegant solutions, troubleshooting complex issues, or collaborating with cross-functional teams, I approach every project with enthusiasm and a commitment to excellence.
          </p>
          <br /> {/* Space between paragraphs */}
          <p style={{ color: redColor }}>
            Outside of work, I am a sports fanatic and a lover of food. When I'm not immersed in lines of code, you can find me cheering for my favorite teams, or exploring new culinary delights.
          </p>
          <br /> {/* Space between paragraphs */}
          <p style={{ color: orangeColor }}>
            I'm excited about the endless possibilities that lie ahead in the realm of web development and look forward to leveraging my skills and experience to create impactful digital experiences that make a difference. Let's connect and embark on a journey to transform ideas into reality!
          </p>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default AboutPage;
