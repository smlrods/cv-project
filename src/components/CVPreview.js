import React from "react";

class CVPreview extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { generalInfo,
            educationalExperiences,
            practicalExperiences } = this.props; 
    return (
      <div>
        <div className="cv-section-preview">
          <h3>General Information</h3>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone Number: {generalInfo.phoneNumber}</p>
        </div>
        <div className="cv-section-preview">
          <h3>Educational Experiences</h3>
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
          <h3>Practical Experience</h3>
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
  }
}

export default CVPreview;
