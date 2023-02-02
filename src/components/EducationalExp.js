import React from "react";

class EducationalExp extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeSchoolName, handleChangeTitleOfStudy, handleChangeDateOfStudy } = this.props;

    return (
      <div>
        <label htmlFor="schoolNameInput">School Name</label>
        <input onChange={handleChangeSchoolName}
               type="text"
               id="schoolNameInput"
        />
        <label htmlFor="titleOfStudyInput">Title of Study</label>
        <input onChange={handleChangeTitleOfStudy}
              type="text"
              id="titleOfStudyInput"
        />
        <label htmlFor="dateOfStudyInput">Date of Study</label>
        <input onChange={handleChangeDateOfStudy}
               type="text"
               id="dateOfStudyInput"
        />
      </div>
    );
  }
}

export default EducationalExp;
