import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="p">My Projects</h2>
      <div className="project">
        <h3 className="project-title">Online Burger Selling Website</h3>
        <p className="project-description"> <b>FRONT END</b><br />
          Designed and implemented a intuitive front end using HTML, CSS, and JavaScript for an interactive online burger
          customization website.Enabled users to seamlessly customize their burgers by choosing from over 20 ingredients across different
          categories, with options to adjust quantities dynamically. <br /><br />
          <b>BACK END</b><br />
          Implemented Flask framework with MySQL to manage user authentication and securely store customized burger
          configurations.
          Employed validation techniques to maintain data integrity and reliability, validating user inputs before storing them
          in the database to ensure consistency and accuracy.</p>
        <p><b>Tecnologies Used</b> - Javascript,HTML,CSS,Flask,MySQL</p>
        <a className="project-link" href="https://github.com/NiranjanaKathirvel/Online-Burger-Selling-website/tree/main/Burger.com" target="" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project">
        <h3 className="project-title">Brain Tumor Detection </h3>
        <p className="project-description"> Developed an advanced machine learning model to detect brain tumors from MRI images using Python,
          TensorFlow/Keras, OpenCV, and scikit-learn.
          Processed and augmented public MRI datasets, achieving a 90 percentage detection accuracy through data
          handling and enhancement.</p>
        <p><b>Tecnologies Used</b> - Google Colab, Python</p>
        <p>Duration - 4months <br />
          Team Size - 4</p>
        <a className="project-link" href="https://github.com/NiranjanaKathirvel/Brain-tumor" target="" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project">
        <h3 className="project-title">Work Experience - Internship <br />Exposys Data Labs
        </h3>
        <p className="project-description"> <b>
          Role - Web Developer</b> <br /> Developed strong expertise in HTML, CSS, and JavaScript through extensive hands-on projects and practical
          applications, ensuring the creation of robust and efficient web solutions.
          Executed the development of an intuitive and engaging user interface, significantly enhancing user experience and
          streamlining the customization process through real-time visual feedback mechanisms.
          Led development of a dynamic online burger customization platform at Exposys Data Labs, enabling user-driven
          ingredient selection for personalized burger creation, ensuring a seamless, interactive experience</p>
        <p>Duration - June 2023 to June 2024</p>

        <a className="project-link" href="https://drive.google.com/file/d/1nqg4KPZQD52pCyHCOLo2syKhQ0QZoUCp/view?usp=sharing" target="" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>


    </section>
  );
};

export default Projects;