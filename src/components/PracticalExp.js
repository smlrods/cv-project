import React from "react";

class PracticalExp extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeCompanyName,
            handleChangePositionTitle,
            handleChangeMainTasks,
            handleChangeDateFrom,
            handleChangeDateUntil,
            experience} = this.props;

    return (
      <div>
        <label htmlFor="companyNameInput">Company name</label>
        <input onChange={(e) => handleChangeCompanyName(e, experience)}
               type="text"
               value={experience.companyName}
               id="companyNameInput"
        />
        <label htmlFor="positionTitleInput">Position title</label>
        <input onChange={(e) => handleChangePositionTitle(e, experience)}
               type="text"
               value={experience.positionTitle}
               id="positionTitleInput"
        />
        <label htmlFor="mainTasksInput">Main Tasks</label>
        <input onChange={(e) => handleChangeMainTasks(e, experience)}
               type="text"
               value={experience.mainTasks}
               id="mainTasksInput"
        />
        <label htmlFor="dateFromInput">Date From</label>
        <input onChange={(e) => handleChangeDateFrom(e, experience)}
               type="month"
               value={experience.dateFrom}
               id="dateFromInput"
        />
        <label htmlFor="dateUntilInput">Date Until</label>
        <input onChange={(e) => handleChangeDateUntil(e, experience)}
               type="month"
               value={experience.dateUntil}
               id="dateUntilInput"
        />
      </div>
    );
  }
}

export default PracticalExp;
