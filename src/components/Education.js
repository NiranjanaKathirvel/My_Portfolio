import React from 'react';
import './education.css'; // Import your CSS file

const Education = () => {
  return (
    <section id="education">
      <h2 className="e">Education</h2>
      <div className='education-container'>
        <div className="education-item">
          <h3 className="institution-name">KGISL Institute Of Technology (UG)</h3>
          <p className="degree">B.Tech - Information Technology</p>
          <p className="graduation-year"> Duration - 2020 to 2024 <br /><br />Graduation Year - 2024 <br /> <br /> CGPA - 8.18</p>
        </div>
        <div className="education-item">
          <h3 className="institution-name">Vidhya Parthi Hr.Sec.School (HSC)</h3>
          <p className="degree">Duration - 2019 to 2020</p>
          <p className="graduation-year">Percentage - 73%</p>
        </div>
        <div className="education-item">
          <h3 className="institution-name">Vidhya Parthi Hr.Sec.School (SSLC)</h3>
          <p className="degree">Duration - 2017 to 2018</p>
          <p className="graduation-year">Percentage - 92%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
