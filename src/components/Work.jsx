import React from "react";
import "./work.css";
import experienceList from "../data/experience";
import fordImg from "../assets/ford.png"
import otImg from "../assets/opentext.png"
import statImg from "../assets/stattrak.png"

const imageObjects = [fordImg, otImg, statImg];

const SkillTag = ({ skill }) => {
  return (
    <div className="skill-tag"><p className="skill-tag-text">{skill}</p></div>
  );
};

const WorkEntry = ({ company, position, term, imageSeq, skillList }) => {
  return (
    <div className="work-entry-wrapper">
      <img
        className="work-pic"
        src={imageObjects[imageSeq]}
        alt={`${company} artistic rendering`}
        loading="lazy"
      />
      <div className="work-detail-container">
        <p className="company">{company}</p>
        <p className="position">{position}</p>
        <p className="term">{term}</p>
      </div>
      <div className="skill-list-container">
        {skillList.map((skill, index) => (
          <SkillTag
            key={index}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
};

const WorkSummary = () => {
  return (
    <section id="work" className="work-section">
      <h3 className="work-header">work</h3>
      <div className="work-entry-container">
        {experienceList.map((entry, index) => (
          <WorkEntry 
            key={index}
            company={entry.company}
            position={entry.position}
            term={entry.term}
            imageSeq={experienceList.indexOf(entry)}
            skillList={entry.skills}
          />
        ))} 
      </div>
    </section>
  );
};

export default WorkSummary;
