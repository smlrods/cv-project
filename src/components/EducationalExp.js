import React from "react";

class EducationalExp extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeSchoolName,
            handleChangeTitleOfStudy,
            handleChangeDateOfStudy,
            experience} = this.props;

    return (
      <div>
        <label htmlFor="schoolNameInput">School Name</label>
        <input onChange={(e) => handleChangeSchoolName(e, experience)}
               type="text"
               value={experience.schoolName}
               id="schoolNameInput"
        />
        <label htmlFor="titleOfStudyInput">Title of Study</label>
        <input onChange={(e) => handleChangeTitleOfStudy(e, experience)}
              type="text"
              id="titleOfStudyInput"
        />
        <label htmlFor="dateOfStudyInput">Date of Study</label>
        <input onChange={(e) => handleChangeDateOfStudy(e, experience)}
               type="text"
               id="dateOfStudyInput"
        />
      </div>
    );
  }
}

export default EducationalExp;
