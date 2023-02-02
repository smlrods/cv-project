import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";

class CVForm extends React.Component {
  constructor() {
    super();
  }

  render() {
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
            educationalExperiences,
            practicalExperiences,
            addEducationalExp,
            deleteEducationalExp,
            addPracticalExp,
            deletePracticalExp} = this.props;

    return (
      <div>
        <h2>General Information</h2>
        <GeneralInfo handleChangeName={handleChangeName}
                     handleChangeEmail={handleChangeEmail}
                     handleChangePhoneNumber={handleChangePhoneNumber}/>
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
    );
  }
}

export default CVForm;
