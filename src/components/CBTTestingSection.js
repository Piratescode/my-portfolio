import React from 'react';
import './CBTTestingSection.css';
import cbtImage from '../assets/cbt-testing.jpg'; // Update this path as needed

const CBTTestingSection = () => {
  return (
    <section className="cbt-section">
      <div className="cbt-container">
        {/* Left Content */}
        <div className="cbt-text">
          <h2>
            Secure and Efficient <em>Testing Solutions</em> for Education
          </h2>
          <p>
            MiraDev Systems delivers cutting-edge computer-based testing systems designed to provide
            a seamless and secure testing experience. Our solutions ensure reliable performance,
            allowing educators to focus on assessment while students benefit from immediate feedback
            and results. We tailor our systems to meet the unique needs of each institution.
          </p>

          <ul className="cbt-list">
            <li>
              ✅ Secure Testing Environment: Ensures data integrity and prevents cheating.
            </li>
            <li>
              ✅ Immediate Feedback: Provides instant results for students.
            </li>
            <li>
              ✅ Customizable Solutions: Tailored to meet specific institutional needs.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="cbt-image">
          <img src={cbtImage} alt="CBT Testing Center" />
        </div>
      </div>
    </section>
  );
};

export default CBTTestingSection;
