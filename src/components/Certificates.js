import React from 'react';
import './certificates.css'; // Import your CSS file

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="c">My Certificates</h2>
      <div className="certificate-item">
        <h3 className="certificate-title">Programming Foundations With Javascript,HTML and CSS.</h3>
        <p className="certificate-description">
          Completed in virtual mode  through Coursera on Nov 2022 and issued by Duke University.
        </p>
        <a
          className="certificate-link"
          href="https://drive.google.com/file/d/1IwS_kRsP2J_H1L-t4TnTSF69CMk78Jev/view?usp=sharing" // Replace with your certificate link
          target=""
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
      <div className="certificate-item">
        <h3 className="certificate-title">Full Stack</h3>
        <p className="certificate-description">
          Completed in virtual mode  through Naan Mudhalvan on Nov 2022 and issued by Infosys Springboard.
        </p>
        <a
          className="certificate-link"
          href="https://drive.google.com/file/d/13p7ClUDW94TrGi9VgWD88F2Po3qA48_b/view?usp=sharing" // Replace with your certificate link
          target=""
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
      <div className="certificate-item">
        <h3 className="certificate-title">Internship Certificate </h3>
        <p className="certificate-description">
          Completed in virtual mode  through Coursera on June 2023 to july 2023 and issued by Exposys Data Labs.
        </p>
        <a className="certificate-link" href="https://drive.google.com/file/d/1nqg4KPZQD52pCyHCOLo2syKhQ0QZoUCp/view?usp=sharing" target="" rel="noopener noreferrer" >
          View Certificate
        </a>
      </div>
      <div className="certificate-item">
        <h3 className="certificate-title">Crash Course on Python </h3>
        <p className="certificate-description">
          Completed in virtual mode  through Coursera on Sept 2024 and issued by Google.
        </p>
        <a className="certificate-link" href="https://drive.google.com/file/d/1WKLa_O4RpM4Pk78QYugcN8cVdN4Ecn9O/view?usp=sharing" target="" rel="noopener noreferrer" >
          View Certificate
        </a>
      </div>
      
    </section>
  );
};

export default Certificates;