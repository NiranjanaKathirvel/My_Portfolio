import React from 'react';
import './footer.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:niranjana3903@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/niranjana-kathirvel-4ba49b235/";
  };

  const handleGitHubClick = () => {
    window.location.href = "https://github.com/NiranjanaKathirvel";
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="contact-info">
          <h2 className="contact-title">Contact Me</h2>
        </section>
        <div className="social-icons">
          <a href="mailto:niranjana3903@gmail.com" className="social-icon" title="Email" onClick={handleEmailClick}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/niranjana-kathirvel-4ba49b235/" className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn" onClick={handleLinkedInClick}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/NiranjanaKathirvel" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub" onClick={handleGitHubClick}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Niranjana Kathirvel
      </div>
    </footer>
  );
};

export default Contact;