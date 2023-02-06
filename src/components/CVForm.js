import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";
import "../styles/CVForm.css";

function CVForm(props) {
  const { handleChangeName,
          handleChangeEmail,
          handleChangePhoneNumber,
          handleChangeSchoolName,
          handleChangeTitleOfStudy,
          handleChangeDateOfStudy,
          handleChangeCompanyName,
          handleChangePositionTitle,
          handleChangeMainTasks,
          handleChangeDateFrom,
          handleChangeDateUntil,
          addEducationalExp,
          deleteEducationalExp,
          addPracticalExp,
          deletePracticalExp,
          educationalExperiences,
          practicalExperiences,
          generalInfo } = props;

  return (
    <div id="CVForm">
      <h1>CV Application</h1>
      <div className="CVForm-section">
        <h2>General Information</h2>
        <GeneralInfo handleChangeName={handleChangeName}
                    handleChangeEmail={handleChangeEmail}
                    handleChangePhoneNumber={handleChangePhoneNumber}
                    generalInfo={generalInfo}
        />
      </div>
      <div className="CVForm-section">
        <h2>Educational Experiences</h2>
        {educationalExperiences.map((experience) => {
          return <div key={experience.id}>
                    <EducationalExp handleChangeSchoolName={handleChangeSchoolName}
                                    handleChangeTitleOfStudy={handleChangeTitleOfStudy}
                                    handleChangeDateOfStudy={handleChangeDateOfStudy}
                                    experience={experience}
                    />
                    <button onClick={() => deleteEducationalExp(experience)}>Delete</button>
                </div> 

        })}
        <button onClick={addEducationalExp}>Add</button>
      </div>
      <div className="CVForm-section">
        <h2>Practical Experiences</h2>
        {practicalExperiences.map((experience) => {
          return <div key={experience.id}>
                  <PracticalExp handleChangeCompanyName={handleChangeCompanyName}
                                handleChangePositionTitle={handleChangePositionTitle}
                                handleChangeMainTasks={handleChangeMainTasks}
                                handleChangeDateFrom={handleChangeDateFrom}
                                handleChangeDateUntil={handleChangeDateUntil}
                                experience={experience}
                  />
                    <button onClick={() => deletePracticalExp(experience)}>Delete</button>
                </div>
        })}
        <button onClick={addPracticalExp}>Add</button>
      </div>
    </div>
  );
}

export default CVForm;
