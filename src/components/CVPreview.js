import React from "react";
import "../styles/CVPreview.css";

const CVPreview = React.forwardRef((props, ref) => {

  const { generalInfo,
          educationalExperiences,
          practicalExperiences } = props; 

  return (
    <div id="CVPreview" ref={ref}>
      <div className="cv-section-preview">
        <h2>General Information</h2>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone Number: {generalInfo.phoneNumber}</p>
      </div>
      <div className="cv-section-preview">
        <h2>Educational Experiences</h2>
        {educationalExperiences.map((experience) => {
          return (
            <div key={experience.id}>
              <p>School name: {experience.schoolName}</p>
              <p>Title of study: {experience.titleOfStudy}</p>
              <p>Date of study: {experience.dateOfStudy}</p>
            </div>
          )
        })}
      </div>
      <div className="cv-section-preview">
        <h2>Practical Experience</h2>
        {practicalExperiences.map((experience) => {
          return (
            <div key={experience.id}>
              <p>Company name: {experience.companyName}</p>
              <p>Position Title: {experience.positionTitle}</p>
              <p>Main tasks: {experience.mainTasks}</p>
              <p>Date From: {experience.dateFrom}</p>
              <p>Date Until: {experience.dateUntil}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
});

export default CVPreview;
