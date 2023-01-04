import React from "react";
import "./work.css";
import experienceList from "../data/experience";

const SkillTag = ({ skill }) => {
  return (
    <p>{skill}</p>
  );
};

const WorkEntry = ({ company, position, term, imagePath }) => {
  return (
    <div className="work-entry-wrapper">
      <img
        className="work-pic"
        src={imagePath}
        alt={`${company} screen shot`}
        loading="lazy"
      />
      <div className="work-detail-container">
        <p className="company">{company}</p>
        <p className="position">{position}</p>
        <p className="term">{term}</p>
      </div>
    </div>
  );
};

const WorkSummary = () => {
  return (
    <section className="work-section">
      <h3 className="work-header">experience</h3>
      <div className="work-entry-container">
        {experienceList.map((entry) => (
          <WorkEntry 
            company={entry.company}
            position={entry.position}
            term={entry.term}
            imagePath={entry.imagePath}
          />
        ))} 
      </div>
    </section>
  );
};

export default WorkSummary;
