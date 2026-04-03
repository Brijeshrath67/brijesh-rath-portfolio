import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>Infosys Springboard (Remote)</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Developed an AI-Powered Facial Skin Aging detection system using
              TensorFlow and Keras. Implemented MobileNetV2 for multiclass
              classification of wrinkles, dark spots, and puffy eyes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>GITA Autonomous College</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science & Engineering.
              Maintaining a strong academic record with a CGPA of 8.5/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (+2)</h4>
                <h5>KMBB Higher Secondary School</h5>
              </div>
              <h3>2022-2024</h3>
            </div>
            <p>
              Completed Higher Secondary education with a focus on Science
              subjects, achieving a score of 75%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
