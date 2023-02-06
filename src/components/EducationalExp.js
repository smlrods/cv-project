import React from "react";

function EducationalExp(props) {

  const { handleChangeSchoolName,
          handleChangeTitleOfStudy,
          handleChangeDateOfStudy,
          experience} = props;

  return (
    <div>
      <label htmlFor="schoolNameInput">School Name:</label>
      <input onChange={(e) => handleChangeSchoolName(e, experience)}
              type="text"
              value={experience.schoolName}
              id="schoolNameInput"
      />
      <label htmlFor="titleOfStudyInput">Title of Study:</label>
      <input onChange={(e) => handleChangeTitleOfStudy(e, experience)}
            type="text"
            value={experience.titleOfStudy}
            id="titleOfStudyInput"
      />
      <label htmlFor="dateOfStudyInput">Date of Study:</label>
      <input onChange={(e) => handleChangeDateOfStudy(e, experience)}
              type="text"
              value={experience.dateOfStudy}
              id="dateOfStudyInput"
      />
    </div>
  );
}

export default EducationalExp;
